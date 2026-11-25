import type { FactorDisplay, Projection } from '../model/types.ts'
import { positionOn } from '../model/track.ts'

type Marker = { value: number; year: number }

/**
 * The factor drawn in its own units. Shaded zones start at each threshold and run to the bad end:
 * amber past a limit, red past a danger line. A filled dot is today; a ring with a band is the projection.
 */
export function ThresholdTrack({
  display,
  today,
  projection,
  format,
}: {
  display: FactorDisplay
  today: Marker
  projection?: Projection
  format: (value: number) => string
}) {
  const pct = (value: number) => positionOn({ display: display, value: value }) * 100
  const badRight = display.better === 'lower'
  const sorted = [...display.thresholds].sort((a, b) => pct(a.value) - pct(b.value))
  // Alternate label rows when two thresholds sit close together.
  const rows = sorted.map((t, i) => (i > 0 && Math.abs(pct(t.value) - pct(sorted[i - 1].value)) < 22 ? 1 : 0))
  for (let i = 1; i < rows.length; i++) if (rows[i] === 1 && rows[i - 1] === 1) rows[i] = 0
  const labelRows = Math.max(1, ...rows.map((r) => r + 1))
  const top = display.thresholds.length > 0 ? labelRows * 16 + 4 : 4
  const todayPct = pct(today.value)
  const projectionPct = projection ? pct(projection.value) : undefined
  const align = (p: number): string => (p < 12 ? 'translateX(-4px)' : p > 88 ? 'translateX(calc(-100% + 4px))' : 'translateX(-50%)')
  const markersClose = projectionPct !== undefined && Math.abs(projectionPct - todayPct) < 26
  return (
    <div className="relative w-full text-[11px] leading-none" style={{ height: top + 44 }}>
      {sorted.map((t, i) => (
        <div
          key={`label-${t.label}`}
          className="absolute whitespace-nowrap"
          style={{
            left: `${pct(t.value)}%`,
            top: rows[i] * 16,
            transform: align(pct(t.value)),
            color: t.severity === 'danger' ? 'var(--tick-danger)' : t.severity === 'goal' ? 'var(--accent)' : 'var(--tick-limit)',
          }}
        >
          {t.label}
        </div>
      ))}
      <div className="absolute left-0 right-0 h-2 overflow-hidden rounded-full" style={{ top: top + 2, background: 'var(--track)' }}>
        {sorted.filter((t) => t.severity !== 'goal').map((t) => {
          const p = pct(t.value)
          return (
            <div
              key={`zone-${t.label}`}
              className="absolute top-0 h-2"
              style={{
                left: badRight ? `${p}%` : 0,
                right: badRight ? 0 : `${100 - p}%`,
                background: t.severity === 'danger' ? 'var(--zone-danger)' : 'var(--zone-limit)',
                mixBlendMode: 'multiply',
              }}
            />
          )
        })}
        {projection?.low !== undefined && projection.high !== undefined && (
          <div
            className="absolute top-[3px] h-[2px]"
            style={{ left: `${pct(projection.low)}%`, width: `${pct(projection.high) - pct(projection.low)}%`, background: 'var(--ink)' }}
          />
        )}
      </div>
      {sorted.map((t) => (
        <div
          key={`tick-${t.label}`}
          className="absolute w-[2px] rounded"
          style={{
            left: `calc(${pct(t.value)}% - 1px)`,
            top: top - 3,
            height: 18,
            background: t.severity === 'danger' ? 'var(--tick-danger)' : t.severity === 'goal' ? 'var(--accent)' : 'var(--tick-limit)',
          }}
          data-tip={`${t.label}: ${format(t.value)}`}
        />
      ))}
      <div
        className="absolute h-3.5 w-3.5 rounded-full"
        style={{ left: `calc(${todayPct}% - 7px)`, top: top - 1, background: 'var(--ink)', border: '2px solid var(--surface)' }}
        data-tip={`${today.year}: ${format(today.value)}`}
      />
      {projection && projectionPct !== undefined && (
        <div
          className="absolute h-3.5 w-3.5 rounded-full"
          style={{ left: `calc(${projectionPct}% - 7px)`, top: top - 1, background: 'var(--surface)', border: '2.5px solid var(--ink)' }}
          data-tip={`${projection.year} (${projection.scenario}): ${format(projection.value)}`}
        />
      )}
      <div
        className="absolute whitespace-nowrap font-medium"
        style={{ left: `${todayPct}%`, top: top + 18, transform: markersClose && projectionPct !== undefined ? (projectionPct >= todayPct ? 'translateX(calc(-100% - 3px))' : 'translateX(3px)') : align(todayPct) }}
      >
        {today.year}
      </div>
      {projection && projectionPct !== undefined && (
        <div
          className="absolute whitespace-nowrap font-medium"
          style={{ left: `${projectionPct}%`, top: top + 18, transform: markersClose ? (projectionPct >= todayPct ? 'translateX(3px)' : 'translateX(calc(-100% - 3px))') : align(projectionPct) }}
        >
          {projection.year}
        </div>
      )}
      <div className="absolute left-0 muted" style={{ top: top + 32 }}>
        {format(display.min)}
      </div>
      <div className="absolute right-0 muted" style={{ top: top + 32 }}>
        {format(display.max)}
      </div>
    </div>
  )
}
