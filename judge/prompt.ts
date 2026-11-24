import { displays } from '../src/data/display.ts'
import { definitions, horizon, pathwayDefinitions } from '../src/data/definitions.ts'
import { countries, entityById, regions } from '../src/data/entities.ts'
import { exceedances } from '../src/data/exceedance.ts'
import { riskEvidence } from '../src/data/evidence.ts'
import { arrivalSeries } from '../src/data/si-arrival.ts'
import { factors } from '../src/data/factors.ts'
import { observations } from '../src/data/observations.ts'
import { projections } from '../src/data/projections.ts'
import { formatPercent } from '../src/model/judgment.ts'
import { formatValue } from '../src/model/score.ts'
import type { EntityId, WorldJudgment } from '../src/model/types.ts'

/** Version the prompt so every stored judgment says which wording produced it. */
export const promptVersion = '2026-11-24.2'

/** One line per factor: today, the 2100 projection, the thresholds and the chance of crossing them. */
function evidenceFor({ entity, compact }: { entity: EntityId; compact: boolean }): string {
  const scope = entity === 'WLD' ? 'global' : 'country'
  return factors
    .filter((factor) => factor.scope === scope && !(compact && factor.family === 'context'))
    .flatMap((factor) => {
      const observation = observations.find((o) => o.factorId === factor.id && o.entity === entity)
      if (observation === undefined) return []
      const value = (v: number) => formatValue({ factor: factor, value: v })
      const projection = projections.find((p) => p.factorId === factor.id && p.entity === entity)
      const range = projection?.low !== undefined && projection.high !== undefined ? ` (${value(projection.low)}–${value(projection.high)})` : ''
      const ahead = projection ? `; ${projection.year}: ${value(projection.value)}${range}, ${projection.scenario}` : ''
      const lines = displays.find((d) => d.factorId === factor.id)?.thresholds ?? []
      const odds = exceedances.filter((e) => e.factorId === factor.id && e.entity === entity && e.year === 2100)
      const levels = [...new Set([...lines.map((t) => t.value), ...odds.map((e) => e.threshold)])].sort((a, b) => a - b)
      const marks =
        levels.length > 0 && !compact
          ? `; lines and chance of crossing by 2100: ${levels
              .map((level) => {
                const group = odds.filter((e) => e.threshold === level)
                const name = group[0]?.label ?? lines.find((t) => t.value === level)?.label ?? value(level)
                if (group.length === 0) return `${name} at ${value(level)}`
                const low = Math.min(...group.map((e) => e.probability))
                const high = Math.max(...group.map((e) => e.probability))
                const chance = low === high ? formatPercent({ value: low }) : `${formatPercent({ value: low })}–${formatPercent({ value: high })}`
                return `${name} (${value(level)}): ${chance} ${[...new Set(group.map((e) => e.basis))].join('/')}`
              })
              .join(', ')}`
          : ''
      const source = compact ? '' : `, ${observation.source}`
      return [`- ${factor.name}: ${value(observation.value)} ${factor.unit} (${observation.year}${source})${ahead}${marks}`]
    })
    .join('\n')
}

const scenarioSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['collapse', 'abundance', 'pillarLoss'],
  properties: {
    collapse: { type: 'number' },
    abundance: { type: 'number' },
    pillarLoss: {
      type: 'object',
      additionalProperties: false,
      required: ['energy', 'water', 'food', 'health', 'security'],
      properties: { energy: { type: 'number' }, water: { type: 'number' }, food: { type: 'number' }, health: { type: 'number' }, security: { type: 'number' } },
    },
  },
}

const worldScenarioSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['doom', 'abundance', 'pathways'],
  properties: {
    doom: { type: 'number' },
    abundance: { type: 'number' },
    pathways: {
      type: 'object',
      additionalProperties: false,
      required: ['ai', 'nuclear', 'pandemic', 'climate', 'resources', 'other'],
      properties: {
        ai: { type: 'number' },
        nuclear: { type: 'number' },
        pandemic: { type: 'number' },
        climate: { type: 'number' },
        resources: { type: 'number' },
        other: { type: 'number' },
      },
    },
  },
}

const entitiesSchema = ({ ids }: { ids: string[] }) => ({
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: false,
    required: ['entity', 'si', 'noSi', 'rationale'],
    properties: { entity: { type: 'string', enum: ids }, si: scenarioSchema, noSi: scenarioSchema, rationale: { type: 'string' } },
  },
})

export const worldSchema = () => ({
  type: 'object',
  additionalProperties: false,
  required: ['world', 'entities'],
  properties: {
    world: {
      type: 'object',
      additionalProperties: false,
      required: ['siBy2050', 'siBy2100', 'si', 'noSi', 'rationale'],
      properties: { siBy2050: { type: 'number' }, siBy2100: { type: 'number' }, si: worldScenarioSchema, noSi: worldScenarioSchema, rationale: { type: 'string' } },
    },
    entities: entitiesSchema({ ids: regions.map((r) => r.id) }),
  },
})

export const countrySchema = ({ ids }: { ids: string[] }) => ({
  type: 'object',
  additionalProperties: false,
  required: ['entities'],
  properties: { entities: entitiesSchema({ ids: ids }) },
})

const preamble = `You are one of several independent judges for a public forecasting dashboard, Doom Analysis. Give your own calibrated probabilities. Do not anchor on any number you believe the site's author wants. Do not use tools; reason from the evidence below and your own knowledge.

## Definitions (fixed)
- Horizon: every event is judged by the end of ${horizon}.
- ${definitions.essentials}
- Abundance: ${definitions.abundance}
- Why abundance is defined this strictly: ${definitions.abundanceWhy}
- Collapse: ${definitions.collapse}
- Doom: ${definitions.doom}
- ${definitions.muddle}
- ${definitions.superintelligence}

## Consistency rules (your answer is rejected if it breaks them)
- Every value is a probability between 0 and 1.
- abundance + collapse ≤ 1 for every place and scenario; abundance + doom ≤ 1 for the world.
- collapse ≥ the largest pillarLoss and ≤ the sum of the pillarLoss values.
- A place's collapse is at least the world's doom in the same scenario.

## For each place, for each scenario ("si": superintelligence arrives before ${horizon}; "noSi": it does not)
- collapse: probability the place collapses before ${horizon} (including through global doom).
- abundance: probability the place reaches abundance, as strictly defined above, in ${horizon}.
- pillarLoss: for each essential, the probability that losing it alone would trigger collapse before ${horizon}.
- rationale: one or two sentences naming what matters most. Plain words.`

/** The world batch: P(SI), doom and its pathways, global abundance, and the twelve regions. */
export function buildWorldPrompt(): string {
  const regionBlocks = regions.map((region) => `### ${region.name} (${region.id}), ${(region.population / 1e6).toFixed(0)} million people\n${evidenceFor({ entity: region.id, compact: false })}`).join('\n\n')
  return `${preamble}

## For the world
- siBy2050, siBy2100: probability that superintelligence, as defined, is deployed by those dates.
- For each scenario: doom (global doom by ${horizon}), abundance (90% of humanity in abundance as defined), and pathways: probability of doom through each main cause, summing roughly to doom.
${Object.entries(pathwayDefinitions).map(([key, text]) => `  - ${key}: ${text}`).join('\n')}
- rationale: two or three sentences.

## Evidence: global indicators, with 2100 projections, thresholds and the chance of crossing them
Crossing chances are published, derived or judged baselines; unless a line says otherwise they do not assume superintelligence, so adjust them yourself in the SI scenario.
${evidenceFor({ entity: 'WLD', compact: false })}

## Outside forecasts, for reference (definitions differ from ours; weigh them, do not copy them)
Superintelligence or nearest equivalent, cumulative chance of arrival:
${arrivalSeries.map((series) => `- ${series.label}: ${series.points.map((p) => `${Math.round(p.probability * 100)}% by ${p.year}`).join(', ')}`).join('\n')}
Catastrophe and extinction estimates:
${riskEvidence.map((e) => `- ${e.who}: ${e.claim}: ${e.value}`).join('\n')}

## Evidence: regions (population-weighted averages of their countries)
${regionBlocks}

Answer only with JSON: {"world": {...}, "entities": [one object per region, in this order: ${regions.map((r) => r.id).join(', ')}]}.`
}

/** A country batch, judged against the world consensus so that no country is safer than the world. */
export function buildCountryPrompt({ ids, world }: { ids: string[]; world: WorldJudgment }): string {
  const blocks = ids
    .map((id) => {
      const country = entityById({ id: id })
      const region = country.region ? entityById({ id: country.region }).name : ''
      return `### ${country.name} (${id}), ${region}, ${(country.population / 1e6).toFixed(1)} million people\n${evidenceFor({ entity: id, compact: true })}`
    })
    .join('\n\n')
  const pct = (v: number) => formatPercent({ value: v })
  return `${preamble}

## The world, as already judged (median of independent runs)
- P(superintelligence by 2050) = ${pct(world.siBy2050)}, by ${horizon} = ${pct(world.siBy2100)}.
- Global doom by ${horizon}: ${pct(world.si.doom)} if superintelligence arrives, ${pct(world.noSi.doom)} if not. Every country's collapse must be at least these.
- Global abundance in ${horizon}: ${pct(world.si.abundance)} with superintelligence, ${pct(world.noSi.abundance)} without.

## Global indicators (the same for every country)
${evidenceFor({ entity: 'WLD', compact: true })}

## Countries to judge
${blocks}

Answer only with JSON: {"entities": [one object per country, in this order: ${ids.join(', ')}]}.`
}

/** Batches for country judging: spotlight countries first (three runs each), then the rest (one run). */
export function countryBatches({ size }: { size: number }): { spotlight: string[][]; rest: string[][] } {
  const chunk = (list: string[]) => Array.from({ length: Math.ceil(list.length / size) }, (_, i) => list.slice(i * size, (i + 1) * size))
  return {
    spotlight: chunk(countries.filter((c) => c.spotlight).map((c) => c.id)),
    rest: chunk(countries.filter((c) => !c.spotlight).map((c) => c.id)),
  }
}
