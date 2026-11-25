/** A point of the frontier: the best model's index score on a date (decimal year). */
export type TrendPoint = { year: number; value: number; label: string }

/** Where superintelligence would begin on the index, as a range. */
export type Threshold = { low: number; middle: number; high: number }

const yearOf = (value: number, start: TrendPoint, slope: number): number => start.year + (value - start.value) / slope

/**
 * The frontier of the index over time, extended in a straight line, as if progress on this scale simply
 * continues, against the range where superintelligence would begin. The crossing years are arithmetic, not a forecast.
 */
export function SiTrend({ points, threshold, until }: { points: TrendPoint[]; threshold: Threshold; until: number }) {
  const first = points[0]
  const last = points[points.length - 1]
  const slope = (last.value - first.value) / (last.year - first.year)
  const crossing = { low: yearOf(threshold.low, last, slope), middle: yearOf(threshold.middle, last, slope), high: yearOf(threshold.high, last, slope) }
  const end = Math.max(until, Math.ceil(crossing.high + 1))
  const width = 720
  const height = 280
  const left = 46
  const right = width - 14
  const top = 14
  const bottom = height - 34
  const minValue = Math.floor(first.value / 50) * 50
  const maxValue = Math.ceil(Math.max(threshold.high, last.value + slope * (end - last.year)) / 50) * 50
  const x = (year: number) => left + ((year - first.year + 0.3) / (end - first.year + 0.3)) * (right - left)
  const y = (value: number) => bottom - ((value - minValue) / (maxValue - minValue)) * (bottom - top)
  const valueTicks = Array.from({ length: Math.floor((maxValue - minValue) / 100) + 1 }, (_, i) => minValue + i * 100)
  const yearTicks = Array.from({ length: Math.floor((end - Math.ceil(first.year)) / 2) + 1 }, (_, i) => Math.ceil(first.year) + i * 2)
  const extended = { year: end, value: last.value + slope * (end - last.year) }
  const yearText = (year: number) => Math.round(year).toString()
  return (
    <div>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" role="img" aria-label={`Best model's Progress Index over time, extended in a straight line: it reaches the superintelligence range between ${yearText(crossing.low)} and ${yearText(crossing.high)}.`}>
        <rect x={left} y={y(threshold.high)} width={right - left} height={y(threshold.low) - y(threshold.high)} fill="#6250d6" fillOpacity="0.1" />
        <line x1={left} y1={y(threshold.middle)} x2={right} y2={y(threshold.middle)} stroke="#6250d6" strokeDasharray="4 4" />
        <text x={left + 6} y={y(threshold.high) + 13} fontSize="11" fill="#3c3489">
          Where superintelligence may begin ({threshold.low}–{threshold.high})
        </text>
        {valueTicks.map((tick) => (
          <g key={tick}>
            <line x1={left} y1={y(tick)} x2={right} y2={y(tick)} stroke="var(--grid)" strokeDasharray="1 4" />
            <text x={left - 8} y={y(tick) + 4} textAnchor="end" fontSize="11" fill="var(--ink-muted)">
              {tick}
            </text>
          </g>
        ))}
        {yearTicks.map((tick) => (
          <text key={tick} x={x(tick)} y={bottom + 18} textAnchor="middle" fontSize="11" fill="var(--ink-muted)">
            {tick}
          </text>
        ))}
        <line x1={left} y1={bottom} x2={right} y2={bottom} stroke="var(--line)" />
        <path d={points.map((p, i) => `${i === 0 ? 'M' : 'L'}${x(p.year).toFixed(1)} ${y(p.value).toFixed(1)}`).join('')} fill="none" stroke="#0b0b0b" strokeWidth="2" />
        <line x1={x(last.year)} y1={y(last.value)} x2={x(extended.year)} y2={y(extended.value)} stroke="#0b0b0b" strokeWidth="1.5" strokeDasharray="5 4" />
        {points.map((p) => (
          <g key={p.label}>
            <rect x={x(p.year) - 4} y={y(p.value) - 4} width="8" height="8" fill="#0b0b0b" stroke="#fff" strokeWidth="1.5" />
            <title>{`${p.label}: ${p.value}`}</title>
          </g>
        ))}
        {(['low', 'middle', 'high'] as const).map((key) =>
          crossing[key] <= end ? <circle key={key} cx={x(crossing[key])} cy={y(threshold[key])} r="4" fill="#6250d6" stroke="#fff" strokeWidth="1.5" /> : null,
        )}
      </svg>
      <p className="mt-1 text-sm" style={{ color: 'var(--ink-2)' }}>
        The best model gained about {Math.round(slope)} points a year from {first.label} to {last.label}. If that continues, it enters the range in{' '}
        <strong>{yearText(crossing.low)}</strong>, reaches the middle in <strong>{yearText(crossing.middle)}</strong> and the top in{' '}
        <strong>{yearText(crossing.high)}</strong>. Whether the trend continues, and where the line really is, are exactly what is uncertain.
      </p>
    </div>
  )
}
