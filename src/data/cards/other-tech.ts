import type { Card } from '../../model/types.ts'

const woa = 'https://woa.un.org/third-world-ocean-assessment/socioecological-systems/sustainable-and-inclusive-ocean-economy/chapter-8-desalination'
const meed = 'https://guest.meed.com/veolia-ceo-says-water-tariffs-have-room-to-improve'

const wbYield = 'https://data.worldbank.org/indicator/AG.YLD.CREL.KG'

const fda = 'https://www.fda.gov/drugs/novel-drug-approvals-fda/novel-drug-approvals-2025'

const ifr = 'https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years'

const socdr = 'https://www.stateofcdr.org/asset/State-of-Carbon-Dioxide-Removal-Edition-3_June2026.pdf'
const exeter = 'https://news.exeter.ac.uk/research/limiting-global-warming-to-1-5c-would-save-billions-from-dangerously-hot-climate'
const coolingSource = 'IPCC AR6 WGI: 0.45 °C per 1,000 Gt CO₂; Lenton et al. 2023: 140 million people per 0.1 °C'

const nasem = 'https://www.nationalacademies.org/read/26723/chapter/3'

/**
 * Other technologies, researched November 2026. All six use the potential scale: the share of humanity
 * the technology alone could move up at least one outcome. No source publishes odds for any of these
 * metrics in 2100, so every curve is left to the judges; the scenario values that exist are marks.
 */
export const cards: Card[] = [
  {
    id: 'desalination',
    name: 'Desalination',
    summary: 'What it costs to turn seawater into fresh water: cheap enough, it can water dry coastal cities and then their farms, though carrying it far inland stays costly.',
    group: 'technology',
    scale: 'potential',
    counters: ['resources', 'climate'],
    statistic: 'value-in-2100',
    metric: 'Cost of fresh water from new large seawater plants, in 2025 dollars',
    unit: '$/m³',
    decimals: 2,
    axis: { min: 0.02, max: 5, log: true },
    today: {
      value: 0.5,
      year: 2025,
      source: 'MEED, April 2025 (Veolia: tariffs now under $0.5/m³); UN Third World Ocean Assessment: $0.5/m³ at large plants',
      url: meed,
    },
    bands: [
      { from: 0.02, to: 0.15, level: 3, label: 'Cheap enough to irrigate farms on dry coasts, not only cities', basis: 'judged' },
      {
        from: 0.15,
        to: 2,
        level: 2,
        label: 'Drinking water for dry coastal cities, as for 300 million today',
        basis: 'derived',
        source: 'UN Third World Ocean Assessment, chapter 8: more than 300 million people supplied, of 8.2 billion (UN WPP 2024)',
        url: woa,
      },
      { from: 2, to: 5, level: 1, label: 'Only islands, ships and rich enclaves can afford it', basis: 'judged' },
    ],
    marks: [
      { value: 0.03, label: 'Energy floor at 3 ¢ per kWh' },
      { value: 1.25, label: 'Small plants today' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Desalination',
    siNote: 'Superintelligence could design better membranes and cheaper brine handling within years. Plants, intakes and pipes still take years to build, physics sets a floor of about 1 kWh per cubic metre, and pumping water far inland stays costly.',
  },
  {
    id: 'food_tech',
    name: 'Food technology',
    summary: 'How much grain a hectare of farmland yields, the main way new crops feed more people; fermented and cultivated proteins could add to it by freeing land now used to feed animals.',
    group: 'technology',
    scale: 'potential',
    counters: ['climate', 'resources'],
    statistic: 'value-in-2100',
    metric: 'World average cereal yield',
    unit: 't/ha',
    decimals: 1,
    axis: { min: 1, max: 16 },
    today: { value: 4.23, year: 2023, source: 'World Bank (FAO data), cereal yield: 4,229 kg per hectare', url: wbYield },
    bands: [
      { from: 1, to: 5.3, level: 1, label: 'Yields fall behind 10 billion people; little gained beyond today', basis: 'judged' },
      { from: 5.3, to: 8, level: 2, label: 'Harvests keep pace with population and some warming', basis: 'judged' },
      { from: 8, to: 16, level: 3, label: 'Grain far cheaper; the poorest eat better and farmland can shrink', basis: 'judged' },
    ],
    marks: [
      { value: 1.4, label: 'World, 1961' },
      { value: 1.6, label: 'Sub-Saharan Africa today' },
      { value: 8.3, label: 'United States today' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Crop yield',
    siNote: 'Superintelligence could design crop varieties, soil microbes and fermentation strains quickly. Each new crop still needs seasons of field trials, seed multiplication and approval, farmers adopt over years, and protein factories must be built at food scale.',
  },
  {
    id: 'medicine',
    name: 'Drug discovery and medicine',
    summary: 'How many new medicines reach the market each year: better drugs could end diseases that kill millions, but each must still pass years of trials on patients and then reach them.',
    group: 'technology',
    scale: 'potential',
    counters: ['disease'],
    statistic: 'value-in-2100',
    metric: 'Novel drugs approved per year by the US Food and Drug Administration (drug centre, CDER)',
    unit: 'drugs/yr',
    decimals: 0,
    axis: { min: 5, max: 2000, log: true },
    today: { value: 46, year: 2025, source: 'US FDA, Novel Drug Approvals for 2025: 46 approved by CDER', url: fda },
    bands: [
      { from: 5, to: 30, level: 1, label: 'Fewer new medicines than today; gains come from wider access', basis: 'judged' },
      { from: 30, to: 100, level: 2, label: "Today's pace: a few big advances a decade", basis: 'judged' },
      { from: 100, to: 500, level: 3, label: 'Treatments for most major killers; clinics and prices set the pace', basis: 'judged' },
      { from: 500, to: 2000, level: 4, label: 'Most diseases, perhaps ageing, treatable; access decides who gains', basis: 'judged' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Drug development',
    siNote: 'Superintelligence could pick targets and design molecules in months. Each drug must still be tested on patients for years, made in factories, approved and delivered by health workers, so access more than discovery limits the gain.',
  },
  {
    id: 'robots',
    name: 'Robots doing physical work',
    summary: 'How many robots work in factories, farms, warehouses and homes: enough of them could make building, farming and care cheap, but today there is one industrial robot per 800 workers.',
    group: 'technology',
    scale: 'potential',
    counters: ['resources', 'climate'],
    statistic: 'value-in-2100',
    metric: 'Industrial and humanoid robots in use worldwide',
    unit: 'million',
    decimals: 1,
    axis: { min: 1, max: 30000, log: true },
    today: { value: 4.66, year: 2024, source: 'International Federation of Robotics, World Robotics 2025: 4,664,000 industrial robots', url: ifr },
    bands: [
      { from: 1, to: 50, level: 1, label: 'Robots stay mostly in car and electronics factories', basis: 'judged' },
      { from: 50, to: 500, level: 2, label: 'Common in factories, warehouses and farms; goods get cheaper', basis: 'judged' },
      { from: 500, to: 5000, level: 3, label: 'One robot per few workers; most heavy work is automated', basis: 'judged' },
      { from: 5000, to: 30000, level: 4, label: 'More robots than workers: physical work is cheap everywhere', basis: 'judged' },
    ],
    marks: [
      { value: 1000, label: 'Morgan Stanley: humanoids by 2050' },
      { value: 3737, label: 'Human workers today' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Robot',
    siNote: 'Superintelligence could solve the control software that holds robots back within a few years. Billions of robots still need factories, motors, batteries and metals built over decades, and who owns them decides who gains.',
  },
  {
    id: 'carbon_removal',
    name: 'Carbon dioxide removal',
    summary: "How much CO₂ is taken back out of the air each year, by forests, soils and machines: climate goals need several times today's amount, and each tonne removed cools the future only slightly.",
    group: 'technology',
    scale: 'potential',
    counters: ['climate'],
    statistic: 'value-in-2100',
    metric: 'CO₂ removed from the air and stored each year, all methods',
    unit: 'Gt CO₂/yr',
    decimals: 1,
    axis: { min: 0.5, max: 100, log: true },
    today: {
      value: 2.2,
      year: 2023,
      source: 'State of Carbon Dioxide Removal, 3rd edition, June 2026: mean of 2014–2023, 99.9% from forests and soils',
      url: socdr,
    },
    bands: [
      { from: 0.5, to: 2, level: 1, label: "Below today's removal: cools 2100 by under 0.07 °C", basis: 'derived', source: coolingSource, url: exeter },
      { from: 2, to: 40, level: 2, label: 'Cools 2100 by 0.07 to 0.7 °C; spares 1 to 10% from dangerous heat', basis: 'derived', source: coolingSource, url: exeter },
      { from: 40, to: 100, level: 3, label: 'Cools 2100 by over 0.7 °C; spares over a billion from dangerous heat', basis: 'derived', source: coolingSource, url: exeter },
    ],
    marks: [
      { value: 8.8, label: '1.5 °C pathways, 2050' },
      { value: 15.3, label: '1.5 °C pathways, 2100' },
      { value: 23.6, label: 'Delayed-action pathways, 2100' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Carbon dioxide removal',
    siNote: 'Superintelligence could find cheaper sorbents and rock-weathering methods quickly. Removal at gigatonne scale still needs plants, pipelines and wells built and powered: 10 Gt a year by direct air capture would take over 40% of the electricity the world makes today.',
  },
  {
    id: 'materials',
    name: 'AI-driven materials discovery',
    summary: 'How long a new material, such as a battery chemistry or a catalyst, takes from discovery to first sale: faster materials bring cheaper energy, water and food sooner.',
    group: 'technology',
    scale: 'potential',
    counters: ['resources', 'climate'],
    statistic: 'value-in-2100',
    metric: 'Years from discovering a new material to its first commercial use',
    unit: 'years',
    decimals: 0,
    axis: { min: 0.5, max: 40, log: true },
    today: { value: 15, year: 2023, source: 'US National Academies, 2023: a 10- to 20-year development cycle (midpoint shown)', url: nasem },
    bands: [
      { from: 0.5, to: 2, level: 3, label: 'New batteries, catalysts and membranes reach use within two years', basis: 'judged' },
      { from: 2, to: 10, level: 2, label: 'Faster than today: energy and water technology improve sooner', basis: 'judged' },
      { from: 10, to: 40, level: 1, label: "Today's pace: each new material takes one or two decades", basis: 'judged' },
    ],
    marks: [{ value: 11, label: 'Lithium-ion: 1980 cathode, 1991 sale' }],
    published: { noSi: [], si: [] },
    wikipedia: 'Materials informatics',
    siNote: 'Superintelligence could predict useful materials in days and plan their synthesis in robot labs. Making them at scale, proving they last for years in real use and building the factories still take time, and that sets most of the pace.',
  },
]
