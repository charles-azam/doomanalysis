/**
 * The events every probability on the site refers to. They are fixed: evidence updates
 * the probabilities, never the definitions.
 */
export const horizon = 2100

export const definitions = {
  essentials:
    'The five essentials are energy (reliable electricity and clean cooking), fresh water (safe drinking water and sanitation), food (enough nutritious food), health (care that keeps life expectancy at or above 75 years), and security (physical safety from war, violence and persecution).',
  abundance:
    'A country reaches abundance if, in 2100, at least 90% of its residents have reliable, affordable access to all five essentials, and it has not collapsed along the way. For the world, abundance means at least 90% of humanity has them.',
  collapse:
    'A country collapses if, at any point before 2100, a majority of its residents lose reliable access to at least one of the five essentials for five years or more. Losing a single essential is enough. Global doom counts as collapse for every country.',
  doom:
    'Global doom means human extinction, or an irreversible civilization-wide collapse before 2100: most of humanity loses the five essentials, and global civilization is not expected to regain its 2025 capabilities within a century.',
  muddle: 'Muddling through is everything else: no collapse, but not abundance either.',
  superintelligence:
    'Superintelligence (SI) means AI systems that outperform the best humans at virtually every cognitive task, including science, engineering and strategy, and that are deployed widely enough to act in the economy. “If superintelligence arrives” assumes this happens before 2100; “if it never does” assumes it does not.',
} as const

export const pathwayDefinitions = {
  ai: 'Doom caused mainly by AI systems escaping human control or being used to disempower humanity.',
  nuclear: 'Doom caused mainly by nuclear war, including its effects on climate and harvests.',
  pandemic: 'Doom caused mainly by a natural or engineered pandemic.',
  climate: 'Doom caused mainly by climate change and Earth-system breakdown (ocean, ice, biosphere, food systems).',
  resources: 'Doom caused mainly by the failure of energy, materials, water or infrastructure systems.',
  other: 'Every other route, including causes nobody has thought of.',
} as const
