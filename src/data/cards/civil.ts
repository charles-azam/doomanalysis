import type { Card } from '../../model/types.ts'

const owidConflict = 'https://ourworldindata.org/grapher/conflict-data'
const owidConflictCount = 'https://ourworldindata.org/grapher/number-of-state-based-conflicts'
const owidPopulation = 'https://ourworldindata.org/grapher/population'
const owidPolarisation = 'https://ourworldindata.org/grapher/political-polarization-score'
const unhcrMidYear = 'https://www.unhcr.org/mid-year-trends'
const ochaEastAfrica =
  'https://humanitarianaction.info/document/global-humanitarian-overview-2026/article/southern-and-eastern-africa-0'
const oecdMigration =
  'https://www.oecd.org/en/publications/international-migration-outlook-2026_a9eab36b-en/full-report/recent-developments-in-international-migration-movements-and-labour-market-inclusion-of-immigrants_a8f69192.html'

/**
 * Civil war and state breakdown, researched November 2026.
 *
 * Counting rule for `state_breakdown`: a country is "at civil war" in a year when fighting between its
 * government and rebels (UCDP intrastate conflict, internationalised or not) kills more than 10 in every
 * 100,000 inhabitants. The yearly series for 1989–2025 is computed from UCDP deaths by country and
 * Our World in Data populations; the explainer shows the arithmetic. Fighting below the line (DR Congo and
 * Syria in 2025) and collapsed states without heavy fighting are not counted, so the series is a lower bound.
 */
export const cards: Card[] = [
  {
    id: 'state_breakdown',
    name: 'Civil war and state breakdown',
    summary:
      'The share of humanity living in countries torn by civil war or left without a working state, at the worst moment before 2100. A civil war can take away all five essentials at once.',
    group: 'civil',
    scale: 'danger',
    statistic: 'worst-by-2100',
    metric: 'People in countries at civil war or with a collapsed state, in the worst year',
    unit: '% of humanity',
    decimals: 1,
    axis: { min: 0.1, max: 100, log: true },
    today: {
      value: 31,
      year: 1853,
      label: 'Taiping war, China',
      source: 'Our World in Data population series (HYDE, Gapminder, UN): China, 401 of 1,283 million people',
      url: owidPopulation,
    },
    bands: [
      {
        from: 0.1,
        to: 1,
        level: 1,
        label: 'A few small countries at war; under 1% of humanity harmed',
        basis: 'derived',
        source: 'UCDP deaths by country via Our World in Data; UNHCR displacement totals for 2000–2010',
        url: owidConflict,
      },
      {
        from: 1,
        to: 5,
        level: 2,
        label: "Today's world: 118 million uprooted, 239 million in need of aid",
        basis: 'derived',
        source: 'UNHCR Mid-Year Trends 2026 (1.4% of humanity displaced); OCHA Global Humanitarian Overview 2026',
        url: unhcrMidYear,
      },
      {
        from: 5,
        to: 20,
        level: 2,
        label: 'Several large countries at war at once; up to 800 million harmed',
        basis: 'derived',
        source: 'OCHA Global Humanitarian Overview 2026: 53 of 113 million people in need in the 2025 civil wars',
        url: ochaEastAfrica,
      },
      {
        from: 20,
        to: 80,
        level: 3,
        label: 'A giant country or a whole region breaks down; over 800 million harmed',
        basis: 'derived',
        source: 'OCHA Global Humanitarian Overview 2026: 53 of 113 million people in need in the 2025 civil wars',
        url: ochaEastAfrica,
      },
      { from: 80, to: 100, level: 4, label: 'States fail almost everywhere; most of humanity loses security', basis: 'judged' },
    ],
    marks: [
      { value: 1.4, label: '2025' },
      { value: 3.1, label: '2020, highest since 1989' },
      { value: 22, label: 'China, 1949' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Failed state',
    siNote:
      'Superintelligence could make poor countries richer and their states more capable, which is what lowers the risk of civil war. It could also hand rebels and rulers cheap autonomous weapons. Who governs remains a political fight.',
  },
  {
    id: 'internal_conflicts',
    name: 'Civil conflicts a year',
    summary:
      'How many armed conflicts between a government and rebels are active in a year, including those where foreign troops take part. In each, a government fights an armed group over power or territory.',
    group: 'civil',
    scale: 'none',
    parent: 'state_breakdown',
    statistic: 'value-in-2100',
    metric: 'Intrastate conflicts with at least 25 battle deaths in the year (UCDP)',
    unit: 'conflicts',
    decimals: 0,
    axis: { min: 0, max: 120 },
    today: {
      value: 57,
      year: 2025,
      source: 'UCDP/PRIO Armed Conflict Dataset v26.1, via Our World in Data: 35 intrastate and 22 internationalised',
      url: owidConflictCount,
    },
    bands: [],
    marks: [
      { value: 20, label: '1970' },
      { value: 31, label: 'Low of 2010' },
      { value: 57, label: 'Record: 2023 and 2025' },
      { value: 80, label: '40% above the record' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Civil war',
    siNote:
      'Faster growth and schooling in poor countries, the strongest levers for peace in conflict models, could come sooner. Cheap drones cut the cost of starting a war. Intelligence does not settle disputes over land, power and identity.',
  },
  {
    id: 'polarisation',
    name: 'Political polarisation',
    summary:
      'How far society in democracies is split into hostile political camps. Research ties civil war less to polarisation itself than to weak, half-democratic states and politics organised around identity.',
    group: 'civil',
    scale: 'none',
    parent: 'state_breakdown',
    statistic: 'value-in-2100',
    metric: 'Mean V-Dem political polarisation score of democracies (0 = long-run world average)',
    unit: 'score',
    decimals: 1,
    axis: { min: -3, max: 4 },
    today: {
      value: -0.1,
      year: 2025,
      source: 'V-Dem 2026 dataset via Our World in Data: mean of the 85 electoral and liberal democracies',
      url: owidPolarisation,
    },
    bands: [],
    marks: [
      { value: -1.3, label: 'Calmest year, 1958' },
      { value: -0.8, label: '2005' },
      { value: 1.4, label: 'France today' },
      { value: 2.3, label: 'United States today' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Political polarization',
    siNote:
      'Superintelligence could personalise persuasion and deepen hostile camps, or power tools that help opponents find common ground. Which one happens depends on who deploys it and under what rules, not on the technology.',
  },
  {
    id: 'forced_displacement',
    name: 'Forced displacement',
    summary:
      'The share of humanity forced from home by war, violence or persecution. Displaced people lose home, income and safety at once, and most refugees stay in exile for years.',
    group: 'civil',
    scale: 'danger',
    parent: 'state_breakdown',
    statistic: 'value-in-2100',
    metric: 'Refugees, asylum-seekers and internally displaced people (UNHCR)',
    unit: '% of humanity',
    decimals: 1,
    axis: { min: 0.1, max: 20, log: true },
    today: { value: 1.4, year: 2026, source: 'UNHCR Mid-Year Trends 2026 (end of June 2026)', url: unhcrMidYear },
    bands: [
      {
        from: 0.1,
        to: 1,
        level: 1,
        label: 'Under 1 person in 100 uprooted, as in every year from 1990 to 2018',
        basis: 'derived',
        source: 'UNHCR Refugee Data Finder; Our World in Data population',
        url: 'https://www.unhcr.org/refugee-statistics',
      },
      {
        from: 1,
        to: 3,
        level: 2,
        label: "From today's 118 million up to 250 million people uprooted",
        basis: 'derived',
        source: 'UNHCR Mid-Year Trends 2026',
        url: unhcrMidYear,
      },
      {
        from: 3,
        to: 10,
        level: 2,
        label: '250 to 800 million uprooted, most of them hosted by poorer countries',
        basis: 'derived',
        source: 'UNHCR Mid-Year Trends 2026',
        url: unhcrMidYear,
      },
      {
        from: 10,
        to: 20,
        level: 3,
        label: 'Over 1 person in 10 uprooted: more than 800 million without a home',
        basis: 'derived',
        source: 'UNHCR Mid-Year Trends 2026',
        url: unhcrMidYear,
      },
    ],
    marks: [
      { value: 0.6, label: '2010' },
      { value: 1.5, label: 'End-2024 record' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Forced displacement',
    siNote:
      'Superintelligence could improve early warning and aid logistics, and cut the cost of shelter, water and food for people who fled. It cannot stop the wars and persecution that make them flee, and borders stay a political decision.',
  },
  {
    id: 'immigration_pressure',
    name: 'Immigration into rich countries',
    summary:
      'How much of the population of rich countries was born abroad, and what research finds, and does not find, about its effects on social cohesion and conflict.',
    group: 'civil',
    scale: 'none',
    parent: 'state_breakdown',
    statistic: 'value-in-2100',
    metric: 'Foreign-born share of the population of OECD countries',
    unit: '%',
    decimals: 1,
    axis: { min: 0, max: 50 },
    today: { value: 12, year: 2025, source: 'OECD International Migration Outlook 2026', url: oecdMigration },
    bands: [],
    marks: [
      { value: 9.2, label: '2015' },
      { value: 15, label: 'Half of OECD countries are above' },
      { value: 33, label: 'Switzerland and Australia today' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Immigration',
    siNote:
      'If machines do much of the work, the labour-shortage case for immigration weakens, while translation and job-matching tools could ease integration. How many people a country admits remains a political choice.',
  },
]
