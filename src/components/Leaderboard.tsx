import { useState } from 'react'
import type { Outcome, ScenarioKey } from '../model/types.ts'
import { formatPercent } from '../model/judgment.ts'
import { OutcomeBar, OutcomeLegend } from './OutcomeBar.tsx'

export type LeaderboardRow = {
  id: string
  slug: string
  name: string
  flag: string
  outcomes: Record<ScenarioKey, Outcome>
  isWorld: boolean
}

const scenarioLabels: Record<ScenarioKey, string> = {
  weighted: 'Our forecast',
  si: 'If superintelligence arrives',
  noSi: 'If it never does',
}

type SortKey = 'collapse' | 'abundance' | 'name'

export function Leaderboard({ rows, siBy2100 }: { rows: LeaderboardRow[]; siBy2100: number }) {
  const [scenario, setScenario] = useState<ScenarioKey>('weighted')
  const [sort, setSort] = useState<SortKey>('collapse')
  const [hidden, setHidden] = useState<string[]>([])
  const [asTable, setAsTable] = useState(false)

  const visible = rows
    .filter((row) => !hidden.includes(row.id))
    .sort((a, b) => {
      if (a.isWorld !== b.isWorld) return a.isWorld ? -1 : 1
      if (sort === 'name') return a.name.localeCompare(b.name)
      return b.outcomes[scenario][sort] - a.outcomes[scenario][sort]
    })

  const toggle = (id: string) => setHidden((current) => (current.includes(id) ? current.filter((x) => x !== id) : [...current, id]))

  const button = (active: boolean) => ({
    background: active ? 'var(--ink)' : 'transparent',
    color: active ? 'var(--surface)' : 'var(--ink-2)',
    border: '1px solid var(--ring)',
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        {(Object.keys(scenarioLabels) as ScenarioKey[]).map((key) => (
          <button key={key} type="button" className="rounded-md px-3 py-1.5" style={button(scenario === key)} onClick={() => setScenario(key)}>
            {scenarioLabels[key]}
          </button>
        ))}
        <span className="mx-2 h-5 w-px" style={{ background: 'var(--axis)' }} />
        <label className="flex items-center gap-2" style={{ color: 'var(--ink-2)' }}>
          Sort
          <select
            className="rounded-md px-2 py-1.5"
            style={{ border: '1px solid var(--ring)', background: 'var(--surface)', color: 'var(--ink)' }}
            value={sort}
            onChange={(event) => setSort(event.target.value as SortKey)}
          >
            <option value="collapse">Most likely to collapse</option>
            <option value="abundance">Most likely abundant</option>
            <option value="name">Name</option>
          </select>
        </label>
        <button type="button" className="ml-auto rounded-md px-3 py-1.5" style={button(asTable)} onClick={() => setAsTable(!asTable)}>
          {asTable ? 'Show bars' : 'Show table'}
        </button>
      </div>
      <p className="text-sm muted">
        {scenario === 'weighted'
          ? `Blends both cases using the judged ${formatPercent({ value: siBy2100 })} chance that superintelligence arrives before 2100.`
          : scenario === 'si'
            ? 'Assumes superintelligence is built and deployed before 2100.'
            : 'Assumes no superintelligence before 2100: AI keeps improving, but stays below the best humans at many tasks.'}
      </p>
      <div className="flex flex-wrap gap-1.5 text-xs">
        {rows.map((row) => (
          <button
            key={row.id}
            type="button"
            className="rounded-full px-2.5 py-1"
            style={{
              border: '1px solid var(--ring)',
              background: hidden.includes(row.id) ? 'transparent' : 'var(--surface-2)',
              color: hidden.includes(row.id) ? 'var(--ink-muted)' : 'var(--ink)',
              textDecoration: hidden.includes(row.id) ? 'line-through' : 'none',
            }}
            onClick={() => toggle(row.id)}
            aria-pressed={!hidden.includes(row.id)}
          >
            {row.flag} {row.name}
          </button>
        ))}
      </div>
      <OutcomeLegend />
      {asTable ? (
        <table className="data">
          <thead>
            <tr>
              <th>Country</th>
              <th className="num">Abundance</th>
              <th className="num">Muddling through</th>
              <th className="num">Collapse (World: doom)</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((row) => (
              <tr key={row.id}>
                <td>
                  <a className="link" href={`/countries/${row.slug}/`}>
                    {row.flag} {row.name}
                  </a>
                </td>
                <td className="num">{formatPercent({ value: row.outcomes[scenario].abundance })}</td>
                <td className="num">{formatPercent({ value: row.outcomes[scenario].muddle })}</td>
                <td className="num">{formatPercent({ value: row.outcomes[scenario].collapse })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ul className="flex flex-col gap-2.5">
          {visible.map((row) => (
            <li key={row.id} className="grid grid-cols-[9.5rem_1fr_3.5rem] items-center gap-3 sm:grid-cols-[12rem_1fr_4.5rem]">
              <a href={`/countries/${row.slug}/`} className="truncate text-sm font-medium hover:underline">
                <span className="mr-1.5">{row.flag}</span>
                {row.name}
              </a>
              <OutcomeBar outcome={row.outcomes[scenario]} name={row.name} collapseLabel={row.isWorld ? 'Doom' : undefined} />
              <span className="text-right text-sm font-semibold tabular" style={{ color: 'var(--ink)' }} data-tip={row.isWorld ? 'P(doom)' : 'P(collapse)'}>
                {formatPercent({ value: row.outcomes[scenario].collapse })}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
