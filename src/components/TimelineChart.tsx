import { formatPercent } from '../model/forecast.ts'
import type { TimelinePoint } from '../model/types.ts'

type Line = { key: 'si' | 'atLeast2' | 'atLeast3' | 'atLeast4' | 'doom'; label: string; color: string; dash?: string }

/** Cumulative chances from today to 2100, one line per event, the year on the horizontal axis. */
export function TimelineChart({ points, lines, max }: { points: TimelinePoint[]; lines: Line[]; max: number }) {
  const width = 520
  const height = 230
  const left = 40
  const right = width - 48
  const top = 10
  const bottom = height - 26
  const x = (year: number) => left + ((year - 2025) / 75) * (right - left)
  const y = (value: number) => bottom - (value / max) * (bottom - top)
  const step = max <= 0.2 ? 0.05 : max <= 0.5 ? 0.1 : 0.25
  const ticks = Array.from({ length: Math.round(max / step) + 1 }, (_, i) => Number((i * step).toFixed(2)))
  const last = points[points.length - 1]
  const at = (point: TimelinePoint, key: Line['key']) => point[key] ?? 0
  // Labels at the right end, nudged apart so they never overlap.
  const labels = [...lines]
    .map((line) => ({ ...line, y: y(at(last, line.key)) }))
    .sort((a, b) => a.y - b.y)
    .reduce<(Line & { y: number })[]>((placed, line) => [...placed, { ...line, y: Math.max(line.y, (placed[placed.length - 1]?.y ?? -Infinity) + 13) }], [])
  return (
    <div data-series-chart>
      <div className="mb-1 flex flex-wrap gap-x-2 gap-y-1 text-xs" style={{ color: 'var(--ink-2)' }}>
        {lines.map((line) => (
          <button key={line.key} type="button" data-series-toggle={line.key} aria-pressed="true" title="Click to show or hide" className="inline-flex items-center gap-1.5 rounded px-1">
            <svg width="16" height="8" aria-hidden="true">
              <line x1="0" y1="4" x2="16" y2="4" stroke={line.color} strokeWidth="2.5" strokeDasharray={line.dash} />
            </svg>
            {line.label}
          </button>
        ))}
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" role="img" aria-label={`Cumulative chance by year, 2025 to 2100: ${lines.map((l) => `${l.label} ${formatPercent({ value: at(last, l.key) })} by 2100`).join(', ')}.`}>
        {ticks.map((tick) => (
          <g key={tick}>
            <line x1={left} y1={y(tick)} x2={right} y2={y(tick)} stroke="var(--grid)" strokeDasharray={tick === 0 ? undefined : '1 4'} />
            <text x={left - 6} y={y(tick) + 4} textAnchor="end" fontSize="11" fill="var(--ink-muted)">
              {Math.round(tick * 100)}%
            </text>
          </g>
        ))}
        {[2025, 2050, 2075, 2100].map((year) => (
          <text key={year} x={x(year)} y={bottom + 18} textAnchor="middle" fontSize="11" fill="var(--ink-muted)">
            {year}
          </text>
        ))}
        {lines.map((line) => (
          <g key={line.key} data-series={line.key}>
            <path d={points.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(p.year).toFixed(1)} ${y(at(p, line.key)).toFixed(1)}`).join('')} fill="none" stroke={line.color} strokeWidth="2.5" strokeDasharray={line.dash} strokeLinejoin="round" />
            {points.slice(1).map((p) => (
              <circle key={p.year} cx={x(p.year)} cy={y(at(p, line.key))} r="3.5" fill={line.color} stroke="#fff" strokeWidth="1.5">
                <title>{`${line.label}, by ${p.year}: ${formatPercent({ value: at(p, line.key) })}`}</title>
              </circle>
            ))}
          </g>
        ))}
        {labels.map((line) => (
          <text key={line.key} data-series={line.key} x={right + 6} y={line.y + 4} fontSize="12" fontWeight="600" fill={line.color}>
            {formatPercent({ value: at(last, line.key) })}
          </text>
        ))}
      </svg>
    </div>
  )
}
