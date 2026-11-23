export type ScatterPoint = { name: string; flag: string; slug: string; x: number; y: number }

/**
 * Pressure index (x) against resilience index (y), both 0–100.
 * Top-left is the safe corner, bottom-right the dangerous one.
 */
export function Scatter({ points }: { points: ScatterPoint[] }) {
  const width = 560
  const height = 380
  const pad = { left: 44, right: 16, top: 16, bottom: 40 }
  const x = (v: number) => pad.left + (v / 100) * (width - pad.left - pad.right)
  const y = (v: number) => height - pad.bottom - (v / 100) * (height - pad.top - pad.bottom)
  const ticks = [0, 25, 50, 75, 100]
  // Nudge labels that would collide: walk points top to bottom and keep 14px between neighbours.
  const labelY = new Map<string, number>()
  const placed: { x: number; y: number }[] = []
  for (const point of [...points].sort((a, b) => y(a.y) - y(b.y))) {
    let ly = y(point.y) + 4
    for (const other of placed) {
      if (Math.abs(other.x - x(point.x)) < 110 && Math.abs(other.y - ly) < 14) ly = other.y + 14
    }
    placed.push({ x: x(point.x), y: ly })
    labelY.set(point.slug, ly)
  }
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label="Pressure index against resilience index by country">
      {ticks.map((tick) => (
        <g key={tick}>
          <line x1={x(tick)} x2={x(tick)} y1={pad.top} y2={height - pad.bottom} stroke="var(--grid)" />
          <line x1={pad.left} x2={width - pad.right} y1={y(tick)} y2={y(tick)} stroke="var(--grid)" />
          <text x={x(tick)} y={height - pad.bottom + 16} textAnchor="middle" fontSize={11} fill="var(--ink-muted)">
            {tick}
          </text>
          <text x={pad.left - 8} y={y(tick) + 4} textAnchor="end" fontSize={11} fill="var(--ink-muted)">
            {tick}
          </text>
        </g>
      ))}
      <text x={(pad.left + width - pad.right) / 2} y={height - 6} textAnchor="middle" fontSize={12} fill="var(--ink-2)">
        Pressure index → more pressure toward collapse
      </text>
      <text x={14} y={(pad.top + height - pad.bottom) / 2} textAnchor="middle" fontSize={12} fill="var(--ink-2)" transform={`rotate(-90 14 ${(pad.top + height - pad.bottom) / 2})`}>
        Resilience index → more capacity to push back
      </text>
      <text x={x(3)} y={y(96)} fontSize={11} fill="var(--ink-muted)">
        Safer corner
      </text>
      <text x={x(97)} y={y(4)} fontSize={11} fill="var(--ink-muted)" textAnchor="end">
        Danger corner
      </text>
      {points.map((point) => (
        <a key={point.slug} href={`/countries/${point.slug}/`}>
          <title>{`${point.name}: pressure ${Math.round(point.x)}, resilience ${Math.round(point.y)}`}</title>
          <circle cx={x(point.x)} cy={y(point.y)} r={12} fill="transparent" />
          <circle cx={x(point.x)} cy={y(point.y)} r={5} fill="var(--ink)" stroke="var(--surface)" strokeWidth={2} />
          <text x={x(point.x) + 9} y={labelY.get(point.slug)} fontSize={12} fill="var(--ink)">
            {point.flag} {point.name}
          </text>
        </a>
      ))}
    </svg>
  )
}
