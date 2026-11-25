import type { Card } from '../../model/types.ts'

const nrc = 'https://www.nationalacademies.org/read/12842/chapter/4'
const nrcName = 'National Research Council, Defending Planet Earth, 2010'
const fastFacts = 'https://www.nasa.gov/solar-system/asteroids/asteroid-fast-facts/'
const nugent = 'https://arxiv.org/html/2508.02418v2'
const ord = 'https://www.cambridge.org/core/product/D8816A79BEF5A4C30A3E44FD8D768622'
const tunguska = 'https://www.nasa.gov/solar-system/tunguska-revisited-111-year-old-mystery-impact-inspires-new-more-optimistic-asteroid-predictions/'

const eos = 'https://eos.org/editors-vox/are-we-prepared-for-the-next-mega-eruption'
const birmingham = 'https://www.birmingham.ac.uk/news-archive/2022/risk-of-volcano-catastrophe-a-roll-of-the-dice-say-experts'
const papale = 'https://doi.org/10.1038/s41598-018-25286-y'
const lin = 'https://cp.copernicus.org/articles/18/485/2022/'
const rougier = 'https://research-information.bris.ac.uk/en/publications/the-global-magnitude-frequency-relationship-for-large-explosive-v'

const chapman = 'https://nora.nerc.ac.uk/id/eprint/526698/'
const love2021 = 'https://www.usgs.gov/publications/extreme-event-magnetic-storm-probabilities-derived-rank-statistics-historical-dst'
const love1921 = 'https://www.usgs.gov/publications/intensity-and-impact-new-york-railroad-superstorm-may-1921'
const lloyds = 'https://www.insurancejournal.com/news/international/2013/05/23/293060.htm'

/**
 * Natural disasters, researched November 2026. None of the three depends on warming.
 * Every chance is a published rate (per year or per century) turned into a chance over the
 * 75 years to 2100; the arithmetic is in each explainer.
 */
export const cards: Card[] = [
  {
    id: 'asteroid',
    name: 'Asteroid or comet impact',
    summary: 'The largest space rock to hit Earth before 2100. Small ones burst in the sky, while one a few kilometres wide could dim the sun for years and kill a large share of humanity, though that chance is tiny.',
    group: 'natural',
    scale: 'danger',
    statistic: 'worst-by-2100',
    metric: 'Diameter of the largest object to hit Earth',
    unit: 'm',
    decimals: 0,
    axis: { min: 10, max: 20000, log: true },
    today: { value: 50, year: 1908, label: 'Tunguska, 1908', source: 'NASA, Tunguska revisited, 2019 (50 to 80 m)', url: tunguska },
    bands: [
      { from: 10, to: 25, level: 0, label: 'Burns up or bursts high: broken windows and injuries at worst', basis: 'published', source: 'NASA, Asteroid Fast Facts', url: fastFacts },
      { from: 25, to: 1000, level: 1, label: 'Local to regional destruction if it hits land; most fall at sea', basis: 'published', source: 'NASA, Asteroid Fast Facts: local damage from 25 m to 1 km', url: fastFacts },
      { from: 1000, to: 1500, level: 2, label: 'Dust and smoke may cool the whole planet and cut harvests', basis: 'judged' },
      { from: 1500, to: 5000, level: 3, label: 'Global catastrophe: harvests fail for years, a tenth or more die', basis: 'derived', source: `${nrcName}, fatality model (10% at 1.5 km, all at 10 km)`, url: nrc },
      { from: 5000, to: 10000, level: 4, label: 'Most of humanity starves in the dark; survivors can rebuild', basis: 'judged' },
      { from: 10000, to: 20000, level: 5, label: 'Mass extinction, as for the dinosaurs 66 million years ago', basis: 'published', source: `${nrcName}, table 2.1 and fatality model`, url: nrc },
    ],
    marks: [
      { value: 20, label: 'Chelyabinsk, 2013' },
      { value: 140, label: 'NASA search threshold' },
    ],
    published: {
      noSi: [
        { value: 25, above: 0.31, basis: 'derived', source: `${nrcName}: one impact per 200 years`, url: nrc },
        { value: 50, above: 0.037, basis: 'derived', source: `${nrcName}: one impact per 2,000 years`, url: nrc },
        { value: 140, above: 0.0017, basis: 'derived', source: 'Harris & Chodas 2021 impact rate (in Nugent et al. 2025), times the share NASA has yet to find', url: nugent },
        { value: 1000, above: 0.0000063, basis: 'derived', source: 'Ord 2020, cited in ÓhÉigeartaigh 2025: 1 in 120,000 per century', url: ord },
      ],
      si: [],
    },
    wikipedia: 'Impact event',
    siNote: 'Superintelligence could find the remaining objects sooner and plan better deflection missions. A deflection still needs years of warning and a rocket built in time, and a long-period comet may give too little warning for that.',
  },
  {
    id: 'supervolcano',
    name: 'Largest volcanic eruption',
    summary: 'The biggest eruption before 2100, by the volume of ash and rock thrown out. A very large one veils the sun for years and can ruin harvests far from the volcano.',
    group: 'natural',
    scale: 'danger',
    statistic: 'worst-by-2100',
    metric: 'Volume of ash and rock thrown out by the largest eruption',
    unit: 'km³',
    decimals: 0,
    axis: { min: 1, max: 10000, log: true },
    today: { value: 100, year: 1815, label: 'Tambora, 1815', source: 'Eos (AGU), Are we prepared for the next mega eruption?, 2018', url: eos },
    bands: [
      { from: 1, to: 300, level: 1, label: 'Deaths near the volcano; a cold year or two, some harvests fail', basis: 'derived', source: 'Tambora 1815: about 100,000 deaths (University of Birmingham, 2022) among 1 billion people', url: birmingham },
      { from: 300, to: 1000, level: 2, label: 'Several cold years; famine where food is already short', basis: 'judged' },
      { from: 1000, to: 10000, level: 3, label: 'Volcanic winter for years; harvests fail across the north', basis: 'judged' },
    ],
    marks: [
      { value: 10, label: 'Pinatubo class (VEI 6)' },
      { value: 2800, label: 'Toba, 74,000 years ago' },
    ],
    published: {
      noSi: [
        { value: 10, above: 0.66, basis: 'derived', source: 'Papale 2018: one eruption of VEI 6 or more per 70 years', url: papale },
        { value: 100, above: 0.11, basis: 'derived', source: 'Lin et al. 2022, ice cores: 1.6 Tambora-size eruptions per 1,000 years', url: lin },
        { value: 1000, above: 0.0044, basis: 'derived', source: 'Rougier et al. 2018: one super-eruption per 17,000 years', url: rougier },
      ],
      si: [],
    },
    wikipedia: 'Volcanic winter',
    siNote: 'Better eruption forecasts, and food that grows without sunlight, could soften a volcanic winter. Nothing can stop a large eruption, and feeding billions through dark years needs stocks and factories built beforehand.',
  },
  {
    id: 'solar_storm',
    name: 'Solar storm',
    summary: 'The strongest magnetic storm the Sun sends at Earth before 2100. A very big one could black out whole regions for weeks or months, though it would kill few people directly.',
    group: 'natural',
    scale: 'danger',
    statistic: 'worst-by-2100',
    metric: "Peak drop in Earth's magnetic field in the strongest storm (−Dst)",
    unit: 'nT',
    decimals: 0,
    axis: { min: 300, max: 2500 },
    today: { value: 907, year: 1921, label: 'May 1921 storm', source: 'Love, Hayakawa & Cliver 2019 (USGS)', url: love1921 },
    bands: [
      { from: 300, to: 850, level: 0, label: "Auroras and short blackouts, like Quebec's nine hours in 1989", basis: 'judged' },
      { from: 850, to: 1500, level: 1, label: 'Blackouts of weeks to years for tens of millions of people', basis: 'derived', source: "Lloyd's 2013, as reported by Insurance Journal: 20–40 million in the US", url: lloyds },
      { from: 1500, to: 2500, level: 2, label: 'Grids down for months on several continents', basis: 'judged' },
    ],
    marks: [
      { value: 412, label: 'May 2024 storm' },
      { value: 589, label: 'Quebec blackout, 1989' },
    ],
    published: {
      noSi: [
        { value: 500, above: 0.95, basis: 'derived', source: 'Chapman, Horne & Watkins 2020: 4% chance per year', url: chapman },
        { value: 663, above: 0.53, basis: 'derived', source: 'Love 2021 (USGS): the 100-year storm', url: love2021 },
        { value: 809, above: 0.39, basis: 'derived', source: 'Chapman, Horne & Watkins 2020: a 1-in-151-year storm', url: chapman },
      ],
      si: [],
    },
    wikipedia: 'Geomagnetic storm',
    siNote: 'Better forecasts and grid design could make even a Carrington-class storm harmless. The protection is hardware: transformers, spares and shielding have to be built and installed before the storm arrives.',
  },
]
