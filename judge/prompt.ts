import { countries, entityById } from '../src/data/countries.ts'
import { definitions, horizon, pathwayDefinitions } from '../src/data/definitions.ts'
import { factors } from '../src/data/factors.ts'
import { observations } from '../src/data/observations.ts'
import { formatValue } from '../src/model/score.ts'
import type { EntityId } from '../src/model/types.ts'

/** Version the prompt so every stored judgment says which wording produced it. */
export const promptVersion = '2026-11-23.1'

function evidenceFor({ entity }: { entity: EntityId }): string {
  const scope = entity === 'WLD' ? 'global' : 'country'
  return factors
    .filter((factor) => factor.scope === scope)
    .flatMap((factor) => {
      const observation = observations.find((o) => o.factorId === factor.id && o.entity === entity)
      if (observation === undefined) return []
      const note = observation.note ? ` (${observation.note})` : ''
      return [`- ${factor.name}: ${formatValue({ factor: factor, value: observation.value })} ${factor.unit}, ${observation.year}, ${observation.source}${note}`]
    })
    .join('\n')
}

export const outputSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['world', 'countries'],
  properties: {
    world: {
      type: 'object',
      additionalProperties: false,
      required: ['siBy2050', 'siBy2100', 'si', 'noSi', 'rationale'],
      properties: {
        siBy2050: { type: 'number' },
        siBy2100: { type: 'number' },
        si: { $ref: '#/$defs/worldScenario' },
        noSi: { $ref: '#/$defs/worldScenario' },
        rationale: { type: 'string' },
      },
    },
    countries: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['entity', 'si', 'noSi', 'rationale'],
        properties: {
          entity: { type: 'string', enum: countries.map((country) => country.id) },
          si: { $ref: '#/$defs/countryScenario' },
          noSi: { $ref: '#/$defs/countryScenario' },
          rationale: { type: 'string' },
        },
      },
    },
  },
  $defs: {
    worldScenario: {
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
    },
    countryScenario: {
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
          properties: {
            energy: { type: 'number' },
            water: { type: 'number' },
            food: { type: 'number' },
            health: { type: 'number' },
            security: { type: 'number' },
          },
        },
      },
    },
  },
} as const

export function buildPrompt(): string {
  const countryBlocks = countries
    .map((country) => `### ${country.name} (${country.id})\n${evidenceFor({ entity: country.id })}`)
    .join('\n\n')
  return `You are one of several independent judges for a public forecasting dashboard. Give your own calibrated probabilities. Do not anchor on any number you believe the site's author wants. Do not use tools; reason from the evidence below and your own knowledge.

## Definitions (fixed)
- Horizon: every event is judged by the end of ${horizon}.
- ${definitions.essentials}
- Abundance: ${definitions.abundance}
- Collapse: ${definitions.collapse}
- Doom: ${definitions.doom}
- ${definitions.muddle}
- ${definitions.superintelligence}

## What to estimate
For the world:
- siBy2050, siBy2100: probability that superintelligence, as defined, is deployed by those dates.
- For each scenario ("si": superintelligence arrives before ${horizon}; "noSi": it does not):
  - doom: probability of global doom by ${horizon}.
  - abundance: probability of global abundance in ${horizon}.
  - pathways: probability of doom through each route. Attribute each doom world to its main cause, so the pathway values should sum to roughly the doom total.
    - ai: ${pathwayDefinitions.ai}
    - nuclear: ${pathwayDefinitions.nuclear}
    - pandemic: ${pathwayDefinitions.pandemic}
    - climate: ${pathwayDefinitions.climate}
    - resources: ${pathwayDefinitions.resources}
    - other: ${pathwayDefinitions.other}
- rationale: 2–4 sentences on what drives your numbers.

For each country, for each scenario:
- collapse: probability the country collapses before ${horizon} (including through global doom).
- abundance: probability the country reaches abundance in ${horizon}.
- pillarLoss: for each essential, the probability that losing it alone would trigger collapse before ${horizon}. Collapse must be at least the largest pillarLoss and at most their sum.
- rationale: 2–3 sentences naming the factors that matter most.

## Consistency rules (your answer is rejected if it breaks them)
- Every value is a probability between 0 and 1.
- abundance + collapse ≤ 1 for every country and scenario; abundance + doom ≤ 1 for the world.
- siBy2050 ≤ siBy2100.
- A country's collapse is at least the world's doom in the same scenario.

## Evidence: global indicators (World)
${evidenceFor({ entity: 'WLD' })}

## Evidence: country indicators
${countryBlocks}

Answer only with JSON matching the requested schema. Countries, in order: ${countries.map((c) => entityById({ id: c.id }).name).join(', ')}.`
}
