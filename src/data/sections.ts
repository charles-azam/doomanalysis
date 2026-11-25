import type { Theme } from '../model/types.ts'

export type Section = { id: string; title: string; color: string; themes: Theme[] }

/** Global factors, grouped the way the home page shows them. Climate comes first. */
export const globalSections: Section[] = [
  { id: 'climate', title: 'Climate and Earth limits', color: 'var(--theme-climate)', themes: ['climate', 'earth'] },
  { id: 'society', title: 'War, disease and displacement', color: 'var(--theme-society)', themes: ['war', 'displacement', 'disease', 'cohesion', 'demography'] },
  { id: 'resources', title: 'Resources and energy', color: 'var(--theme-resources)', themes: ['resources', 'clean-energy'] },
  { id: 'ai', title: 'Superintelligence', color: 'var(--theme-ai)', themes: ['ai'] },
  { id: 'essentials', title: 'The five essentials, worldwide', color: 'var(--theme-essentials)', themes: ['abundance', 'energy', 'water', 'food', 'health', 'security'] },
]

/** Country factors, grouped for the region and country pages. */
export const countrySections: Section[] = [
  { id: 'living', title: 'How people live', color: 'var(--theme-people)', themes: ['living'] },
  { id: 'ai-access', title: 'AI access', color: 'var(--theme-ai)', themes: ['ai'] },
  { id: 'essentials', title: 'The five essentials today', color: 'var(--theme-essentials)', themes: ['energy', 'water', 'food', 'health', 'security'] },
  { id: 'abundance', title: 'The abundance test', color: 'var(--abundance)', themes: ['abundance'] },
  { id: 'climate', title: 'Climate and water', color: 'var(--theme-climate)', themes: ['climate'] },
  { id: 'money', title: 'Money and energy', color: 'var(--theme-resources)', themes: ['finance', 'resources'] },
  { id: 'society', title: 'State and society', color: 'var(--theme-society)', themes: ['cohesion', 'demography'] },
  { id: 'push-back', title: 'Capacity to push back', color: 'var(--theme-push-back)', themes: ['wealth', 'readiness'] },
]

const themeColors: Record<Theme, string> = {
  climate: 'var(--theme-climate)',
  earth: 'var(--theme-earth)',
  resources: 'var(--theme-resources)',
  war: 'var(--theme-society)',
  displacement: 'var(--theme-society)',
  cohesion: 'var(--theme-society)',
  disease: 'var(--theme-people)',
  demography: 'var(--theme-people)',
  ai: 'var(--theme-ai)',
  'clean-energy': 'var(--theme-push-back)',
  wealth: 'var(--theme-push-back)',
  readiness: 'var(--theme-push-back)',
  finance: 'var(--theme-resources)',
  abundance: 'var(--abundance)',
  living: 'var(--theme-people)',
  energy: 'var(--theme-essentials)',
  water: 'var(--theme-essentials)',
  food: 'var(--theme-essentials)',
  health: 'var(--theme-essentials)',
  security: 'var(--theme-essentials)',
}

export const themeColor = ({ theme }: { theme: Theme }): string => themeColors[theme]
