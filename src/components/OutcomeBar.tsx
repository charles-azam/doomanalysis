import type { Outcome } from '../model/types.ts'
import { formatPercent } from '../model/judgment.ts'

const segments: { key: keyof Outcome; label: string; color: string; ink: string }[] = [
  { key: 'abundance', label: 'Abundance', color: 'var(--abundance)', ink: '#ffffff' },
  { key: 'muddle', label: 'Muddling through', color: 'var(--muddle)', ink: 'var(--muddle-ink)' },
  { key: 'collapse', label: 'Collapse', color: 'var(--collapse)', ink: '#ffffff' },
]

/**
 * Tall segmented bar: one whole split into three exclusive outcomes.
 * Shares are printed inside blocks wide enough to hold them; the rest live in the hover text and table.
 */
export function OutcomeBar({ outcome, name, collapseLabel }: { outcome: Outcome; name: string; collapseLabel?: string }) {
  const label = (key: keyof Outcome, fallback: string) => (key === 'collapse' && collapseLabel ? collapseLabel : fallback)
  const summary = segments.map((s) => `${label(s.key, s.label)} ${formatPercent({ value: outcome[s.key] })}`).join(', ')
  return (
    <div className="flex h-7 w-full gap-[2px]" role="img" aria-label={`${name}: ${summary}`}>
      {segments.map((segment) => {
        const share = outcome[segment.key]
        if (share <= 0) return null
        const text = formatPercent({ value: share })
        return (
          <div
            key={segment.key}
            data-tip={`${label(segment.key, segment.label)}: ${text}`}
            className="flex items-center rounded-[4px] px-1.5 text-xs font-semibold"
            style={{ width: `${share * 100}%`, background: segment.color, color: segment.ink, minWidth: 2 }}
          >
            {share >= 0.08 ? text : ''}
          </div>
        )
      })}
    </div>
  )
}

export function OutcomeLegend({ collapseLabel }: { collapseLabel?: string }) {
  return (
    <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--ink-2)' }}>
      {segments.map((segment) => (
        <span key={segment.key} className="inline-flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-[3px]" style={{ background: segment.color }} />
          {segment.key === 'collapse' && collapseLabel ? collapseLabel : segment.label}
        </span>
      ))}
    </div>
  )
}
