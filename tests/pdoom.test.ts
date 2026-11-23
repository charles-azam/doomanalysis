import test from 'node:test'
import assert from 'node:assert/strict'
import { buildPrompt } from '../judge/prompt.ts'
import { countries } from '../src/data/countries.ts'
import { factors } from '../src/data/factors.ts'
import { judgeRuns } from '../src/data/judgments.ts'
import { observations } from '../src/data/observations.ts'
import { consensus, countryOutcome, validateRun, worldOutcome } from '../src/model/judgment.ts'
import { displayScore, entityIndices, pressureScore } from '../src/model/score.ts'
import type { CountryScenario, FactorDefinition, JudgeRun, Observation, WorldScenario } from '../src/model/types.ts'

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

const countryScenario = (collapse: number, abundance: number, worst: number): CountryScenario => ({
  collapse: collapse,
  abundance: abundance,
  pillarLoss: { energy: worst, water: worst / 2, food: worst / 2, health: worst / 4, security: worst / 4 },
})

const worldScenario = (doom: number, abundance: number): WorldScenario => ({
  doom: doom,
  abundance: abundance,
  pathways: { ai: doom * 0.5, nuclear: doom * 0.2, pandemic: doom * 0.1, climate: doom * 0.1, resources: doom * 0.05, other: doom * 0.05 },
})

const mockRun = (id: string, siBy2100: number, doomSi: number, collapseSi: number): JudgeRun => ({
  id: id,
  model: 'mock-judge',
  date: `2026-11-2${id.length}`,
  method: 'mock',
  world: {
    siBy2050: siBy2100 / 2,
    siBy2100: siBy2100,
    si: worldScenario(doomSi, 0.4),
    noSi: worldScenario(0.04, 0.2),
    rationale: `world ${id}`,
  },
  countries: [
    { entity: 'FRA', si: countryScenario(collapseSi, 0.6, collapseSi * 0.8), noSi: countryScenario(0.1, 0.5, 0.08), rationale: `France ${id}` },
  ],
})

test('mock factors, observations and judge runs flow end to end into the published numbers', () => {
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

  // Scores: clamped linear, two-sided distance, log strength.
  close(pressureScore({ factor: mockFactors[0], value: 12 }), 100)
  close(pressureScore({ factor: mockFactors[1], value: 1.6 }), 20)
  close(pressureScore({ factor: mockFactors[1], value: 2.6 }), 20)
  close(displayScore({ factor: mockFactors[2], value: 10000 }), 50)

  // Indices: drivers average to (100 + 20) / 2, resilience is the one counterforce, context is ignored.
  const index = entityIndices({ factors: mockFactors, observations: mockObservations, entity: 'FRA' })
  close(index.pressure, 60)
  close(index.resilience, 50)
  close(index.basketGap, (10 + 40) / 2)
  assert.equal(index.pillarsMet, 1)
  assert.equal(index.pillarsMeasured, 2)

  // Three runs: the consensus is the field-by-field median, and the spread keeps the extremes.
  const runs = [mockRun('a', 0.8, 0.1, 0.3), mockRun('bb', 0.9, 0.2, 0.4), mockRun('ccc', 0.6, 0.05, 0.2)]
  const verdict = consensus({ runs: runs })
  close(verdict.world.siBy2100, 0.8)
  close(verdict.world.si.doom, 0.1)
  assert.equal(verdict.date, '2026-11-23')
  const france = verdict.countries[0]
  close(france.si.collapse, 0.3)

  // Headline: law of total probability over SI, and the three outcomes add to one.
  const world = worldOutcome({ world: verdict.world, scenario: 'weighted' })
  close(world.collapse, 0.8 * 0.1 + 0.2 * 0.04)
  close(world.abundance, 0.8 * 0.4 + 0.2 * 0.2)
  close(world.abundance + world.muddle + world.collapse, 1)
  const weighted = countryOutcome({ world: verdict.world, country: france, scenario: 'weighted' })
  close(weighted.collapse, 0.8 * 0.3 + 0.2 * 0.1)
  close(weighted.abundance, 0.8 * 0.6 + 0.2 * 0.5)
  close(weighted.muddle, 1 - weighted.collapse - weighted.abundance)
  const ifNot = countryOutcome({ world: verdict.world, country: france, scenario: 'noSi' })
  close(ifNot.collapse, 0.1)
  close(verdict.spread.doom.high, 0.9 * 0.2 + 0.1 * 0.04)

  // Incoherent judgments are rejected before they reach the site.
  const broken = structuredClone(runs[0])
  broken.countries[0].si.abundance = 0.9
  assert.throws(() => validateRun({ run: broken, checkUpper: true }), /exclusive/)
  const safer = structuredClone(runs[0])
  safer.countries[0].si = countryScenario(0.05, 0.6, 0.04)
  assert.throws(() => validateRun({ run: safer, checkUpper: true }), /below global doom/)
  const early = structuredClone(runs[0])
  early.world.siBy2050 = 0.95
  assert.throws(() => validateRun({ run: early, checkUpper: true }), /2050/)
  const union = structuredClone(runs[0])
  union.world.si.pathways.ai = 0.5
  assert.throws(() => validateRun({ run: union, checkUpper: true }), /largest part/)
})

test('published data is complete, sourced and coherent', () => {
  const ids = new Set(factors.map((f) => f.id))
  assert.equal(ids.size, factors.length, 'factor ids are unique')
  for (const observation of observations) {
    assert.ok(ids.has(observation.factorId), `observation for unknown factor ${observation.factorId}`)
    assert.match(observation.url, /^https:\/\//, `${observation.factorId} ${observation.entity} has a source URL`)
    assert.ok(Number.isFinite(observation.value), `${observation.factorId} ${observation.entity} is a number`)
  }
  const keys = observations.map((o) => `${o.factorId}:${o.entity}`)
  assert.equal(new Set(keys).size, keys.length, 'one observation per factor and entity')
  for (const f of factors.filter((f) => f.scope === 'global')) {
    assert.ok(observations.some((o) => o.factorId === f.id && o.entity === 'WLD'), `global factor ${f.id} has a value`)
  }
  for (const country of countries) {
    const index = entityIndices({ factors: factors, observations: observations, entity: country.id })
    for (const value of [index.pressure, index.resilience, index.basketGap]) assert.ok(value >= 0 && value <= 100)
  }
  const world = entityIndices({ factors: factors, observations: observations, entity: 'WLD' })
  assert.ok(world.pressure >= 0 && world.pressure <= 100)

  assert.ok(judgeRuns.length >= 1, 'at least one judge run is published')
  for (const run of judgeRuns) {
    validateRun({ run: run, checkUpper: true })
    assert.deepEqual(run.countries.map((c) => c.entity).sort(), countries.map((c) => c.id).sort(), `run ${run.id} judges every country`)
  }
  consensus({ runs: judgeRuns })

  const prompt = buildPrompt()
  for (const country of countries) assert.ok(prompt.includes(`### ${country.name} (${country.id})`))
})
