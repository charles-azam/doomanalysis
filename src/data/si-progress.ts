import type { Threshold, TrendPoint } from '../components/SiTrend.tsx'
import { cards } from './cards.ts'

/**
 * The best model's Artificial Analysis Progress Index at three dates, as verified for the ai_progress_index card:
 * GPT-3.5 Turbo (November 2022), Anthropic's best in September 2025, and Claude Fable 5.2 (November 2026).
 * Sources: https://artificialanalysis.ai/evaluations/artificial-analysis-progress-index and https://artificialanalysis.ai/trends
 */
export const frontier: TrendPoint[] = [
  { year: 2022.87, value: 125, label: 'November 2022' },
  { year: 2025.7, value: 263, label: 'September 2025' },
  { year: 2026.86, value: 359, label: 'November 2026' },
]

const marks = cards.find((card) => card.id === 'ai_progress_index')?.marks ?? []
const markAt = (word: string): number => {
  const mark = marks.find((m) => m.label.toLowerCase().includes(word))
  if (mark === undefined) throw new Error(`ai_progress_index has no ${word} superintelligence mark`)
  return mark.value
}

/** Where superintelligence would begin on the index: the card's three marks. */
export const siThreshold: Threshold = { low: markAt('low'), middle: markAt('middle'), high: markAt('high') }
