import { outcomeNames } from '../data/definitions.ts'
import { outcomeColors, outcomeInk } from '../data/palette.ts'
import { formatPercent, outcomeKeys } from '../model/forecast.ts'
import type { SixOutcomes } from '../model/types.ts'

/** One whole split into the six outcomes of a place, from abundance (left) to doom (right). */
export function SixOutcomeBar({ outcomes, name, height = 28 }: { outcomes: SixOutcomes; name: string; height?: number }) {
  const summary = outcomeKeys.map((key) => `${outcomeNames[key]} ${formatPercent({ value: outcomes[key] })}`).join(', ')
  return (
    <div className="flex w-full gap-[2px]" style={{ height: height }} role="img" aria-label={`${name}: ${summary}`}>
      {outcomeKeys.map((key) => {
        const share = outcomes[key]
        if (share <= 0.0005) return null
        const text = formatPercent({ value: share })
        return (
          <div
            key={key}
            data-tip={`${outcomeNames[key]}: ${text}`}
            className="flex items-center justify-center overflow-hidden rounded-[3px] text-xs font-semibold tabular"
            style={{ flex: `${share} 0 0`, background: outcomeColors[key], color: outcomeInk[key], minWidth: 2 }}
          >
            {share >= 0.09 ? text : ''}
          </div>
        )
      })}
    </div>
  )
}

export function SixOutcomeLegend() {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm" style={{ color: 'var(--ink-2)' }}>
      {outcomeKeys.map((key) => (
        <span key={key} className="inline-flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-[3px]" style={{ background: outcomeColors[key] }} />
          {outcomeNames[key]}
        </span>
      ))}
    </div>
  )
}
