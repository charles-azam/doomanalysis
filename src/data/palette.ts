import type { DangerLevel, OutcomeKey, RootCause } from '../model/types.ts'

/** One hue, light to dark: the higher the danger, the darker the red. */
export const dangerColors: Record<DangerLevel, string> = { 0: '#efefec', 1: '#fbdcd9', 2: '#f4aaa5', 3: '#e56b63', 4: '#bf312e', 5: '#6e1210' }

/** The mirror for technologies: the higher the potential, the darker the blue. */
export const potentialColors: Record<DangerLevel, string> = { 0: '#efefec', 1: '#dbe8f8', 2: '#aecbef', 3: '#6fa3e2', 4: '#2a78d6', 5: '#124a8f' }

/** Text that stays readable on each level's colour. */
export const levelInk: Record<DangerLevel, string> = { 0: '#4d4d4b', 1: '#6e1210', 2: '#6e1210', 3: '#ffffff', 4: '#ffffff', 5: '#ffffff' }
export const potentialInk: Record<DangerLevel, string> = { 0: '#4d4d4b', 1: '#124a8f', 2: '#124a8f', 3: '#ffffff', 4: '#ffffff', 5: '#ffffff' }

/** Good outcomes in blue, bad ones in red, the same in grey: a diverging scale with a neutral middle. */
export const outcomeColors: Record<OutcomeKey, string> = {
  abundance: '#1f5fb0',
  better: '#8db8ea',
  stagnation: '#c9c8c2',
  decline: '#f2a59d',
  collapse: '#e34948',
  doom: '#5c1010',
}
export const outcomeInk: Record<OutcomeKey, string> = { abundance: '#ffffff', better: '#0c2f5c', stagnation: '#2c2c2a', decline: '#5c1010', collapse: '#ffffff', doom: '#ffffff' }

/** A fixed colour per root cause, so a cause keeps its colour on every chart. */
export const causeColors: Record<RootCause, string> = {
  climate: '#e34948',
  resources: '#eda100',
  war: '#eb6834',
  civil: '#e87ba4',
  disease: '#1baf7a',
  ai: '#6250d6',
  natural: '#8a8985',
}

export const siColors = { si: '#6250d6', noSi: '#eb6834' } as const

/** One colour per region, used for the region and every country in it, on every chart. The world is black. */
export const placeColors: Record<string, string> = {
  WLD: '#0b0b0b',
  'europe-north': '#2a78d6',
  'europe-west': '#6250d6',
  'europe-south': '#9085e9',
  'europe-east': '#5c8fd6',
  'north-america': '#1f5fb0',
  'latin-america': '#1baf7a',
  mena: '#eda100',
  'sub-saharan-africa': '#eb6834',
  'central-south-asia': '#e34948',
  'east-asia': '#e87ba4',
  'southeast-asia': '#c2410c',
  oceania: '#0e9f9a',
}
