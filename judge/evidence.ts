import { displays } from '../src/data/display.ts'
import { exceedances } from '../src/data/exceedance.ts'
import { factors } from '../src/data/factors.ts'
import { observations } from '../src/data/observations.ts'
import { projections } from '../src/data/projections.ts'
import { formatPercent } from '../src/model/forecast.ts'
import { formatValue } from '../src/model/score.ts'
import type { EntityId } from '../src/model/types.ts'

/** Context measures every judge sees, even in compact prompts: they are the yardstick of the six outcomes. */
const livingMeasures = new Set(['living_standard', 'consumption_per_person', 'energy_per_person', 'healthy_life_years', 'health_coverage', 'hours_worked', 'feel_safe', 'migrant_share'])

/** One line per factor: today, the 2100 projection, the thresholds and the chance of crossing them. */
export function evidenceFor({ entity, compact }: { entity: EntityId; compact: boolean }): string {
  const scope = entity === 'WLD' ? 'global' : 'country'
  return factors
    .filter((factor) => factor.scope === scope && !(compact && factor.family === 'context' && !livingMeasures.has(factor.id)))
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
