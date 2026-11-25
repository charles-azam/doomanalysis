import { useEffect, useState } from 'react'
import { causeDefinitions } from '../data/definitions.ts'
import { causeColors } from '../data/palette.ts'
import { formatPercent, rootCauses, type DangerKey } from '../model/forecast.ts'
import type { RootCause, ScenarioKey } from '../model/types.ts'

/** For each scenario and level: the world's chance, and each cause's absolute chance. */
export type CauseTable = Record<ScenarioKey, Record<DangerKey, { total: number; causes: Record<RootCause, number> }>>

const levels: { key: DangerKey; label: string; long: string }[] = [
  { key: 'atLeast3', label: 'Level 3+', long: 'a catastrophe that kills or ruins over 10% of humanity' },
  { key: 'atLeast4', label: 'Level 4+', long: 'a catastrophe that kills or ruins over half of humanity' },
  { key: 'doom', label: 'Doom', long: 'doom' },
]

const scenarios: { key: ScenarioKey; label: string }[] = [
  { key: 'weighted', label: 'Our forecast' },
  { key: 'si', label: 'With superintelligence' },
  { key: 'noSi', label: 'Without' },
]

/** How bad, and why: the chance of each level by 2100, split by root cause into shares that add up to 100%. */
export function CauseChart({ table }: { table: CauseTable }) {
  const [level, setLevel] = useState<DangerKey>('atLeast3')
  const [scenario, setScenario] = useState<ScenarioKey>('weighted')
  // Clicking level 3, 4 or 5 in a danger-scale legend switches this chart to that level.
  useEffect(() => {
    const onLevel = (event: Event) => {
      const detail = (event as CustomEvent<{ scale: string; level: number }>).detail
      if (detail.scale !== 'danger') return
      const key: DangerKey | undefined = detail.level === 3 ? 'atLeast3' : detail.level === 4 ? 'atLeast4' : detail.level === 5 ? 'doom' : undefined
      if (key) setLevel(key)
    }
    window.addEventListener('doom:level', onLevel)
    return () => window.removeEventListener('doom:level', onLevel)
  }, [])
  const current = table[scenario][level]
  const ordered = [...rootCauses].sort((a, b) => current.causes[b] - current.causes[a])
  const largest = Math.max(...ordered.map((cause) => current.causes[cause]), 1e-9)
  const share = (cause: RootCause) => (current.total === 0 ? 0 : current.causes[cause] / current.total)
  const chosen = levels.find((l) => l.key === level) ?? levels[0]

  return (
    <div className="card flex flex-col gap-4 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="pill-group" role="group" aria-label="Danger level">
          {levels.map((l) => (
            <button key={l.key} type="button" className="pill" aria-pressed={level === l.key} onClick={() => setLevel(l.key)}>
              {l.label}
            </button>
          ))}
        </div>
        <div className="pill-group" role="group" aria-label="Scenario">
          {scenarios.map((s) => (
            <button key={s.key} type="button" className="pill" aria-pressed={scenario === s.key} onClick={() => setScenario(s.key)}>
              {s.label}
            </button>
          ))}
        </div>
      </div>
      <p className="text-sm" style={{ color: 'var(--ink-2)' }}>
        <span className="text-3xl font-semibold tabular" style={{ color: 'var(--ink)' }}>
          {formatPercent({ value: current.total })}
        </span>{' '}
        chance of {chosen.long} by 2100
      </p>
      <div className="flex h-9 w-full gap-[2px]" role="img" aria-label={ordered.map((cause) => `${causeDefinitions[cause].name} ${formatPercent({ value: share(cause) })}`).join(', ')}>
        {ordered.map((cause) =>
          share(cause) <= 0.0005 ? null : (
            <a
              key={cause}
              href={`/causes/${cause}/`}
              data-tip={`${causeDefinitions[cause].name}: ${formatPercent({ value: share(cause) })} of the total`}
              className="flex items-center justify-center overflow-hidden rounded-[3px] text-xs font-semibold text-white tabular hover:opacity-85"
              style={{ flex: `${share(cause)} 0 0`, background: causeColors[cause], minWidth: 2 }}
            >
              {share(cause) >= 0.07 ? formatPercent({ value: share(cause) }) : ''}
            </a>
          ),
        )}
      </div>
      <div className="grid grid-cols-[minmax(0,13rem)_minmax(0,1fr)_4.5rem_3.5rem] gap-3 text-[11px]" style={{ color: 'var(--ink-muted)' }}>
        <span>Root cause</span>
        <span />
        <span className="text-right">By 2100</span>
        <span className="text-right">Share</span>
      </div>
      <ul className="-mt-2 flex flex-col gap-1.5">
        {ordered.map((cause) => (
          <li key={cause}>
            <a href={`/causes/${cause}/`} className="grid grid-cols-[minmax(0,13rem)_minmax(0,1fr)_4.5rem_3.5rem] items-center gap-3 text-sm hover:underline">
              <span className="flex min-w-0 items-center gap-2">
                <span className="square" style={{ background: causeColors[cause] }} />
                <span className="truncate">{causeDefinitions[cause].name}</span>
              </span>
              <span className="h-3 rounded-sm" style={{ width: `${(current.causes[cause] / largest) * 100}%`, background: causeColors[cause], minWidth: 2 }} />
              <span className="text-right font-semibold tabular">{formatPercent({ value: current.causes[cause] })}</span>
              <span className="text-right tabular" style={{ color: 'var(--ink-muted)' }}>
                {formatPercent({ value: share(cause) })}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
