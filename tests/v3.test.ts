import test from 'node:test'
import assert from 'node:assert/strict'
import { cardProblems, cardSetProblems, cardTree } from '../src/model/cards.ts'
import { atLeast, barsFor, curveEdges, curveFor, levelAt, levelChances } from '../src/model/distribution.ts'
import { cardFloor, causeShares, headline, parentProblems, placeOutcomes, poolWorlds, rootCauses, validatePlace, validateRun, validateWorld, verdictOf, worldDanger } from '../src/model/forecast.ts'
import type { Card, CauseDanger, ForecastRun, PlaceOutcomes, RootCause, WorldCase, WorldForecast } from '../src/model/types.ts'

const close = (actual: number, expected: number) => assert.ok(Math.abs(actual - expected) < 1e-9, `${actual} ≠ ${expected}`)

const link = 'https://example.org/source'

/** A parent hazard with one published point, its sub-card, and a technology. */
const heat: Card = {
  id: 'heat',
  name: 'Heat',
  summary: 'How much the mock world warms.',
  group: 'climate',
  scale: 'danger',
  statistic: 'value-in-2100',
  metric: 'Warming',
  unit: '°C',
  decimals: 1,
  axis: { min: 1, max: 6 },
  today: { value: 1.4, year: 2025, source: 'Mock', url: link },
  bands: [
    { from: 1, to: 2, level: 1, label: 'Costly but absorbed', basis: 'judged' },
    { from: 2, to: 3.5, level: 3, label: 'Regions become unlivable', basis: 'published', source: 'Mock', url: link },
    { from: 3.5, to: 6, level: 4, label: 'Most people lose decent conditions', basis: 'judged' },
  ],
  published: { noSi: [{ value: 2, above: 0.9, basis: 'published', source: 'Mock', url: link }], si: [] },
  wikipedia: 'Climate change',
  siNote: 'Mock.',
}
const sea: Card = { ...heat, id: 'sea', name: 'Sea', parent: 'heat', bands: [{ from: 1, to: 3.5, level: 1, label: 'Coasts flood', basis: 'judged' }, { from: 3.5, to: 6, level: 3, label: 'Deltas are lost', basis: 'judged' }], published: { noSi: [], si: [] } }
const fusion: Card = { ...heat, id: 'fusion', name: 'Fusion', group: 'technology', scale: 'potential', counters: ['resources'], published: { noSi: [], si: [] } }
const cards = [heat, sea, fusion]

const danger = (atLeast3: number, atLeast4: number, doom: number): CauseDanger => ({ atLeast3: atLeast3, atLeast4: atLeast4, doom: doom })
const worldCase = (scale: number, abundance: number): WorldCase => {
  const causes = Object.fromEntries(rootCauses.map((cause, i) => [cause, danger(0.01 * scale * (i + 1), 0.006 * scale * (i + 1), 0.002 * scale * (i + 1))])) as Record<RootCause, CauseDanger>
  return { causes: causes, directDoom: 0.002 * scale * 28, abundance: abundance }
}
const world = (scale: number): WorldForecast => ({ siBy2050: 0.5, siBy2100: 0.8, si: worldCase(scale, 0.2), noSi: worldCase(scale / 2, 0.01) })
const outcomes = (abundance: number): PlaceOutcomes => ({ abundance: abundance, better: 0.3, stagnation: 0.3, decline: 0.2, collapse: 0.2 - abundance })

const run = (id: string, scale: number): ForecastRun => ({
  id: id,
  batch: 'world',
  model: 'mock',
  date: '2026-11-24',
  method: 'mock',
  world: world(scale),
  places: [{ entity: 'FRA', si: outcomes(0.1), noSi: outcomes(0) }],
  curves: [
    { card: 'heat', si: [{ value: 2, above: 0.6 }, { value: 3.5, above: 0.05 }], noSi: [{ value: 3.5, above: 0.2 }] },
    { card: 'sea', si: [{ value: 3.5, above: 0.05 }], noSi: [{ value: 3.5, above: 0.2 }] },
  ],
})

test('v0.3 end to end: cards, curves, causes, headline and places from mock data', () => {
  // Cards
  assert.deepEqual(cardSetProblems({ cards: cards }), [])
  assert.deepEqual(curveEdges({ card: heat }), [2, 3.5])
  assert.equal(levelAt({ card: heat, value: 1.4 }), 1)
  assert.deepEqual(cardTree({ cards: cards, group: 'climate' }).map((node) => [node.card.id, node.children.map((c) => c.card.id)]), [['heat', ['sea']]])

  // A card with a gap between bands, an unsourced published band and a rising curve is rejected.
  const broken: Card = {
    ...heat,
    bands: [heat.bands[0], { from: 2.5, to: 6, level: 3, label: 'Gap', basis: 'published' }],
    published: { noSi: [{ value: 2, above: 0.2, basis: 'published', source: 'Mock', url: link }, { value: 3, above: 0.4, basis: 'published', source: 'Mock', url: link }], si: [] },
  }
  const problems = cardProblems({ card: broken })
  assert.ok(problems.some((p) => p.includes('must start where')))
  assert.ok(problems.some((p) => p.includes('needs a source')))
  assert.ok(problems.some((p) => p.includes('exceeds the chance')))

  // Pooling: two runs, averaged.
  const verdict = verdictOf({ runs: [run('a', 1), run('b', 2)], cards: cards })
  assert.equal(verdict.worldRuns, 2)
  close(verdict.world.si.causes.climate.doom, 0.003)

  // The headline is the plain sum of the seven causes, mixed over superintelligence.
  const doomSi = 0.003 * 28
  const doomNoSi = doomSi / 2
  const top = headline({ world: verdict.world })
  close(top.doomGivenSi, doomSi)
  close(top.doomGivenNoSi, doomNoSi)
  close(top.doom, 0.8 * doomSi + 0.2 * doomNoSi)
  close(top.abundance, 0.8 * 0.2 + 0.2 * 0.01)
  close(worldDanger({ world: verdict.world, key: 'atLeast3', scenario: 'si' }), 0.015 * 28)

  // Shares of any level add up to 100%, in every scenario.
  for (const scenario of ['weighted', 'si', 'noSi'] as const) {
    for (const key of ['atLeast3', 'atLeast4', 'doom'] as const) {
      const shares = causeShares({ world: verdict.world, key: key, scenario: scenario })
      close(Object.values(shares).reduce((a, b) => a + b, 0), 1)
    }
  }
  close(causeShares({ world: verdict.world, key: 'doom', scenario: 'weighted' }).natural, 7 / 28)

  // Curves: published points win, judged points fill the edges, and the chance of each level follows.
  const noSi = curveFor({ card: heat, judged: verdict.curves.heat, siCase: 'noSi' })
  assert.deepEqual(noSi.map((p) => [p.value, p.above, p.basis]), [[2, 0.9, 'published'], [3.5, 0.2, 'judged']])
  const chances = levelChances({ card: heat, points: noSi })
  assert.ok(chances)
  close(chances[1], 0.1)
  close(chances[3], 0.7)
  close(chances[4], 0.2)
  close(atLeast({ chances: chances, level: 3 }), 0.9)
  assert.equal(levelChances({ card: heat, points: curveFor({ card: heat, judged: undefined, siCase: 'noSi' }) }), undefined)

  // Bars are only drawing, between the stated points; with the two stated tails they account for everything.
  const drawn = barsFor({ card: heat, points: noSi, count: 20 })
  close(drawn.below.chance + drawn.beyond.chance + drawn.bars.reduce((sum, bar) => sum + bar.chance, 0), 1)
  assert.equal(drawn.below.value, 2)
  close(drawn.beyond.chance, 0.2)
  assert.ok(drawn.bars.every((bar) => bar.chance >= 0))
  assert.ok(drawn.bars.filter((bar) => bar.to <= 2 || bar.from >= 3.5).every((bar) => bar.chance === 0), 'nothing is drawn outside the stated points')

  // What a cause's cards give on their own, and the rule that a sub-card never exceeds its parent.
  close(cardFloor({ cards: cards, curves: verdict.curves, cause: 'climate', key: 'atLeast3', siCase: 'noSi' }) ?? -1, 0.9)
  assert.equal(cardFloor({ cards: cards, curves: verdict.curves, cause: 'war', key: 'doom', siCase: 'si' }), undefined)
  assert.deepEqual(parentProblems({ cards: cards, curves: verdict.curves }), [])
  const risky = { ...verdict.curves, sea: { card: 'sea', si: [{ value: 3.5, above: 0.9 }], noSi: [{ value: 3.5, above: 0.95 }] } }
  assert.ok(parentProblems({ cards: cards, curves: risky }).length > 0)

  // Places: six outcomes that sum to 1, with the world's doom.
  const france = verdict.places.FRA
  assert.equal(france.runs, 2)
  for (const scenario of ['weighted', 'si', 'noSi'] as const) {
    const six = placeOutcomes({ world: verdict.world, place: france, scenario: scenario })
    close(Object.values(six).reduce((a, b) => a + b, 0), 1)
    close(six.doom, worldDanger({ world: verdict.world, key: 'doom', scenario: scenario }))
  }
  close(placeOutcomes({ world: verdict.world, place: france, scenario: 'si' }).abundance, 0.1 * (1 - doomSi))
})

test('v0.3 rejects incoherent runs', () => {
  const good = world(1)
  const withCause = (cause: CauseDanger): WorldForecast => ({ ...good, si: { ...good.si, causes: { ...good.si.causes, war: cause } } })
  assert.throws(() => validateWorld({ world: withCause(danger(0.01, 0.02, 0.001)) }), /fall as the level rises/)
  assert.throws(() => validateWorld({ world: withCause(danger(0.9, 0.02, 0.001)) }), /above 1/)
  assert.throws(() => validateWorld({ world: { ...good, si: { ...good.si, directDoom: 0.5 } } }), /direct estimate/)
  assert.throws(() => validateWorld({ world: { ...good, siBy2050: 0.9 } }), /cannot exceed/)
  assert.throws(() => poolWorlds({ worlds: [] }), /no world forecast/)

  assert.throws(() => validatePlace({ place: { entity: 'FRA', si: { ...outcomes(0.1), better: 0.1 }, noSi: outcomes(0) } }), /sum to/)
  const nudged = validatePlace({ place: { entity: 'FRA', si: { ...outcomes(0.1), better: 0.31 }, noSi: outcomes(0) } })
  close(Object.values(nudged.si).reduce((a, b) => a + b, 0), 1)

  const base = run('a', 1)
  assert.throws(() => validateRun({ run: { ...base, curves: [{ card: 'heat', si: [{ value: 2, above: 0.6 }], noSi: [{ value: 3.5, above: 0.2 }] }] }, cards: cards }), /no chance stated at 3.5/)
  assert.throws(() => validateRun({ run: { ...base, curves: [{ card: 'heat', si: base.curves[0].si, noSi: [{ value: 3.5, above: 0.95 }] }] }, cards: cards }), /exceeds the chance/)
  assert.throws(() => validateRun({ run: { ...base, curves: [{ card: 'nope', si: [], noSi: [] }] }, cards: cards }), /unknown card/)
})
