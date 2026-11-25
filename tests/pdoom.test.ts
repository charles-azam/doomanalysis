import test from 'node:test'
import assert from 'node:assert/strict'
import { buildCountryPrompt, buildCurvePrompt, buildWorldPrompt, countryBatches } from '../judge/forecast-prompt.ts'
import { cards } from '../src/data/cards.ts'
import { displays } from '../src/data/display.ts'
import { countries, entities, regions } from '../src/data/entities.ts'
import { exceedances } from '../src/data/exceedance.ts'
import { factors } from '../src/data/factors.ts'
import { forecastRuns } from '../src/data/forecasts.ts'
import { history } from '../src/data/history.ts'
import { observations } from '../src/data/observations.ts'
import { projections } from '../src/data/projections.ts'
import { cardSetProblems } from '../src/model/cards.ts'
import { parentProblems, verdictOf } from '../src/model/forecast.ts'
import { displayScore, entityIndices, pressureScore } from '../src/model/score.ts'
import type { FactorDefinition, Observation } from '../src/model/types.ts'

const close = (actual: number, expected: number) => assert.ok(Math.abs(actual - expected) < 1e-9, `${actual} ≠ ${expected}`)

const factor = (overrides: Partial<FactorDefinition> & Pick<FactorDefinition, 'id' | 'family' | 'scope' | 'anchors'>): FactorDefinition => ({
  name: overrides.id,
  short: overrides.id,
  theme: 'climate',
  unit: 'u',
  decimals: 1,
  siElasticity: 'low',
  siNote: '',
  description: '',
  ...overrides,
})

test('mock factors flow into scores and indices', () => {
  const mockFactors: FactorDefinition[] = [
    factor({ id: 'heat', family: 'driver', scope: 'country', anchors: { good: 0, bad: 10, scale: 'linear', basis: 'judgment', rationale: '' } }),
    factor({ id: 'births', family: 'driver', scope: 'country', anchors: { good: 2.1, bad: 4.6, scale: 'two-sided', basis: 'judgment', rationale: '' } }),
    factor({ id: 'income', family: 'counterforce', scope: 'country', anchors: { good: 100000, bad: 1000, scale: 'log', basis: 'judgment', rationale: '' } }),
    factor({ id: 'power', family: 'pillar', scope: 'country', pillar: 'energy', anchors: { good: 100, bad: 50, scale: 'linear', limit: 90, basis: 'judgment', rationale: '' } }),
    factor({ id: 'water', family: 'pillar', scope: 'country', pillar: 'water', anchors: { good: 100, bad: 30, scale: 'linear', limit: 90, basis: 'judgment', rationale: '' } }),
    factor({ id: 'migrants', family: 'context', scope: 'country', anchors: { good: 0, bad: 30, scale: 'linear', basis: 'judgment', rationale: '' } }),
  ]
  const at = (factorId: string, value: number): Observation => ({ factorId: factorId, entity: 'FRA', value: value, year: 2025, source: 'mock', url: 'https://example.org' })
  const mockObservations = [at('heat', 12), at('births', 1.6), at('income', 10000), at('power', 95), at('water', 72), at('migrants', 14)]

  close(pressureScore({ factor: mockFactors[0], value: 12 }), 100)
  close(pressureScore({ factor: mockFactors[1], value: 1.6 }), 20)
  close(pressureScore({ factor: mockFactors[1], value: 2.6 }), 20)
  close(displayScore({ factor: mockFactors[2], value: 10000 }), 50)
  const index = entityIndices({ factors: mockFactors, observations: mockObservations, entity: 'FRA' })
  close(index.pressure, 60)
  close(index.resilience, 50)
  close(index.basketGap, (10 + 40) / 2)
  assert.equal(index.pillarsMet, 1)

})

test('published data is complete, sourced and coherent', () => {
  const ids = new Set(factors.map((f) => f.id))
  assert.equal(ids.size, factors.length, 'factor ids are unique')
  const entityIds = new Set(entities.map((e) => e.id))
  assert.equal(entityIds.size, entities.length, 'entity ids are unique')
  assert.equal(new Set(entities.map((e) => `${e.kind}:${e.slug}`)).size, entities.length, 'slugs are unique per kind')
  assert.equal(regions.length, 12)
  assert.ok(countries.length >= 150, 'about 200 countries are published')
  for (const iso3 of ['FRA', 'SWE', 'NOR', 'USA', 'CHN', 'IND', 'NGA']) assert.ok(entityIds.has(iso3), `${iso3} is published`)

  for (const observation of observations) {
    assert.ok(ids.has(observation.factorId), `observation for unknown factor ${observation.factorId}`)
    assert.ok(entityIds.has(observation.entity), `observation for unknown entity ${observation.entity}`)
    assert.match(observation.url, /^https:\/\//, `${observation.factorId} ${observation.entity} has a source URL`)
    assert.ok(Number.isFinite(observation.value), `${observation.factorId} ${observation.entity} is a number`)
  }
  const keys = observations.map((o) => `${o.factorId}:${o.entity}`)
  assert.equal(new Set(keys).size, keys.length, 'one observation per factor and entity')
  for (const f of factors.filter((f) => f.scope === 'global')) {
    assert.ok(observations.some((o) => o.factorId === f.id && o.entity === 'WLD'), `global factor ${f.id} has a value`)
  }
  for (const f of factors) {
    const display = displays.find((d) => d.factorId === f.id)
    assert.ok(display, `factor ${f.id} has a display`)
    assert.ok(display.min < display.max, `${f.id} track runs from min to max`)
    for (const t of display.thresholds) assert.ok(t.value >= display.min && t.value <= display.max, `${f.id} threshold ${t.label} sits on its track`)
  }
  for (const p of projections) {
    assert.ok(ids.has(p.factorId), `projection for unknown factor ${p.factorId}`)
    assert.ok(entityIds.has(p.entity), `projection for unknown entity ${p.entity}`)
    assert.match(p.url, /^https:\/\//, `projection ${p.factorId} ${p.entity} has a source URL`)
    if (p.low !== undefined && p.high !== undefined) assert.ok(p.low <= p.value && p.value <= p.high, `projection ${p.factorId} ${p.entity} sits in its range`)
  }
  for (const e of exceedances) {
    assert.ok(e.probability >= 0 && e.probability <= 1, `exceedance ${e.factorId} ${e.threshold} is a probability`)
    assert.ok(e.basis !== 'published' || (e.url ?? '').startsWith('https://'), `published exceedance ${e.factorId} ${e.threshold} has a source URL`)
  }

  // Cards: valid one by one and as a set, no sub-card above its parent.
  assert.deepEqual(cardSetProblems({ cards: cards }), [])
  assert.ok(cards.length >= 60, 'every group of cards is present')

  // Judge runs: every stored run is coherent, and every place and card it names exists.
  assert.ok(forecastRuns.length >= 1, 'at least one judge run is published')
  const verdict = verdictOf({ runs: forecastRuns, cards: cards })
  for (const id of Object.keys(verdict.places)) assert.ok(entityIds.has(id), `judged place ${id} exists`)
  for (const region of regions) assert.ok(verdict.places[region.id], `region ${region.id} is judged`)
  for (const country of countries) assert.ok(verdict.places[country.id], `country ${country.id} is judged`)
  assert.deepEqual(parentProblems({ cards: cards, curves: verdict.curves }), [])

  // History: oldest first, unique versions, probabilities.
  assert.equal(new Set(history.map((record) => record.version)).size, history.length)
  for (const [index, record] of history.entries()) {
    if (index > 0) assert.ok(record.date >= history[index - 1].date, `history is in order at ${record.version}`)
    for (const value of [record.doom, record.doomGivenSi, record.abundance, record.si]) assert.ok(value >= 0 && value <= 1)
  }

  // Prompts cover what they should.
  const worldPrompt = buildWorldPrompt({ cards: cards, curves: verdict.curves, aiNote: '' })
  for (const region of regions) assert.ok(worldPrompt.includes(`(${region.id})`), `world prompt covers ${region.id}`)
  assert.ok(buildCurvePrompt({ cards: cards.slice(0, 3), explainers: {} }).includes(cards[0].id))
  const batches = countryBatches({ size: 20 })
  assert.equal(batches.spotlight.flat().length + batches.rest.flat().length, countries.length, 'every country is in one batch')
  const countryPrompt = buildCountryPrompt({ ids: batches.spotlight[0], verdict: verdict })
  assert.ok(countryPrompt.includes('(FRA)') || countryPrompt.includes('(USA)'))
})
