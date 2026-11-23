import type { Elasticity } from '../model/types.ts'

/**
 * The site's working hypothesis on what superintelligence can and cannot speed up.
 * Authored judgment, open to challenge, and deliberately not shown to the judge.
 */
export type SiDomain = {
  domain: string
  accelerates: string
  bottleneck: string
  by2050: Elasticity
  by2100: Elasticity
}

export const siDomains: SiDomain[] = [
  {
    domain: 'Energy',
    accelerates: 'Materials for solar, batteries and reactors; fusion engineering; grid planning and control.',
    bottleneck: 'Building factories, transmission lines and plants. Permits, capital and land move at human speed.',
    by2050: 'medium',
    by2100: 'high',
  },
  {
    domain: 'Fresh water',
    accelerates: 'Cheaper desalination and reuse, as a side effect of cheaper energy; leak detection; irrigation efficiency.',
    bottleneck: 'Pipes and utilities in poor regions; shared rivers such as the Nile are a political problem.',
    by2050: 'medium',
    by2100: 'high',
  },
  {
    domain: 'Food',
    accelerates: 'Crop breeding and gene editing, precision farming, pest and disease forecasting.',
    bottleneck: 'Land, soil and water; heat stress on crops; most hunger today comes from conflict and poverty.',
    by2050: 'medium',
    by2100: 'medium',
  },
  {
    domain: 'Health',
    accelerates: 'Target discovery, molecule design, diagnostics, trial design and recruitment.',
    bottleneck: 'Clinical trials on real patients take years and cost a lot, and regulators, manufacturing and health workers set the pace. A new drug is not a delivered treatment.',
    by2050: 'medium',
    by2100: 'high',
  },
  {
    domain: 'Security',
    accelerates: 'Verification of arms control, cyber defence, early warning.',
    bottleneck: 'Also accelerates offence: autonomous weapons, cyberattacks, surveillance, and concentrated power for whoever controls the systems.',
    by2050: 'two-sided',
    by2100: 'two-sided',
  },
  {
    domain: 'Climate',
    accelerates: 'Cheaper clean energy lowers future emissions; better carbon-removal chemistry.',
    bottleneck: 'Warming already locked in. Removing gigatonnes of CO₂ is an energy and logistics task, not an idea.',
    by2050: 'low',
    by2100: 'medium',
  },
  {
    domain: 'Oceans, permafrost, biodiversity',
    accelerates: 'Monitoring and better land-use planning.',
    bottleneck: 'Ocean chemistry recovers over centuries, thawed permafrost carbon cannot be put back, and extinct species stay extinct.',
    by2050: 'low',
    by2100: 'low',
  },
  {
    domain: 'Materials and minerals',
    accelerates: 'Finding deposits, new processing chemistry, substitutes for scarce elements, recycling.',
    bottleneck: 'Opening a mine takes well over a decade, and refining is concentrated in a few countries.',
    by2050: 'medium',
    by2100: 'high',
  },
  {
    domain: 'Demography',
    accelerates: 'Robots and AI can stand in for shrinking workforces.',
    bottleneck: 'Fertility is a social choice; care for the elderly is labor-intensive and personal.',
    by2050: 'low',
    by2100: 'medium',
  },
  {
    domain: 'Institutions and cohesion',
    accelerates: 'Better public services and administration.',
    bottleneck: 'Trust, legitimacy and elites. AI-driven persuasion and disinformation can also deepen divisions.',
    by2050: 'two-sided',
    by2100: 'two-sided',
  },
]
