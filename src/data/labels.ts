import type { Pathway, Pillar } from '../model/types.ts'

export const pathwayLabels: Record<Pathway, string> = {
  ai: 'AI loss of control',
  nuclear: 'Nuclear war',
  pandemic: 'Pandemic, natural or engineered',
  climate: 'Climate and Earth-system breakdown',
  resources: 'Resource and infrastructure failure',
  other: 'Everything else',
}

export const pillarLabels: Record<Pillar, string> = {
  energy: 'Energy',
  water: 'Fresh water',
  food: 'Food',
  health: 'Health',
  security: 'Security',
}

export const pathwayLabelsShort: Record<Pathway, string> = {
  ai: 'AI',
  nuclear: 'Nuclear',
  pandemic: 'Pandemic',
  climate: 'Climate',
  resources: 'Resources',
  other: 'Other',
}

/** Short region names for chart labels. */
export const regionShort: Record<string, string> = {
  WLD: 'World',
  'europe-north': 'N. Europe',
  'europe-west': 'W. Europe',
  'europe-south': 'S. Europe',
  'europe-east': 'E. Europe',
  'north-america': 'N. America',
  'latin-america': 'Latin Am.',
  mena: 'MENA',
  'sub-saharan-africa': 'Sub-Sah. Africa',
  'central-south-asia': 'C. & S. Asia',
  'east-asia': 'East Asia',
  'southeast-asia': 'SE Asia',
  oceania: 'Oceania',
}
