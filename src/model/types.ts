/** 'WLD' for the world, a region id such as 'europe-north', or an ISO3 country code. */
export type EntityId = string

export type EntityKind = 'world' | 'region' | 'country'

/** The five essentials. Abundance means all five are delivered and nearly free; collapse means losing one. */
export type Pillar = 'energy' | 'water' | 'food' | 'health' | 'security'

/**
 * pillar: how well an essential is delivered today.
 * driver: something pushing toward collapse.
 * counterforce: something pushing back.
 * context: shown with sources, deliberately left out of every index.
 */
export type Family = 'pillar' | 'driver' | 'counterforce' | 'context'

/** Global factors exist once, for the world. Country factors exist per country and per region. */
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
  | 'finance'
  | 'abundance'
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

/**
 * A line on a factor's scale that matters for doom. `limit` is a warning (a boundary or the abundance
 * threshold); `danger` is a point past which things get much worse (a tipping point, a collapse line).
 */
export type Threshold = {
  value: number
  label: string
  severity: 'limit' | 'danger'
  basis: AnchorBasis
}

/** How a factor is drawn: in its own units, with the direction that is good and the lines that matter. */
export type FactorDisplay = {
  factorId: string
  symbol: string
  why: string
  min: number
  max: number
  log?: boolean
  better: 'lower' | 'higher'
  thresholds: Threshold[]
}

/** Where a factor is heading, from a named scenario. */
export type Projection = {
  factorId: string
  entity: EntityId
  value: number
  low?: number
  high?: number
  year: number
  scenario: string
  source: string
  url: string
}

/**
 * The chance that a factor crosses one of its thresholds by a given year.
 * `published` is stated by the source, `derived` is computed from a published distribution,
 * `judged` is an estimate made for this site and labelled as such.
 */
export type Exceedance = {
  factorId: string
  entity: EntityId
  threshold: number
  /** Chip text when the threshold is not one of the card's own lines (e.g. warheads used, not stockpiled). */
  label?: string
  direction: 'above' | 'below'
  year: number
  probability: number
  basis: 'published' | 'derived' | 'judged'
  source: string
  url?: string
  reasoning: string
}

export type Pathway = 'ai' | 'nuclear' | 'pandemic' | 'climate' | 'resources' | 'other'

export type EntityScenario = {
  collapse: number
  abundance: number
  pillarLoss: Record<Pillar, number>
}

export type WorldScenario = {
  doom: number
  abundance: number
  pathways: Record<Pathway, number>
}

/** A judgment for a region or a country. */
export type EntityJudgment = {
  entity: EntityId
  si: EntityScenario
  noSi: EntityScenario
  rationale: string
}

export type WorldJudgment = {
  siBy2050: number
  siBy2100: number
  si: WorldScenario
  noSi: WorldScenario
  rationale: string
}

/**
 * One judge answer. Runs are batched: the world batch carries the world judgment and the regions,
 * country batches carry countries only and are checked against the world consensus.
 */
export type JudgeRun = {
  id: string
  batch: string
  model: string
  date: string
  method: string
  world?: WorldJudgment
  entities: EntityJudgment[]
}

export type ScenarioKey = 'weighted' | 'si' | 'noSi'

export type Outcome = {
  abundance: number
  muddle: number
  collapse: number
}
