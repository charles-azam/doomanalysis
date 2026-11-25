import { useState, useSyncExternalStore } from 'react'
import type { ScenarioKey, SixOutcomes } from '../model/types.ts'
import { ChartCard } from './ChartCard.tsx'
import { EntityPicker } from './EntityPicker.tsx'
import { VerticalBars, type Bar } from './VerticalBars.tsx'

export type CompareRow = {
  id: string
  name: string
  short: string
  mark: string
  color: string
  kind: 'world' | 'region' | 'country'
  href: string
  outcomes?: Record<ScenarioKey, SixOutcomes>
}

const scenarios: { key: ScenarioKey; label: string }[] = [
  { key: 'weighted', label: 'Our forecast' },
  { key: 'si', label: 'With superintelligence' },
  { key: 'noSi', label: 'Without' },
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
  const bars = (pick: (o: SixOutcomes) => number): Bar[] =>
    chosen
      .map((row) => ({ key: row.id, label: row.short, title: row.name, mark: row.mark, color: row.color, href: row.href, value: pick((row.outcomes as Record<ScenarioKey, SixOutcomes>)[scenario]) }))
      .sort((a, b) => b.value - a.value)
  const charts = [
    { title: 'Collapse or doom', subtitle: 'By 2100 · Lower is better', color: '#e34948', bars: bars((o) => o.collapse + o.doom) },
    { title: 'Better than today', subtitle: 'Living standard in 2100 · Higher is better', color: '#8db8ea', bars: bars((o) => o.better + o.abundance) },
    { title: 'Abundance', subtitle: '5× the rich world today, in 2100 · Higher is better', color: '#1f5fb0', bars: bars((o) => o.abundance) },
  ]

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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {charts.map((chart) => (
          <ChartCard key={chart.title} title={chart.title} subtitle={chart.subtitle} color={chart.color}>
            {chart.bars.length > 0 ? (
              <VerticalBars bars={chart.bars} color={chart.color} max={Math.max(0.05, ...chart.bars.map((b) => b.value)) * 1.08} />
            ) : (
              <p className="py-16 text-center text-sm" style={{ color: 'var(--ink-muted)' }}>
                Add a place
              </p>
            )}
          </ChartCard>
        ))}
      </div>
    </div>
  )
}
