import { formatPercent } from '../model/judgment.ts'

export type Bar = { key: string; label: string; mark?: string; value: number; href?: string; title?: string }

/**
 * Vertical bars from one baseline, sorted by the caller. The value sits inside the bar's top when it
 * fits, above it otherwise; labels under the bars are slanted so many entities fit side by side.
 */
export function VerticalBars({ bars, color, max, height = 190 }: { bars: Bar[]; color: string; max: number; height?: number }) {
  const scale = (value: number) => (value / max) * (height - 22)
  return (
    <div className="flex w-full items-end gap-[3px]" style={{ height: height + 78 }}>
      {bars.map((bar) => {
        const h = Math.max(2, scale(bar.value))
        const inside = h >= 26
        const text = formatPercent({ value: bar.value })
        const body = (
          <div className="flex h-full flex-col items-center justify-end" data-tip={`${bar.title ?? bar.label}: ${text}`}>
            {!inside && <span className="mb-1 text-[10px] font-semibold tabular">{text}</span>}
            <div
              className="flex w-full max-w-9 justify-center rounded-t-[4px] pt-1.5 text-[10px] font-semibold tabular text-white"
              style={{ height: h, background: color }}
            >
              {inside ? text : ''}
            </div>
            <div className="relative mt-1 h-[72px] w-full text-[10px] leading-none" style={{ color: 'var(--ink-2)' }}>
              {bar.mark && <span className="block w-full overflow-hidden text-center text-[13px] leading-none">{bar.mark}</span>}
              <span className="absolute right-1/2 top-6 origin-top-right -rotate-45 whitespace-nowrap">{bar.label}</span>
            </div>
          </div>
        )
        return (
          <div key={bar.key} className="h-full min-w-0 flex-1">
            {bar.href ? (
              <a href={bar.href} className="block h-full hover:opacity-85">
                {body}
              </a>
            ) : (
              body
            )}
          </div>
        )
      })}
    </div>
  )
}
