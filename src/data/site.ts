import { consensus, entityOutcome, worldOutcome, type EntityVerdict } from '../model/judgment.ts'
import { entityIndices, scoredFactors } from '../model/score.ts'
import type { EntityId, Family, Outcome, Projection, ScenarioKey } from '../model/types.ts'
import { entities, pathFor, world, type Entity } from './entities.ts'
import { factors } from './factors.ts'
import { judgeRuns } from './judgments.ts'
import { observations } from './observations.ts'
import { projections } from './projections.ts'

/** Everything a page needs, computed once at build time from the data files. */
export const verdict = consensus({ runs: judgeRuns })

export const judgmentFor = ({ id }: { id: EntityId }): EntityVerdict | undefined => verdict.entities[id]

const scenarios: ScenarioKey[] = ['weighted', 'si', 'noSi']

export function outcomesFor({ entity }: { entity: Entity }): Record<ScenarioKey, Outcome> | undefined {
  if (entity.kind === 'world') {
    return Object.fromEntries(scenarios.map((s) => [s, worldOutcome({ world: verdict.world, scenario: s })])) as Record<ScenarioKey, Outcome>
  }
  const judged = judgmentFor({ id: entity.id })
  if (judged === undefined) return undefined
  return Object.fromEntries(scenarios.map((s) => [s, entityOutcome({ world: verdict.world, entity: judged, scenario: s })])) as Record<ScenarioKey, Outcome>
}

/** One row per entity, serializable, for the client-side picker and rankings. */
export type EntityRow = {
  id: EntityId
  kind: Entity['kind']
  name: string
  mark: string
  href: string
  region?: string
  spotlight: boolean
  population: number
  runs: number
  outcomes?: Record<ScenarioKey, Outcome>
}

export const entityRows: EntityRow[] = entities.map((entity) => ({
  id: entity.id,
  kind: entity.kind,
  name: entity.name,
  mark: entity.mark,
  href: entity.kind === 'world' ? '/countries/world/' : pathFor({ entity: entity }),
  region: entity.region,
  spotlight: entity.spotlight,
  population: entity.population,
  runs: entity.kind === 'world' ? verdict.worldRuns : (judgmentFor({ id: entity.id })?.runs ?? 0),
  outcomes: outcomesFor({ entity: entity }),
}))

export const scored = ({ entity, family }: { entity: EntityId; family: Family }) =>
  scoredFactors({ factors: factors, observations: observations, entity: entity, family: family })

export const indices = ({ entity }: { entity: EntityId }) => entityIndices({ factors: factors, observations: observations, entity: entity })

export const measuredFactorCount = new Set(observations.map((observation) => observation.factorId)).size
export const observationCount = observations.length

export const latestJudgeDate = new Date(verdict.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

export const projectionFor = ({ factorId, entity }: { factorId: string; entity: EntityId }): Projection | undefined =>
  projections.find((projection) => projection.factorId === factorId && projection.entity === entity)

export { world }
