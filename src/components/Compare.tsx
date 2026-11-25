import { useState, useSyncExternalStore } from 'react'
import type { ScenarioKey, SixOutcomes } from '../model/types.ts'
import { EntityPicker } from './EntityPicker.tsx'
import { SixOutcomeBar, SixOutcomeLegend } from './SixOutcomeBar.tsx'
import { VerticalBars, type Bar } from './VerticalBars.tsx'

export type CompareRow = {
  id: string
  name: string
  short: string
  mark: string
  kind: 'world' | 'region' | 'country'
  href: string
  outcomes?: Record<ScenarioKey, SixOutcomes>
}

const scenarios: { key: ScenarioKey; label: string }[] = [
  { key: 'weighted', label: 'Our forecast' },
  { key: 'si', label: 'If superintelligence arrives' },
  { key: 'noSi', label: 'If it never does' },
]

const urlListeners = new Set<() => void>()

function subscribeToUrl(listener: () => void): () => void {
  urlListeners.add(listener)
  window.addEventListener('popstate', listener)
  return () => {
    urlListeners.delete(listener)
    window.removeEventListener('popstate', listener)
  }
}

/** Places side by side under one scenario switch and one picker; the selection lives in the URL (?show=FRA,SWE). */
export function Compare({ rows, defaults }: { rows: CompareRow[]; defaults: string[] }) {
  const [scenario, setScenario] = useState<ScenarioKey>('weighted')
  // The selection is read from the URL as an external store: the server renders the defaults,
  // the browser then shows whatever ?show= says, and changes write back to the URL.
  const search = useSyncExternalStore(subscribeToUrl, () => window.location.search, () => '')
  const show = new URLSearchParams(search).get('show')
  const selected = show === null ? defaults : show.split(',').filter((id) => rows.some((row) => row.id === id && row.outcomes))

  const update = (next: string[]) => {
    const url = new URL(window.location.href)
    if (next.join(',') === defaults.join(',')) url.searchParams.delete('show')
    else url.searchParams.set('show', next.join(','))
    window.history.replaceState(null, '', url)
    urlListeners.forEach((listener) => listener())
  }

  const chosen = rows.filter((row) => selected.includes(row.id) && row.outcomes !== undefined)
  const outcomesOf = (row: CompareRow) => (row.outcomes as Record<ScenarioKey, SixOutcomes>)[scenario]
  const bars = (pick: (o: SixOutcomes) => number): Bar[] =>
    chosen
      .map((row) => ({ key: row.id, label: row.short, title: row.name, mark: row.mark, href: row.href, value: pick(outcomesOf(row)) }))
      .sort((a, b) => b.value - a.value)
  const down = bars((o) => o.collapse + o.doom)
  const up = bars((o) => o.abundance)
  const max = Math.max(0.05, ...down.map((b) => b.value), ...up.map((b) => b.value))
  const stacked = [...chosen].sort((a, b) => outcomesOf(b).collapse + outcomesOf(b).doom - (outcomesOf(a).collapse + outcomesOf(a).doom))

  const card = (title: string, color: string, subtitle: string, list: Bar[]) => (
    <div className="card flex flex-col gap-2 p-5">
      <h3 className="card-title">
        <span className="square" style={{ background: color }} />
        {title}
      </h3>
      <p className="text-xs" style={{ color: 'var(--ink-muted)' }}>
        {subtitle}
      </p>
      <div className="mt-3">
        {list.length > 0 ? (
          <VerticalBars bars={list} color={color} max={max} />
        ) : (
          <p className="py-16 text-center text-sm" style={{ color: 'var(--ink-muted)' }}>
            Add a place to compare.
          </p>
        )}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="pill-group" role="group" aria-label="Scenario">
          {scenarios.map((s) => (
            <button key={s.key} type="button" className="pill" aria-pressed={scenario === s.key} onClick={() => setScenario(s.key)}>
              {s.label}
            </button>
          ))}
        </div>
        <EntityPicker
          rows={rows.map((row) => ({ id: row.id, name: row.name, mark: row.mark, kind: row.kind, judged: row.outcomes !== undefined }))}
          selected={selected}
          onChange={update}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {card('Collapse or doom by 2100', '#e34948', 'At least twice as poor as today, an essential lost, or global doom · Lower is better', down)}
        {card('Abundance in 2100', '#1f5fb0', 'Nine in ten people live five times better than the rich world today · Higher is better', up)}
      </div>
      <div className="card flex flex-col gap-3 p-5">
        <h3 className="card-title">
          <span className="square" style={{ background: '#c9c8c2' }} />
          All six outcomes in 2100
        </h3>
        <p className="text-xs" style={{ color: 'var(--ink-muted)' }}>
          Each place against its own living standard today. Doom is global, so it is the same everywhere.
        </p>
        <SixOutcomeLegend />
        {stacked.length > 0 ? (
          <ul className="flex flex-col gap-1.5">
            {stacked.map((row) => (
              <li key={row.id} className="grid grid-cols-[minmax(0,9rem)_minmax(0,1fr)] items-center gap-3 text-sm">
                <a href={row.href} className="flex min-w-0 items-center gap-1.5 hover:underline">
                  <span className="flex-none">{row.mark}</span>
                  <span className="truncate">{row.name}</span>
                </a>
                <SixOutcomeBar outcomes={outcomesOf(row)} name={row.name} height={22} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-6 text-center text-sm" style={{ color: 'var(--ink-muted)' }}>
            Add a place to compare.
          </p>
        )}
      </div>
    </div>
  )
}
