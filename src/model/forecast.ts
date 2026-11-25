import { atLeast, checkCurve, curveEdges, curveFor, levelChances } from './distribution.ts'
import type {
  Card,
  CauseDanger,
  CurveForecast,
  DangerLevel,
  EntityId,
  ForecastRun,
  OutcomeKey,
  PlaceForecast,
  PlaceOutcomeKey,
  PlaceOutcomes,
  RootCause,
  ScenarioKey,
  SiCase,
  SixOutcomes,
  WorldCase,
  WorldForecast,
} from './types.ts'

export const rootCauses: RootCause[] = ['climate', 'resources', 'war', 'civil', 'disease', 'ai', 'natural']
export const siCases: SiCase[] = ['si', 'noSi']
export const placeOutcomeKeys: PlaceOutcomeKey[] = ['abundance', 'better', 'stagnation', 'decline', 'collapse']
export const outcomeKeys: OutcomeKey[] = [...placeOutcomeKeys, 'doom']

/** The three levels the causes are judged at. `doom` is level 5. */
export type DangerKey = keyof CauseDanger
export const dangerKeys: DangerKey[] = ['atLeast3', 'atLeast4', 'doom']
export const levelOf: Record<DangerKey, DangerLevel> = { atLeast3: 3, atLeast4: 4, doom: 5 }

const tolerance = 1e-9
/** A place's five shares may miss 1 by this much before the run is rejected; smaller gaps are rescaled away. */
const shareSlack = 0.02

function checkProbability({ value, label }: { value: number; label: string }): void {
  if (!Number.isFinite(value) || value < 0 || value > 1) throw new Error(`${label} must be a probability in [0,1], got ${value}`)
}

const sum = ({ values }: { values: number[] }): number => values.reduce((a, b) => a + b, 0)
const mean = ({ values }: { values: number[] }): number => sum({ values: values }) / values.length

function median({ values }: { values: number[] }): number {
  const sorted = [...values].sort((a, b) => a - b)
  const middle = Math.floor(sorted.length / 2)
  return sorted.length % 2 === 1 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2
}

/** Each future has one worst level and one root cause, so the world figure is the plain sum of the causes. */
export const sumCauses = ({ worldCase, key }: { worldCase: WorldCase; key: DangerKey }): number =>
  sum({ values: rootCauses.map((cause) => worldCase.causes[cause][key]) })

function checkWorldCase({ worldCase, label }: { worldCase: WorldCase; label: string }): void {
  for (const cause of rootCauses) {
    const danger = worldCase.causes[cause]
    if (danger === undefined) throw new Error(`${label}: cause ${cause} is missing`)
    for (const key of dangerKeys) checkProbability({ value: danger[key], label: `${label} ${cause} ${key}` })
    if (danger.atLeast4 > danger.atLeast3 + tolerance || danger.doom > danger.atLeast4 + tolerance) {
      throw new Error(`${label} ${cause}: chances must fall as the level rises, got ${danger.atLeast3} / ${danger.atLeast4} / ${danger.doom}`)
    }
  }
  checkProbability({ value: worldCase.directDoom, label: `${label} direct doom` })
  checkProbability({ value: worldCase.abundance, label: `${label} abundance` })
  const severe = sumCauses({ worldCase: worldCase, key: 'atLeast3' })
  if (severe > 1 + tolerance) throw new Error(`${label}: the causes sum to ${severe} at level 3, above 1`)
  const doom = sumCauses({ worldCase: worldCase, key: 'doom' })
  const gap = Math.abs(doom - worldCase.directDoom)
  if (gap > 0.005 && gap > 0.2 * Math.max(doom, worldCase.directDoom)) {
    throw new Error(`${label}: the causes sum to ${doom} for doom but the direct estimate is ${worldCase.directDoom}`)
  }
}

export function validateWorld({ world }: { world: WorldForecast }): WorldForecast {
  checkProbability({ value: world.siBy2050, label: 'P(SI by 2050)' })
  checkProbability({ value: world.siBy2100, label: 'P(SI by 2100)' })
  if (world.siBy2050 > world.siBy2100 + tolerance) throw new Error('P(SI by 2050) cannot exceed P(SI by 2100)')
  checkWorldCase({ worldCase: world.si, label: 'world | SI' })
  checkWorldCase({ worldCase: world.noSi, label: 'world | no SI' })
  return world
}

function normaliseOutcomes({ outcomes, label }: { outcomes: PlaceOutcomes; label: string }): PlaceOutcomes {
  for (const key of placeOutcomeKeys) checkProbability({ value: outcomes[key], label: `${label} ${key}` })
  const total = sum({ values: placeOutcomeKeys.map((key) => outcomes[key]) })
  if (Math.abs(total - 1) > shareSlack) throw new Error(`${label}: the five outcomes sum to ${total}, not 1`)
  return Object.fromEntries(placeOutcomeKeys.map((key) => [key, outcomes[key] / total])) as PlaceOutcomes
}

/** Checks a place and rescales its shares to sum to exactly 1. */
export function validatePlace({ place }: { place: PlaceForecast }): PlaceForecast {
  return {
    entity: place.entity,
    si: normaliseOutcomes({ outcomes: place.si, label: `${place.entity} | SI` }),
    noSi: normaliseOutcomes({ outcomes: place.noSi, label: `${place.entity} | no SI` }),
  }
}

/** A judged curve must give every edge of its card, in both cases, and agree with the card's published points. */
export function validateCurve({ curve, cards }: { curve: CurveForecast; cards: Card[] }): CurveForecast {
  const card = cards.find((c) => c.id === curve.card)
  if (card === undefined) throw new Error(`curve for unknown card ${curve.card}`)
  const edges = curveEdges({ card: card })
  for (const siCase of siCases) {
    const sorted = [...curve[siCase]].sort((a, b) => a.value - b.value)
    checkCurve({ points: sorted, label: `${card.id} | ${siCase} judged` })
    const points = curveFor({ card: card, judged: curve, siCase: siCase })
    for (const edge of edges) {
      if (!points.some((point) => Math.abs(point.value - edge) < 1e-9 * Math.max(1, Math.abs(edge)))) throw new Error(`${card.id} | ${siCase}: no chance stated at ${edge}`)
    }
  }
  return curve
}

/** Throws on any incoherent run, and returns it with place shares rescaled. Nothing invalid reaches the site. */
export function validateRun({ run, cards }: { run: ForecastRun; cards: Card[] }): ForecastRun {
  if (run.world !== undefined) validateWorld({ world: run.world })
  return {
    ...run,
    places: run.places.map((place) => validatePlace({ place: place })),
    curves: run.curves.map((curve) => validateCurve({ curve: curve, cards: cards })),
  }
}

const meanCase = ({ cases }: { cases: WorldCase[] }): WorldCase => ({
  causes: Object.fromEntries(
    rootCauses.map((cause) => [cause, Object.fromEntries(dangerKeys.map((key) => [key, mean({ values: cases.map((c) => c.causes[cause][key]) })])) as CauseDanger]),
  ) as Record<RootCause, CauseDanger>,
  directDoom: mean({ values: cases.map((c) => c.directDoom) }),
  abundance: mean({ values: cases.map((c) => c.abundance) }),
})

/**
 * Pools independent runs. Shares are averaged, because averages of numbers that sum still sum;
 * the two superintelligence dates are single numbers and take the median.
 */
export function poolWorlds({ worlds }: { worlds: WorldForecast[] }): WorldForecast {
  if (worlds.length === 0) throw new Error('no world forecast to pool')
  return validateWorld({
    world: {
      siBy2050: median({ values: worlds.map((w) => w.siBy2050) }),
      siBy2100: median({ values: worlds.map((w) => w.siBy2100) }),
      si: meanCase({ cases: worlds.map((w) => w.si) }),
      noSi: meanCase({ cases: worlds.map((w) => w.noSi) }),
    },
  })
}

const meanOutcomes = ({ list }: { list: PlaceOutcomes[] }): PlaceOutcomes =>
  Object.fromEntries(placeOutcomeKeys.map((key) => [key, mean({ values: list.map((o) => o[key]) })])) as PlaceOutcomes

export type Spread = { low: number; high: number }

export type PlaceVerdict = PlaceForecast & { runs: number }

export type Verdict = {
  model: string
  date: string
  worldRuns: number
  world: WorldForecast
  /** Lowest and highest doom (weighted over superintelligence) among the world runs. */
  doomSpread: Spread
  places: Record<EntityId, PlaceVerdict>
  curves: Record<string, CurveForecast>
}

/** Law of total probability over the superintelligence hypothesis. */
export function mix({ world, pick }: { world: WorldForecast; pick: (worldCase: WorldCase) => number }): number {
  return world.siBy2100 * pick(world.si) + (1 - world.siBy2100) * pick(world.noSi)
}

export const worldDanger = ({ world, key, scenario }: { world: WorldForecast; key: DangerKey; scenario: ScenarioKey }): number =>
  scenario === 'weighted' ? mix({ world: world, pick: (c) => sumCauses({ worldCase: c, key: key }) }) : sumCauses({ worldCase: world[scenario], key: key })

export const causeDanger = ({ world, cause, key, scenario }: { world: WorldForecast; cause: RootCause; key: DangerKey; scenario: ScenarioKey }): number =>
  scenario === 'weighted' ? mix({ world: world, pick: (c) => c.causes[cause][key] }) : world[scenario].causes[cause][key]

/** Each cause's share of the danger at one level. The seven shares sum to 1. */
export function causeShares({ world, key, scenario }: { world: WorldForecast; key: DangerKey; scenario: ScenarioKey }): Record<RootCause, number> {
  const total = worldDanger({ world: world, key: key, scenario: scenario })
  return Object.fromEntries(rootCauses.map((cause) => [cause, total === 0 ? 0 : causeDanger({ world: world, cause: cause, key: key, scenario: scenario }) / total])) as Record<RootCause, number>
}

export type Headline = { doom: number; doomGivenSi: number; doomGivenNoSi: number; abundance: number; si: number }

export function headline({ world }: { world: WorldForecast }): Headline {
  return {
    doom: worldDanger({ world: world, key: 'doom', scenario: 'weighted' }),
    doomGivenSi: worldDanger({ world: world, key: 'doom', scenario: 'si' }),
    doomGivenNoSi: worldDanger({ world: world, key: 'doom', scenario: 'noSi' }),
    abundance: mix({ world: world, pick: (c) => c.abundance }),
    si: world.siBy2100,
  }
}

const sixFor = ({ worldCase, outcomes }: { worldCase: WorldCase; outcomes: PlaceOutcomes }): SixOutcomes => {
  const doom = sumCauses({ worldCase: worldCase, key: 'doom' })
  return { ...(Object.fromEntries(placeOutcomeKeys.map((key) => [key, outcomes[key] * (1 - doom)])) as PlaceOutcomes), doom: doom }
}

/** A place's six outcomes. Doom is the world's; the other five share what is left. They sum to 1. */
export function placeOutcomes({ world, place, scenario }: { world: WorldForecast; place: PlaceForecast; scenario: ScenarioKey }): SixOutcomes {
  if (scenario !== 'weighted') return sixFor({ worldCase: world[scenario], outcomes: place[scenario] })
  const withSi = sixFor({ worldCase: world.si, outcomes: place.si })
  const without = sixFor({ worldCase: world.noSi, outcomes: place.noSi })
  return Object.fromEntries(outcomeKeys.map((key) => [key, world.siBy2100 * withSi[key] + (1 - world.siBy2100) * without[key]])) as SixOutcomes
}

/** Pools the judged curves of every run, card by card: the chance at each edge is averaged across runs. */
export function poolCurves({ runs, cards }: { runs: ForecastRun[]; cards: Card[] }): Record<string, CurveForecast> {
  const byCard = new Map<string, CurveForecast[]>()
  for (const run of runs) for (const curve of run.curves) byCard.set(curve.card, [...(byCard.get(curve.card) ?? []), curve])
  const meanPoints = ({ list }: { list: { value: number; above: number }[][] }): { value: number; above: number }[] =>
    list[0].map((point) => ({
      value: point.value,
      above: mean({ values: list.map((points) => points.find((p) => p.value === point.value)?.above ?? point.above) }),
    }))
  return Object.fromEntries(
    [...byCard].map(([card, list]): [string, CurveForecast] => [
      card,
      validateCurve({ curve: { card: card, si: meanPoints({ list: list.map((c) => c.si) }), noSi: meanPoints({ list: list.map((c) => c.noSi) }) }, cards: cards }),
    ]),
  )
}

/** Pools every stored run into what the site shows. */
export function verdictOf({ runs, cards }: { runs: ForecastRun[]; cards: Card[] }): Verdict {
  const checked = runs.map((run) => validateRun({ run: run, cards: cards }))
  const worldRuns = checked.filter((run) => run.world !== undefined)
  const worlds = worldRuns.map((run) => run.world as WorldForecast)
  const world = poolWorlds({ worlds: worlds })
  const dooms = worlds.map((w) => worldDanger({ world: w, key: 'doom', scenario: 'weighted' }))

  const byPlace = new Map<EntityId, PlaceForecast[]>()
  for (const run of checked) for (const place of run.places) byPlace.set(place.entity, [...(byPlace.get(place.entity) ?? []), place])
  const places = Object.fromEntries(
    [...byPlace].map(([entity, list]): [EntityId, PlaceVerdict] => [
      entity,
      { entity: entity, si: meanOutcomes({ list: list.map((p) => p.si) }), noSi: meanOutcomes({ list: list.map((p) => p.noSi) }), runs: list.length },
    ]),
  )

  const curves = poolCurves({ runs: checked, cards: cards })

  const latest = worldRuns.reduce((a, b) => (a.date >= b.date ? a : b))
  return { model: latest.model, date: latest.date, worldRuns: worldRuns.length, world: world, doomSpread: { low: Math.min(...dooms), high: Math.max(...dooms) }, places: places, curves: curves }
}

/**
 * What a cause's own cards give at one level: the largest chance among its hazard cards.
 * Sub-cards never exceed their parent, so this is the most dangerous top card. Undefined until the curves are judged.
 */
export function cardFloor({ cards, curves, cause, key, siCase }: { cards: Card[]; curves: Record<string, CurveForecast>; cause: RootCause; key: DangerKey; siCase: SiCase }): number | undefined {
  const values = cards
    .filter((card) => card.group === cause && card.scale === 'danger')
    .flatMap((card) => {
      const chances = levelChances({ card: card, points: curveFor({ card: card, judged: curves[card.id], siCase: siCase }) })
      return chances === undefined ? [] : [atLeast({ chances: chances, level: levelOf[key] })]
    })
  return values.length === 0 ? undefined : Math.max(...values)
}

/**
 * Sub-cards explain their parent, so none may show more danger than it. Returns one sentence per breach.
 * Cards whose curves are not judged yet are skipped.
 */
export function parentProblems({ cards, curves }: { cards: Card[]; curves: Record<string, CurveForecast> }): string[] {
  const problems: string[] = []
  for (const card of cards) {
    const parent = cards.find((c) => c.id === card.parent)
    if (parent === undefined || card.scale !== 'danger' || parent.scale !== 'danger') continue
    for (const siCase of siCases) {
      const own = levelChances({ card: card, points: curveFor({ card: card, judged: curves[card.id], siCase: siCase }) })
      const above = levelChances({ card: parent, points: curveFor({ card: parent, judged: curves[parent.id], siCase: siCase }) })
      if (own === undefined || above === undefined) continue
      for (const key of dangerKeys) {
        const child = atLeast({ chances: own, level: levelOf[key] })
        const top = atLeast({ chances: above, level: levelOf[key] })
        if (child > top + 0.005) problems.push(`${card.id} | ${siCase}: ${key} is ${child.toFixed(3)}, above its parent ${parent.id} at ${top.toFixed(3)}`)
      }
    }
  }
  return problems
}

/** Percentages below 10% keep one decimal, so small risks don't round to the same number. */
export function formatPercent({ value }: { value: number }): string {
  const percent = value * 100
  if (percent > 0 && percent < 0.1) return '<0.1%'
  return percent < 10 ? `${Number(percent.toFixed(1))}%` : `${Math.round(percent)}%`
}
