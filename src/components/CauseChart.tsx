import { useState } from 'react'
import { causeShort } from '../data/definitions.ts'
import { causeColors } from '../data/palette.ts'
import { rootCauses, type DangerKey } from '../model/forecast.ts'
import type { RootCause, ScenarioKey } from '../model/types.ts'
import { ChartCard, Segmented } from './ChartCard.tsx'
import { VerticalBars } from './VerticalBars.tsx'

/** For each scenario and level: the world's chance, and each cause's absolute chance. */
export type CauseTable = Record<ScenarioKey, Record<DangerKey, { total: number; causes: Record<RootCause, number> }>>

const levels: { key: DangerKey; label: string; subtitle: string }[] = [
  { key: 'atLeast3', label: '3+', subtitle: 'Over 10% of humanity' },
  { key: 'atLeast4', label: '4+', subtitle: 'Over half of humanity' },
  { key: 'doom', label: 'Doom', subtitle: 'Doom' },
]

/** The chance that each root cause starts a catastrophe of the chosen level by 2100. */
export function CauseChart({ table, scenario }: { table: CauseTable; scenario: ScenarioKey }) {
  const [level, setLevel] = useState<DangerKey>('atLeast3')
  const current = table[scenario][level]
  const chosen = levels.find((l) => l.key === level) ?? levels[0]
  const bars = rootCauses
    .map((cause) => ({ key: cause, label: causeShort[cause], color: causeColors[cause], href: `/causes/${cause}/`, value: current.causes[cause] }))
    .sort((a, b) => b.value - a.value)
  return (
    <ChartCard
      title="Causes"
      subtitle={`${chosen.subtitle}, by 2100 · Lower is better`}
      color="#eb6834"
      controls={<Segmented options={levels.map((l) => ({ key: l.key, label: l.label }))} value={level} onChange={setLevel} label="Level" />}
    >
      <VerticalBars bars={bars} color="#eb6834" max={Math.max(...bars.map((b) => b.value), 1e-6) * 1.1} />
    </ChartCard>
  )
}
