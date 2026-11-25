import { causeDefinitions, channelDefinitions, dangerScale, definitions, horizon, outcomeDefinitions, potentialScale, scaleDefinitions } from '../src/data/definitions.ts'
import { countries, entityById, regions } from '../src/data/entities.ts'
import { riskEvidence } from '../src/data/evidence.ts'
import { arrivalSeries } from '../src/data/si-arrival.ts'
import { formatAxis } from '../src/model/chart.ts'
import { atLeast, curveEdges, curveFor, levelChances } from '../src/model/distribution.ts'
import { cardFloor, causeShares, dangerKeys, formatPercent, headline, placeOutcomeKeys, rootCauses, siChannels, sumCauses, timelineEnd, timelineKeys, timelineYears, type DangerKey, type Verdict } from '../src/model/forecast.ts'
import type { Card, CurveForecast, EntityId, RootCause } from '../src/model/types.ts'
import { evidenceFor } from './evidence.ts'

/** Version the prompt so every stored forecast says which wording produced it. */
export const forecastPromptVersion = '2026-11-25.1'

const pct = (value: number): string => formatPercent({ value: value })

/** Markdown as plain text for a judge: no front matter, links reduced to their words, indented, clipped. */
export function plainText({ markdown, limit }: { markdown: string; limit: number }): string {
  const plain = markdown
    .replace(/^---[\s\S]*?\n---\n/, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^#+\s*/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
  const clipped = plain.length > limit ? `${plain.slice(0, limit).replace(/\s+\S*$/, '')} …` : plain
  return clipped
    .split('\n')
    .map((line) => `  ${line}`)
    .join('\n')
}


const preamble = `You are one of several independent judges for a public forecasting site, Doom Analysis. Give your own calibrated probabilities. Do not anchor on any number you believe the site's author wants, and do not soften or dramatise. Do not use tools: reason from the evidence below and from what you know. Today is 24 November 2026; every question is about the years up to the end of ${horizon}.

## Definitions (fixed)
- ${scaleDefinitions.danger}
${dangerScale.map((l) => `  - Level ${l.level}, ${l.name}: ${l.share}${l.reference ? ` (for scale: ${l.reference})` : ''}.`).join('\n')}
- ${scaleDefinitions.decent}
- ${scaleDefinitions.doom}
- ${definitions.superintelligence} "si" means superintelligence is deployed before ${horizon}; "noSi" means it is not. Note that "noSi" includes the futures in which a catastrophe is what stopped it.
- Technology cards are read on the potential scale: the share of humanity the technology alone moves up at least one outcome.
${potentialScale.map((l) => `  - Potential ${l.level}, ${l.name}: ${l.share}.`).join('\n')}

## How to think about it
- Weigh both the mainstream economic view (substitution, innovation, adaptation) and the physical-limits view (energy, materials, ecosystems; for example Jean-Marc Jancovici and the Shift Project). Neither is assumed right.
- Superintelligence can be both a counterforce (faster science, cheaper energy and medicine) and a risk (loss of control, misuse, faster arms races). Physical build-out, clinical trials, politics and emissions already in the air do not speed up just because intelligence is abundant.
- Small probabilities matter here. Use the full precision you believe in (0.003 is a valid answer), and do not round small risks to zero.`

const bandText = ({ card }: { card: Card }): string =>
  card.bands.map((band) => `${formatAxis({ card: card, value: band.from })}–${formatAxis({ card: card, value: band.to })}: level ${band.level} (${band.label})`).join('; ')

const markText = ({ card }: { card: Card }): string => (card.marks ?? []).map((mark) => `${formatAxis({ card: card, value: mark.value })} (${mark.label})`).join('; ')

const pointsText = ({ card, siCase }: { card: Card; siCase: 'si' | 'noSi' }): string =>
  card.published[siCase].map((p) => `P(above ${formatAxis({ card: card, value: p.value })}) = ${pct(p.above)} [${p.basis}, ${p.source}]`).join('; ')

/** One block per card: what it measures, today, the bands, the published points, and the edges to judge. */
function cardBlock({ card, explainer }: { card: Card; explainer: string | undefined }): string {
  const edges = curveEdges({ card: card })
  const publishedNoSi = card.published.noSi.map((p) => p.value)
  const toGiveNoSi = edges.filter((edge) => !publishedNoSi.some((v) => Math.abs(v - edge) < 1e-9 * Math.max(1, Math.abs(edge))))
  const what = card.statistic === 'worst-by-2100' ? `the worst such event between now and ${horizon}` : `the value in ${horizon}`
  return `### ${card.id}: ${card.name}
- ${card.summary}
- Metric: ${card.metric}, in ${card.unit} (${what}). Today${card.statistic === 'worst-by-2100' ? ' (worst so far)' : ''}: ${formatAxis({ card: card, value: card.today.value })} (${card.today.label ?? card.today.year}).
${card.bands.length > 0 ? `- Bands (${card.scale}): ${bandText({ card: card })}` : `- Marks: ${markText({ card: card })}`}
- Published curve points without superintelligence: ${pointsText({ card: card, siCase: 'noSi' }) || 'none'}.${card.published.si.length > 0 ? `\n- Published points with superintelligence: ${pointsText({ card: card, siCase: 'si' })}.` : ''}
- Give "noSi" at: ${toGiveNoSi.length > 0 ? toGiveNoSi.map((v) => formatAxis({ card: card, value: v })).join(', ') : 'nothing (all published)'}. Give "si" at: ${edges.map((v) => formatAxis({ card: card, value: v })).join(', ')}. Exact values to use: noSi ${JSON.stringify(toGiveNoSi)}, si ${JSON.stringify(edges)}.
- Superintelligence note: ${card.siNote}${explainer ? `\n- Background (from the site's explainer):\n${explainer}` : ''}`
}

/** Round 1: the curve of every card that no source fully publishes. */
export function buildCurvePrompt({ cards, explainers }: { cards: Card[]; explainers: Record<string, string> }): string {
  return `${preamble}

## Your task: the 2100 curves of these cards
For each card, give the probability that its value is ABOVE each listed value, in each case: "noSi" (no superintelligence before ${horizon}) and "si" (superintelligence deployed before ${horizon}).

Rules (your answer is rejected if it breaks them):
- Every probability is between 0 and 1.
- Within a case, probabilities must not rise as the value rises.
- In "noSi", your points must fit with the published points: for instance, if P(above 2) is published as 0.92, your P(above 3.5) must be at most 0.92.
- Use exactly the values listed under "Exact values to use", for every card listed.
- For "worst event" cards, P(above x) is the chance that at least one event of size x or more happens before ${horizon}.

${cards.map((card) => cardBlock({ card: card, explainer: explainers[card.id] })).join('\n\n')}

Answer only with JSON: {"curves": [{"card": "<id>", "noSi": [{"value": <number>, "above": <probability>}, ...], "si": [...]}, ... one object per card above, in the same order]}.`
}

export const curveSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['curves'],
  properties: {
    curves: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['card', 'noSi', 'si'],
        properties: {
          card: { type: 'string' },
          noSi: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['value', 'above'], properties: { value: { type: 'number' }, above: { type: 'number' } } } },
          si: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['value', 'above'], properties: { value: { type: 'number' }, above: { type: 'number' } } } },
        },
      },
    },
  },
}

/** What each cause's cards say on their own, from the pooled curves of round 1. */
function causeEvidence({ cards, curves, cause }: { cards: Card[]; curves: Record<string, CurveForecast>; cause: RootCause }): string {
  const own = cards.filter((card) => card.group === cause)
  const lines = own.map((card) => {
    if (card.scale !== 'danger') return `- ${card.name} (${card.id}${card.parent ? `, part of ${card.parent}` : ''}): today ${formatAxis({ card: card, value: card.today.value })} ${card.unit}; ${card.summary}`
    const parts = (['noSi', 'si'] as const).map((siCase) => {
      const chances = levelChances({ card: card, points: curveFor({ card: card, judged: curves[card.id], siCase: siCase }) })
      if (chances === undefined) return `${siCase}: not judged`
      return `${siCase}: P(level ≥3) ${pct(atLeast({ chances: chances, level: 3 }))}, ≥4 ${pct(atLeast({ chances: chances, level: 4 }))}, 5 ${pct(chances[5])}`
    })
    return `- ${card.name} (${card.id}${card.parent ? `, part of ${card.parent}` : ''}), through this card alone: ${parts.join(' | ')}`
  })
  const floors = (['noSi', 'si'] as const).map((siCase) => {
    const values = dangerKeys.map((key) => cardFloor({ cards: cards, curves: curves, cause: cause, key: key, siCase: siCase }))
    return `${siCase}: ${values.map((v, i) => `${dangerKeys[i]} ${v === undefined ? 'n/a' : pct(v)}`).join(', ')}`
  })
  return `### ${cause}: ${causeDefinitions[cause].name}
${causeDefinitions[cause].text}
${lines.join('\n')}
- The most dangerous card of this cause, on its own: ${floors.join(' | ')}`
}

/** Round 2: the world (seven causes by level, superintelligence, abundance) and the twelve regions. */
export function buildWorldPrompt({ cards, curves, aiNote }: { cards: Card[]; curves: Record<string, CurveForecast>; aiNote: string }): string {
  const regionBlocks = regions.map((region) => `### ${region.name} (${region.id}), ${(region.population / 1e6).toFixed(0)} million people\n${evidenceFor({ entity: region.id, compact: false })}`).join('\n\n')
  const technology = cards.filter((card) => card.group === 'technology' && card.scale === 'potential' && card.parent === undefined)
  const techLines = technology.map((card) => {
    const parts = (['noSi', 'si'] as const).map((siCase) => {
      const chances = levelChances({ card: card, points: curveFor({ card: card, judged: curves[card.id], siCase: siCase }) })
      return chances === undefined ? `${siCase}: not judged` : `${siCase}: P(potential ≥3) ${pct(atLeast({ chances: chances, level: 3 }))}, ≥4 ${pct(atLeast({ chances: chances, level: 4 }))}`
    })
    return `- ${card.name} (${card.id}): ${parts.join(' | ')}`
  })
  return `${preamble}

## Outcomes of a place (for the regions)
${Object.values(outcomeDefinitions).map((text) => `- ${text}`).join('\n')}
- ${scaleDefinitions.livingStandard}

## Your task, part 1: the world
- siBy2050, siBy2100: probability that superintelligence, as defined, is deployed by those dates.
- For each case ("si", "noSi") and each of the seven root causes, three probabilities about the worst thing that happens to the world by ${horizon}:
  - atLeast3: it reaches level 3 or worse AND this cause started it;
  - atLeast4: it reaches level 4 or worse AND this cause started it;
  - doom: it reaches level 5 AND this cause started it.
  ${scaleDefinitions.rootCause}
  Because each future has one worst level and one root cause, the seven atLeast3 values must sum to at most 1, and the world's chance of doom is the sum of the seven doom values.
- The cards below say what each hazard does on its own. A cause's total should normally be at least its most dangerous card, because it adds every channel and knock-on effect of that cause (a drought that starts a war counts for climate). Where you go below it, say why in the rationale.
- directDoom: your own single estimate of the chance of doom by ${horizon} in that case, made before adding up the causes. It must be within 20% of the sum of your seven doom values.
- abundance: the chance that at least 90% of humanity lives in places that reach abundance in ${horizon}.
- rationale: three to five sentences, plain words: what drives the result, and where you disagree with the cards.

Rules (your answer is rejected if it breaks them): every value is between 0 and 1; for each cause atLeast3 ≥ atLeast4 ≥ doom; the atLeast3 values sum to at most 1; siBy2050 ≤ siBy2100; directDoom within 20% of the sum of the doom values (or within 0.5 points).

## Evidence: the cards of each cause
Chances are pooled from independent judges, combined with published figures where they exist.
${rootCauses.map((cause) => causeEvidence({ cards: cards, curves: curves, cause: cause })).join('\n\n')}

## Evidence: technologies that push back
${techLines.join('\n')}

## Evidence: superintelligence
${aiNote}
Outside forecasts of arrival (definitions differ from ours; weigh them, do not copy them):
${arrivalSeries.map((series) => `- ${series.label}: ${series.points.map((p) => `${Math.round(p.probability * 100)}% by ${p.year}`).join(', ')}`).join('\n')}
Catastrophe and extinction estimates from others:
${riskEvidence.map((e) => `- ${e.who}: ${e.claim}: ${e.value}`).join('\n')}

## Your task, part 2: the twelve regions
For each region and each case, the chance of each of the five outcomes other than doom, GIVEN that the world does not reach doom. The five must sum to 1. Doom is global and is added by the site from your world answer.
- rationale: one or two sentences per region.

## Evidence: regions (population-weighted averages of their countries)
${regionBlocks}

Answer only with JSON: {"world": {"siBy2050": .., "siBy2100": .., "si": {"causes": {"climate": {"atLeast3": .., "atLeast4": .., "doom": ..}, ... all seven}, "directDoom": .., "abundance": ..}, "noSi": {...}, "rationale": ".."}, "places": [one object per region, in this order: ${regions.map((r) => r.id).join(', ')}]}.`
}

const outcomesSchema = {
  type: 'object',
  additionalProperties: false,
  required: placeOutcomeKeys,
  properties: Object.fromEntries(placeOutcomeKeys.map((key) => [key, { type: 'number' }])),
}

const readingSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['channels', 'reason'],
  properties: {
    channels: { type: 'object', additionalProperties: false, required: siChannels, properties: Object.fromEntries(siChannels.map((channel) => [channel, { type: 'number', minimum: -2, maximum: 2 }])) },
    reason: { type: 'string', maxLength: 160 },
  },
}

const placesSchema = ({ ids, reading }: { ids: string[]; reading: boolean }) => ({
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: false,
    required: ['entity', 'si', 'noSi', 'rationale', ...(reading ? ['reading'] : [])],
    properties: { entity: { type: 'string', enum: ids }, si: outcomesSchema, noSi: outcomesSchema, rationale: { type: 'string' }, ...(reading ? { reading: readingSchema } : {}) },
  },
})

const causeSchema = { type: 'object', additionalProperties: false, required: dangerKeys, properties: Object.fromEntries(dangerKeys.map((key) => [key, { type: 'number' }])) }
const worldCaseSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['causes', 'directDoom', 'abundance'],
  properties: {
    causes: { type: 'object', additionalProperties: false, required: rootCauses, properties: Object.fromEntries(rootCauses.map((cause) => [cause, causeSchema])) },
    directDoom: { type: 'number' },
    abundance: { type: 'number' },
  },
}

export const worldSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['world', 'places'],
  properties: {
    world: {
      type: 'object',
      additionalProperties: false,
      required: ['siBy2050', 'siBy2100', 'si', 'noSi', 'rationale'],
      properties: { siBy2050: { type: 'number' }, siBy2100: { type: 'number' }, si: worldCaseSchema, noSi: worldCaseSchema, rationale: { type: 'string' } },
    },
    places: placesSchema({ ids: regions.map((r) => r.id), reading: false }),
  },
}

export const countrySchema = ({ ids }: { ids: string[] }) => ({
  type: 'object',
  additionalProperties: false,
  required: ['places'],
  properties: { places: placesSchema({ ids: ids, reading: true }) },
})

/** Round 3: a batch of countries, judged against the pooled world and its region. */
export function buildCountryPrompt({ ids, verdict }: { ids: EntityId[]; verdict: Verdict }): string {
  const top = headline({ world: verdict.world })
  const regionLine = (id: EntityId): string => {
    const place = verdict.places[id]
    if (place === undefined) return ''
    const fmt = (siCase: 'si' | 'noSi') => placeOutcomeKeys.map((key) => `${key} ${pct(place[siCase][key])}`).join(', ')
    return `Region judged: si: ${fmt('si')} | noSi: ${fmt('noSi')}`
  }
  const blocks = ids
    .map((id) => {
      const country = entityById({ id: id })
      const region = country.region ? entityById({ id: country.region }) : undefined
      return `### ${country.name} (${id}), ${region?.name ?? ''}, ${(country.population / 1e6).toFixed(1)} million people\n${region ? `${regionLine(region.id)}\n` : ''}${evidenceFor({ entity: id, compact: true })}`
    })
    .join('\n\n')
  const shares = (siCase: 'si' | 'noSi') => {
    const s = causeShares({ world: verdict.world, key: 'atLeast3', scenario: siCase })
    return rootCauses.map((cause) => `${cause} ${pct(s[cause])}`).join(', ')
  }
  return `${preamble}

## Outcomes of a place
${Object.values(outcomeDefinitions).map((text) => `- ${text}`).join('\n')}
- ${scaleDefinitions.livingStandard}

## The world, as already judged (pooled from independent runs)
- P(superintelligence by ${horizon}) = ${pct(top.si)}.
- Global doom by ${horizon}: ${pct(top.doomGivenSi)} if superintelligence arrives, ${pct(top.doomGivenNoSi)} if not.
- A level 3 catastrophe or worse by ${horizon}: ${pct(sumCauses({ worldCase: verdict.world.si, key: 'atLeast3' }))} with superintelligence, ${pct(sumCauses({ worldCase: verdict.world.noSi, key: 'atLeast3' }))} without. Shares by root cause, with: ${shares('si')}; without: ${shares('noSi')}.
- World abundance in ${horizon}: ${pct(verdict.world.si.abundance)} with superintelligence, ${pct(verdict.world.noSi.abundance)} without.
A global catastrophe hits countries unequally: judge where each country would stand.

## Your task, part 1: outcomes
For each country and each case ("si", "noSi"), the chance of each of the five outcomes other than doom, GIVEN that the world does not reach doom. The five must sum to 1 (your answer is rejected otherwise). Doom is global and is added by the site. Judge each country on its own evidence; neighbours can differ.
- rationale: one or two sentences per country naming what matters most.

## Your task, part 2: how superintelligence works on each country
If superintelligence arrives, how does each of these five channels move the country's living standard by ${horizon}? Score each from -2 (much worse off) through 0 (no effect) to +2 (much better off); halves are fine.
${siChannels.map((channel) => `- ${channel}: ${channelDefinitions[channel].name}. ${channelDefinitions[channel].text}`).join('\n')}
Use the country's access to AI (share of people using AI, intensity of use, compute) together with what its economy sells and how well its state works. Two caveats on the AI figures: Microsoft's share of people using AI does not yet count several Chinese domestic tools, so it understates China, and where data is thin it gives neighbouring countries one shared estimate; the Claude usage index has no value for China, Russia, Iran and some others. A country that sells labour or routine services and has little AI can score badly on jobs and ownership even if prices help it.
- reason: one plain line, at most 160 characters, naming the channel that matters most for this country and why.
Your scores must agree with your outcomes: if the channels net out negative, the "si" case should not be much better than "noSi" for that country.

## Global indicators (the same for every country)
${evidenceFor({ entity: 'WLD', compact: true })}

## Countries to judge
${blocks}

Answer only with JSON: {"places": [one object per country, in this order: ${ids.join(', ')}; each {"entity", "si", "noSi", "rationale", "reading": {"channels": {${siChannels.map((c) => `"${c}"`).join(', ')}}, "reason"}}]}.`
}

/** Batches for country judging: spotlight countries first (three runs each), then the rest (one run). */
export function countryBatches({ size }: { size: number }): { spotlight: EntityId[][]; rest: EntityId[][] } {
  const chunk = (list: EntityId[]) => Array.from({ length: Math.ceil(list.length / size) }, (_, i) => list.slice(i * size, (i + 1) * size))
  return {
    spotlight: chunk(countries.filter((c) => c.spotlight).map((c) => c.id)),
    rest: chunk(countries.filter((c) => !c.spotlight).map((c) => c.id)),
  }
}

/** Round 4: how the pooled 2100 chances build up over the years. */
export function buildTimelinePrompt({ verdict }: { verdict: Verdict }): string {
  const end = timelineEnd({ world: verdict.world })
  const shares = (key: DangerKey) => {
    const s = causeShares({ world: verdict.world, key: key, scenario: 'weighted' })
    return rootCauses.map((cause) => `${cause} ${pct(s[cause])}`).join(', ')
  }
  return `${preamble}

## What the judges have already settled (pooled from independent runs)
- Superintelligence deployed: ${pct(verdict.world.siBy2050)} by 2050 and ${pct(end.si)} by ${horizon}.
- By ${horizon}, in our forecast (mixed over superintelligence):
  - the worst thing to happen to the world reaches level 3 or worse: ${pct(end.atLeast3)} (shares by root cause: ${shares('atLeast3')});
  - level 4 or worse: ${pct(end.atLeast4)} (shares: ${shares('atLeast4')});
  - doom, level 5: ${pct(end.doom)} (shares: ${shares('doom')}).
- If superintelligence arrives, doom is ${pct(sumCauses({ worldCase: verdict.world.si, key: 'doom' }))}; if it never does, ${pct(sumCauses({ worldCase: verdict.world.noSi, key: 'doom' }))}.

## Your task: when it happens
Give the cumulative chance, from today, of each of these by ${timelineYears.join(', ')}:
- si: superintelligence is deployed by that year;
- atLeast3: by that year, a catastrophe of level 3 or worse has happened;
- atLeast4: level 4 or worse has happened;
- doom: level 5 has happened.

Think about timing: when superintelligence is likely to arrive, how soon after it AI risk would play out, how warming and resource limits build up through the century, and how wars and pandemics strike at any time.

Rules (your answer is rejected if it breaks them):
- Every value is between 0 and 1, and none falls from one year to the next.
- None may exceed its ${horizon} value above.
- si by 2050 must stay within 3 points of ${pct(verdict.world.siBy2050)}.

Answer only with JSON: {"timeline": [{"year": 2030, "si": .., "atLeast3": .., "atLeast4": .., "doom": ..}, ... one object for each of ${timelineYears.join(', ')}], "rationale": "two or three sentences on timing"}.`
}

export const timelineSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['timeline', 'rationale'],
  properties: {
    timeline: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['year', ...timelineKeys],
        properties: { year: { type: 'number', enum: timelineYears }, ...Object.fromEntries(timelineKeys.map((key) => [key, { type: 'number' }])) },
      },
    },
    rationale: { type: 'string' },
  },
}

/** The most dangerous card of a cause, on its own: its chance of level 2 or worse. */
function cardsAtLevel2({ cards, curves, cause, siCase }: { cards: Card[]; curves: Record<string, CurveForecast>; cause: RootCause; siCase: 'si' | 'noSi' }): number | undefined {
  const values = cards
    .filter((card) => card.group === cause && card.scale === 'danger')
    .flatMap((card) => {
      const chances = levelChances({ card: card, points: curveFor({ card: card, judged: curves[card.id], siCase: siCase }) })
      return chances === undefined ? [] : [atLeast({ chances: chances, level: 2 })]
    })
  return values.length === 0 ? undefined : Math.max(...values)
}

/** Round 5: level 2 or worse, by root cause and over time, held to the levels already settled. */
export function buildLevel2Prompt({ verdict, cards }: { verdict: Verdict; cards: Card[] }): string {
  const lines = rootCauses.map((cause) => {
    const floor = (siCase: 'si' | 'noSi') => verdict.world[siCase].causes[cause].atLeast3
    const alone = (siCase: 'si' | 'noSi') => cardsAtLevel2({ cards: cards, curves: verdict.curves, cause: cause, siCase: siCase })
    const show = (value: number | undefined) => (value === undefined ? 'n/a' : pct(value))
    return `- ${cause} (${causeDefinitions[cause].name}): level 3+ already settled at ${pct(floor('si'))} with superintelligence, ${pct(floor('noSi'))} without. Its most dangerous card alone gives level 2+ at ${show(alone('si'))} with, ${show(alone('noSi'))} without.`
  })
  return `${preamble}

## Your task: level 2
Level 2 means 1 to 10% of humanity dies or lastingly loses decent living conditions. For scale: World War II killed about 3% of humanity, the 1918 flu about 2.7%. COVID-19, well under 1%, was level 1.

For each case ("si": superintelligence deployed before ${horizon}; "noSi": not) and each of the seven root causes, give the chance that the worst thing to happen to the world by ${horizon} reaches level 2 or worse AND that this cause started it.
${scaleDefinitions.rootCause}

What is already settled (pooled from independent judges), and what the cards say on their own:
${lines.join('\n')}

Then give the cumulative chance, from today, that the world has had a level 2 or worse catastrophe (any cause, our forecast mixed over superintelligence at P(SI by ${horizon}) = ${pct(verdict.world.siBy2100)}) by ${timelineYears.join(', ')}.

Rules (your answer is rejected if it breaks them):
- Every value is between 0 and 1.
- Each cause's level-2 chance is at least its settled level-3 chance in the same case.
- In each case the seven causes sum to at most 1.
- The timeline never falls, and never exceeds the ${horizon} total implied by your causes.

Answer only with JSON: {"level2": {"si": {${rootCauses.map((c) => `"${c}": ..`).join(', ')}}, "noSi": {...}, "timeline": [{"year": 2030, "atLeast2": ..}, ... one per year ${timelineYears.join(', ')}]}, "rationale": "two or three sentences"}.`
}

export const level2Schema = {
  type: 'object',
  additionalProperties: false,
  required: ['level2', 'rationale'],
  properties: {
    level2: {
      type: 'object',
      additionalProperties: false,
      required: ['si', 'noSi', 'timeline'],
      properties: {
        si: { type: 'object', additionalProperties: false, required: rootCauses, properties: Object.fromEntries(rootCauses.map((c) => [c, { type: 'number' }])) },
        noSi: { type: 'object', additionalProperties: false, required: rootCauses, properties: Object.fromEntries(rootCauses.map((c) => [c, { type: 'number' }])) },
        timeline: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['year', 'atLeast2'], properties: { year: { type: 'number', enum: timelineYears }, atLeast2: { type: 'number' } } } },
      },
    },
    rationale: { type: 'string' },
  },
}
