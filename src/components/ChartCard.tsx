import type { ReactNode } from 'react'

/** The one frame every chart sits in: a title, one line saying what is measured, the chart. */
export function ChartCard({ title, subtitle, color, controls, children }: { title: string; subtitle: string; color: string; controls?: ReactNode; children: ReactNode }) {
  return (
    <div className="card flex min-w-0 flex-col gap-1 p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="card-title">
          <span className="square" style={{ background: color }} />
          {title}
        </h3>
        {controls}
      </div>
      <p className="text-xs" style={{ color: 'var(--ink-muted)' }}>
        {subtitle}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  )
}

/** A small segmented control, for switching a chart between views. */
export function Segmented<T extends string>({ options, value, onChange, label }: { options: { key: T; label: string }[]; value: T; onChange: (key: T) => void; label: string }) {
  return (
    <div className="pill-group text-xs" role="group" aria-label={label}>
      {options.map((option) => (
        <button key={option.key} type="button" className="pill !px-2.5 !py-1 !text-xs" aria-pressed={value === option.key} onClick={() => onChange(option.key)}>
          {option.label}
        </button>
      ))}
    </div>
  )
}
