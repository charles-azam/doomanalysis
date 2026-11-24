import { formatPercent } from '../model/judgment.ts'

export type DumbbellRow = { name: string; flag: string; withSi: number; withoutSi: number }

/**
 * One row per country: the probability without SI (orange) and with SI (violet) on a shared 0–100% axis.
 * The connecting line is what superintelligence changes.
 */
export function Dumbbell({ rows, title, max }: { rows: DumbbellRow[]; title: string; max: number }) {
  const width = 560
  const labelWidth = 130
  const right = 16
  const rowHeight = 30
  const top = 26
  const height = top + rows.length * rowHeight + 8
  const x = (p: number) => labelWidth + (p / max) * (width - labelWidth - right)
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => t * max)
  return (
    <figure className="flex flex-col gap-2">
      <figcaption className="text-sm font-semibold">{title}</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label={title}>
        {ticks.map((tick) => (
          <g key={tick}>
            <line x1={x(tick)} x2={x(tick)} y1={top - 6} y2={height - 4} stroke="var(--grid)" strokeWidth={1} />
            <text x={x(tick)} y={top - 12} textAnchor="middle" fontSize={11} fill="var(--ink-muted)" className="tabular">
              {Math.round(tick * 100)}%
            </text>
          </g>
        ))}
        {rows.map((row, index) => {
          const y = top + index * rowHeight + rowHeight / 2
          const delta = row.withSi - row.withoutSi
          return (
            <g key={row.name}>
              <title>{`${row.name}: ${formatPercent({ value: row.withoutSi })} without SI, ${formatPercent({ value: row.withSi })} with SI (${delta >= 0 ? '+' : '−'}${Math.abs(Math.round(delta * 100))} points)`}</title>
              <rect x={0} y={y - rowHeight / 2} width={width} height={rowHeight} fill="transparent" />
              <text x={0} y={y + 4} fontSize={13} fill="var(--ink)">
                {row.flag} {row.name}
              </text>
              <line x1={x(row.withoutSi)} x2={x(row.withSi)} y1={y} y2={y} stroke="var(--line)" strokeWidth={2} strokeLinecap="round" />
              <circle cx={x(row.withoutSi)} cy={y} r={5} fill="var(--without-si)" stroke="var(--surface)" strokeWidth={2} />
              <circle cx={x(row.withSi)} cy={y} r={5} fill="var(--with-si)" stroke="var(--surface)" strokeWidth={2} />
            </g>
          )
        })}
      </svg>
    </figure>
  )
}

export function SiLegend() {
  return (
    <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--ink-2)' }}>
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-block h-3 w-3 rounded-full" style={{ background: 'var(--without-si)' }} /> Without superintelligence
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-block h-3 w-3 rounded-full" style={{ background: 'var(--with-si)' }} /> With superintelligence
      </span>
    </div>
  )
}
