/**
 * Outside views the judge and the reader can compare against. Every entry was read on its source
 * page in November 2026. Statements are paraphrased; probabilities are as published.
 */
export type Evidence = {
  id: string
  who: string
  claim: string
  value: string
  date: string
  source: string
  url: string
  caveat?: string
}

export const timelineEvidence: Evidence[] = [
  {
    id: 'metaculus_agi',
    who: 'Metaculus community',
    claim: 'Median date for the first general AI system to be devised, tested and announced',
    value: 'Jan 2030',
    date: '2026-11-23',
    source: 'Metaculus question 5121',
    url: 'https://www.metaculus.com/questions/5121/date-of-artificial-general-intelligence/',
  },
  {
    id: 'metaculus_si_gap',
    who: 'Metaculus community',
    claim: 'Median months from the first weakly general AI to the first superintelligence',
    value: '23 months',
    date: '2026-11-23',
    source: 'Metaculus question 9062',
    url: 'https://www.metaculus.com/questions/9062/how-many-months-from-weak-agi-to-first-superintelligence/',
  },
  {
    id: 'manifold_si_2100',
    who: 'Manifold traders',
    claim: 'Superintelligence by 2100, assuming no existential catastrophe first',
    value: '86%',
    date: '2026-11-23',
    source: 'Manifold market',
    url: 'https://manifold.markets/IsaacKing/will-there-be-a-superintelligence-b-10fdd93e8092',
    caveat: 'Thinly traded (111 traders). The same series gives 76% by 2050.',
  },
  {
    id: 'aiimpacts_hlmi',
    who: 'AI researchers (2,778 surveyed, AI Impacts 2023)',
    claim: 'Year by which they give 50% to human-level machine intelligence',
    value: '2047',
    date: '2024-01-05',
    source: 'Grace et al., Thousands of AI Authors on the Future of AI',
    url: 'https://arxiv.org/abs/2401.02843',
  },
  {
    id: 'metr_horizon',
    who: 'METR',
    claim: 'Length of software tasks the best measured model completes half the time',
    value: '≈17 hours',
    date: '2026-05-08',
    source: 'METR time horizons',
    url: 'https://metr.org/time-horizons/',
    caveat: 'METR says measurements above 16 hours are unreliable with its current tasks; the 95% interval is 8.5–55 hours.',
  },
  {
    id: 'metr_doubling',
    who: 'METR',
    claim: 'Doubling time of that task horizon since 2023',
    value: '≈4.2 months',
    date: '2026-09-08',
    source: 'METR Time Horizon 1.1 data',
    url: 'https://metr.org/time-horizons/',
  },
  {
    id: 'epoch_compute',
    who: 'Epoch AI',
    claim: 'Growth of compute used to train frontier models since 2020',
    value: '5× per year',
    date: '2026-11-05',
    source: 'Epoch AI, Trends in AI',
    url: 'https://epoch.ai/trends',
  },
]

export const riskEvidence: Evidence[] = [
  {
    id: 'xpt_superforecasters',
    who: 'Superforecasters (XPT tournament)',
    claim: 'Median probability of human extinction by 2100, all causes / caused by AI',
    value: '1% / 0.38%',
    date: '2023-07-10',
    source: 'Forecasting Research Institute, Existential Risk Persuasion Tournament',
    url: 'https://forecastingresearch.org/pdf/existential-risk-persuasion-tournament.pdf',
  },
  {
    id: 'xpt_experts',
    who: 'Domain experts (XPT tournament)',
    claim: 'Median probability of human extinction by 2100, all causes / caused by AI',
    value: '6% / 3%',
    date: '2023-07-10',
    source: 'Forecasting Research Institute, Existential Risk Persuasion Tournament',
    url: 'https://forecastingresearch.org/pdf/existential-risk-persuasion-tournament.pdf',
  },
  {
    id: 'aiimpacts_bad',
    who: 'AI researchers (AI Impacts 2023)',
    claim: 'Probability that advanced AI leads to an extremely bad outcome, such as human extinction',
    value: 'median 5%, mean 9%',
    date: '2024-01-05',
    source: 'Grace et al., section 4.2',
    url: 'https://arxiv.org/html/2401.02843v3',
  },
  {
    id: 'metaculus_catastrophe',
    who: 'Metaculus community',
    claim: 'World population falls by at least 10% within five years, at some point before 2100',
    value: '45%',
    date: '2026-11-23',
    source: 'Metaculus question 1493',
    url: 'https://www.metaculus.com/questions/1493/global-population-decline-10-by-2100/',
    caveat: 'A catastrophe, not doom: most such worlds recover.',
  },
  {
    id: 'metaculus_positive',
    who: 'Metaculus community',
    claim: 'The transition to radically smarter-than-human AI goes well for humanity',
    value: '50%',
    date: '2026-11-23',
    source: 'Metaculus question 4118',
    url: 'https://www.metaculus.com/questions/4118/asi-transition-beneficial-for-humanity/',
  },
  {
    id: 'iasr_2026',
    who: 'International AI Safety Report 2026',
    claim: 'Experts disagree sharply on the likelihood of losing control. Current systems show early signs of the relevant abilities, such as recognizing when they are being tested, but not yet enough to escape oversight.',
    value: 'No consensus number',
    date: '2026-02-03',
    source: 'International AI Safety Report 2026, section 2.2.2',
    url: 'https://internationalaisafetyreport.org/publication/international-ai-safety-report-2026',
  },
]

export const muskEvidence: Evidence[] = [
  {
    id: 'musk_pdoom',
    who: 'Elon Musk',
    claim: 'Puts the chance that AI goes badly, up to annihilating humanity, at 10–20%, repeated at Cannes Lions and the Riyadh investment summit in 2024, and as 20% on Joe Rogan’s podcast in 2025.',
    value: '10–20%',
    date: '2024-10-30',
    source: 'Fortune, 30 Oct 2024',
    url: 'https://fortune.com/2024/10/30/elon-musk-ai-could-go-bad-existential-threat-xai-fundraising/',
  },
  {
    id: 'musk_good',
    who: 'Elon Musk',
    claim: 'Says the most likely outcome is abundance, with roughly an 80% chance of a good outcome.',
    value: '≈80%',
    date: '2024-06-19',
    source: 'Deadline, Cannes Lions, 19 Jun 2024',
    url: 'https://deadline.com/2024/06/elon-musk-gives-the-world-10-20-chance-of-something-terrible-happening-with-ai-future-cannes-lions-1235977965/',
  },
  {
    id: 'musk_uhi',
    who: 'Elon Musk',
    claim: 'Predicts “universal high income” rather than basic income, with work becoming optional and poverty disappearing.',
    value: 'Claim',
    date: '2025-12-17',
    source: 'Fox Business, 17 Dec 2025',
    url: 'https://www.foxbusiness.com/economy/musk-predicts-ai-create-universal-high-income-make-saving-money-unnecessary',
  },
  {
    id: 'tesla_mp4',
    who: 'Tesla, Master Plan Part IV',
    claim: 'Frames AI, autonomy and humanoid robots as the path to “sustainable abundance”.',
    value: 'Claim',
    date: '2025-09-01',
    source: 'Tesla Master Plan Part IV (PDF)',
    url: 'https://digitalassets.tesla.com/tesla-contents/image/upload/Tesla-Master-Plan-Part-4.pdf',
  },
]

export const clinicalEvidence = {
  years: 10.5,
  successFromPhase1: 0.079,
  medianCostUsd: 985e6,
  yearsSource: { label: 'BIO, Informa and QLS, Clinical Development Success Rates 2011–2020', url: 'https://go.bio.org/rs/490-EHZ-999/images/ClinicalDevelopmentSuccessRates2011_2020.pdf' },
  costSource: { label: 'Wouters et al., JAMA 2020', url: 'https://doi.org/10.1001/jama.2020.1166' },
}
