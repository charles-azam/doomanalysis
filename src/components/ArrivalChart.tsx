import type { ArrivalSeries } from '../data/si-arrival.ts'

// Categorical slots in their validated order; color follows the source, never its rank.
const colors = ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4', '#008300', '#6250d6', '#e34948']

/**
 * Cumulative chance that superintelligence has arrived by each year, one line per outside source,
 * with this site's judged values drawn as black diamonds for comparison.
 */
export function ArrivalChart({ series, judged }: { series: ArrivalSeries[]; judged: { year: number; probability: number }[] }) {
  const width = 760
  const height = 340
  const pad = { left: 44, right: 20, top: 16, bottom: 34 }
  const x = (year: number) => pad.left + ((year - 2025) / (2100 - 2025)) * (width - pad.left - pad.right)
  const y = (p: number) => height - pad.bottom - p * (height - pad.top - pad.bottom)
  const years = [2025, 2040, 2055, 2070, 2085, 2100]
  return (
    <figure className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs" style={{ color: 'var(--ink-2)' }}>
        {series.map((s, i) => (
          <a key={s.id} href={s.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 hover:underline">
            <span className="inline-block h-[2px] w-4 rounded" style={{ background: colors[i % colors.length] }} />
            {s.label}
          </a>
        ))}
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rotate-45" style={{ background: 'var(--ink)' }} />
          Doom Analysis judges
        </span>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label="Chance that superintelligence has arrived, by year and source">
        {[0, 0.25, 0.5, 0.75, 1].map((p) => (
          <g key={p}>
            <line x1={pad.left} x2={width - pad.right} y1={y(p)} y2={y(p)} stroke="var(--grid)" />
            <text x={pad.left - 8} y={y(p) + 4} textAnchor="end" fontSize={11} fill="var(--ink-muted)">
              {Math.round(p * 100)}%
            </text>
          </g>
        ))}
        {years.map((year) => (
          <text key={year} x={x(year)} y={height - 10} textAnchor="middle" fontSize={11} fill="var(--ink-muted)">
            {year}
          </text>
        ))}
        {series.map((s, i) => {
          const color = colors[i % colors.length]
          const points = s.points.filter((p) => p.year >= 2025)
          return (
            <g key={s.id}>
              <polyline
                points={points.map((p) => `${x(p.year)},${y(p.probability)}`).join(' ')}
                fill="none"
                stroke={color}
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {points.map((p) => (
                <circle key={p.year} cx={x(p.year)} cy={y(p.probability)} r={4} fill={color} stroke="var(--surface)" strokeWidth={2}>
                  <title>{`${s.label}: ${Math.round(p.probability * 100)}% by ${p.year}`}</title>
                </circle>
              ))}
            </g>
          )
        })}
        {judged.map((p) => (
          <rect
            key={p.year}
            x={x(p.year) - 5}
            y={y(p.probability) - 5}
            width={10}
            height={10}
            transform={`rotate(45 ${x(p.year)} ${y(p.probability)})`}
            fill="var(--ink)"
            stroke="var(--surface)"
            strokeWidth={2}
          >
            <title>{`Doom Analysis judges: ${Math.round(p.probability * 100)}% by ${p.year}`}</title>
          </rect>
        ))}
      </svg>
      <figcaption className="text-xs" style={{ color: 'var(--ink-muted)' }}>
        Each source defines the milestone differently, from “weak AGI” to superintelligence; the Metaculus line combines two questions and
        assumes they are independent. Click a source to read it.
      </figcaption>
    </figure>
  )
}
