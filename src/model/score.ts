import type { EntityId, Family, FactorDefinition, Observation } from './types.ts'

const clamp = (value: number, low: number, high: number): number => Math.min(high, Math.max(low, value))

/** Position of `value` between the good anchor (0) and the bad anchor (100). */
export function pressureScore({ factor, value }: { factor: FactorDefinition; value: number }): number {
  const { good, bad, scale } = factor.anchors
  if (scale === 'two-sided') {
    return clamp((Math.abs(value - good) / Math.abs(bad - good)) * 100, 0, 100)
  }
  if (scale === 'log') {
    if (value <= 0 || good <= 0 || bad <= 0) throw new Error(`${factor.id}: log scale needs positive values`)
    const position = (Math.log10(value) - Math.log10(good)) / (Math.log10(bad) - Math.log10(good))
    return clamp(position * 100, 0, 100)
  }
  return clamp(((value - good) / (bad - good)) * 100, 0, 100)
}

/**
 * The score a reader sees. Pillars and drivers show pressure (100 = worst).
 * Counterforces show strength (100 = strongest push back).
 */
export function displayScore({ factor, value }: { factor: FactorDefinition; value: number }): number {
  const pressure = pressureScore({ factor: factor, value: value })
  return factor.family === 'counterforce' ? 100 - pressure : pressure
}

/** Where the published or stated limit sits on the 0–100 display scale. */
export function limitPosition({ factor }: { factor: FactorDefinition }): number | undefined {
  if (factor.anchors.limit === undefined) return undefined
  return displayScore({ factor: factor, value: factor.anchors.limit })
}

/** Whether the current value is on the wrong side of the limit. */
export function beyondLimit({ factor, value }: { factor: FactorDefinition; value: number }): boolean | undefined {
  const limit = factor.anchors.limit
  if (limit === undefined) return undefined
  return pressureScore({ factor: factor, value: value }) > pressureScore({ factor: factor, value: limit })
}

export function observationFor({
  observations,
  factorId,
  entity,
}: {
  observations: Observation[]
  factorId: string
  entity: EntityId
}): Observation | undefined {
  return observations.find((observation) => observation.factorId === factorId && observation.entity === entity)
}

export type ScoredFactor = {
  factor: FactorDefinition
  observation: Observation
  score: number
}

export function scoredFactors({
  factors,
  observations,
  entity,
  family,
}: {
  factors: FactorDefinition[]
  observations: Observation[]
  entity: EntityId
  family: Family
}): ScoredFactor[] {
  const scope = entity === 'WLD' ? 'global' : 'country'
  return factors
    .filter((factor) => factor.family === family && factor.scope === scope)
    .flatMap((factor) => {
      const observation = observationFor({ observations: observations, factorId: factor.id, entity: entity })
      if (observation === undefined) return []
      return [{ factor: factor, observation: observation, score: displayScore({ factor: factor, value: observation.value }) }]
    })
}

/** Equal-weight mean of factor scores. */
export function indexScore({ scored }: { scored: ScoredFactor[] }): number {
  if (scored.length === 0) throw new Error('an index needs at least one scored factor')
  return scored.reduce((sum, item) => sum + item.score, 0) / scored.length
}

export type EntityIndices = {
  pressure: number
  resilience: number
  basketGap: number
  pillarsMet: number
  pillarsMeasured: number
}

export function entityIndices({
  factors,
  observations,
  entity,
}: {
  factors: FactorDefinition[]
  observations: Observation[]
  entity: EntityId
}): EntityIndices {
  const pillars = scoredFactors({ factors: factors, observations: observations, entity: entity, family: 'pillar' })
  return {
    pressure: indexScore({
      scored: scoredFactors({ factors: factors, observations: observations, entity: entity, family: 'driver' }),
    }),
    resilience: indexScore({
      scored: scoredFactors({ factors: factors, observations: observations, entity: entity, family: 'counterforce' }),
    }),
    basketGap: indexScore({ scored: pillars }),
    pillarsMet: pillars.filter((item) => beyondLimit({ factor: item.factor, value: item.observation.value }) === false)
      .length,
    pillarsMeasured: pillars.length,
  }
}

export function formatValue({ factor, value }: { factor: FactorDefinition; value: number }): string {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: factor.decimals,
    maximumFractionDigits: factor.decimals,
  })
}
