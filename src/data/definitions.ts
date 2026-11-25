/**
 * The events every probability on the site refers to. They are fixed within a version: evidence updates
 * the probabilities, never the definitions. A change of definitions is recorded in history.ts.
 */
export const horizon = 2100

export const definitions = {
  essentials:
    'The five essentials are energy (reliable electricity and clean cooking), fresh water (safe drinking water and sanitation), food (enough nutritious food), health (care that keeps life expectancy at or above 75 years), and security (physical safety from war, violence and persecution).',
  superintelligence:
    'Superintelligence (SI) means AI systems that outperform the best humans at virtually every cognitive task, including science, engineering and strategy, and that are deployed widely enough to act in the economy. “If superintelligence arrives” assumes this happens before 2100; “if it never does” assumes it does not.',
} as const


/** Abundance needs a living standard of at least this many times today's rich-world average. */
export const abundanceMultiple = 5

/** A place is better off, or in decline, once its living standard moves by more than this share of today's. */
export const outcomeStep = 0.25

/** The danger scale every hazard card is read on. */
export const dangerScale = [
  { level: 0, name: 'None', share: 'nobody', reference: '' },
  { level: 1, name: 'Limited', share: 'under 1% of humanity', reference: 'COVID-19' },
  { level: 2, name: 'Serious', share: '1 to 10% of humanity', reference: 'the Second World War, the 1918 flu' },
  { level: 3, name: 'Severe', share: '10 to 50% of humanity', reference: 'the Black Death in Europe' },
  { level: 4, name: 'Global catastrophe', share: 'over 50% of humanity, recovery possible', reference: 'no precedent' },
  { level: 5, name: 'Doom', share: 'extinction, or no recovery within a century', reference: 'no precedent' },
] as const

/** The potential scale technology cards are read on: the mirror of the danger scale. */
export const potentialScale = [
  { level: 0, name: 'None', share: 'nobody' },
  { level: 1, name: 'Limited', share: 'under 1% of humanity moves up one outcome' },
  { level: 2, name: 'Useful', share: '1 to 10% of humanity moves up one outcome' },
  { level: 3, name: 'Large', share: '10 to 50% of humanity moves up one outcome' },
  { level: 4, name: 'Transformative', share: 'over 50% of humanity moves up one outcome' },
  { level: 5, name: 'Abundance', share: 'an essential becomes nearly free for everyone' },
] as const

export const scaleDefinitions = {
  danger:
    'A danger level is the share of humanity that dies or lastingly loses decent living conditions. Level 1 is under 1%, level 2 is 1 to 10%, level 3 is 10 to 50%, level 4 is over 50% with recovery still possible, and level 5 is doom. Every hazard is read on this one scale, so cards can be compared.',
  decent:
    'Decent living conditions mean having all five essentials: energy, fresh water, food, health and security.',
  doom:
    'Doom is level 5: human extinction, or a collapse of civilization that is not expected to be undone within a century.',
  rootCause:
    'Each possible future has one worst level and one root cause: the cause that started the chain, not the one that struck the final blow. A drought that leads to a war counts for climate. Because every future has exactly one root cause, the seven causes add up to 100%.',
  livingStandard:
    'Living standard is real household consumption per person: what households actually consume, in comparable prices. Today\'s rich-world average is set to 100. Energy per person, healthy life years, floor area and free time are shown beside it as physical checks.',
  superintelligence: definitions.superintelligence,
} as const

/** The six outcomes of a place in 2100, measured against its own living standard today. */
export const outcomeDefinitions = {
  abundance: `Abundance: at least 9 in 10 residents live at least ${abundanceMultiple} times better than the rich world's average today.`,
  better: 'Better: the living standard is at least a quarter above today\'s, without reaching abundance.',
  stagnation: 'Stagnation: the living standard is within a quarter of today\'s, up or down.',
  decline: 'Decline: people are a quarter to a half poorer than today.',
  collapse: 'Collapse: people are more than twice as poor as today, or a majority loses one of the five essentials for five years or more.',
  doom: 'Doom: the world reaches level 5. Doom is global, so it is the same for every place.',
} as const

export const outcomeNames = {
  abundance: 'Abundance',
  better: 'Better',
  stagnation: 'Stagnation',
  decline: 'Decline',
  collapse: 'Collapse',
  doom: 'Doom',
} as const

/** The seven root causes. Their shares of any danger level add up to 100%. */
export const causeDefinitions = {
  climate: { name: 'Climate and Earth systems', text: 'Warming, the oceans, ice, harvests and the living world, and the famines, migrations and conflicts they set off.' },
  resources: { name: 'Resources and energy', text: 'Running short of energy, metals, water or soil, or being cut off from them, and what follows.' },
  war: { name: 'War', text: 'War between states: nuclear, biological or conventional.' },
  civil: { name: 'Civil war and state breakdown', text: 'Civil, religious and ethnic wars, and states that stop working.' },
  disease: { name: 'Pandemics and disease', text: 'Natural pandemics, accidents, and bacteria that no longer respond to drugs. A pandemic released as a weapon of war counts for war.' },
  ai: { name: 'AI takeover', text: 'AI systems that kill or disempower people on their own. AI used as a weapon by people counts for war or disease.' },
  natural: { name: 'Natural disasters and the unknown', text: 'Asteroids, supervolcanoes, solar storms, and causes nobody has thought of.' },
} as const
