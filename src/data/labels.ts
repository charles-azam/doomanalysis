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
