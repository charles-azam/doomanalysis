import type { Card } from '../../model/types.ts'

const ei = 'https://assets.kpmg.com/content/dam/kpmgsites/au/pdf/2026/statistical-review-of-world-energy.pdf'
const eiName = 'Energy Institute, Statistical Review of World Energy 2026'
const millwardHopkins = 'https://pure.iiasa.ac.at/16764/1/1-s2.0-S0959378020307512-main.pdf'


const nea2026 = 'https://oecd-nea.org/jcms/pl_121582/adequate-uranium-resources-available-but-sustained-investment-essential-to-support-global-nuclear-capacity-growth'

/**
 * Energy and fuels, researched November 2026. `energy_supply` is the top card of the resources cause;
 * oil and gas are its channels with bands, coal and uranium are plain measures. No source publishes
 * odds for any of these values in 2100, so every curve is left to the judges. Reserves-to-production
 * arithmetic and the 2026 Hormuz shock are in the explainers.
 */
export const cards: Card[] = [
  {
    id: 'energy_supply',
    name: 'Energy per person',
    summary:
      'How much energy the world supplies per person in 2100, compared with today. Energy runs farms, water pumps, hospitals and transport, so a lasting fall would cut living standards unless it comes from wasting less.',
    group: 'resources',
    scale: 'danger',
    statistic: 'value-in-2100',
    metric: 'World total energy supply per person, as a share of the 2025 level (72.9 GJ)',
    unit: '% of 2025',
    decimals: 0,
    axis: { min: 10, max: 1000, log: true },
    today: { value: 100, year: 2025, source: `${eiName}: 72.9 GJ per person`, url: ei },
    bands: [
      {
        from: 10,
        to: 25,
        level: 4,
        label: 'Below the decent-living minimum even if energy were shared equally',
        basis: 'derived',
        source: 'Millward-Hopkins et al. 2020: 15.3 GJ of final energy per person',
        url: millwardHopkins,
      },
      { from: 25, to: 50, level: 3, label: 'The world averages India’s level today; over a billion fall short', basis: 'judged' },
      { from: 50, to: 75, level: 2, label: 'The poorest are priced out of fuel, power and fertiliser', basis: 'judged' },
      { from: 75, to: 100, level: 1, label: 'Efficiency and electric machines absorb most of the cut', basis: 'judged' },
      { from: 100, to: 1000, level: 0, label: 'As much energy per person as today or more', basis: 'judged' },
    ],
    marks: [
      { value: 19, label: 'Africa today' },
      { value: 37, label: 'India today' },
      { value: 159, label: 'European Union today' },
      { value: 370, label: 'United States today' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'World energy supply and consumption',
    siNote:
      'Superintelligence could speed the design of cheaper solar, storage, reactors and grids, and so raise the energy each person commands. Plants, mines and power lines still take decades to build, and no intelligence adds fuel to the ground.',
  },
  {
    id: 'oil',
    name: 'World oil production',
    summary:
      'How much oil the world produces in 2100. Oil still moves most transport; conventional crude is past its peak, so supply rests on harder, costlier oil and on a few exporters.',
    group: 'resources',
    scale: 'danger',
    parent: 'energy_supply',
    statistic: 'value-in-2100',
    metric: 'World oil production: crude, shale oil, oil sands, condensate and gas liquids',
    unit: 'million barrels a day',
    decimals: 1,
    axis: { min: 0, max: 160 },
    today: { value: 100.6, year: 2025, source: eiName, url: ei },
    bands: [
      { from: 0, to: 25, level: 1, label: 'Oil mostly replaced; where it is not, the poorest lose fuel', basis: 'judged' },
      { from: 25, to: 70, level: 0, label: 'Oil kept for the uses hardest to switch', basis: 'judged' },
      { from: 70, to: 160, level: 0, label: 'Today’s level or more: no scarcity; the harm is to the climate', basis: 'judged' },
    ],
    marks: [
      { value: 38, label: '1.5 °C pathways, 2050 (IPCC median)' },
      { value: 96, label: 'IEA stated policies, 2050' },
      { value: 124, label: 'OPEC demand forecast, 2050' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Peak oil',
    siNote:
      'Superintelligence could speed the switch of transport and industry to electricity and find oil more cheaply. It cannot refill depleted fields or reopen a blockaded strait, and replacing the world’s vehicles, ships and planes takes decades.',
  },
  {
    id: 'gas',
    name: 'World natural gas production',
    summary:
      'How much natural gas the world produces in 2100. Gas heats homes, makes electricity and most nitrogen fertiliser; its reserves and exports sit in a few countries, so importers can be cut off.',
    group: 'resources',
    scale: 'danger',
    parent: 'energy_supply',
    statistic: 'value-in-2100',
    metric: 'World natural gas production',
    unit: 'billion m³ a year',
    decimals: 0,
    axis: { min: 0, max: 10000 },
    today: { value: 4196, year: 2025, source: eiName, url: ei },
    bands: [
      { from: 0, to: 1000, level: 1, label: 'Heat and fertiliser must come from elsewhere; laggards pay most', basis: 'judged' },
      { from: 1000, to: 3000, level: 0, label: 'Gas kept for the uses hardest to switch', basis: 'judged' },
      { from: 3000, to: 10000, level: 0, label: 'Today’s level or more: no scarcity; the harm is to the climate', basis: 'judged' },
    ],
    marks: [
      { value: 2190, label: '1.5 °C pathways, 2050 (IPCC median)' },
      { value: 4800, label: 'IEA stated policies, 2050' },
      { value: 5800, label: 'IEA current policies, 2050' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Peak gas',
    siNote:
      'Better electrolysers, heat pumps and grids could make gas easy to replace for heat, power and fertiliser. Pipelines, terminals and factories take years to build, and geology fixes which countries hold the reserves.',
  },
  {
    id: 'coal',
    name: 'World coal production',
    summary:
      'How much coal the world mines in 2100. Coal will not run out this century: the danger from burning it is climate change, which the climate cards count.',
    group: 'resources',
    scale: 'none',
    parent: 'energy_supply',
    statistic: 'value-in-2100',
    metric: 'World coal production',
    unit: 'billion tonnes a year',
    decimals: 1,
    axis: { min: 0.1, max: 50, log: true },
    today: { value: 9.05, year: 2025, source: eiName, url: ei },
    bands: [],
    marks: [
      { value: 0.4, label: '1.5 °C pathways, 2050 (IPCC median)' },
      { value: 1.2, label: '2 °C pathways, 2050 (IPCC median)' },
      { value: 4.7, label: 'China alone, 2025' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Peak coal',
    siNote:
      'Superintelligence could make clean power cheap enough to retire coal plants faster, mainly in Asia. It does not change how much coal lies underground, and plants built in the last decade can run for decades unless someone pays to close them.',
  },
  {
    id: 'uranium',
    name: 'Uranium supply in years',
    summary:
      'How many years known uranium would last at the rate reactors use it in 2100. Today’s reactors have about a century of supply; fast reactors or uranium from seawater would stretch it to thousands of years.',
    group: 'resources',
    scale: 'none',
    parent: 'energy_supply',
    statistic: 'value-in-2100',
    metric: 'Identified uranium resources (under $260/kg) divided by that year’s reactor needs',
    unit: 'years',
    decimals: 0,
    axis: { min: 10, max: 100000, log: true },
    today: { value: 126, year: 2025, source: 'OECD NEA and IAEA, Uranium 2026 (Red Book): 8.1 million t ÷ 64,500 t a year', url: nea2026 },
    bands: [],
    marks: [
      { value: 56, label: 'Red Book high demand, 2050' },
      { value: 7500, label: 'Today’s resources in fast reactors' },
      { value: 62000, label: 'Uranium in seawater, today’s use' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Uranium mining',
    siNote:
      'Superintelligence could speed the design of fast reactors and cheaper ways to take uranium from seawater, stretching supply from a century to thousands of years. Licensing and building reactors and enrichment plants still takes a decade or more.',
  },
]
