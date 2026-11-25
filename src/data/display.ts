import type { FactorDisplay, Threshold } from '../model/types.ts'

const abundanceAccess: Threshold = { value: 90, label: 'Abundance 90%', severity: 'limit', basis: 'judgment' }
const collapseAccess: Threshold = { value: 50, label: 'Collapse 50%', severity: 'danger', basis: 'judgment' }

/**
 * How each factor is drawn: one plain sentence on why it matters, its own units, which way is good,
 * and the lines that push toward doom. Thresholds marked `published` come from a named source;
 * the others follow this site's definitions of abundance and collapse.
 */
export const displays: FactorDisplay[] = [
  // Climate and Earth limits
  {
    factorId: 'warming', symbol: '°C',
    why: 'Coral reefs have already passed their tipping point. Around 1.5 °C ice sheets and permafrost can start to tip, around 2 °C the Atlantic current that warms Europe is at risk, and tipping does not reverse.',
    min: 0,
    max: 5,
    better: 'lower',
    thresholds: [
      { value: 1.2, label: 'Reefs 1.2', severity: 'danger', basis: 'published' },
      { value: 1.5, label: 'Ice sheets 1.5', severity: 'danger', basis: 'published' },
      { value: 2, label: 'AMOC 2', severity: 'danger', basis: 'published' },
      { value: 3.5, label: 'Amazon 3.5', severity: 'danger', basis: 'published' },
    ],
  },
  {
    factorId: 'co2', symbol: ' ppm',
    why: 'CO₂ sets how much warming is locked in, and it stays in the air for centuries.',
    min: 280,
    max: 800,
    better: 'lower',
    thresholds: [
      { value: 350, label: 'Boundary 350', severity: 'limit', basis: 'published' },
      { value: 450, label: 'High risk 450', severity: 'danger', basis: 'published' },
    ],
  },
  {
    factorId: 'ocean_acidification', symbol: '',
    why: 'As seawater acidifies, shells and coral reefs dissolve, and the ocean food chain weakens from the bottom.',
    min: 1.8,
    max: 3.6,
    better: 'higher',
    thresholds: [
      { value: 2.86, label: 'Boundary', severity: 'limit', basis: 'published' },
      { value: 2.5, label: 'High risk', severity: 'danger', basis: 'published' },
    ],
  },
  {
    factorId: 'sea_level', symbol: ' cm',
    why: 'Rising seas flood deltas and coastal cities where hundreds of millions live, and keep rising for centuries.',
    min: 0,
    max: 120,
    better: 'lower',
    thresholds: [
      { value: 50, label: 'Half a metre', severity: 'limit', basis: 'judgment' },
      { value: 100, label: 'One metre', severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'arctic_sea_ice', symbol: 'M km²',
    why: 'Less summer ice means a darker, faster-warming Arctic and more erratic weather further south.',
    min: 0,
    max: 8,
    better: 'higher',
    thresholds: [{ value: 1, label: 'Ice-free', severity: 'danger', basis: 'published' }],
  },
  {
    factorId: 'permafrost', symbol: '%',
    why: 'Thawing permafrost releases carbon and methane that add warming no policy can recall.',
    min: 0,
    max: 100,
    better: 'lower',
    thresholds: [],
  },
  {
    factorId: 'biodiversity', symbol: '%',
    why: 'Falling wildlife numbers erode the pollination, fisheries and soils that food depends on.',
    min: 0,
    max: 100,
    better: 'lower',
    thresholds: [
      { value: 80, label: '80% decline', severity: 'limit', basis: 'judgment' },
      { value: 90, label: '90% decline', severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'planetary_boundaries', symbol: '/9',
    why: 'Each boundary marks a safe operating limit for a system Earth depends on. Seven of nine are now crossed.',
    min: 0,
    max: 9,
    better: 'lower',
    thresholds: [
      { value: 8, label: 'Eight of nine', severity: 'limit', basis: 'judgment' },
      { value: 9, label: 'All nine', severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'amoc', symbol: ' Sv',
    why: 'The Atlantic current that warms Europe and steers tropical rains. A collapse would reorganize climates for centuries.',
    min: 0,
    max: 25,
    better: 'higher',
    thresholds: [
      { value: 10, label: 'Shutdown course', severity: 'limit', basis: 'published' },
      { value: 6, label: 'Collapsed', severity: 'danger', basis: 'published' },
    ],
  },
  // Resources and energy
  {
    factorId: 'mineral_concentration', symbol: '%',
    why: 'When one country refines most of a mineral, a single decision can halt batteries, grids and motors worldwide.',
    min: 0,
    max: 100,
    better: 'lower',
    thresholds: [
      { value: 50, label: "One country half", severity: 'limit', basis: 'judgment' },
      { value: 85, label: "Near-monopoly", severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'copper_gap', symbol: '%',
    why: 'Grids, motors and buildings need copper. A shortfall slows every part of electrification.',
    min: 0,
    max: 50,
    better: 'lower',
    thresholds: [
      { value: 30, label: "IEA 2025 gap", severity: 'limit', basis: 'judgment' },
      { value: 40, label: "Net-zero gap", severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'solar_price', symbol: ' $/W',
    why: 'Cheaper solar puts clean, abundant electricity within reach of every country.',
    min: 0.05,
    max: 5,
    log: true,
    better: 'lower',
    thresholds: [
      { value: 0.2, label: "Price reversal", severity: 'limit', basis: 'judgment' },
      { value: 0.5, label: "Supply shock", severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'battery_price', symbol: ' $/kWh',
    why: 'Cheap storage turns intermittent sun and wind into reliable power.',
    min: 50,
    max: 1500,
    log: true,
    better: 'lower',
    thresholds: [
      { value: 100, label: "EV parity", severity: 'limit', basis: 'published' },
      { value: 150, label: "2022 spike", severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'clean_investment', symbol: '%',
    why: 'The share of energy money going to clean energy decides how fast emissions fall.',
    min: 0,
    max: 100,
    better: 'higher',
    thresholds: [
      { value: 79, label: "1.5\u00b0C pace", severity: 'limit', basis: 'judgment' },
      { value: 50, label: "Parity 1:1", severity: 'danger', basis: 'judgment' },
    ],
  },
  // War and society
  {
    factorId: 'nuclear_warheads', symbol: '',
    why: 'Arsenals are far above what it takes to end modern civilization. In one study, 100 small warheads on cities leave about 255 million people without food; a full US–Russia war, 5.3 billion. The chips give the chance of use by 2100.',
    min: 10,
    max: 100000,
    log: true,
    better: 'lower',
    thresholds: [],
  },
  {
    factorId: 'armed_conflicts', symbol: '',
    why: 'Wars involving at least one state. 2023, 2024 and 2025 each set a record. More wars mean more chances of escalation and more states that fail.',
    min: 0,
    max: 100,
    better: 'lower',
    thresholds: [
      { value: 65, label: '2025 record', severity: 'limit', basis: 'published' },
      { value: 80, label: 'Overstretch', severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'forced_displacement', symbol: 'M',
    why: 'Refugees, asylum-seekers and people displaced inside their own country. A symptom of collapse somewhere, and a strain wherever people arrive.',
    min: 0,
    max: 300,
    better: 'lower',
    thresholds: [
      { value: 123.2, label: 'End-2024 record', severity: 'limit', basis: 'published' },
      { value: 250, label: '3% uprooted', severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'amr_deaths', symbol: 'M',
    why: 'Deaths caused directly by drug-resistant bacteria. If antibiotics stop working, routine surgery and childbirth become dangerous again.',
    min: 0,
    max: 12,
    better: 'lower',
    thresholds: [
      { value: 2, label: 'Above forecast', severity: 'limit', basis: 'judgment' },
      { value: 10, label: 'No-action scenario', severity: 'danger', basis: 'published' },
    ],
  },
  {
    factorId: 'pandemic', symbol: '%',
    why: 'The share of humanity killed by the worst pandemic in five years. COVID-19 killed about 0.19%. A natural or engineered pathogen ten times worse would overwhelm health systems everywhere at once.',
    min: 0.01,
    max: 100,
    log: true,
    better: 'lower',
    thresholds: [
      { value: 1, label: '1% of humanity', severity: 'limit', basis: 'published' },
      { value: 10, label: '10%: catastrophe', severity: 'danger', basis: 'published' },
    ],
  },
  // Superintelligence
  {
    factorId: 'ai_horizon', symbol: ' h',
    why: 'How long a task, in hours of expert work, the best AI completes alone half the time. It doubles every few months. When it reaches months, superintelligence is close, for better or worse.',
    min: 0.01,
    max: 10000,
    log: true,
    better: 'lower',
    thresholds: [
      { value: 40, label: 'Work-week', severity: 'limit', basis: 'judgment' },
      { value: 167, label: 'Work-month', severity: 'limit', basis: 'published' },
      { value: 2000, label: 'Work-year', severity: 'limit', basis: 'judgment' },
    ],
  },
  {
    factorId: 'essentials_cost_world', symbol: '%',
    why: 'What food, household energy, water, health care and security cost the world together. Abundance, as Musk describes it, means pushing this under 10%.',
    min: 0,
    max: 60,
    better: 'lower',
    thresholds: [
      { value: 10, label: 'Abundance line', severity: 'limit', basis: 'judgment' },
      { value: 50, label: 'Half of output', severity: 'danger', basis: 'judgment' },
    ],
  },
  // The five essentials, world
  { factorId: 'electricity_access_world', symbol: '%', why: 'Abundance needs electricity for nine in ten people.', min: 0, max: 100, better: 'higher', thresholds: [collapseAccess, abundanceAccess] },
  { factorId: 'water_access_world', symbol: '%', why: 'Safe water at home, free from contamination and available when needed. A strict standard: many working countries are below half.', min: 0, max: 100, better: 'higher', thresholds: [abundanceAccess] },
  {
    factorId: 'undernourishment_world', symbol: '%',
    why: 'People who do not get enough calories to live a normal, active life.',
    min: 0,
    max: 60,
    better: 'lower',
    thresholds: [
      { value: 10, label: 'Abundance: 10%', severity: 'limit', basis: 'judgment' },
      { value: 50, label: 'Collapse: 50%', severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'life_expectancy_world', symbol: ' yrs',
    why: 'The simplest summary of whether health care, food, water and safety work together.',
    min: 40,
    max: 90,
    better: 'higher',
    thresholds: [
      { value: 75, label: 'Abundance: 75 years', severity: 'limit', basis: 'judgment' },
      { value: 65, label: '1995 world level', severity: 'limit', basis: 'judgment' },
      { value: 50, label: '1960 world level', severity: 'danger', basis: 'judgment' },
    ],
  },
  // The five essentials, per country
  { factorId: 'electricity_access', symbol: '%', why: 'Abundance needs electricity for nine in ten people.', min: 0, max: 100, better: 'higher', thresholds: [collapseAccess, abundanceAccess] },
  { factorId: 'water_access', symbol: '%', why: 'Safe water at home, free from contamination and available when needed. A strict standard: many working countries are below half.', min: 0, max: 100, better: 'higher', thresholds: [abundanceAccess] },
  {
    factorId: 'undernourishment', symbol: '%',
    why: 'People who do not get enough calories to live a normal, active life.',
    min: 0,
    max: 60,
    better: 'lower',
    thresholds: [
      { value: 10, label: 'Abundance: 10%', severity: 'limit', basis: 'judgment' },
      { value: 50, label: 'Collapse: 50%', severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'life_expectancy', symbol: ' yrs',
    why: 'The simplest summary of whether health care, food, water and safety work together.',
    min: 40,
    max: 90,
    better: 'higher',
    thresholds: [
      { value: 75, label: 'Abundance: 75 years', severity: 'limit', basis: 'judgment' },
      { value: 65, label: '1995 world level', severity: 'limit', basis: 'judgment' },
      { value: 50, label: '1960 world level', severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'peace', symbol: '',
    why: 'Safety from war, crime and persecution, measured by the Global Peace Index (1 is most peaceful).',
    min: 1,
    max: 4,
    better: 'lower',
    thresholds: [
      { value: 2, label: 'Abundance: 2.0', severity: 'limit', basis: 'judgment' },
      { value: 3, label: 'War-zone level', severity: 'danger', basis: 'judgment' },
    ],
  },
  // Country drivers
  {
    factorId: 'climate_vulnerability', symbol: '',
    why: 'How exposed and sensitive food, water, health and housing are to climate change.',
    min: 0.2,
    max: 0.75,
    better: 'lower',
    thresholds: [],
  },
  {
    factorId: 'water_stress', symbol: '',
    why: 'The share of renewable water a country uses each year. Above 80%, one dry year can mean shortages.',
    min: 0,
    max: 5,
    better: 'lower',
    thresholds: [
      { value: 3, label: 'High', severity: 'limit', basis: 'published' },
      { value: 4, label: 'Extremely high', severity: 'danger', basis: 'published' },
    ],
  },
  {
    factorId: 'aging', symbol: '',
    why: 'Retirees per 100 working-age people. More retirees means fewer workers for care, pensions and growth.',
    min: 0,
    max: 110,
    better: 'lower',
    thresholds: [
      { value: 50, label: '2 workers per elder', severity: 'limit', basis: 'judgment' },
      { value: 100, label: '1 worker per elder', severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'fertility', symbol: '',
    why: 'Births per woman. About 2.1 keeps a population stable without migration. Far below it each generation is smaller and the country ages fast; far above it, the population grows fast.',
    min: 0.5,
    max: 7,
    better: 'higher',
    thresholds: [
      { value: 2.1, label: 'Replacement 2.1', severity: 'limit', basis: 'published' },
      { value: 1.4, label: 'Ultra-low 1.4', severity: 'danger', basis: 'published' },
    ],
  },
  {
    factorId: 'wealth', symbol: ' $',
    why: 'Income per person, adjusted for prices. Richer countries can buy their way through more shocks.',
    min: 500,
    max: 150000,
    log: true,
    better: 'higher',
    thresholds: [
      { value: 3030, label: "$8.30-a-day GDP", severity: 'limit', basis: 'published' },
      { value: 1095, label: "Poverty-line GDP", severity: 'danger', basis: 'published' },
    ],
  },
  {
    factorId: 'readiness', symbol: '',
    why: 'Economic, governance and social capacity to turn money into adaptation.',
    min: 0,
    max: 1,
    better: 'higher',
    thresholds: [
      { value: 0.4, label: 'World median', severity: 'limit', basis: 'judgment' },
      { value: 0.25, label: 'Bottom tenth', severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'migrant_share', symbol: '%',
    why: 'Residents born abroad. Shown for context, not scored.',
    min: 0,
    max: 30,
    better: 'lower',
    thresholds: [],
  },
  {
    factorId: 'food_insecurity', symbol: '%',
    why: 'People who skip meals or eat less for lack of money. Shown for context: no data for China or India.',
    min: 0,
    max: 100,
    better: 'lower',
    thresholds: [],
  },
  {
    factorId: 'homicide_rate', symbol: '',
    why: 'Murders per 100,000 people a year: a direct measure of whether people are safe in daily life. Gun violence can rise sharply even when the total stays low.',
    min: 0,
    max: 40,
    better: 'lower',
    thresholds: [
      { value: 10, label: '"Epidemic" 10', severity: 'limit', basis: 'judgment' },
      { value: 20, label: 'Very high', severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'political_stability', symbol: '',
    why: 'How likely the government is to be destabilized by unrest, violence or terrorism, on a scale from −2.5 to 2.5. Below 0 is less stable than the typical country.',
    min: -2.5,
    max: 2.5,
    better: 'higher',
    thresholds: [
      { value: 0, label: 'World middle', severity: 'limit', basis: 'judgment' },
      { value: -1, label: 'Fragile', severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'government_effectiveness', symbol: '',
    why: 'Whether public services, the civil service and policies actually work, on a scale from −2.5 to 2.5.',
    min: -2.5,
    max: 2.5,
    better: 'higher',
    thresholds: [
      { value: 0, label: 'Below average', severity: 'limit', basis: 'judgment' },
      { value: -1, label: 'Fragile zone', severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'public_debt', symbol: '%',
    why: 'What the state owes, against a year of national output. High debt leaves less room to absorb the next shock.',
    min: 0,
    max: 250,
    better: 'lower',
    thresholds: [
      { value: 60, label: "EU 60% reference", severity: 'limit', basis: 'published' },
      { value: 90, label: "EU 90% safeguard", severity: 'danger', basis: 'published' },
    ],
  },
  {
    factorId: 'interest_burden', symbol: '%',
    why: 'The share of government income spent on interest. Every point here is a point not spent on essentials.',
    min: 0,
    max: 40,
    better: 'lower',
    thresholds: [
      { value: 10, label: "UNCTAD 10% line", severity: 'limit', basis: 'published' },
      { value: 18, label: "IMF-WB LIC 18%", severity: 'danger', basis: 'published' },
    ],
  },
  {
    factorId: 'energy_imports', symbol: '%',
    why: 'How much of its energy a country buys abroad. Importers pay world prices and depend on suppliers in a crisis.',
    min: -100,
    max: 100,
    better: 'lower',
    thresholds: [
      { value: 0, label: "Net importer", severity: 'limit', basis: 'published' },
      { value: 50, label: "Half imported", severity: 'limit', basis: 'judgment' },
      { value: 75, label: "Three-quarters", severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'essentials_cost', symbol: '%',
    why: 'What food, energy, water, health and security cost together. Abundance means pushing this under 10% of national income.',
    min: 0,
    max: 60,
    better: 'lower',
    thresholds: [
      { value: 10, label: "Abundance line", severity: 'limit', basis: 'judgment' },
      { value: 50, label: "Half of output", severity: 'danger', basis: 'judgment' },
    ],
  },
  {
    factorId: 'health_spending', symbol: '%',
    why: 'Public and private health spending. One of the costs that abundance would have to shrink.',
    min: 0,
    max: 20,
    better: 'lower',
    thresholds: [],
  },
  {
    factorId: 'military_spending', symbol: '%',
    why: 'Defence spending. Part of what security costs.',
    min: 0,
    max: 10,
    better: 'lower',
    thresholds: [],
  },
  // How people live
  {
    factorId: 'living_standard', symbol: '',
    why: 'What a person can actually consume in a year, with today’s rich-world average set to 100. Abundance, as this site defines it, is 500.',
    min: 1,
    max: 1000,
    log: true,
    better: 'higher',
    thresholds: [
      { value: 100, label: 'Rich world today', severity: 'goal', basis: 'published' },
      { value: 500, label: 'Abundance 500', severity: 'goal', basis: 'judgment' },
    ],
  },
  {
    factorId: 'consumption_per_person', symbol: ' $',
    why: 'Everything households buy and use in a year, per person, adjusted for prices so that a dollar buys the same everywhere.',
    min: 300,
    max: 200000,
    log: true,
    better: 'higher',
    thresholds: [
      { value: 3030, label: '$8.30 a day', severity: 'limit', basis: 'published' },
      { value: 1095, label: '$3 a day', severity: 'danger', basis: 'published' },
    ],
  },
  {
    factorId: 'energy_per_person', symbol: ' kWh',
    why: 'All the energy a person commands in a year: fuel, heat and electricity. Nearly everything else in a living standard is made with it.',
    min: 200,
    max: 250000,
    log: true,
    better: 'higher',
    thresholds: [],
  },
  {
    factorId: 'healthy_life_years', symbol: ' yrs',
    why: 'Years lived in good health, not just years lived.',
    min: 40,
    max: 80,
    better: 'higher',
    thresholds: [],
  },
  {
    factorId: 'health_coverage', symbol: '',
    why: 'Whether people actually get essential care: vaccines, safe childbirth, treatment for infections and chronic disease, a hospital within reach.',
    min: 0,
    max: 100,
    better: 'higher',
    thresholds: [],
  },
  {
    factorId: 'hours_worked', symbol: ' h',
    why: 'The time a living standard costs. Richer countries tend to consume more while working fewer hours.',
    min: 1200,
    max: 2800,
    better: 'lower',
    thresholds: [],
  },
  {
    factorId: 'feel_safe', symbol: '%',
    why: 'People who say they feel safe walking alone at night where they live: security as people experience it.',
    min: 0,
    max: 100,
    better: 'higher',
    thresholds: [],
  },
]

export function displayFor({ factorId }: { factorId: string }): FactorDisplay {
  const found = displays.find((display) => display.factorId === factorId)
  if (found === undefined) throw new Error(`no display for ${factorId}`)
  return found
}
