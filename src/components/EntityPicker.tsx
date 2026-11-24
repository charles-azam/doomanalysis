import { useMemo, useState } from 'react'

export type PickerRow = { id: string; name: string; mark: string; kind: 'world' | 'region' | 'country'; judged: boolean }

/** "13 of 212 · Add country": a searchable list to add or remove places, like a model picker on an AI leaderboard. */
export function EntityPicker({
  rows,
  selected,
  onChange,
}: {
  rows: PickerRow[]
  selected: string[]
  onChange: (next: string[]) => void
}) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const judgedCount = rows.filter((row) => row.judged).length
  const matches = useMemo(() => {
    const q = query.trim().toLowerCase()
    return rows.filter((row) => row.judged && (q === '' || row.name.toLowerCase().includes(q) || row.id.toLowerCase() === q))
  }, [rows, query])
  const toggle = (id: string) => onChange(selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id])
  const group = (kind: PickerRow['kind'], title: string) => {
    const list = matches.filter((row) => row.kind === kind || (kind === 'region' && row.kind === 'world'))
    if (list.length === 0) return null
    return (
      <div>
        <p className="px-3 pb-1 pt-2 text-[11px] font-medium uppercase tracking-wide" style={{ color: 'var(--ink-muted)' }}>
          {title}
        </p>
        {list.map((row) => (
          <button
            key={row.id}
            type="button"
            className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm hover:bg-[var(--surface-2)]"
            onClick={() => toggle(row.id)}
            aria-pressed={selected.includes(row.id)}
          >
            <span className="w-4 text-center">{selected.includes(row.id) ? '✓' : ''}</span>
            <span>{row.mark}</span>
            <span>{row.name}</span>
          </button>
        ))}
      </div>
    )
  }
  return (
    <div className="relative flex flex-wrap items-center gap-2">
      <span className="text-sm" style={{ color: 'var(--ink-2)' }}>
        {selected.filter((id) => rows.some((row) => row.id === id && row.judged)).length} of {judgedCount} places
      </span>
      <button type="button" className="pill pill-solo" onClick={() => setOpen(!open)} aria-expanded={open}>
        ＋ Add or remove
      </button>
      {selected.length > 0 && (
        <button type="button" className="text-xs underline" style={{ color: 'var(--ink-muted)' }} onClick={() => onChange([])}>
          Clear
        </button>
      )}
      {open && (
        <div className="card absolute left-0 top-10 z-40 w-80 overflow-hidden shadow-lg">
          <input
            autoFocus
            className="w-full border-b px-3 py-2 text-sm outline-none"
            style={{ borderColor: 'var(--line)' }}
            placeholder="Search a country or region"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className="max-h-80 overflow-y-auto pb-2">
            {group('region', 'World and regions')}
            {group('country', 'Countries')}
          </div>
          <button type="button" className="w-full border-t px-3 py-2 text-sm font-medium" style={{ borderColor: 'var(--line)' }} onClick={() => setOpen(false)}>
            Done
          </button>
        </div>
      )}
    </div>
  )
}
