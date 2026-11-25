import { formatPercent } from '../model/forecast.ts'
import type { HeadlineRecord } from '../model/types.ts'

type Series = { key: 'doom' | 'doomGivenSi' | 'abundance' | 'si'; label: string; color: string; dash?: string; marker: 'square' | 'circle' | 'diamond' | 'triangle' }

const historySeries: Series[] = [
  { key: 'doom', label: 'P(doom)', color: '#0b0b0b', marker: 'square' },
  { key: 'doomGivenSi', label: 'P(doom | SI)', color: '#6250d6', marker: 'circle' },
  { key: 'abundance', label: 'P(abundance)', color: '#2a78d6', dash: '5 4', marker: 'diamond' },
  { key: 'si', label: 'P(SI by 2100)', color: '#8a8985', dash: '2 3', marker: 'triangle' },
]

const label = (date: string): string => new Date(`${date}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' })

function Marker({ shape, x, y, color }: { shape: Series['marker']; x: number; y: number; color: string }) {
  if (shape === 'circle') return <circle cx={x} cy={y} r={5.5} fill={color} stroke="#fff" strokeWidth={1.5} />
  if (shape === 'diamond') return <path d={`M${x} ${y - 7}L${x + 7} ${y}L${x} ${y + 7}L${x - 7} ${y}Z`} fill={color} stroke="#fff" strokeWidth={1.5} />
  if (shape === 'triangle') return <path d={`M${x} ${y - 6.5}L${x + 7} ${y + 5}L${x - 7} ${y + 5}Z`} fill={color} stroke="#fff" strokeWidth={1.5} />
  return <rect x={x - 5.5} y={y - 5.5} width={11} height={11} fill={color} stroke="#fff" strokeWidth={1.5} />
}

/**
 * The published headline figures over time. Each point is a re-judging; a dashed vertical line marks
 * a change of definitions, and lines are not drawn across it because the values are not comparable.
 */
export function HistoryChart({ records }: { records: HeadlineRecord[] }) {
  const width = 720
  const height = 280
  const left = 48
  const right = width - 70
  const top = 14
  const bottom = height - 30
  // One step per re-judging: several can fall on the same day, and the gaps between them carry no meaning.
  const slots = Math.max(records.length, 4)
  const step = (right - left) / slots
  const xAt = (index: number) => left + step * (index + 0.5)
  const indexOf = (record: HeadlineRecord) => records.indexOf(record)
  // Square-root scale: small probabilities such as doom stay readable next to large ones such as P(SI).
  const y = (value: number) => bottom - Math.sqrt(value) * (bottom - top)
  const ticks = [0, 0.01, 0.05, 0.1, 0.25, 0.5, 1]
  const breaks = records.flatMap((record, index) => (index > 0 && record.definitions !== records[index - 1].definitions ? [{ record: record, at: xAt(index) - step / 2 }] : []))
  const segments = (key: Series['key']) => {
    const runs: HeadlineRecord[][] = []
    for (const [index, record] of records.entries()) {
      if (index === 0 || record.definitions !== records[index - 1].definitions) runs.push([record])
      else runs[runs.length - 1].push(record)
    }
    return runs.filter((run) => run.length > 1).map((run) => run.map((record, i) => `${i === 0 ? 'M' : 'L'}${xAt(indexOf(record)).toFixed(1)} ${y(record[key]).toFixed(1)}`).join(''))
  }
  // The latest values, written beside the last points and nudged apart so they never overlap.
  const latest = records[records.length - 1]
  const labelsForLatest = [...historySeries]
    .map((series) => ({ key: series.key, color: series.color, text: formatPercent({ value: latest[series.key] }), y: y(latest[series.key]) }))
    .sort((a, b) => b.y - a.y)
    .reduce<{ key: string; color: string; text: string; y: number }[]>((placed, label) => {
      const previousY = placed.length > 0 ? placed[placed.length - 1].y : Infinity
      return [...placed, { ...label, y: Math.min(label.y, previousY - 15) }]
    }, [])
  return (
    <div>
      <div className="mb-2 flex flex-wrap gap-x-5 gap-y-1 text-sm">
        {historySeries.map((series) => (
          <span key={series.key} className="inline-flex items-center gap-1.5">
            <svg width="18" height="10" aria-hidden="true">
              <line x1="0" y1="5" x2="18" y2="5" stroke={series.color} strokeWidth="2" strokeDasharray={series.dash} />
              <Marker shape={series.marker} x={9} y={5} color={series.color} />
            </svg>
            {series.label}
          </span>
        ))}
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" role="img" aria-label="Published headline probabilities over time: doom, doom given superintelligence, abundance and superintelligence by 2100.">
        {ticks.map((tick) => (
          <g key={tick}>
            <line x1={left} y1={y(tick)} x2={right} y2={y(tick)} stroke="var(--grid)" strokeDasharray={tick === 0 ? undefined : '1 4'} />
            <text x={left - 8} y={y(tick) + 4} textAnchor="end" fontSize="13" fill="var(--ink-muted)">
              {Math.round(tick * 100)}%
            </text>
          </g>
        ))}
        {breaks.map((item) => (
          <g key={item.record.version}>
            <line x1={item.at} y1={top} x2={item.at} y2={bottom} stroke="var(--ink-muted)" strokeDasharray="4 4" />
            <text x={item.at + 4} y={top + 12} fontSize="12" fill="var(--ink-muted)">
              new definitions
            </text>
          </g>
        ))}
        {historySeries.map((series) => (
          <g key={series.key}>
            {segments(series.key).map((d) => (
              <path key={d} d={d} fill="none" stroke={series.color} strokeWidth="2" strokeDasharray={series.dash} strokeLinejoin="round" />
            ))}
            {records.map((record) => (
              <g key={record.version}>
                <Marker shape={series.marker} x={xAt(indexOf(record))} y={y(record[series.key])} color={series.color} />
                <title>{`${series.label}, ${record.version} (${label(record.date)}): ${formatPercent({ value: record[series.key] })}`}</title>
              </g>
            ))}
          </g>
        ))}
        {labelsForLatest.map((label) => (
          <text key={label.key} x={xAt(records.length - 1) + 12} y={label.y + 4} fontSize="13" fontWeight="600" fill={label.color}>
            {label.text}
          </text>
        ))}
        {records.map((record, index) => (
          <text key={record.version} x={xAt(index)} y={bottom + 20} textAnchor="middle" fontSize="13" fill="var(--ink-muted)">
            {record.version} · {label(record.date)}
          </text>
        ))}
      </svg>
    </div>
  )
}
