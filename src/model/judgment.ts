import type {
  EntityId,
  EntityJudgment,
  EntityScenario,
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
function checkUnion({ total, parts, label, checkUpper }: { total: number; parts: number[]; label: string; checkUpper: boolean }): void {
  const largest = Math.max(...parts)
  if (total + tolerance < largest) throw new Error(`${label}: total ${total} is below its largest part ${largest}`)
  const sum = parts.reduce((a, b) => a + b, 0)
  if (checkUpper && total > Math.min(1, sum) + tolerance) throw new Error(`${label}: total ${total} exceeds the sum of its parts ${sum}`)
}

function checkEntityScenario({ scenario, label, checkUpper }: { scenario: EntityScenario; label: string; checkUpper: boolean }): void {
  checkProbability({ value: scenario.collapse, label: `${label} collapse` })
  checkProbability({ value: scenario.abundance, label: `${label} abundance` })
  for (const pillar of pillars) checkProbability({ value: scenario.pillarLoss[pillar], label: `${label} ${pillar} loss` })
  if (scenario.collapse + scenario.abundance > 1 + tolerance) throw new Error(`${label}: abundance and collapse are exclusive, their sum exceeds 1`)
  checkUnion({ total: scenario.collapse, parts: pillars.map((pillar) => scenario.pillarLoss[pillar]), label: `${label} collapse`, checkUpper: checkUpper })
}

function checkWorldScenario({ scenario, label, checkUpper }: { scenario: WorldScenario; label: string; checkUpper: boolean }): void {
  checkProbability({ value: scenario.doom, label: `${label} doom` })
  checkProbability({ value: scenario.abundance, label: `${label} abundance` })
  for (const pathway of pathways) checkProbability({ value: scenario.pathways[pathway], label: `${label} ${pathway}` })
  if (scenario.doom + scenario.abundance > 1 + tolerance) throw new Error(`${label}: abundance and doom are exclusive, their sum exceeds 1`)
  checkUnion({ total: scenario.doom, parts: pathways.map((pathway) => scenario.pathways[pathway]), label: `${label} doom`, checkUpper: checkUpper })
}

export function validateWorld({ world, checkUpper }: { world: WorldJudgment; checkUpper: boolean }): WorldJudgment {
  checkProbability({ value: world.siBy2050, label: 'P(SI by 2050)' })
  checkProbability({ value: world.siBy2100, label: 'P(SI by 2100)' })
  if (world.siBy2050 > world.siBy2100 + tolerance) throw new Error('P(SI by 2050) cannot exceed P(SI by 2100)')
  checkWorldScenario({ scenario: world.si, label: 'world | SI', checkUpper: checkUpper })
  checkWorldScenario({ scenario: world.noSi, label: 'world | no SI', checkUpper: checkUpper })
  return world
}

/**
 * Throws on any incoherent judgment. `world` is the run's own world judgment, or the world consensus
 * for batches that judge countries only: global doom collapses every place, so no place can be safer than the world.
 */
export function validateRun({ run, world, checkUpper }: { run: JudgeRun; world: WorldJudgment; checkUpper: boolean }): JudgeRun {
  if (run.world !== undefined) validateWorld({ world: run.world, checkUpper: checkUpper })
  for (const entity of run.entities) {
    checkEntityScenario({ scenario: entity.si, label: `${entity.entity} | SI`, checkUpper: checkUpper })
    checkEntityScenario({ scenario: entity.noSi, label: `${entity.entity} | no SI`, checkUpper: checkUpper })
    if (entity.si.collapse + tolerance < world.si.doom) throw new Error(`${entity.entity}: collapse | SI is below global doom | SI`)
    if (entity.noSi.collapse + tolerance < world.noSi.doom) throw new Error(`${entity.entity}: collapse | no SI is below global doom | no SI`)
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

const spreadOf = ({ values }: { values: number[] }): Spread => ({ low: Math.min(...values), high: Math.max(...values) })

const medianEntityScenario = ({ scenarios }: { scenarios: EntityScenario[] }): EntityScenario => ({
  collapse: median({ values: scenarios.map((s) => s.collapse) }),
  abundance: median({ values: scenarios.map((s) => s.abundance) }),
  pillarLoss: Object.fromEntries(pillars.map((pillar) => [pillar, median({ values: scenarios.map((s) => s.pillarLoss[pillar]) })])) as Record<Pillar, number>,
})

const medianWorldScenario = ({ scenarios }: { scenarios: WorldScenario[] }): WorldScenario => ({
  doom: median({ values: scenarios.map((s) => s.doom) }),
  abundance: median({ values: scenarios.map((s) => s.abundance) }),
  pathways: Object.fromEntries(pathways.map((pathway) => [pathway, median({ values: scenarios.map((s) => s.pathways[pathway]) })])) as Record<Pathway, number>,
})

export function worldConsensus({ worlds }: { worlds: WorldJudgment[] }): WorldJudgment {
  if (worlds.length === 0) throw new Error('no world judgment to build a consensus from')
  for (const world of worlds) validateWorld({ world: world, checkUpper: true })
  return validateWorld({
    world: {
      siBy2050: median({ values: worlds.map((w) => w.siBy2050) }),
      siBy2100: median({ values: worlds.map((w) => w.siBy2100) }),
      si: medianWorldScenario({ scenarios: worlds.map((w) => w.si) }),
      noSi: medianWorldScenario({ scenarios: worlds.map((w) => w.noSi) }),
      rationale: worlds[0].rationale,
    },
    checkUpper: false,
  })
}

export type EntityVerdict = EntityJudgment & { runs: number; collapseSpread: Spread }

export type Consensus = {
  model: string
  date: string
  worldRuns: number
  world: WorldJudgment
  doomSpread: Spread
  entities: Record<EntityId, EntityVerdict>
}

/** Law of total probability over the SI hypothesis: P(X) = P(SI)·P(X|SI) + (1−P(SI))·P(X|no SI). */
export function weighted({ world, pick }: { world: WorldJudgment; pick: (scenario: WorldScenario) => number }): number {
  return world.siBy2100 * pick(world.si) + (1 - world.siBy2100) * pick(world.noSi)
}

/** Median of independent judge runs, field by field, with the spread kept for display. */
export function consensus({ runs }: { runs: JudgeRun[] }): Consensus {
  const worldRuns = runs.filter((run) => run.world !== undefined)
  const world = worldConsensus({ worlds: worldRuns.map((run) => run.world as WorldJudgment) })
  for (const run of runs) validateRun({ run: run, world: run.world ?? world, checkUpper: true })
  const byEntity = new Map<EntityId, { judgment: EntityJudgment; world: WorldJudgment }[]>()
  for (const run of runs) {
    for (const judgment of run.entities) {
      const list = byEntity.get(judgment.entity) ?? []
      list.push({ judgment: judgment, world: run.world ?? world })
      byEntity.set(judgment.entity, list)
    }
  }
  const entities: Record<EntityId, EntityVerdict> = {}
  for (const [entity, list] of byEntity) {
    const judged = list.map((item) => item.judgment)
    entities[entity] = {
      entity: entity,
      si: medianEntityScenario({ scenarios: judged.map((j) => j.si) }),
      noSi: medianEntityScenario({ scenarios: judged.map((j) => j.noSi) }),
      rationale: judged[0].rationale,
      runs: judged.length,
      collapseSpread: spreadOf({
        values: list.map((item) => item.world.siBy2100 * item.judgment.si.collapse + (1 - item.world.siBy2100) * item.judgment.noSi.collapse),
      }),
    }
  }
  const result: Consensus = {
    model: runs[0].model,
    date: runs.map((run) => run.date).sort().at(-1) ?? runs[0].date,
    worldRuns: worldRuns.length,
    world: world,
    doomSpread: spreadOf({ values: worldRuns.map((run) => weighted({ world: run.world as WorldJudgment, pick: (s) => s.doom })) }),
    entities: entities,
  }
  validateRun({
    run: { id: 'consensus', batch: 'all', model: result.model, date: result.date, method: 'median', entities: Object.values(entities) },
    world: world,
    checkUpper: false,
  })
  return result
}

export function worldOutcome({ world, scenario }: { world: WorldJudgment; scenario: ScenarioKey }): Outcome {
  const doom = scenario === 'weighted' ? weighted({ world: world, pick: (s) => s.doom }) : world[scenario].doom
  const abundance = scenario === 'weighted' ? weighted({ world: world, pick: (s) => s.abundance }) : world[scenario].abundance
  return { abundance: abundance, collapse: doom, muddle: 1 - abundance - doom }
}

export function entityOutcome({ world, entity, scenario }: { world: WorldJudgment; entity: EntityJudgment; scenario: ScenarioKey }): Outcome {
  if (scenario === 'weighted') {
    const p = world.siBy2100
    const abundance = p * entity.si.abundance + (1 - p) * entity.noSi.abundance
    const collapse = p * entity.si.collapse + (1 - p) * entity.noSi.collapse
    return { abundance: abundance, collapse: collapse, muddle: 1 - abundance - collapse }
  }
  const chosen = entity[scenario]
  return { abundance: chosen.abundance, collapse: chosen.collapse, muddle: 1 - chosen.abundance - chosen.collapse }
}

/** Whole percents from 10% up; one decimal below, so small risks stay distinguishable. */
export const formatPercent = ({ value }: { value: number }): string => {
  const percent = value * 100
  if (percent > 0 && percent < 0.1) return '<0.1%'
  if (percent < 10) return `${Number(percent.toFixed(1))}%`
  return `${Math.round(percent)}%`
}
