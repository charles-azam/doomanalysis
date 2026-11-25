import { useMemo, useState } from 'react'
import { outcomeNames } from '../data/definitions.ts'
import { formatPercent, outcomeKeys } from '../model/forecast.ts'
import type { ScenarioKey, SixOutcomes } from '../model/types.ts'
import { SixOutcomeBar, SixOutcomeLegend } from './SixOutcomeBar.tsx'

export type LeaderboardRow = {
  id: string
  kind: 'world' | 'region' | 'country'
  name: string
  mark: string
  href: string
  region?: string
  population: number
  runs: number
  outcomes?: Record<ScenarioKey, SixOutcomes>
}

const scenarioLabels: Record<ScenarioKey, string> = {
  weighted: 'Our forecast',
  si: 'If superintelligence arrives',
  noSi: 'If it never does',
}

type SortKey = 'down' | 'up' | 'abundance' | 'population' | 'name'

const downOf = (o: SixOutcomes): number => o.collapse + o.doom
const upOf = (o: SixOutcomes): number => o.abundance + o.better

/** Every place, searchable and filterable by region, each split into its six outcomes. */
export function Leaderboard({ rows, regions }: { rows: LeaderboardRow[]; regions: { id: string; name: string }[] }) {
  const [scenario, setScenario] = useState<ScenarioKey>('weighted')
  const [sort, setSort] = useState<SortKey>('population')
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('all')
  const [asTable, setAsTable] = useState(false)

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return rows
      .filter((row) => (region === 'all' ? true : region === 'regions' ? row.kind !== 'country' : row.region === region || row.id === region))
      .filter((row) => q === '' || row.name.toLowerCase().includes(q))
      .sort((a, b) => {
        if (a.kind !== b.kind && region === 'all' && q === '') return a.kind === 'world' ? -1 : b.kind === 'world' ? 1 : a.kind === 'region' ? -1 : 1
        if (sort === 'name') return a.name.localeCompare(b.name)
        if (sort === 'population') return b.population - a.population
        const pick = sort === 'down' ? downOf : sort === 'up' ? upOf : (o: SixOutcomes) => o.abundance
        const value = (row: LeaderboardRow) => (row.outcomes ? pick(row.outcomes[scenario]) : -1)
        return value(b) - value(a)
      })
  }, [rows, query, region, sort, scenario])

  const control = { border: '1px solid var(--line)', background: 'var(--surface)', color: 'var(--ink)' }

  return (
    <div className="flex flex-col gap-4" data-highlight-chart>
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <div className="pill-group" role="group" aria-label="Scenario">
          {(Object.keys(scenarioLabels) as ScenarioKey[]).map((key) => (
            <button key={key} type="button" className="pill" aria-pressed={scenario === key} onClick={() => setScenario(key)}>
              {scenarioLabels[key]}
            </button>
          ))}
        </div>
        <input className="rounded-md px-3 py-1.5" style={control} placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className="rounded-md px-2 py-1.5" style={control} value={region} onChange={(e) => setRegion(e.target.value)} aria-label="Region">
          <option value="all">All places</option>
          <option value="regions">World and regions only</option>
          {regions.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>
        <select className="rounded-md px-2 py-1.5" style={control} value={sort} onChange={(e) => setSort(e.target.value as SortKey)} aria-label="Sort">
          <option value="population">Most populous</option>
          <option value="down">Most likely to collapse</option>
          <option value="up">Most likely better off</option>
          <option value="abundance">Most likely abundant</option>
          <option value="name">Name</option>
        </select>
        <button type="button" className="pill ml-auto" style={{ border: '1px solid var(--line)' }} aria-pressed={asTable} onClick={() => setAsTable(!asTable)}>
          {asTable ? 'Show bars' : 'Show table'}
        </button>
      </div>
      <SixOutcomeLegend />
      {asTable ? (
        <table className="data">
          <thead>
            <tr>
              <th>Place</th>
              {outcomeKeys.map((key) => (
                <th key={key} className="num">
                  {outcomeNames[key]}
                </th>
              ))}
              <th className="num">Judge runs</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((row) => (
              <tr key={row.id}>
                <td>
                  <a className="link" href={row.href}>
                    {row.mark} {row.name}
                  </a>
                </td>
                {outcomeKeys.map((key) => (
                  <td key={key} className="num">
                    {row.outcomes ? formatPercent({ value: row.outcomes[scenario][key] }) : '—'}
                  </td>
                ))}
                <td className="num">{row.runs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ul className="flex flex-col gap-2">
          {visible.map((row) => (
            <li key={row.id} className="grid grid-cols-[7.5rem_minmax(0,1fr)_3rem] items-center gap-2 sm:grid-cols-[14rem_minmax(0,1fr)_4.5rem] sm:gap-3">
              <a href={row.href} className="truncate text-sm hover:underline" style={{ fontWeight: row.kind === 'country' ? 400 : 600 }}>
                <span className="mr-1.5">{row.mark}</span>
                {row.name}
              </a>
              {row.outcomes ? (
                <SixOutcomeBar outcomes={row.outcomes[scenario]} name={row.name} height={24} />
              ) : (
                <span className="text-xs" style={{ color: 'var(--ink-muted)' }}>
                  Not judged yet
                </span>
              )}
              <span className="text-right text-sm font-semibold tabular" title="Collapse or doom">
                {row.outcomes ? formatPercent({ value: downOf(row.outcomes[scenario]) }) : ''}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
