import { formatPercent } from '../model/judgment.ts'

export type PairedItem = { label: string; withSi: number; withoutSi: number }

/** Horizontal paired bars on one shared scale: each item without and with superintelligence. */
export function PairedBars({ items }: { items: PairedItem[] }) {
  const max = Math.max(...items.flatMap((item) => [item.withSi, item.withoutSi]), 0.01)
  const bar = (value: number, color: string, label: string) => (
    <div className="flex items-center gap-2" data-tip={`${label}: ${formatPercent({ value: value })}`}>
      <div className="h-2.5 rounded-r-[4px]" style={{ width: `${(value / max) * 85}%`, minWidth: 2, background: color }} />
      <span className="text-xs tabular" style={{ color: 'var(--ink-2)' }}>
        {formatPercent({ value: value })}
      </span>
    </div>
  )
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item.label} className="grid grid-cols-1 gap-1 sm:grid-cols-[15rem_1fr] sm:items-center sm:gap-3">
          <span className="text-sm">{item.label}</span>
          <div className="flex flex-col gap-[2px]">
            {bar(item.withoutSi, 'var(--without-si)', 'Without SI')}
            {bar(item.withSi, 'var(--with-si)', 'With SI')}
          </div>
        </li>
      ))}
    </ul>
  )
}
