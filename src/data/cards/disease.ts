import type { Card } from '../../model/types.ts'

const owidFlu = 'https://ourworldindata.org/spanish-flu-largest-influenza-pandemic-in-history'
const owidPandemics = 'https://ourworldindata.org/historical-pandemics'
const xpt = 'https://forum.effectivealtruism.org/posts/9ddheDChiMhveCfSw/what-do-xpt-results-tell-us-about-biorisk'
const xptReport = 'https://forecastingresearch.org/pdf/existential-risk-persuasion-tournament.pdf'
const lancetCommission = 'https://www.gavi.org/vaccineswork/halving-premature-deaths-2050-within-reach-says-Lancet-study'
const friBiorisk = 'https://forecastingresearch.org/ai-enabled-biorisk'
const rozo = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4542197/'
const gram = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11718157/'
const unDeaths = 'https://ourworldindata.org/grapher/births-and-deaths-projected-to-2100'

const xptSuperforecasters = 'XPT superforecasters, 2022 (Forecasting Research Institute)'
const unProjection = 'UN medium projection for 2100 via Our World in Data: 122.9 million deaths among 10.18 billion people'

/** Pandemics and disease, researched November 2026. */
export const cards: Card[] = [
  {
    id: 'pandemic',
    name: 'Pandemics',
    summary: 'The deadliest pandemic before 2100, natural or human-caused, as the share of humanity it kills. A pandemic hits every country at once, so no one is free to send help.',
    group: 'disease',
    scale: 'danger',
    statistic: 'worst-by-2100',
    metric: 'Share of humanity killed by one pandemic',
    unit: '%',
    decimals: 1,
    axis: { min: 0.01, max: 100, log: true },
    today: {
      value: 2.7,
      year: 1918,
      label: '1918 flu (modern record)',
      source: 'Our World in Data, after Johnson and Mueller 2002: about 50 million deaths among 1.8 billion people',
      url: owidFlu,
    },
    bands: [
      {
        from: 0.01,
        to: 1,
        level: 1,
        label: 'Up to 100 million die; hospitals overflow, societies hold',
        basis: 'derived',
        source: 'Our World in Data: COVID-19 caused about 27 million excess deaths, 0.3% of humanity',
        url: owidPandemics,
      },
      {
        from: 1,
        to: 10,
        level: 2,
        label: '1918 flu scale: 100 million to a billion dead within a few years',
        basis: 'derived',
        source: 'Our World in Data: the 1918 flu killed about 2.7% of humanity (estimates from 1% to 5.4%)',
        url: owidFlu,
      },
      {
        from: 10,
        to: 50,
        level: 3,
        label: 'Black Death scale: one person in ten to one in two dies',
        basis: 'derived',
        source: 'Our World in Data: the Black Death killed 50–60% of Europeans, about 50 million people',
        url: owidPandemics,
      },
      { from: 50, to: 99, level: 4, label: 'Most people die; the survivors are still enough to rebuild', basis: 'judged' },
      { from: 99, to: 100, level: 5, label: 'Extinction, or too few survivors to rebuild within a century', basis: 'judged' },
    ],
    marks: [
      { value: 0.33, label: 'COVID-19' },
      { value: 11, label: 'Black Death' },
    ],
    published: {
      noSi: [
        {
          value: 0.25,
          above: 0.86,
          basis: 'derived',
          source: 'Lancet Commission, Global Health 2050, 2024, via Gavi: 23% chance within a decade (48% within 25 years) of a pandemic killing over 25 million people, held to 2100',
          url: lancetCommission,
        },
        {
          value: 1,
          above: 0.075,
          basis: 'derived',
          source: `${xptSuperforecasters}: 3.63% natural and 4% engineered pathogen killing over 1% in five years by 2100, combined as independent`,
          url: xptReport,
        },
        {
          value: 10,
          above: 0.018,
          basis: 'derived',
          source: `${xptSuperforecasters}: 1% natural and 0.8% engineered pathogen killing over 10% by 2100, combined as independent`,
          url: xptReport,
        },
        { value: 99.9999, above: 0.00012, basis: 'published', source: `${xptSuperforecasters}: extinction by a pathogen, meaning fewer than 5,000 survivors`, url: xpt },
      ],
      si: [],
    },
    wikipedia: 'Pandemic',
    siNote:
      'Superintelligence could design vaccines and drugs in days and spot an outbreak at its first cases. It could also help someone build a pathogen. Making and delivering billions of doses, and getting people to take them, stays physical and social work.',
  },
  {
    id: 'engineered_pandemic',
    name: 'Human-caused pandemics',
    summary: 'The deadliest pandemic started by people instead of nature: a laboratory accident, or a deliberate release by a group or a single person. Forecasters see it as the likelier road to the very worst outcomes.',
    group: 'disease',
    scale: 'danger',
    parent: 'pandemic',
    statistic: 'worst-by-2100',
    metric: 'Share of humanity killed by one human-caused pandemic',
    unit: '%',
    decimals: 3,
    axis: { min: 0.0012, max: 100, log: true },
    today: {
      value: 0.005,
      year: 1977,
      label: '1977 flu, origin unproven',
      source: 'Rozo and Gronvall, mBio 2015: under 5 deaths per 100,000 people; probably a vaccine trial or a laboratory escape',
      url: rozo,
    },
    bands: [
      {
        from: 0.0012,
        to: 1,
        level: 1,
        label: 'A leak or an attack kills up to 100 million; societies hold',
        basis: 'derived',
        source: 'Read as on the parent card, by the share killed: COVID-19 killed about 0.3% of humanity',
        url: owidPandemics,
      },
      {
        from: 1,
        to: 10,
        level: 2,
        label: 'A released pathogen kills on the scale of the 1918 flu',
        basis: 'derived',
        source: 'Read as on the parent card, by the share killed: the 1918 flu killed about 2.7% of humanity',
        url: owidFlu,
      },
      {
        from: 10,
        to: 50,
        level: 3,
        label: 'One person in ten to one in two dies of a released pathogen',
        basis: 'derived',
        source: 'Read as on the parent card, by the share killed: the Black Death killed 50–60% of Europeans',
        url: owidPandemics,
      },
      { from: 50, to: 99, level: 4, label: 'Most people die; the survivors are still enough to rebuild', basis: 'judged' },
      { from: 99, to: 100, level: 5, label: 'Extinction, or too few survivors to rebuild within a century', basis: 'judged' },
    ],
    marks: [
      { value: 0.33, label: 'COVID-19 scale' },
      { value: 2.7, label: '1918 flu scale' },
    ],
    published: {
      noSi: [
        {
          value: 0.0012,
          above: 0.2,
          basis: 'derived',
          source: 'FRI panel of 46 experts, 2025: 0.3% a year (for 2028) for a human-caused epidemic killing over 100,000 people or costing $1 trillion, held to 2100',
          url: friBiorisk,
        },
        { value: 1, above: 0.04, basis: 'published', source: `${xptSuperforecasters}: genetically engineered pathogen, any actor, over 1% in five years by 2100`, url: xptReport },
        { value: 10, above: 0.008, basis: 'published', source: `${xptSuperforecasters}: genetically engineered pathogen, any actor, over 10% by 2100`, url: xptReport },
        { value: 99.9999, above: 0.0001, basis: 'published', source: `${xptSuperforecasters}: extinction by an engineered pathogen, meaning fewer than 5,000 survivors`, url: xpt },
      ],
      si: [],
    },
    wikipedia: 'Biotechnology risk',
    siNote:
      'AI that matches expert virologists lowers the skill needed to build a pathogen: surveyed experts raised their yearly risk fivefold under that assumption. The same tools can screen DNA orders, catch outbreaks early and speed up vaccines.',
  },
  {
    id: 'amr_deaths',
    name: 'Drug-resistant infections',
    summary: 'Deaths each year from bacterial infections that antibiotics can no longer cure. If resistance keeps spreading, surgery and other routine care become more dangerous.',
    group: 'disease',
    scale: 'danger',
    statistic: 'value-in-2100',
    metric: 'Deaths a year attributable to drug-resistant bacteria',
    unit: 'per 100,000 people',
    decimals: 1,
    axis: { min: 1, max: 300, log: true },
    today: { value: 14.5, year: 2021, source: 'GRAM study, The Lancet 2024: 1.14 million deaths', url: gram },
    bands: [
      {
        from: 1,
        to: 12,
        level: 1,
        label: 'Under 1 death in 100 is due to resistance; antibiotics mostly work',
        basis: 'derived',
        source: unProjection,
        url: unDeaths,
      },
      {
        from: 12,
        to: 120,
        level: 2,
        label: '1 to 10 deaths in 100 are due to resistance; care gets riskier',
        basis: 'derived',
        source: unProjection,
        url: unDeaths,
      },
      {
        from: 120,
        to: 300,
        level: 3,
        label: 'Over 1 death in 10; antibiotics fail against most bacteria',
        basis: 'derived',
        source: unProjection,
        url: unDeaths,
      },
    ],
    marks: [
      { value: 20.4, label: 'Forecast for 2050' },
      { value: 103, label: 'O’Neill warning for 2050' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Antimicrobial resistance',
    siNote:
      'Superintelligence could find new antibiotics and rapid tests quickly. Each drug still needs years of human trials, bacteria evolve around every drug, and many deaths happen where clean water and basic care are missing.',
  },
]
