import type { Card, CurveForecast, CurvePoint, DangerLevel, SiCase } from './types.ts'

const tolerance = 1e-9

export const dangerLevels: DangerLevel[] = [0, 1, 2, 3, 4, 5]

/**
 * The values at which a card's curve must be stated: every boundary between two bands,
 * and every mark on a card that has no bands. Nothing is ever read off an interpolated tail.
 */
export function curveEdges({ card }: { card: Card }): number[] {
  const inner = card.bands.slice(1).map((band) => band.from)
  const marks = card.scale === 'none' ? (card.marks ?? []).map((mark) => mark.value) : []
  return [...new Set([...inner, ...marks])].sort((a, b) => a - b)
}

const same = (a: number, b: number): boolean => Math.abs(a - b) <= tolerance * Math.max(1, Math.abs(a), Math.abs(b))

/** Throws unless the points are valid chances that only fall as the value rises. */
export function checkCurve({ points, label }: { points: { value: number; above: number }[]; label: string }): void {
  for (const [index, point] of points.entries()) {
    if (!Number.isFinite(point.above) || point.above < 0 || point.above > 1) throw new Error(`${label}: chance above ${point.value} must be in [0,1], got ${point.above}`)
    if (index === 0) continue
    const previous = points[index - 1]
    if (point.value <= previous.value) throw new Error(`${label}: points must be sorted by value, ${previous.value} then ${point.value}`)
    if (point.above > previous.above + tolerance) throw new Error(`${label}: the chance of being above ${point.value} (${point.above}) exceeds the chance of being above ${previous.value} (${previous.above})`)
  }
}

/**
 * The curve of one card in one case. Published points come first; judged points fill the values
 * no source gives. Throws if the two together are not a valid curve.
 */
export function curveFor({ card, judged, siCase }: { card: Card; judged: CurveForecast | undefined; siCase: SiCase }): CurvePoint[] {
  const published = card.published[siCase]
  const extra = (judged?.[siCase] ?? [])
    .filter((point) => !published.some((p) => same(p.value, point.value)))
    .map((point): CurvePoint => ({ value: point.value, above: point.above, basis: 'judged', source: 'Judged for this site' }))
  const points = [...published, ...extra].sort((a, b) => a.value - b.value)
  checkCurve({ points: points, label: `${card.id} | ${siCase}` })
  return points
}

const aboveAt = ({ points, value }: { points: CurvePoint[]; value: number }): number | undefined => points.find((point) => same(point.value, value))?.above

/**
 * The chance of each level, from a curve and the card's bands. The lowest and highest bands are
 * open-ended. Returns undefined while a band edge has no stated chance.
 */
export function levelChances({ card, points }: { card: Card; points: CurvePoint[] }): Record<DangerLevel, number> | undefined {
  if (card.bands.length === 0) return undefined
  const chances: Record<DangerLevel, number> = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  for (const [index, band] of card.bands.entries()) {
    const lower = index === 0 ? 1 : aboveAt({ points: points, value: band.from })
    const upper = index === card.bands.length - 1 ? 0 : aboveAt({ points: points, value: band.to })
    if (lower === undefined || upper === undefined) return undefined
    chances[band.level] += lower - upper
  }
  return chances
}

export const atLeast = ({ chances, level }: { chances: Record<DangerLevel, number>; level: DangerLevel }): number =>
  dangerLevels.filter((l) => l >= level).reduce<number>((sum, l) => sum + chances[l], 0)

/** The level a value falls in, for marking where a card stands today. */
export function levelAt({ card, value }: { card: Card; value: number }): DangerLevel | undefined {
  const band = card.bands.find((b, index) => value >= b.from && (value < b.to || index === card.bands.length - 1))
  return band?.level
}

/** Position on the card's axis, as a fraction between 0 and 1. */
export function axisPosition({ card, value }: { card: Card; value: number }): number {
  const scale = (v: number): number => (card.axis.log ? Math.log10(v) : v)
  const position = (scale(value) - scale(card.axis.min)) / (scale(card.axis.max) - scale(card.axis.min))
  return Math.min(1, Math.max(0, position))
}

/** Monotone cubic interpolation (Fritsch–Carlson): a smooth curve through the points that never overshoots. */
function monotone({ xs, ys, flatStart, flatEnd }: { xs: number[]; ys: number[]; flatStart: boolean; flatEnd: boolean }): (x: number) => number {
  const count = xs.length
  if (count === 1) return () => ys[0]
  const widths = xs.slice(1).map((x, i) => x - xs[i])
  const slopes = widths.map((width, i) => (ys[i + 1] - ys[i]) / width)
  const tangents = xs.map((_, i) => {
    if (i === 0) return slopes[0]
    if (i === count - 1) return slopes[count - 2]
    if (slopes[i - 1] * slopes[i] <= 0) return 0
    const first = 2 * widths[i] + widths[i - 1]
    const second = widths[i] + 2 * widths[i - 1]
    return (first + second) / (first / slopes[i - 1] + second / slopes[i])
  })
  if (flatStart) tangents[0] = 0
  if (flatEnd) tangents[count - 1] = 0
  for (const [i, slope] of slopes.entries()) {
    if (slope === 0) {
      tangents[i] = 0
      tangents[i + 1] = 0
      continue
    }
    const alpha = tangents[i] / slope
    const beta = tangents[i + 1] / slope
    const size = alpha * alpha + beta * beta
    if (size > 9) {
      const shrink = 3 / Math.sqrt(size)
      tangents[i] = shrink * alpha * slope
      tangents[i + 1] = shrink * beta * slope
    }
  }
  return (x: number): number => {
    if (x <= xs[0]) return ys[0]
    if (x >= xs[count - 1]) return ys[count - 1]
    const i = Math.max(0, xs.findIndex((knot) => knot > x) - 1)
    const t = (x - xs[i]) / widths[i]
    const t2 = t * t
    const t3 = t2 * t
    return (2 * t3 - 3 * t2 + 1) * ys[i] + (t3 - 2 * t2 + t) * widths[i] * tangents[i] + (-2 * t3 + 3 * t2) * ys[i + 1] + (t3 - t2) * widths[i] * tangents[i + 1]
  }
}

export type Bar = { from: number; to: number; chance: number }

export type Bars = {
  /** Lowest stated value, and the chance of being below it: no shape is drawn there, because nobody stated one. */
  below: { value: number; chance: number }
  bars: Bar[]
  /** Highest stated value, and the chance of being above it. */
  beyond: { value: number; chance: number }
}

/**
 * Bars for drawing: the chance that the value falls in each of `count` equal stretches of the axis.
 * Bars are drawn only between the lowest and highest stated points; the shape between two stated points
 * is interpolation and carries no figure of its own. What lies outside is reported as two plain chances.
 */
export function barsFor({ card, points, count }: { card: Card; points: CurvePoint[]; count: number }): Bars {
  const scale = (v: number): number => (card.axis.log ? Math.log10(v) : v)
  const unscale = (v: number): number => (card.axis.log ? 10 ** v : v)
  const inside = points.filter((point) => point.value >= card.axis.min - tolerance && point.value <= card.axis.max + tolerance)
  const start = scale(card.axis.min)
  const width = (scale(card.axis.max) - start) / count
  const empty = (from: number) => ({ from: unscale(from), to: unscale(from + width), chance: 0 })
  if (inside.length === 0) {
    return { below: { value: card.axis.min, chance: 0 }, bars: Array.from({ length: count }, (_, i) => empty(start + i * width)), beyond: { value: card.axis.max, chance: 0 } }
  }
  const first = inside[0]
  const last = inside[inside.length - 1]
  const above = monotone({ xs: inside.map((p) => scale(p.value)), ys: inside.map((p) => p.above), flatStart: false, flatEnd: false })
  const bars = Array.from({ length: count }, (_, i): Bar => {
    const from = start + i * width
    return { from: unscale(from), to: unscale(from + width), chance: Math.max(0, above(from) - above(from + width)) }
  })
  return { below: { value: first.value, chance: 1 - first.above }, bars: bars, beyond: { value: last.value, chance: last.above } }
}
