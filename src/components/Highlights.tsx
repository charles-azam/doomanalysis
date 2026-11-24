import { useState, useSyncExternalStore } from 'react'
import type { Outcome, Pathway, ScenarioKey } from '../model/types.ts'
import { EntityPicker } from './EntityPicker.tsx'
import { VerticalBars, type Bar } from './VerticalBars.tsx'

export type HighlightRow = {
  id: string
  name: string
  short: string
  mark: string
  kind: 'world' | 'region' | 'country'
  href: string
  outcomes?: Record<ScenarioKey, Outcome>
}

export type PathwayRow = { key: Pathway; label: string; value: Record<ScenarioKey, number> }

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

/** Headline charts under one scenario switch and one place picker; the selection lives in the URL (?show=FRA,SWE). */
export function Highlights({ rows, pathways, defaults }: { rows: HighlightRow[]; pathways: PathwayRow[]; defaults: string[] }) {
  const [scenario, setScenario] = useState<ScenarioKey>('weighted')
  // The selection lives in the URL, read as an external store: the server renders the defaults,
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
  const bars = (pick: (o: Outcome) => number): Bar[] =>
    chosen
      .map((row) => ({ key: row.id, label: row.short, title: row.name, mark: row.mark, href: row.href, value: pick((row.outcomes as Record<ScenarioKey, Outcome>)[scenario]) }))
      .sort((a, b) => b.value - a.value)
  const collapse = bars((o) => o.collapse)
  const abundance = bars((o) => o.abundance)
  const causes: Bar[] = pathways.map((p) => ({ key: p.key, label: p.label, value: p.value[scenario] })).sort((a, b) => b.value - a.value)
  const max = Math.max(0.05, ...collapse.map((b) => b.value), ...abundance.map((b) => b.value))

  const card = (title: string, color: string, subtitle: string, list: Bar[], scaleMax: number) => (
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
          <VerticalBars bars={list} color={color} max={scaleMax} />
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
        {card('Collapse by 2100', 'var(--collapse)', 'Chance that most people lose an essential for five years or more · World: doom · Lower is better', collapse, max)}
        {card('Abundance in 2100', 'var(--abundance)', 'Chance that essentials are universal and nearly free · Higher is better', abundance, max)}
      </div>
      {card('Causes of doom', 'var(--theme-ai)', 'Chance of global doom by 2100, by main cause · Lower is better', causes, Math.max(...causes.map((b) => b.value)) * 1.15)}
    </div>
  )
}
