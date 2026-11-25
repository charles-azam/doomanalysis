import type { Card } from '../../model/types.ts'

const xpt = 'https://forecastingresearch.org/pdf/existential-risk-persuasion-tournament.pdf'
const xia = 'https://www.nature.com/articles/s43016-022-00573-0'
const clauset = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5834001/'
const wwii = 'https://en.wikipedia.org/wiki/World_War_II_casualties'
const population = 'https://data.worldbank.org/indicator/SP.POP.TOTL'
const owidDeaths = 'https://ourworldindata.org/grapher/deaths-in-state-based-conflicts-by-type'
const frischknecht = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1326439/'
const ucdp2026 = 'https://www.uu.se/en/press/press-releases/2026/2026-06-09-ucdp-record-number-of-conflicts-between-states'
const sipriYearbook = 'https://www.sipri.org/sites/default/files/2026-06/yb26_summary_en_1.pdf'
const sipriSpending = 'https://www.sipri.org/sites/default/files/2026-04/2604_milex_2025.pdf'

const xptProxy = 'XPT superforecasters, 2022 (Forecasting Research Institute): a genetically engineered pathogen, released on purpose or by accident'

/**
 * War between states, researched and checked November 2026. The measures of conflict come first: how
 * many wars, how deadly, how much is spent preparing for them and how many people live near them. The
 * two weapons that could take a war beyond level 2 come last.
 */
export const cards: Card[] = [
  {
    id: 'war',
    name: 'Deadliest war before 2100',
    summary: 'The deadliest war of the century, measured as the share of humanity it kills. It covers conventional, nuclear and biological war, and it is how war enters the danger scale.',
    group: 'war',
    scale: 'danger',
    statistic: 'worst-by-2100',
    metric: 'Share of humanity killed by the deadliest war before 2100',
    unit: '% of humanity',
    decimals: 1,
    axis: { min: 0.01, max: 100, log: true },
    today: { value: 3, year: 1945, label: 'Second World War', source: 'World War II casualties: 60–75 million deaths, about 3% of the 2.3 billion people alive in 1940', url: wwii },
    bands: [
      { from: 0.01, to: 1, level: 1, label: 'Up to 80 million dead; all battles since 1946 killed about 10 million', basis: 'derived', source: 'UCDP and PRIO via Our World in Data: 10.4 million battle deaths in 1946–2025, set against 8.2 billion people', url: owidDeaths },
      { from: 1, to: 10, level: 2, label: '80 to 800 million dead: a world war or a regional nuclear war', basis: 'derived', source: 'Xia et al. 2022, Nature Food: 100 warheads on cities kill or starve 4% of humanity if trade stops', url: xia },
      { from: 10, to: 50, level: 3, label: '0.8 to 4 billion dead: nuclear war followed by years of famine', basis: 'derived', source: 'Xia et al. 2022, Nature Food: 250 to 500 warheads kill or starve 15–40% if trade stops', url: xia },
      { from: 50, to: 99, level: 4, label: 'Most of humanity dies in a nuclear winter; survivors can rebuild', basis: 'derived', source: 'Xia et al. 2022, Nature Food: 4,400 warheads kill or starve 85% if trade stops', url: xia },
      { from: 99, to: 100, level: 5, label: 'Fewer than 1 in 100 survive; no recovery within a century', basis: 'judged' },
    ],
    marks: [
      { value: 0.8, label: 'Second World War toll at today’s population' },
      { value: 15, label: '250 warheads on cities, with famine' },
      { value: 85, label: '4,400 warheads, with famine' },
    ],
    published: {
      noSi: [
        { value: 0.8, above: 0.34, basis: 'derived', source: 'Clauset 2018, Science Advances: 43% chance per century of a war with the Second World War’s 16.6 million battle deaths, if wars stay as likely as in 1823–2003; scaled to the 74 years to 2100', url: clauset },
        { value: 10, above: 0.04, basis: 'derived', source: 'Forecasting Research Institute, XPT 2022: superforecasters’ median for nuclear weapons killing over 10% of humanity within five years, by 2100 (nuclear experts: 8%). Nuclear only, so a floor', url: xpt },
        { value: 99.9999, above: 0.00074, basis: 'derived', source: 'Forecasting Research Institute, XPT 2022: superforecasters’ median for nuclear weapons leaving fewer than 5,000 people alive by 2100 (nuclear experts: 0.55%). Nuclear only, so a floor', url: xpt },
      ],
      si: [],
    },
    wikipedia: 'War',
    siNote: 'Superintelligence could make early warning, arms-control checks and famine relief far better, or hand one side an edge that tempts it to strike first. It does not remove the motives for war, the warheads already built or the physics of smoke and harvests.',
  },
  {
    id: 'armed_conflicts',
    name: 'State-based armed conflicts',
    summary: 'How many armed conflicts involve at least one government each year. It is the simplest count of how much of the world is fighting.',
    group: 'war',
    scale: 'none',
    parent: 'war',
    statistic: 'value-in-2100',
    metric: 'Armed conflicts involving at least one government, active in the year (UCDP)',
    unit: 'conflicts',
    decimals: 0,
    axis: { min: 0, max: 130 },
    today: { value: 65, year: 2025, source: 'Uppsala Conflict Data Program (UCDP), June 2026', url: ucdp2026 },
    bands: [],
    marks: [
      { value: 31, label: '2010 low' },
      { value: 53, label: '1991, end of the Cold War' },
      { value: 65, label: '2025 record' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Uppsala Conflict Data Program',
    siNote: 'Faster growth and better early warning can lower the risk of civil war, while cheap autonomous weapons lower the cost of starting one. Disputes over land, power and identity are political, and intelligence alone does not settle them.',
  },
  {
    id: 'battle_deaths',
    name: 'Battle deaths',
    summary: 'How many people are killed in fighting each year, for every 100,000 people alive. It measures how intense the world’s wars are, not how many there are.',
    group: 'war',
    scale: 'none',
    parent: 'war',
    statistic: 'value-in-2100',
    metric: 'Deaths in fighting that involves a government, per 100,000 people a year',
    unit: 'per 100,000',
    decimals: 1,
    axis: { min: 0.05, max: 500, log: true },
    today: { value: 1.87, year: 2025, source: 'UCDP and PRIO (2026 release), via Our World in Data: 153,600 deaths among 8.2 billion people', url: 'https://ourworldindata.org/grapher/death-rate-in-state-based-conflicts' },
    bands: [],
    marks: [
      { value: 0.19, label: '2005 low' },
      { value: 3.6, label: '2022' },
      { value: 22, label: '1950, Korean War' },
      { value: 120, label: 'Second World War, yearly' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'List of wars by death toll',
    siNote: 'Precise autonomous weapons could spare soldiers and civilians, or let wars be fought on a larger scale for less money. Better medicine saves more of the wounded. The decision to fight stays human and political.',
  },
  {
    id: 'world_military_spending',
    name: 'World military spending',
    summary: 'The share of the world’s income spent on armed forces. It shows how hard the world is preparing for war.',
    group: 'war',
    scale: 'none',
    parent: 'war',
    statistic: 'value-in-2100',
    metric: 'World military spending as a share of world GDP',
    unit: '% of world GDP',
    decimals: 1,
    axis: { min: 0, max: 10 },
    today: { value: 2.5, year: 2025, source: 'SIPRI, Trends in World Military Expenditure 2025, April 2026', url: sipriSpending },
    bands: [],
    marks: [
      { value: 2.1, label: '2018 low' },
      { value: 3.5, label: 'NATO core target for 2035' },
      { value: 6.1, label: '1962, Cold War peak' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Military budget',
    siNote: 'A race for AI-enabled weapons could push spending up fast, while faster economic growth would shrink its share of GDP. How much states arm depends on how much they fear each other, which technology does not settle.',
  },
  {
    id: 'conflict_exposure',
    name: 'People living near conflict',
    summary: 'The share of people who live close to fighting or other political violence. It shows how far conflict reaches into daily life.',
    group: 'war',
    scale: 'none',
    parent: 'war',
    statistic: 'value-in-2100',
    metric: 'Share of the world’s people exposed to conflict in the year (ACLED)',
    unit: '% of humanity',
    decimals: 0,
    axis: { min: 0, max: 100 },
    today: { value: 17, year: 2025, source: 'ACLED, Raleigh Report, December 2025', url: 'https://acleddata.com/newsletter/raleigh-report-december-2025' },
    bands: [],
    marks: [
      { value: 12.5, label: '2024: one in eight' },
      { value: 25, label: 'One in four: the UN’s wider count' },
      { value: 50, label: 'Half of humanity' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Political violence',
    siNote: 'Better forecasting and mediation could shrink conflict zones, while drones and long-range strikes can widen them. Who lives near fighting depends on politics and on where wars break out, which no technology decides.',
  },
  {
    id: 'nuclear_warheads',
    name: 'Nuclear warheads',
    summary: 'How many nuclear warheads exist. The number sets how bad a nuclear war can get, more than how likely one is.',
    group: 'war',
    scale: 'none',
    parent: 'war',
    statistic: 'value-in-2100',
    metric: 'Nuclear warheads in the world, including those waiting to be dismantled',
    unit: 'warheads',
    decimals: 0,
    axis: { min: 10, max: 100000, log: true },
    today: { value: 12187, year: 2026, source: 'SIPRI Yearbook 2026', url: sipriYearbook },
    bands: [],
    marks: [
      { value: 100, label: '100 on cities: 4% of humanity dies or starves' },
      { value: 4400, label: '4,400 on cities: 85% die or starve' },
      { value: 70300, label: '1986 peak' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Nuclear weapon',
    siNote: 'Superintelligence could make arms-control checks cheap and reliable. It could also make hidden missiles and submarines easy to find, which pushes states to build more. Dismantling warheads still takes treaties, trust and years of physical work.',
  },
  {
    id: 'bioweapons',
    name: 'Deadliest biological attack',
    summary: 'The deadliest deliberate release of a disease before 2100, by a state or a group, as the share of humanity it kills. Past attacks killed tens of thousands; a disease that spreads could reach much further.',
    group: 'war',
    scale: 'danger',
    parent: 'war',
    statistic: 'worst-by-2100',
    metric: 'Share of humanity killed by the deadliest deliberate biological attack before 2100',
    unit: '% of humanity',
    decimals: 1,
    axis: { min: 0.00001, max: 100, log: true },
    today: { value: 0.002, year: 1945, label: 'Japan’s attacks on China, Second World War', source: 'Frischknecht 2003, EMBO Reports: several tens of thousands of deaths, of 2.3 billion people', url: frischknecht },
    bands: [
      { from: 0.00001, to: 1, level: 1, label: 'Up to 80 million dead; no attack so far has killed 100,000', basis: 'derived', source: 'Forecasting Research Institute, XPT 2023: no known biological attack has killed over 100,000 people', url: xpt },
      { from: 1, to: 10, level: 2, label: '80 to 800 million dead: a deliberate pandemic', basis: 'derived', source: 'Share applied to the world population of 8.2 billion (World Bank, 2025)', url: population },
      { from: 10, to: 50, level: 3, label: '0.8 to 4 billion dead from one deliberate release', basis: 'derived', source: 'Share applied to the world population of 8.2 billion (World Bank, 2025)', url: population },
      { from: 50, to: 99, level: 4, label: 'Most of humanity dies; survivors can rebuild', basis: 'judged' },
      { from: 99, to: 100, level: 5, label: 'Fewer than 1 in 100 survive; no recovery within a century', basis: 'judged' },
    ],
    marks: [{ value: 0.33, label: 'COVID-19 toll, for scale' }],
    published: {
      noSi: [
        { value: 1, above: 0.04, basis: 'derived', source: `${xptProxy}, killing over 1% of humanity within five years, by 2100 (biorisk experts: 10.25%). A stand-in for deliberate use`, url: xpt },
        { value: 10, above: 0.008, basis: 'derived', source: `${xptProxy}, killing over 10% of humanity within five years, by 2100 (biorisk experts: 3%). A stand-in for deliberate use`, url: xpt },
        { value: 99.9999, above: 0.0001, basis: 'derived', source: `${xptProxy}, leaving fewer than 5,000 people alive by 2100 (biorisk experts: 1%). A stand-in for deliberate use`, url: xpt },
      ],
      si: [],
    },
    wikipedia: 'Biological warfare',
    siNote: 'Superintelligence could speed up detection, vaccines and treatments, which limits how far an attack spreads. It could also lower the skill needed to cause harm. Defences still need factories, trials and public trust.',
  },
]
