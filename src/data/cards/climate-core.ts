import type { Card } from '../../model/types.ts'

const noaa = 'https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_gl.txt'
const smithMyers = 'https://www.carbonbrief.org/rising-co2-levels-could-push-hundreds-of-millions-into-malnutrition-by-2050'

const wmo = 'https://wmo.int/node/38416'
const catPdf = 'https://climateactiontracker.org/documents/1451/CAT_2026-11-12_GlobalUpdate_COP31.pdf'
const catName = 'Climate Action Tracker, November 2026, current policies'

const lenton = 'https://www.nature.com/articles/s41893-023-01132-6'
const lentonName = 'Lenton et al. 2023, Nature Sustainability'

const hultgren = 'https://www.nature.com/articles/s41586-025-09085-w'
const ray = 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0217148'

const spm = 'https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf'
const spmName = 'IPCC AR6 WGI, Figure SPM.6'

/**
 * Climate core, researched November 2026. The tree is co2 → warming → humid_heat, harvests, extreme_weather.
 * Warming odds are Climate Action Tracker's current-policy percentiles (16th, 50th, 66th, 84th); the sub-cards
 * translate them through published impact-per-warming figures. The arithmetic is in each explainer.
 */
export const cards: Card[] = [
  {
    id: 'co2',
    name: 'Atmospheric CO₂',
    summary:
      'How much carbon dioxide the air holds. It drives most of the warming, acidifies the ocean, stays for centuries and, at high levels, makes staple crops less nutritious.',
    group: 'climate',
    scale: 'danger',
    statistic: 'value-in-2100',
    metric: 'Global average CO₂ in the air',
    unit: 'ppm',
    decimals: 0,
    axis: { min: 350, max: 1200 },
    today: { value: 425.63, year: 2025, source: 'NOAA Global Monitoring Laboratory, global annual mean', url: noaa },
    bands: [
      { from: 350, to: 405, level: 1, label: 'Warming held near 1.5 °C; damage mostly absorbed', basis: 'judged' },
      {
        from: 405,
        to: 840,
        level: 2,
        label: '1.5 to 3.5 °C of warming, and crops poorer in zinc and protein',
        basis: 'derived',
        source: 'Smith and Myers 2018, via Carbon Brief: at 550 ppm, 1.9% of humanity newly short of zinc',
        url: smithMyers,
      },
      { from: 840, to: 1200, level: 3, label: 'Over 3.5 °C of warming: over a tenth of humanity hard hit', basis: 'judged' },
    ],
    marks: [
      { value: 445.6, label: 'Low emissions (SSP1-2.6)' },
      { value: 550, label: 'Crops tested at 550 ppm' },
      { value: 602.8, label: 'Middle scenario, near current policies' },
      { value: 1135.2, label: 'Very high emissions (SSP5-8.5)' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Carbon dioxide in the atmosphere of Earth',
    siNote:
      'Cheaper clean energy would cut emissions sooner, and cheaper removal could lower the concentration. Removal is still physical work that takes energy, land and decades, and the CO₂ already emitted stays in the air for centuries.',
  },
  {
    id: 'warming',
    name: 'Global warming',
    summary:
      'How much hotter the planet is than before industry. Deadly heat, failed harvests, drought, floods and rising seas all grow with it.',
    group: 'climate',
    scale: 'danger',
    statistic: 'value-in-2100',
    metric: 'Warming above the 1850–1900 average',
    unit: '°C',
    decimals: 1,
    axis: { min: 1, max: 7 },
    today: { value: 1.43, year: 2025, source: 'WMO, State of the Global Climate 2025 (±0.13 °C)', url: wmo },
    bands: [
      { from: 1, to: 1.5, level: 1, label: 'Deadlier heat waves, floods and droughts; most damage is absorbed', basis: 'judged' },
      { from: 1.5, to: 3.5, level: 2, label: 'Hundreds of millions lose food, health or homes to heat and storms', basis: 'judged' },
      { from: 3.5, to: 6, level: 3, label: 'A third to two-thirds in unprecedented heat; over a tenth loses out', basis: 'judged' },
      { from: 6, to: 7, level: 4, label: 'A change as big as since the ice age; most lose decent living', basis: 'judged' },
    ],
    marks: [
      { value: 2, label: 'Paris: well below 2 °C' },
      { value: 2.7, label: 'Current policies, median' },
      { value: 4.4, label: 'Very high emissions (SSP5-8.5)' },
    ],
    published: {
      noSi: [
        { value: 1.5, above: 0.99, basis: 'derived', source: `${catName}: normal curve fitted to the 16th and 50th percentiles`, url: catPdf },
        { value: 2.2, above: 0.84, basis: 'published', source: `${catName}: 16th percentile`, url: catPdf },
        { value: 2.7, above: 0.5, basis: 'published', source: `${catName}: median`, url: catPdf },
        { value: 3, above: 0.34, basis: 'published', source: `${catName}: 66% chance of staying below`, url: catPdf },
        { value: 3.4, above: 0.16, basis: 'published', source: `${catName}: 84th percentile`, url: catPdf },
      ],
      si: [],
    },
    wikipedia: 'Climate change',
    siNote:
      'Cheaper clean energy and faster adaptation could lower the curve, and each five years of delay avoided saves about 0.1 °C. The CO₂ already emitted keeps the planet warm for centuries, and cooling it quickly would mean dimming sunlight, with its own risks.',
  },
  {
    id: 'humid_heat',
    name: 'Heat beyond the human range',
    summary:
      'The share of people living where the yearly average is hotter than humans have ever settled in large numbers. Such heat cuts work, harvests and health. India is the most exposed country.',
    group: 'climate',
    scale: 'danger',
    parent: 'warming',
    statistic: 'value-in-2100',
    metric: 'Share of humanity living where the yearly average is 29 °C or more',
    unit: '%',
    decimals: 1,
    axis: { min: 0, max: 70 },
    today: { value: 0.9, year: 2010, source: `${lentonName}: 62 million people, 2010 population in the 2000–2020 climate`, url: lenton },
    bands: [
      { from: 0, to: 5, level: 1, label: 'Up to 1 person in 20 in unprecedented heat; harm stays limited', basis: 'judged' },
      { from: 5, to: 50, level: 2, label: 'Hundreds of millions to billions in heat; work and health suffer', basis: 'judged' },
      { from: 50, to: 70, level: 3, label: 'Most people in unprecedented heat; over a tenth loses decent living', basis: 'judged' },
    ],
    marks: [
      { value: 22, label: 'At 2.7 °C, current policies' },
      { value: 34, label: 'At 3.6 °C' },
      { value: 45, label: 'At 4.4 °C' },
    ],
    published: {
      noSi: [
        { value: 5, above: 0.99, basis: 'derived', source: `${lentonName}: 5% at 1.5 °C, with the warming card's 99% above 1.5 °C`, url: lenton },
        { value: 15, above: 0.84, basis: 'derived', source: `${lentonName}, interpolated at CAT's 16th percentile (2.2 °C)`, url: lenton },
        { value: 22, above: 0.5, basis: 'derived', source: `${lentonName}: 22% at 2.7 °C, CAT's current-policy median`, url: lenton },
        { value: 31, above: 0.16, basis: 'derived', source: `${lentonName}, interpolated at CAT's 84th percentile (3.4 °C)`, url: lenton },
      ],
      si: [],
    },
    wikipedia: 'Human climate niche',
    siNote:
      'Cheap power and cooling could keep people safe indoors. Farm work, crops and livestock stay outside, and the poorest hot regions need power grids and buildings built first.',
  },
  {
    id: 'harvests',
    name: 'Harvests lost to warming',
    summary:
      'How much of the world’s staple-crop harvest warming takes away, compared with a world that does not warm. Smaller harvests mean dearer food and more hunger for the poorest.',
    group: 'climate',
    scale: 'danger',
    parent: 'warming',
    statistic: 'value-in-2100',
    metric: 'Fall in world staple-crop yields caused by warming',
    unit: '%',
    decimals: 0,
    axis: { min: -10, max: 50 },
    today: { value: 1, year: 2008, source: 'Ray et al. 2019, PLOS ONE: about 1% of calories from the top ten crops', url: ray },
    bands: [
      { from: -10, to: 5, level: 1, label: 'Little global loss; food costs a little more; extra hunger stays local', basis: 'judged' },
      { from: 5, to: 30, level: 2, label: 'Tens to hundreds of millions more go short of food', basis: 'judged' },
      { from: 30, to: 50, level: 3, label: 'Staple food per person falls below today; over a tenth go hungry', basis: 'judged' },
    ],
    marks: [
      { value: 11, label: 'Moderate emissions (RCP4.5), 2100' },
      { value: 24, label: 'High emissions (RCP8.5), 2100' },
    ],
    published: {
      noSi: [
        {
          value: 11,
          above: 0.5,
          basis: 'derived',
          source: 'Hultgren et al. 2025, Nature: 11% lost by 2100 under moderate emissions, read as the current-policy median',
          url: hultgren,
        },
      ],
      si: [],
    },
    wikipedia: 'Effects of climate change on agriculture',
    siNote:
      'Faster breeding and better farm advice could cut the losses. New varieties still need years of field trials and seed supply, and the heat limits of plants are biological.',
  },
  {
    id: 'extreme_weather',
    name: 'More frequent extreme weather',
    summary:
      'How much more often extreme heat strikes as the world warms, a guide to heat waves, downpours and droughts. Disasters now kill fewer people than decades ago but cost more.',
    group: 'climate',
    scale: 'none',
    parent: 'warming',
    statistic: 'value-in-2100',
    metric: 'Times a once-in-50-years heat extreme of 1850–1900 occurs in 50 years',
    unit: 'times',
    decimals: 1,
    axis: { min: 1, max: 50 },
    today: { value: 4.8, year: 2010, source: `${spmName}: at 1 °C, the 2001–2020 average`, url: spm },
    bands: [],
    marks: [
      { value: 8.6, label: 'At 1.5 °C' },
      { value: 13.9, label: 'At 2 °C' },
      { value: 39.2, label: 'At 4 °C' },
    ],
    published: {
      noSi: [
        { value: 8.6, above: 0.99, basis: 'derived', source: `${spmName}, with the warming card's 99% above 1.5 °C`, url: spm },
        { value: 16.4, above: 0.84, basis: 'derived', source: `${spmName}, interpolated at CAT's 16th percentile (2.2 °C)`, url: spm },
        { value: 22.8, above: 0.5, basis: 'derived', source: `${spmName}, interpolated at CAT's median (2.7 °C)`, url: spm },
        { value: 31.6, above: 0.16, basis: 'derived', source: `${spmName}, interpolated at CAT's 84th percentile (3.4 °C)`, url: spm },
      ],
      si: [],
    },
    wikipedia: 'Extreme weather',
    siNote:
      'Better forecasts and early warnings save lives, as they already have. The heat waves, floods and droughts themselves follow the warming, which no forecast reduces.',
  },
]
