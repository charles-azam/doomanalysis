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
  | 'living'
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
  /** `goal` is a line to reach (rich world today, abundance), not a danger: being below it is not "crossing" it. */
  severity: 'limit' | 'danger' | 'goal'
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

export type ScenarioKey = 'weighted' | 'si' | 'noSi'


// ── v0.3: one danger scale, one curve per card, seven root causes, six outcomes ──────────────

/**
 * The common scale. A level is the share of humanity that dies or lastingly loses decent living conditions:
 * 0 nobody, 1 under 1%, 2 1–10%, 3 10–50%, 4 over 50% with recovery possible, 5 extinction or no recovery
 * within a century. Technology cards use the same numbers for potential (see `definitions.ts`).
 */
export type DangerLevel = 0 | 1 | 2 | 3 | 4 | 5

/** `si`: superintelligence is deployed before 2100. `noSi`: it is not. */
export type SiCase = 'si' | 'noSi'

/** `published` is stated by the source, `derived` is computed from a published figure, `judged` is this site's estimate. */
export type Basis = 'published' | 'derived' | 'judged'

/** What started the chain. Every catastrophe is attributed to exactly one root cause. */
export type RootCause = 'climate' | 'resources' | 'war' | 'civil' | 'disease' | 'ai' | 'natural'

/** Where a card is shown. Hazard cards sit under their root cause. */
export type CardGroup = RootCause | 'technology' | 'living'

/** A stretch of a card's axis and what it means for people. Bands are contiguous and cover the whole axis. */
export type Band = {
  from: number
  to: number
  level: DangerLevel
  /** A few plain words: what a value in this stretch does to people (or, for technologies, for them). */
  label: string
  basis: Basis
  source?: string
  url?: string
}

/** One point of a curve: the chance that the card's value is above `value`. */
export type CurvePoint = {
  value: number
  above: number
  basis: Basis
  source: string
  url?: string
}

/** A named line on a card's axis that is not a band edge, such as "Paris goal" or "rich world today". */
export type Mark = { value: number; label: string }

/**
 * One card. Every card has the same anatomy: a metric, where it stands, the probability of each value
 * in 2100 with and without superintelligence, and a band that says what each value means.
 */
export type Card = {
  id: string
  name: string
  /** One sentence for a newcomer: what this is and why it matters. */
  summary: string
  group: CardGroup
  /** `danger` for hazards, `potential` for technologies, `none` for plain measures (no bands). */
  scale: 'danger' | 'potential' | 'none'
  /** The card this one is a channel of. A sub-card explains its parent and never counts on its own. */
  parent?: string
  /** For technologies: the root causes it pushes against. */
  counters?: RootCause[]
  /** `value-in-2100` for a quantity; `worst-by-2100` for the largest event of its kind before 2100. */
  statistic: 'value-in-2100' | 'worst-by-2100'
  /** What the axis measures, in words. */
  metric: string
  unit: string
  decimals: number
  axis: { min: number; max: number; log?: boolean }
  /** Where the metric stands now, or the worst such event so far for `worst-by-2100`. */
  today: { value: number; year: number; label?: string; source: string; url: string }
  bands: Band[]
  marks?: Mark[]
  /** Curve points taken from sources. They don't assume superintelligence unless listed under `si`. */
  published: { noSi: CurvePoint[]; si: CurvePoint[] }
  /** Title of the English Wikipedia article quoted on the card's page. */
  wikipedia: string
  /** One sentence: what superintelligence can change here, and what it cannot. */
  siNote: string
}

/** Chance that the worst thing that happens to the world by 2100 reaches a level, with this cause as its root. */
export type CauseDanger = { atLeast3: number; atLeast4: number; doom: number }

export type WorldCase = {
  causes: Record<RootCause, CauseDanger>
  /** The judge's own one-number estimate of doom, kept as a cross-check on the sum of the causes. */
  directDoom: number
  /** Chance that at least 90% of humanity lives in places that reach abundance. */
  abundance: number
}

export type WorldForecast = {
  siBy2050: number
  siBy2100: number
  si: WorldCase
  noSi: WorldCase
}

/** The five outcomes of a place other than doom. */
export type PlaceOutcomeKey = 'abundance' | 'better' | 'stagnation' | 'decline' | 'collapse'
export type OutcomeKey = PlaceOutcomeKey | 'doom'

/** Shares that sum to 1, given that the world does not end. Doom is global, so it comes from the world forecast. */
export type PlaceOutcomes = Record<PlaceOutcomeKey, number>

export type PlaceForecast = {
  entity: EntityId
  si: PlaceOutcomes
  noSi: PlaceOutcomes
}

/** Judged curve points for one card: the chance of being above each band edge or mark. */
export type CurveForecast = {
  card: string
  si: { value: number; above: number }[]
  noSi: { value: number; above: number }[]
}

/** One judge answer under the v0.3 definitions. A run carries curves, or the world and regions, or countries. */
export type ForecastRun = {
  id: string
  batch: string
  model: string
  date: string
  method: string
  world?: WorldForecast
  places: PlaceForecast[]
  curves: CurveForecast[]
}

export type SixOutcomes = Record<OutcomeKey, number>

/** A headline the site published on a given day. `definitions` changes when doom or abundance were redefined. */
export type HeadlineRecord = {
  date: string
  version: string
  definitions: string
  doom: number
  doomGivenSi: number
  abundance: number
  si: number
  note: string
}
