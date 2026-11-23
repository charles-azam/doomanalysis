/**
 * A 0–100 meter. Pressure fills red on a red track, strength fills blue on a blue track,
 * and an optional tick marks the published or stated limit.
 */
export function Meter({
  score,
  kind,
  limit,
  limitLabel,
}: {
  score: number
  kind: 'pressure' | 'strength'
  limit?: number
  limitLabel?: string
}) {
  const fill = kind === 'pressure' ? 'var(--pressure)' : 'var(--strength)'
  const track = kind === 'pressure' ? 'var(--pressure-track)' : 'var(--strength-track)'
  return (
    <div className="relative h-2 w-full rounded-full" style={{ background: track }} data-tip={`${Math.round(score)}/100`}>
      <div className="h-2 rounded-full" style={{ width: `${Math.max(score, 1.5)}%`, background: fill }} />
      {limit !== undefined && (
        <div
          className="absolute -top-1 h-4 w-[2px] rounded"
          style={{ left: `calc(${limit}% - 1px)`, background: 'var(--limit)' }}
          title={limitLabel}
          aria-label={limitLabel}
        />
      )}
    </div>
  )
}
