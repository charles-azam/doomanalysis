import type { Card } from './types.ts'

/** Round tick values for a card's axis: powers of ten on a log axis, about five even steps otherwise. */
export function axisTicks({ card }: { card: Card }): number[] {
  const { min, max } = card.axis
  if (card.axis.log) {
    const ticks: number[] = []
    for (let power = Math.ceil(Math.log10(min) - 1e-9); power <= Math.floor(Math.log10(max) + 1e-9); power++) ticks.push(10 ** power)
    const every = Math.ceil(ticks.length / 6)
    return ticks.filter((_, index) => index % every === 0)
  }
  const rough = (max - min) / 5
  const magnitude = 10 ** Math.floor(Math.log10(rough))
  const step = [1, 2, 2.5, 5, 10].map((m) => m * magnitude).find((s) => s >= rough) ?? rough
  const ticks: number[] = []
  for (let value = Math.ceil(min / step - 1e-9) * step; value <= max + step * 1e-9; value += step) ticks.push(Number(value.toPrecision(12)))
  return ticks
}

/** A value on a card's axis, short enough for a tick or a chip. */
export function formatAxis({ card, value }: { card: Card; value: number }): string {
  const size = Math.abs(value)
  if (size >= 1e9) return `${Number((value / 1e9).toPrecision(3))}bn`
  if (size >= 1e6) return `${Number((value / 1e6).toPrecision(3))}M`
  if (size >= 1e4) return `${Number((value / 1e3).toPrecision(3))}k`
  if (card.axis.log || size < 1) return `${Number(value.toPrecision(2))}`
  return value.toLocaleString('en-US', { maximumFractionDigits: size >= 100 ? 0 : card.decimals })
}

/** Today's value with the card's own number of decimals. */
export function formatValue({ card, value }: { card: Card; value: number }): string {
  const size = Math.abs(value)
  if (size >= 1e9) return `${Number((value / 1e9).toPrecision(3))} billion`
  if (size >= 1e6) return `${Number((value / 1e6).toPrecision(3))} million`
  if (size > 0 && size < 10 ** -card.decimals) return `${Number(value.toPrecision(2))}`
  return value.toLocaleString('en-US', { minimumFractionDigits: card.decimals, maximumFractionDigits: card.decimals })
}

/** The top of a chart's vertical axis: the smallest round percentage that fits the tallest bar. */
export function niceCeiling({ value }: { value: number }): number {
  const steps = [0.02, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.8, 1]
  return steps.find((step) => step >= value - 1e-9) ?? 1
}
