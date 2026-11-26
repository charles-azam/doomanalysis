import { useEffect, useState } from 'react'
import type { GoodLevel, GoodRow } from '../data/outlook.ts'
import { formatPercent } from '../model/forecast.ts'
import type { ScenarioKey } from '../model/types.ts'

const color = '#2a78d6'

const allLevels: { level: GoodLevel; label: string; long: string }[] = [
  { level: 2, label: 'Level 2+', long: 'lifts over 1% of humanity up at least one outcome' },
  { level: 3, label: 'Level 3+', long: 'lifts over 10% of humanity up at least one outcome' },
  { level: 4, label: 'Level 4+', long: 'lifts over half of humanity up at least one outcome' },
  { level: 5, label: 'Level 5', long: 'makes an essential nearly free for everyone' },
]

const scenarios: { key: ScenarioKey; label: string }[] = [
  { key: 'weighted', label: 'Our forecast' },
  { key: 'si', label: 'With superintelligence' },
  { key: 'noSi', label: 'Without' },
]

const points = (change: number): string => {
  const p = change * 100
  if (Math.abs(p) < 0.05) return '0'
  const shown = Math.abs(p) < 10 ? Math.abs(p).toFixed(1) : String(Math.round(Math.abs(p)))
  return `${p > 0 ? '+' : '−'}${shown}`
}

/** How good, and why: the chance each technology reaches a potential level by 2100, and what superintelligence adds. */
export function GoodChart({ rows }: { rows: GoodRow[] }) {
  const levels = allLevels.filter((l) => rows.some((row) => Math.max(row.chances.si[l.level], row.chances.noSi[l.level]) >= 0.0005))
  const [level, setLevel] = useState<GoodLevel>(3)
  const [scenario, setScenario] = useState<ScenarioKey>('weighted')
  // Clicking a level in the potential legend switches this chart to that level.
  useEffect(() => {
    const onLevel = (event: Event) => {
      const detail = (event as CustomEvent<{ scale: string; level: number }>).detail
      if (detail.scale !== 'potential') return
      const chosen = allLevels.find((l) => l.level === detail.level)
      if (chosen && rows.some((row) => Math.max(row.chances.si[chosen.level], row.chances.noSi[chosen.level]) >= 0.0005)) setLevel(chosen.level)
    }
    window.addEventListener('doom:level', onLevel)
    return () => window.removeEventListener('doom:level', onLevel)
  }, [rows])
  const chosen = allLevels.find((l) => l.level === level) ?? allLevels[1]
  const ordered = [...rows].sort((a, b) => b.chances[scenario][level] - a.chances[scenario][level])
  const largest = Math.max(...ordered.map((row) => row.chances[scenario][level]), 1e-9)
  const grid = 'grid grid-cols-[minmax(0,13rem)_minmax(0,1fr)_4.5rem_4.5rem] items-center gap-3'

  return (
    <div className="card flex flex-col gap-4 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="pill-group" role="group" aria-label="Potential level">
          {levels.map((l) => (
            <button key={l.level} type="button" className="pill" aria-pressed={level === l.level} onClick={() => setLevel(l.level)}>
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
        Chance each technology alone {chosen.long} by 2100
      </p>
      <div className={`${grid} text-[11px]`} style={{ color: 'var(--ink-muted)' }}>
        <span>Technology</span>
        <span />
        <span className="text-right">By 2100</span>
        <span className="text-right">SI adds</span>
      </div>
      <ul className="-mt-2 flex flex-col gap-1.5">
        {ordered.map((row) => {
          const change = row.chances.si[level] - row.chances.noSi[level]
          return (
            <li key={row.id}>
              <a href={row.href} className={`${grid} text-sm hover:underline`} title={`With superintelligence: ${row.note}`}>
                <span className="flex min-w-0 items-center gap-2">
                  <span className="square" style={{ background: color }} />
                  <span className="truncate">{row.name}</span>
                </span>
                <span className="h-3 rounded-sm" style={{ width: `${(row.chances[scenario][level] / largest) * 100}%`, background: color, minWidth: 2 }} />
                <span className="text-right font-semibold tabular">{formatPercent({ value: row.chances[scenario][level] })}</span>
                <span className="text-right tabular" style={{ color: Math.abs(change) < 0.0005 ? 'var(--ink-muted)' : change > 0 ? '#008300' : '#c62828' }}>
                  {points(change)}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
