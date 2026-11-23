import type {
  CountryId,
  CountryJudgment,
  CountryScenario,
  JudgeRun,
  Outcome,
  Pathway,
  Pillar,
  ScenarioKey,
  WorldJudgment,
  WorldScenario,
} from './types.ts'

export const pillars: Pillar[] = ['energy', 'water', 'food', 'health', 'security']
export const pathways: Pathway[] = ['ai', 'nuclear', 'pandemic', 'climate', 'resources', 'other']

const tolerance = 1e-9

function checkProbability({ value, label }: { value: number; label: string }): void {
  if (!Number.isFinite(value) || value < 0 || value > 1) throw new Error(`${label} must be a probability in [0,1], got ${value}`)
}

/**
 * A union is at least as likely as each of its parts and at most their sum.
 * `checkUpper` is off for aggregated judgments, where medians of sums are not sums of medians.
 */
function checkUnion({
  total,
  parts,
  label,
  checkUpper,
}: {
  total: number
  parts: number[]
  label: string
  checkUpper: boolean
}): void {
  const largest = Math.max(...parts)
  if (total + tolerance < largest) throw new Error(`${label}: total ${total} is below its largest part ${largest}`)
  const sum = parts.reduce((a, b) => a + b, 0)
  if (checkUpper && total > Math.min(1, sum) + tolerance) throw new Error(`${label}: total ${total} exceeds the sum of its parts ${sum}`)
}

function checkCountryScenario({
  scenario,
  label,
  checkUpper,
}: {
  scenario: CountryScenario
  label: string
  checkUpper: boolean
}): void {
  checkProbability({ value: scenario.collapse, label: `${label} collapse` })
  checkProbability({ value: scenario.abundance, label: `${label} abundance` })
  for (const pillar of pillars) checkProbability({ value: scenario.pillarLoss[pillar], label: `${label} ${pillar} loss` })
  if (scenario.collapse + scenario.abundance > 1 + tolerance) throw new Error(`${label}: abundance and collapse are exclusive, their sum exceeds 1`)
  checkUnion({
    total: scenario.collapse,
    parts: pillars.map((pillar) => scenario.pillarLoss[pillar]),
    label: `${label} collapse`,
    checkUpper: checkUpper,
  })
}

function checkWorldScenario({
  scenario,
  label,
  checkUpper,
}: {
  scenario: WorldScenario
  label: string
  checkUpper: boolean
}): void {
  checkProbability({ value: scenario.doom, label: `${label} doom` })
  checkProbability({ value: scenario.abundance, label: `${label} abundance` })
  for (const pathway of pathways) checkProbability({ value: scenario.pathways[pathway], label: `${label} ${pathway}` })
  if (scenario.doom + scenario.abundance > 1 + tolerance) throw new Error(`${label}: abundance and doom are exclusive, their sum exceeds 1`)
  checkUnion({
    total: scenario.doom,
    parts: pathways.map((pathway) => scenario.pathways[pathway]),
    label: `${label} doom`,
    checkUpper: checkUpper,
  })
}

/** Throws on any incoherent judgment. Run on every judge output before it reaches the site. */
export function validateRun({ run, checkUpper }: { run: JudgeRun; checkUpper: boolean }): JudgeRun {
  const { world } = run
  checkProbability({ value: world.siBy2050, label: 'P(SI by 2050)' })
  checkProbability({ value: world.siBy2100, label: 'P(SI by 2100)' })
  if (world.siBy2050 > world.siBy2100 + tolerance) throw new Error('P(SI by 2050) cannot exceed P(SI by 2100)')
  checkWorldScenario({ scenario: world.si, label: 'world | SI', checkUpper: checkUpper })
  checkWorldScenario({ scenario: world.noSi, label: 'world | no SI', checkUpper: checkUpper })
  for (const country of run.countries) {
    checkCountryScenario({ scenario: country.si, label: `${country.entity} | SI`, checkUpper: checkUpper })
    checkCountryScenario({ scenario: country.noSi, label: `${country.entity} | no SI`, checkUpper: checkUpper })
    // Global doom collapses every country, so no country can be safer than the world.
    if (country.si.collapse + tolerance < world.si.doom) throw new Error(`${country.entity}: collapse | SI is below global doom | SI`)
    if (country.noSi.collapse + tolerance < world.noSi.doom) throw new Error(`${country.entity}: collapse | no SI is below global doom | no SI`)
  }
  return run
}

export function median({ values }: { values: number[] }): number {
  if (values.length === 0) throw new Error('median of nothing')
  const sorted = [...values].sort((a, b) => a - b)
  const middle = Math.floor(sorted.length / 2)
  return sorted.length % 2 === 1 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2
}

export type Spread = { low: number; high: number }

const spread = ({ values }: { values: number[] }): Spread => ({ low: Math.min(...values), high: Math.max(...values) })

const medianCountryScenario = ({ scenarios }: { scenarios: CountryScenario[] }): CountryScenario => ({
  collapse: median({ values: scenarios.map((s) => s.collapse) }),
  abundance: median({ values: scenarios.map((s) => s.abundance) }),
  pillarLoss: Object.fromEntries(
    pillars.map((pillar) => [pillar, median({ values: scenarios.map((s) => s.pillarLoss[pillar]) })]),
  ) as Record<Pillar, number>,
})

const medianWorldScenario = ({ scenarios }: { scenarios: WorldScenario[] }): WorldScenario => ({
  doom: median({ values: scenarios.map((s) => s.doom) }),
  abundance: median({ values: scenarios.map((s) => s.abundance) }),
  pathways: Object.fromEntries(
    pathways.map((pathway) => [pathway, median({ values: scenarios.map((s) => s.pathways[pathway]) })]),
  ) as Record<Pathway, number>,
})

export type Consensus = {
  runs: number
  model: string
  date: string
  world: WorldJudgment
  countries: CountryJudgment[]
  spread: {
    doom: Spread
    siBy2100: Spread
    collapse: Record<CountryId, Spread>
  }
}

/** Median of independent judge runs, field by field, with the spread kept for display. */
export function consensus({ runs }: { runs: JudgeRun[] }): Consensus {
  if (runs.length === 0) throw new Error('consensus needs at least one judge run')
  for (const run of runs) validateRun({ run: run, checkUpper: true })
  const ids = runs[0].countries.map((country) => country.entity)
  const countries = ids.map((entity) => {
    const judged = runs.map((run) => {
      const found = run.countries.find((country) => country.entity === entity)
      if (found === undefined) throw new Error(`run ${run.id} has no judgment for ${entity}`)
      return found
    })
    return {
      entity: entity,
      si: medianCountryScenario({ scenarios: judged.map((j) => j.si) }),
      noSi: medianCountryScenario({ scenarios: judged.map((j) => j.noSi) }),
      rationale: judged[0].rationale,
    }
  })
  const world: WorldJudgment = {
    siBy2050: median({ values: runs.map((run) => run.world.siBy2050) }),
    siBy2100: median({ values: runs.map((run) => run.world.siBy2100) }),
    si: medianWorldScenario({ scenarios: runs.map((run) => run.world.si) }),
    noSi: medianWorldScenario({ scenarios: runs.map((run) => run.world.noSi) }),
    rationale: runs[0].world.rationale,
  }
  const result: Consensus = {
    runs: runs.length,
    model: runs[0].model,
    date: runs.map((run) => run.date).sort().at(-1) ?? runs[0].date,
    world: world,
    countries: countries,
    spread: {
      doom: spread({ values: runs.map((run) => weighted({ world: run.world, pick: (s) => s.doom })) }),
      siBy2100: spread({ values: runs.map((run) => run.world.siBy2100) }),
      collapse: Object.fromEntries(
        ids.map((entity) => [
          entity,
          spread({
            values: runs.map((run) => {
              const country = run.countries.find((c) => c.entity === entity)
              if (country === undefined) throw new Error(`run ${run.id} has no judgment for ${entity}`)
              return run.world.siBy2100 * country.si.collapse + (1 - run.world.siBy2100) * country.noSi.collapse
            }),
          }),
        ]),
      ) as Record<CountryId, Spread>,
    },
  }
  validateRun({
    run: { id: 'consensus', model: result.model, date: result.date, method: 'median', world: world, countries: countries },
    checkUpper: false,
  })
  return result
}

/** Law of total probability over the SI hypothesis: P(X) = P(SI)·P(X|SI) + (1−P(SI))·P(X|no SI). */
export function weighted({ world, pick }: { world: WorldJudgment; pick: (scenario: WorldScenario) => number }): number {
  return world.siBy2100 * pick(world.si) + (1 - world.siBy2100) * pick(world.noSi)
}

export function worldOutcome({ world, scenario }: { world: WorldJudgment; scenario: ScenarioKey }): Outcome {
  const doom = scenario === 'weighted' ? weighted({ world: world, pick: (s) => s.doom }) : world[scenario].doom
  const abundance =
    scenario === 'weighted' ? weighted({ world: world, pick: (s) => s.abundance }) : world[scenario].abundance
  return { abundance: abundance, collapse: doom, muddle: 1 - abundance - doom }
}

export function countryOutcome({
  world,
  country,
  scenario,
}: {
  world: WorldJudgment
  country: CountryJudgment
  scenario: ScenarioKey
}): Outcome {
  if (scenario === 'weighted') {
    const p = world.siBy2100
    const abundance = p * country.si.abundance + (1 - p) * country.noSi.abundance
    const collapse = p * country.si.collapse + (1 - p) * country.noSi.collapse
    return { abundance: abundance, collapse: collapse, muddle: 1 - abundance - collapse }
  }
  const chosen = country[scenario]
  return { abundance: chosen.abundance, collapse: chosen.collapse, muddle: 1 - chosen.abundance - chosen.collapse }
}

/** What superintelligence changes for a country: positive abundance and negative collapse are good news. */
export function siEffect({ country }: { country: CountryJudgment }): { abundance: number; collapse: number } {
  return {
    abundance: country.si.abundance - country.noSi.abundance,
    collapse: country.si.collapse - country.noSi.collapse,
  }
}

/** Whole percents from 10% up; one decimal below, so small risks stay distinguishable. */
export const formatPercent = ({ value }: { value: number }): string => {
  const percent = value * 100
  if (percent > 0 && percent < 0.1) return '<0.1%'
  if (percent < 10) return `${Number(percent.toFixed(1))}%`
  return `${Math.round(percent)}%`
}
