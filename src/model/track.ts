import type { FactorDisplay } from './types.ts'

const clamp = (x: number) => Math.min(1, Math.max(0, x))

export function positionOn({ display, value }: { display: FactorDisplay; value: number }): number {
  if (display.log) {
    return clamp((Math.log10(value) - Math.log10(display.min)) / (Math.log10(display.max) - Math.log10(display.min)))
  }
  return clamp((value - display.min) / (display.max - display.min))
}

/** A value is past a threshold when it sits on the bad side of it. */
export function isPast({ display, value, threshold }: { display: FactorDisplay; value: number; threshold: number }): boolean {
  return display.better === 'lower' ? value > threshold : value < threshold
}

export function countPast({ display, value }: { display: FactorDisplay; value: number }): number {
  return display.thresholds.filter((t) => isPast({ display: display, value: value, threshold: t.value })).length
}
