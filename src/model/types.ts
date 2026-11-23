export type CountryId = 'FRA' | 'USA' | 'CHN' | 'IND' | 'NGA' | 'BRA' | 'BGD' | 'EGY'
export type EntityId = 'WLD' | CountryId

/** The five essentials. Abundance means all five are delivered; collapse means losing one. */
export type Pillar = 'energy' | 'water' | 'food' | 'health' | 'security'

/**
 * pillar: how well an essential is delivered today.
 * driver: something pushing toward collapse.
 * counterforce: something pushing back.
 * context: shown with sources, deliberately left out of every index.
 */
export type Family = 'pillar' | 'driver' | 'counterforce' | 'context'

export type Scope = 'global' | 'country'

export type Theme =
  | 'climate'
  | 'earth'
  | 'resources'
  | 'war'
  | 'displacement'
  | 'demography'
  | 'disease'
  | 'cohesion'
  | 'ai'
  | 'clean-energy'
  | 'wealth'
  | 'readiness'
  | Pillar

export type Elasticity = 'low' | 'medium' | 'high' | 'two-sided'

export type AnchorBasis = 'published' | 'judgment'

/**
 * A factor value is mapped to a 0–100 pressure score between two anchors:
 * `good` scores 0 and `bad` scores 100, clamped outside that range.
 * `two-sided` scores the distance from `good` in either direction.
 */
export type Anchors = {
  good: number
  bad: number
  scale: 'linear' | 'log' | 'two-sided'
  limit?: number
  limitLabel?: string
  basis: AnchorBasis
  rationale: string
}

export type FactorDefinition = {
  id: string
  name: string
  short: string
  family: Family
  scope: Scope
  theme: Theme
  pillar?: Pillar
  unit: string
  decimals: number
  anchors: Anchors
  siElasticity: Elasticity
  siNote: string
  description: string
}

export type Observation = {
  factorId: string
  entity: EntityId
  value: number
  year: number
  source: string
  url: string
  note?: string
}

export type Pathway = 'ai' | 'nuclear' | 'pandemic' | 'climate' | 'resources' | 'other'

export type CountryScenario = {
  collapse: number
  abundance: number
  pillarLoss: Record<Pillar, number>
}

export type WorldScenario = {
  doom: number
  abundance: number
  pathways: Record<Pathway, number>
}

export type CountryJudgment = {
  entity: CountryId
  si: CountryScenario
  noSi: CountryScenario
  rationale: string
}

export type WorldJudgment = {
  siBy2050: number
  siBy2100: number
  si: WorldScenario
  noSi: WorldScenario
  rationale: string
}

export type JudgeRun = {
  id: string
  model: string
  date: string
  method: string
  world: WorldJudgment
  countries: CountryJudgment[]
}

export type ScenarioKey = 'weighted' | 'si' | 'noSi'

export type Outcome = {
  abundance: number
  muddle: number
  collapse: number
}
