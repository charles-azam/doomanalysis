import type { Card } from '../../model/types.ts'

const wbApi = (code: string): string => `https://api.worldbank.org/v2/country/WLD;HIC/indicator/${code}?format=json&per_page=200&date=1990:2025`
const wpp = (path: string): string => `https://population.un.org/wpp/assets/Excel%20Files/2_Indicators%20(Probabilistic)/EXCEL_FILES/${path}`
const wppPopulation = wpp('2_Population/UN_PPP2024_Output_PopTot.xlsx')
const wppOldAge = wpp('2_Population/UN_PPP2024_Output_Annual_OldAgeDepRatio.xlsx')
const wppLifeExpectancy = wpp('4_Mortality/UN_PPP2024_Output_e0.xlsx')
const growthSurvey = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6003472'
const owidEnergy = 'https://ourworldindata.org/grapher/per-capita-energy-use'
const whoHale = "https://ghoapi.azureedge.net/api/WHOSIS_000002?$filter=SpatialDimType%20eq%20'GLOBAL'%20or%20SpatialDimType%20eq%20'WORLDBANKINCOMEGROUP'"
const buildingsFloorArea =
  'https://www.aa.com.tr/en/greenline/climate-change/global-construction-boom-outpacing-climate-gains-in-building-sector-report-warns/1830385'
const iloHours = 'https://rplumber.ilo.org/data/indicator/?id=HOW_2EMP_SEX_NB_A&ref_area=X01&sex=SEX_T&format=.csv'
const icp = 'https://databank.worldbank.org/source/icp-2021'
const fao = 'https://www.fao.org/newsroom/detail/un-report--global-hunger-levels-ease-for-third-consecutive-year-as-regional-disparities-persist/en'

const wppSource = 'UN World Population Prospects 2024, probabilistic projections'

/** How people live, researched November 2026. Plain measures: no bands, marks for the judges. */
export const cards: Card[] = [
  {
    id: 'living_standard',
    name: 'Living standard',
    summary:
      'What the average person on Earth consumes in a year, with today’s rich-world average set to 100. It is the plainest measure of how far the world is from abundance, which this site sets at 500.',
    group: 'living',
    scale: 'none',
    statistic: 'value-in-2100',
    metric: 'Household consumption per person, world average (rich world today = 100)',
    unit: 'index',
    decimals: 0,
    axis: { min: 5, max: 2000, log: true },
    today: {
      value: 36,
      year: 2024,
      source: 'World Bank, consumption per person at PPP (NE.CON.PCAP.PP.KD): world $11,301 against $31,532 for high-income countries',
      url: wbApi('NE.CON.PCAP.PP.KD'),
    },
    bands: [],
    marks: [
      { value: 36, label: 'World today' },
      { value: 100, label: 'Rich world today' },
      { value: 500, label: 'Abundance' },
    ],
    published: {
      noSi: [
        {
          value: 46,
          above: 0.9,
          basis: 'derived',
          source: 'Christensen, Gillingham and Nordhaus 2018, expert survey: 10th percentile of world growth, 0.60% a year from 2010',
          url: growthSurvey,
        },
        {
          value: 90,
          above: 0.75,
          basis: 'derived',
          source: 'Christensen, Gillingham and Nordhaus 2018, expert survey: 25th percentile, 1.36% a year from 2010',
          url: growthSurvey,
        },
        {
          value: 162,
          above: 0.5,
          basis: 'derived',
          source: 'Christensen, Gillingham and Nordhaus 2018, expert survey: median, 2.03% a year from 2010',
          url: growthSurvey,
        },
        {
          value: 333,
          above: 0.25,
          basis: 'derived',
          source: 'Christensen, Gillingham and Nordhaus 2018, expert survey: 75th percentile, 2.85% a year from 2010',
          url: growthSurvey,
        },
        {
          value: 572,
          above: 0.1,
          basis: 'derived',
          source: 'Christensen, Gillingham and Nordhaus 2018, expert survey: 90th percentile, 3.47% a year from 2010',
          url: growthSurvey,
        },
      ],
      si: [],
    },
    wikipedia: 'Standard of living',
    siNote:
      'Superintelligence could raise output per person far faster than the 2% a year of the past, by automating work and invention. It cannot by itself build the power plants, mines and homes that consumption needs, or decide how the output is shared.',
  },
  {
    id: 'energy_per_person',
    name: 'Energy use per person',
    summary:
      'How much energy each person uses in a year, counting fuel, heat and electricity. Nearly every good and service is made with energy, so it sets a ceiling on living standards.',
    group: 'living',
    scale: 'none',
    statistic: 'value-in-2100',
    metric: 'Primary energy use per person, world average',
    unit: 'kWh a year',
    decimals: 0,
    axis: { min: 1000, max: 300000, log: true },
    today: {
      value: 20258,
      year: 2025,
      source: 'Energy Institute, Statistical Review of World Energy 2026, via Our World in Data',
      url: owidEnergy,
    },
    bands: [],
    marks: [
      { value: 4250, label: 'Decent living for all (final energy)' },
      { value: 52512, label: 'Rich world today' },
      { value: 75051, label: 'United States today' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'World energy supply and consumption',
    siNote:
      'Cheaper solar, storage and reactors, designed faster, could multiply the energy each person commands. Power plants, grids and mines are still physical build-outs that take years, and burning more fossil fuel would add to warming.',
  },
  {
    id: 'healthy_life_years',
    name: 'Healthy life expectancy',
    summary:
      'How many years a newborn can expect to live in full health. It counts illness and disability, not just death, so it shows whether longer lives are also healthy ones.',
    group: 'living',
    scale: 'none',
    statistic: 'value-in-2100',
    metric: 'Healthy life expectancy at birth, world (WHO)',
    unit: 'years',
    decimals: 1,
    axis: { min: 35, max: 100 },
    today: {
      value: 62.8,
      year: 2023,
      source: 'WHO Global Health Observatory, healthy life expectancy (WHOSIS_000002), October 2026 update',
      url: whoHale,
    },
    bands: [],
    marks: [
      { value: 57.9, label: 'World in 2000' },
      { value: 67.5, label: 'Rich world today' },
      { value: 72.9, label: 'Singapore today, the highest' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Healthy Life Years',
    siNote:
      'Faster drug discovery and cheaper diagnosis could cut the years lived with disease, and slowing aging would lift this most. New treatments still need trials, approval and health workers to reach people.',
  },
  {
    id: 'floor_area',
    name: 'Home space per person',
    summary:
      'How much home floor space each person has. Room to sleep, cook and study is part of decent living, and every square metre has to be built, heated or cooled.',
    group: 'living',
    scale: 'none',
    statistic: 'value-in-2100',
    metric: 'Home floor area per person, world estimate (national statistics where measured)',
    unit: 'm² per person',
    decimals: 0,
    axis: { min: 5, max: 100 },
    today: {
      value: 25,
      year: 2024,
      source:
        'Derived from the UNEP and GlobalABC Global Status Report for Buildings and Construction (via Anadolu Agency, June 2026): 273 billion m² of floor in 2024, over three quarters of it housing according to a report author, for 8.16 billion people',
      url: buildingsFloorArea,
    },
    bands: [],
    marks: [
      { value: 15, label: 'Decent-living minimum' },
      { value: 41.7, label: 'China, 2020' },
      { value: 49.5, label: 'Germany, 2025' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Floor area',
    siNote:
      'Cheaper design, materials and building robots could make homes far less costly. Land in cities, planning rules and the cement, steel and energy each square metre needs do not change with intelligence.',
  },
  {
    id: 'free_time',
    name: 'Hours worked',
    summary:
      'How many hours a year the average worker spends at work. Rich countries have used part of their gains to work less, so this measures the time a living standard costs.',
    group: 'living',
    scale: 'none',
    statistic: 'value-in-2100',
    metric: 'Hours actually worked a year per employed person, world average',
    unit: 'hours a year',
    decimals: 0,
    axis: { min: 0, max: 3000 },
    today: {
      value: 2128,
      year: 2025,
      source: 'Derived from ILO modelled estimates: 40.9 hours a week per employed person, times 52 weeks',
      url: iloHours,
    },
    bands: [],
    marks: [
      { value: 780, label: 'Keynes’s 15-hour week' },
      { value: 1542, label: 'Germany today' },
      { value: 1806, label: 'Rich world today' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Working time',
    siNote:
      'Automation could cut the work a given living standard needs to a fraction. Whether that becomes free time or unemployment depends on who owns the machines and how the gains are shared, which is politics.',
  },
  {
    id: 'essentials_cost_world',
    name: 'Cost of the essentials',
    summary:
      'What food, household energy, water, health care and security cost the world, as a share of its income. This site counts the essentials as nearly free once they cost under 10%.',
    group: 'living',
    scale: 'none',
    statistic: 'value-in-2100',
    metric: 'Food, household energy, water, health and security, public and private, share of world GDP',
    unit: '% of world GDP',
    decimals: 0,
    axis: { min: 0, max: 60 },
    today: {
      value: 26,
      year: 2025,
      source:
        'Doom Analysis estimate (range 25–37%) from World Bank ICP 2021, WHO, SIPRI, Eurostat, US BEA and World Bank water data',
      url: icp,
    },
    bands: [],
    marks: [
      { value: 10, label: 'Essentials nearly free' },
      { value: 20, label: 'A fifth of world output' },
      { value: 50, label: 'Half of world output' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Basic needs',
    siNote:
      'This is where superintelligence is meant to matter most: cheaper energy, food and care would shrink the share. Health spending tends to rise with income, an arms race would raise security costs, and land and water stay finite.',
  },
  {
    id: 'electricity_access_world',
    name: 'Access to electricity',
    summary:
      'The share of humanity with electricity at home. Power pumps water, keeps vaccines and food cold, and lights clinics and schools, so it underpins the other essentials.',
    group: 'living',
    scale: 'none',
    statistic: 'value-in-2100',
    metric: 'People with access to electricity',
    unit: '% of humanity',
    decimals: 1,
    axis: { min: 30, max: 100 },
    today: {
      value: 91.9,
      year: 2024,
      source: 'World Bank (SDG 7.1.1), November 2026 update; 655 million people without power',
      url: wbApi('EG.ELC.ACCS.ZS'),
    },
    bands: [],
    marks: [
      { value: 83.5, label: '2010' },
      { value: 90, label: 'Nine in ten' },
      { value: 99.97, label: 'Rich world today' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Energy poverty',
    siNote:
      'Cheaper solar, batteries and mini-grids, and better planning, could close the gap faster. The people without power live mostly in poor, rural and conflict-hit places, where money, governance and security are the bottleneck.',
  },
  {
    id: 'water_access_world',
    name: 'Safe drinking water',
    summary:
      'The share of humanity with safe drinking water at home: on the premises, available when needed and free from contamination. Unsafe water spreads disease and costs hours of carrying.',
    group: 'living',
    scale: 'none',
    statistic: 'value-in-2100',
    metric: 'People using safely managed drinking water',
    unit: '% of humanity',
    decimals: 1,
    axis: { min: 20, max: 100 },
    today: {
      value: 73.7,
      year: 2024,
      source: 'WHO/UNICEF Joint Monitoring Programme via World Bank (SDG 6.1.1), November 2026 update',
      url: wbApi('SH.H2O.SMDW.ZS'),
    },
    bands: [],
    marks: [
      { value: 61.3, label: '2000' },
      { value: 90, label: 'Nine in ten' },
      { value: 95.8, label: 'Rich world today' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Drinking water',
    siNote:
      'Cheaper energy makes desalination and treatment affordable, and better sensors can find leaks and contamination. Pipes, treatment plants and the utilities that maintain them still have to be built and paid for.',
  },
  {
    id: 'undernourishment_world',
    name: 'Hunger',
    summary:
      'The share of humanity that habitually eats too few calories for a normal, active life. It is the most direct measure of hunger.',
    group: 'living',
    scale: 'none',
    statistic: 'value-in-2100',
    metric: 'Prevalence of undernourishment (FAO): people habitually short of calories',
    unit: '% of humanity',
    decimals: 1,
    axis: { min: 0, max: 60 },
    today: {
      value: 7.8,
      year: 2025,
      source: 'FAO, State of Food Security and Nutrition in the World 2026: about 645 million people',
      url: fao,
    },
    bands: [],
    marks: [
      { value: 2.5, label: 'Hunger ended (FAO’s floor)' },
      { value: 13, label: '2001' },
      { value: 20, label: 'Africa today' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Hunger',
    siNote:
      'Better crops, forecasts and logistics could raise yields and cut waste. FAO names conflict, weather extremes and aid cuts as the threats to progress, and intelligence does not end those by itself.',
  },
  {
    id: 'life_expectancy_world',
    name: 'Life expectancy',
    summary:
      'How long a newborn would live if today’s death rates at each age held for its whole life. It sums up health, food, water and safety in one number.',
    group: 'living',
    scale: 'none',
    statistic: 'value-in-2100',
    metric: 'Life expectancy at birth, world',
    unit: 'years',
    decimals: 1,
    axis: { min: 40, max: 110 },
    today: {
      value: 73.5,
      year: 2024,
      source: 'World Bank (UN Population Division and national sources), November 2026 update',
      url: wbApi('SP.DYN.LE00.IN'),
    },
    bands: [],
    marks: [
      { value: 65.1, label: 'World in 1990' },
      { value: 80.4, label: 'Rich world today' },
      { value: 85.4, label: 'Hong Kong today' },
    ],
    published: {
      noSi: [
        { value: 79, above: 0.975, basis: 'published', source: `${wppSource}: lower end of the 95% interval for 2100`, url: wppLifeExpectancy },
        { value: 80.1, above: 0.9, basis: 'published', source: `${wppSource}: lower end of the 80% interval for 2100`, url: wppLifeExpectancy },
        { value: 81.7, above: 0.5, basis: 'published', source: `${wppSource}: median for 2100`, url: wppLifeExpectancy },
        { value: 83.1, above: 0.1, basis: 'published', source: `${wppSource}: upper end of the 80% interval for 2100`, url: wppLifeExpectancy },
        { value: 83.9, above: 0.025, basis: 'published', source: `${wppSource}: upper end of the 95% interval for 2100`, url: wppLifeExpectancy },
      ],
      si: [],
    },
    wikipedia: 'Life expectancy',
    siNote:
      'Faster discovery of drugs and vaccines could add years, and slowing aging would add many more. Trials, regulation and health workers set the pace, and the same tools could help design pathogens.',
  },
  {
    id: 'population',
    name: 'World population',
    summary:
      'How many people live on Earth. It sets how many must be fed, housed and powered, and it divides every total into a share per person.',
    group: 'living',
    scale: 'none',
    statistic: 'value-in-2100',
    metric: 'People alive on 1 July',
    unit: 'billion people',
    decimals: 2,
    axis: { min: 0, max: 16 },
    today: {
      value: 8.23,
      year: 2025,
      source: 'UN World Population Prospects 2024',
      url: wppPopulation,
    },
    bands: [],
    marks: [
      { value: 4.1, label: 'Half of today' },
      { value: 6.16, label: '2000' },
      { value: 8.8, label: 'IHME projection for 2100' },
      { value: 10.3, label: 'UN peak, mid-2080s' },
    ],
    published: {
      noSi: [
        { value: 9.05, above: 0.975, basis: 'published', source: `${wppSource}: lower end of the 95% interval for 2100`, url: wppPopulation },
        { value: 9.41, above: 0.9, basis: 'published', source: `${wppSource}: lower end of the 80% interval for 2100`, url: wppPopulation },
        { value: 10.18, above: 0.5, basis: 'published', source: `${wppSource}: median for 2100`, url: wppPopulation },
        { value: 11.03, above: 0.1, basis: 'published', source: `${wppSource}: upper end of the 80% interval for 2100`, url: wppPopulation },
        { value: 11.44, above: 0.025, basis: 'published', source: `${wppSource}: upper end of the 95% interval for 2100`, url: wppPopulation },
      ],
      si: [],
    },
    wikipedia: 'World population',
    siNote:
      'Superintelligence barely changes the number of people already born, and births per woman have fallen by a third since 1990. Slowing aging could raise numbers late in the century; an AI catastrophe could cut them.',
  },
  {
    id: 'aging_world',
    name: 'Older people per worker',
    summary:
      'People aged 65 and over for every 100 people aged 15 to 64. A higher ratio means fewer people of working age to fund pensions and health care and to care for the old.',
    group: 'living',
    scale: 'none',
    statistic: 'value-in-2100',
    metric: 'People aged 65 and over per 100 people aged 15 to 64, world',
    unit: 'per 100 of working age',
    decimals: 1,
    axis: { min: 0, max: 100 },
    today: {
      value: 16,
      year: 2025,
      source: 'UN World Population Prospects 2024 via World Bank (SP.POP.DPND.OL)',
      url: wbApi('SP.POP.DPND.OL'),
    },
    bands: [],
    marks: [
      { value: 25.8, label: 'UN median for 2050' },
      { value: 31, label: 'Rich world today' },
      { value: 51, label: 'Japan today' },
    ],
    published: {
      noSi: [
        { value: 35.3, above: 0.975, basis: 'published', source: `${wppSource}: lower end of the 95% interval for 2100`, url: wppOldAge },
        { value: 36.8, above: 0.9, basis: 'published', source: `${wppSource}: lower end of the 80% interval for 2100`, url: wppOldAge },
        { value: 40.2, above: 0.5, basis: 'published', source: `${wppSource}: median for 2100`, url: wppOldAge },
        { value: 43.7, above: 0.1, basis: 'published', source: `${wppSource}: upper end of the 80% interval for 2100`, url: wppOldAge },
        { value: 45.5, above: 0.025, basis: 'published', source: `${wppSource}: upper end of the 95% interval for 2100`, url: wppOldAge },
      ],
      si: [],
    },
    wikipedia: 'Population ageing',
    siNote:
      'Everyone who will be 65 or over in 2100 is born by 2035, so the number of older people is largely set already. Superintelligence could change what it means: if machines do much of the work and care, fewer workers per older person matters less.',
  },
]
