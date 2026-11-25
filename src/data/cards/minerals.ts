import type { Card } from '../../model/types.ts'

const iea2025 = 'https://sites.utexas.edu/mineralstransition/files/2025/05/Extract_GlobalCriticalMineralsOutlook2025-compressed.pdf'
const iea2025Name = 'IEA, Global Critical Minerals Outlook 2025'

const copper2005 = 'https://apps.usgs.gov/minerals-information-archives/copper/mis/mis-200501-coppe.pdf'
const lithium2023 = 'https://pubs.usgs.gov/periodicals/mcs2023/mcs2023-lithium.pdf'
const nickel2021 = 'https://www.kitco.com/news/off-the-wire/2023-02-21/update-1-nickel-market-oversupplied-112200-tonnes-2022-insg-says'
const cobalt2026 = 'https://www.cobaltinstitute.org/wp-content/uploads/2026/06/Cobalt-Market-Update_Jan-May-2026.pdf'
const rareEarths2010 = 'https://arken.nmbu.no/~robega/ECN320/Case%20studies/Case_study_Rare_earth-elements.pdf'
const ifa2009 = 'https://www.fertilizer.org/wp-content/uploads/2023/01/2009_shanghai_ifa_summary.pdf'

/**
 * Metals and minerals, researched November 2026.
 * The six materials share one metric: the worst yearly shortfall of supply against demand before 2100.
 * A shortfall shows up as a price rise that cancels some demand, rarely as empty shelves, so the metals
 * stop at level 1. Phosphate feeds the fertiliser that feeds people, and is the only one that reaches level 2.
 * No source publishes a 2100 forecast for any of them, so every curve is left to the judges.
 */
export const cards: Card[] = [
  {
    id: 'copper',
    name: 'Copper supply',
    summary: 'Copper carries electricity in every grid, motor and building. If mines fall behind demand, prices jump and the switch to clean electricity slows, but people rarely lose essentials.',
    group: 'resources',
    scale: 'danger',
    statistic: 'worst-by-2100',
    metric: 'Worst yearly shortfall of copper supply against demand before 2100',
    unit: '%',
    decimals: 0,
    axis: { min: 0, max: 60 },
    today: { value: 4, year: 2004, label: '2004 refined copper deficit', source: 'USGS Mineral Industry Surveys, Copper, January 2005 (ICSG figures): 720,000 t short of about 16.5 Mt used', url: copper2005 },
    bands: [
      { from: 0, to: 15, level: 0, label: 'Prices jump and projects slip; nobody loses essentials', basis: 'judged' },
      { from: 15, to: 60, level: 1, label: 'Grids and clean power come slower and dearer; the poorest wait longer', basis: 'judged' },
    ],
    marks: [
      { value: 25, label: 'IEA implied gap for 2035 (2026 edition)' },
      { value: 40, label: 'IEA gap for 2035 on a net-zero path (2025 edition)' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Copper',
    siNote: 'Superintelligence could speed exploration, recover more copper from poorer ore and design products around aluminium. It cannot shorten the permits, finance and construction of a mine, which take about 17 years from discovery to output.',
  },
  {
    id: 'lithium',
    name: 'Lithium supply',
    summary: 'Lithium is the light metal in the rechargeable batteries of phones, electric cars and grid storage. A shortfall makes them dearer and slower to spread.',
    group: 'resources',
    scale: 'danger',
    statistic: 'worst-by-2100',
    metric: 'Worst yearly shortfall of lithium supply against demand before 2100',
    unit: '%',
    decimals: 0,
    axis: { min: 0, max: 80 },
    today: { value: 3, year: 2022, label: '2022 squeeze (first USGS estimate, since revised)', source: 'USGS Mineral Commodity Summaries 2023, Lithium: 134,000 t used, 130,000 t produced outside the United States', url: lithium2023 },
    bands: [
      { from: 0, to: 20, level: 0, label: 'Batteries cost more; electric cars and storage spread more slowly', basis: 'judged' },
      { from: 20, to: 80, level: 1, label: 'Storage stalls; off-grid solar and clean power dearer for the poor', basis: 'judged' },
    ],
    marks: [{ value: 40, label: 'IEA implied gap for 2035 (2025 edition)' }],
    published: { noSi: [], si: [] },
    wikipedia: 'Lithium',
    siNote: 'Superintelligence could speed new ways to extract lithium from brines and clays, and better sodium batteries that need none. Mines and refineries still have to be permitted, financed and built, which takes years.',
  },
  {
    id: 'nickel',
    name: 'Nickel supply',
    summary: 'Nickel goes into stainless steel and many electric car batteries. A shortfall raises their cost, but nickel-free batteries and steels limit the harm to people.',
    group: 'resources',
    scale: 'danger',
    statistic: 'worst-by-2100',
    metric: 'Worst yearly shortfall of nickel supply against demand before 2100',
    unit: '%',
    decimals: 0,
    axis: { min: 0, max: 80 },
    today: { value: 6, year: 2021, label: '2021 deficit (INSG)', source: 'International Nickel Study Group, via Reuters (Kitco), 2023: 166,600 t short of 2,772,500 t used', url: nickel2021 },
    bands: [
      { from: 0, to: 25, level: 0, label: 'Steel and batteries cost more; makers switch to nickel-free cells', basis: 'judged' },
      { from: 25, to: 80, level: 1, label: 'Steel goods and batteries dearer for years; the poorest feel it most', basis: 'judged' },
    ],
    marks: [
      { value: 15, label: 'IEA implied gap for 2035 (2025 edition)' },
      { value: 67, label: "Indonesia's share of mining (2025)" },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Nickel',
    siNote: 'Superintelligence could design batteries and steels that need less nickel, and cleaner ways to refine it. It cannot move the ore, most of which is mined in Indonesia, or shorten the years needed to build mines and refineries.',
  },
  {
    id: 'cobalt',
    name: 'Cobalt supply',
    summary: 'Cobalt goes into phone and car batteries and jet engines, and nearly three quarters of it is mined in one country, Congo. A shortfall raises prices and pushes batteries to cobalt-free types.',
    group: 'resources',
    scale: 'danger',
    statistic: 'worst-by-2100',
    metric: 'Worst yearly shortfall of cobalt supply against demand before 2100',
    unit: '%',
    decimals: 0,
    axis: { min: 0, max: 100 },
    today: { value: 27, year: 2026, label: 'Congo export quotas, 2026 (forecast)', source: 'Cobalt Institute, Cobalt Market Update January–May 2026: ex-Congo deficit of 80 kt', url: cobalt2026 },
    bands: [
      { from: 0, to: 40, level: 0, label: 'Prices soar; batteries move to cobalt-free types; little harm', basis: 'judged' },
      { from: 40, to: 100, level: 1, label: 'Planes, turbines and phones dearer for years; few lose essentials', basis: 'judged' },
    ],
    marks: [
      { value: 14, label: 'IEA implied gap for 2035 (2025 edition)' },
      { value: 73, label: "Congo's share of mining (2025)" },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Cobalt',
    siNote: "Superintelligence could speed cobalt-free batteries and better recycling, which already cut demand. It cannot change Congo's export policy, or the fact that most cobalt comes as a by-product of copper and nickel mines.",
  },
  {
    id: 'rare_earths',
    name: 'Rare earth supply',
    summary: 'Rare earth elements make the strong magnets in electric motors, wind turbines and electronics. China mines about 70% and refines about 85%, so one government can cut the rest of the world off.',
    group: 'resources',
    scale: 'danger',
    statistic: 'worst-by-2100',
    metric: 'Worst yearly shortfall of rare earth supply against demand before 2100',
    unit: '%',
    decimals: 0,
    axis: { min: 0, max: 100 },
    today: { value: 12, year: 2010, label: "China's 2010 export quota cut", source: 'NMBU trade case study: quota 15,000–20,000 t below use outside China, of about 125,000 t sold', url: rareEarths2010 },
    bands: [
      { from: 0, to: 30, level: 0, label: 'Magnet prices soar; some car plants pause; designs shift', basis: 'judged' },
      { from: 30, to: 100, level: 1, label: 'Factories stall; cars, wind power and electronics dearer for years', basis: 'judged' },
    ],
    marks: [
      { value: 69, label: "China's share of mining (2025)" },
      { value: 85, label: "China's share of refining (2025)" },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Rare-earth element',
    siNote: 'Superintelligence could design motors and magnets that need fewer rare earths, and cheaper ways to separate them. Separation plants and magnet factories outside China still take years to build, and export controls are a political choice.',
  },
  {
    id: 'phosphate',
    name: 'Phosphate rock supply',
    summary: "Phosphate rock is mined to make the phosphorus fertiliser that much of the world's food depends on, and nothing can replace phosphorus in farming. A long shortfall would mean smaller harvests.",
    group: 'resources',
    scale: 'danger',
    statistic: 'worst-by-2100',
    metric: 'Worst yearly shortfall of phosphate fertiliser supply against demand before 2100',
    unit: '%',
    decimals: 0,
    axis: { min: 0, max: 100 },
    today: { value: 7, year: 2008, label: '2008 price spike (use fell 7%)', source: 'IFA, Medium-Term Outlook for Global Fertilizer Demand, June 2009: P₂O₅ use 38.8 → 36.0 Mt', url: ifa2009 },
    bands: [
      { from: 0, to: 10, level: 0, label: 'Fertiliser prices spike; phosphorus stored in soils carries harvests', basis: 'judged' },
      { from: 10, to: 30, level: 1, label: 'Poor farmers buy less; yields and incomes fall on poor soils', basis: 'judged' },
      { from: 30, to: 100, level: 2, label: 'Harvests shrink for years; up to hundreds of millions go hungry', basis: 'judged' },
    ],
    marks: [
      { value: 9, label: 'Fall in use over 2021–22, two years (IFA)' },
      { value: 14, label: "Morocco's share of mining (2025)" },
      { value: 44, label: "China's share of mining (2025)" },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Phosphorite',
    siNote: 'Superintelligence could help farmers put phosphorus only where soils lack it and recover it from manure and sewage. It cannot replace phosphorus, which every plant needs, or move the deposits, most of which lie in Morocco.',
  },
  {
    id: 'mineral_concentration',
    name: 'Mineral refining concentration',
    summary: 'How much of the refining of six energy minerals sits in the top three countries. The higher it is, the easier it is for one government to cut everyone else off.',
    group: 'resources',
    scale: 'none',
    statistic: 'value-in-2100',
    metric: 'Average share of refining held by the top three countries, six key energy minerals',
    unit: '%',
    decimals: 0,
    axis: { min: 50, max: 100 },
    today: { value: 86, year: 2024, source: `${iea2025Name}: up from about 82% in 2020`, url: iea2025 },
    bands: [],
    marks: [
      { value: 59, label: 'Copper, least concentrated (2024)' },
      { value: 77, label: 'Top three miners, same six minerals (2024)' },
      { value: 82, label: '2020 level; IEA projection for 2035' },
      { value: 99, label: 'Graphite, most concentrated (2024)' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Critical raw materials',
    siNote: 'Superintelligence could design cheaper refining chemistry and substitutes that remove chokepoints. Refineries outside the leading countries still have to be permitted, financed and built, and export controls remain a political choice.',
  },
]
