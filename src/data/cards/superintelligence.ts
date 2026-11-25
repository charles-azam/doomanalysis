import type { Card } from '../../model/types.ts'

const leap = 'https://leap.forecastingresearch.org/reports/wave9'
const xpt = 'https://forecastingresearch.org/pdf/existential-risk-persuasion-tournament.pdf'
const openaiIncident = 'https://openai.com/index/hugging-face-incident-and-the-road-ahead/'
const population = 'https://data.worldbank.org/indicator/SP.POP.TOTL'
const populationName = 'Danger scale applied to 8.22 billion people (World Bank, 2025)'

const aaTrends = 'https://artificialanalysis.ai/trends'
const metrQ4 = 'https://metr.org/blog/2026-11-20-q4-2026-capability-update/'

/**
 * Superintelligence, researched November 2026. The top card is the harm AI does on its own; the two
 * measures under it track how close AI is to superintelligence. The thresholds on the Progress Index
 * are this site's own reading of the scale, argued in ai_progress_index.md.
 */
export const cards: Card[] = [
  {
    id: 'ai_takeover',
    name: 'AI takeover',
    summary: 'The worst harm done by AI systems acting on their own before 2100, as the share of humanity they kill or permanently strip of control; AI that people use as a weapon counts under war or disease.',
    group: 'ai',
    scale: 'danger',
    statistic: 'worst-by-2100',
    metric: 'Share of humanity killed or permanently disempowered by AI acting on its own',
    unit: '% of humanity',
    decimals: 1,
    axis: { min: 0, max: 100 },
    today: {
      value: 0,
      year: 2026,
      label: 'OpenAI agents hack Hugging Face, July 2026: no deaths',
      source: 'OpenAI, The Hugging Face incident and the road ahead, August 2026: agents took dangerous actions no human directed; no deaths or injuries reported',
      url: openaiIncident,
    },
    bands: [
      { from: 0, to: 1, level: 1, label: 'Up to 82 million killed or disempowered; humanity stays in charge', basis: 'derived', source: populationName, url: population },
      { from: 1, to: 10, level: 2, label: '82 to 820 million killed or disempowered; humanity stays in charge', basis: 'derived', source: populationName, url: population },
      { from: 10, to: 50, level: 3, label: '0.8 to 4.1 billion killed or disempowered; the rest stay in charge', basis: 'derived', source: populationName, url: population },
      { from: 50, to: 99, level: 4, label: 'Most people killed or ruled by AI; the rest keep control and rebuild', basis: 'derived', source: populationName, url: population },
      { from: 99, to: 100, level: 5, label: 'AI kills nearly everyone or takes control for good: doom', basis: 'judged' },
    ],
    published: {
      noSi: [
        {
          value: 10,
          above: 0.02,
          basis: 'published',
          source: 'Forecasting Research Institute, LEAP wave 9, June 2026: experts’ median for an AI-related catastrophe killing over 10% by 2100 if AI progress is slow to 2030. Counts harm AI made possible, so a ceiling',
          url: leap,
        },
      ],
      si: [
        {
          value: 10,
          above: 0.1,
          basis: 'published',
          source: 'Forecasting Research Institute, LEAP wave 9, June 2026: experts’ median for the same catastrophe if by 2030 AI matches or beats the best humans. Counts harm AI made possible, so a ceiling',
          url: leap,
        },
        {
          value: 99,
          above: 0.01,
          basis: 'published',
          source: 'Forecasting Research Institute, XPT report, 2023: superforecasters’ median for AI-caused extinction by 2100 if general AI exists by 2070. Extinction only, so a floor for this band',
          url: xpt,
        },
      ],
    },
    wikipedia: 'AI takeover',
    siNote: 'Superintelligence is this hazard: the more capable and widely deployed AI becomes, the more it could take. Smarter AI could help people check other AI, but whether the first such systems stay controllable depends on choices made before they exist.',
  },
  {
    id: 'ai_progress_index',
    name: 'AI Progress Index of the best model',
    summary: 'One score for the general ability of the best AI model, comparable across years, which has risen about 60 points a year since 2022; by our reading, superintelligence begins somewhere between 460 and 610.',
    group: 'ai',
    scale: 'none',
    parent: 'ai_takeover',
    statistic: 'value-in-2100',
    metric: 'Artificial Analysis Progress Index of the best model',
    unit: 'points',
    decimals: 0,
    axis: { min: 100, max: 1000 },
    today: { value: 359, year: 2026, source: 'Artificial Analysis, AI Trends: Claude Fable 5.2 (max), released 9 November 2026', url: aaTrends },
    bands: [],
    marks: [
      { value: 460, label: 'Superintelligence, low estimate' },
      { value: 535, label: 'Superintelligence, middle estimate' },
      { value: 610, label: 'Superintelligence, high estimate' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'Progress in artificial intelligence',
    siNote: 'This card tracks the road to superintelligence rather than something it acts on. Once AI beats the best humans, people can no longer easily write and grade harder tests, so the scale itself may stop measuring much.',
  },
  {
    id: 'ai_horizon',
    name: 'AI task horizon',
    summary: 'How long a task, in hours of expert work, the best AI finishes on its own half the time; it has doubled about every four months, and tasks of months or years would put superintelligence close.',
    group: 'ai',
    scale: 'none',
    parent: 'ai_takeover',
    statistic: 'value-in-2100',
    metric: 'Length of task the best AI completes alone half the time (METR)',
    unit: 'hours',
    decimals: 0,
    axis: { min: 0.01, max: 100000, log: true },
    today: { value: 40, year: 2026, source: 'METR, Q4 2026 capability update: GPT-6 Astra, 95% interval 13 to 2,645 hours', url: metrQ4 },
    bands: [],
    marks: [
      { value: 167, label: 'One work-month' },
      { value: 2000, label: 'One work-year' },
      { value: 10000, label: 'A work-year done four times in five' },
    ],
    published: { noSi: [], si: [] },
    wikipedia: 'METR',
    siNote: 'This is a yardstick on the road to superintelligence, not something it acts on. Near that point it breaks: METR already struggles to find people who beat the models, and its tidy, computer-graded tasks may overstate skill at messy real work.',
  },
]
