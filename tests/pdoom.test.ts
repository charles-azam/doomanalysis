import test from 'node:test'
import assert from 'node:assert/strict'
import { buildCountryPrompt, buildWorldPrompt, countryBatches } from '../judge/prompt.ts'
import { definitions } from '../src/data/definitions.ts'
import { displays } from '../src/data/display.ts'
import { countries, entities, regions } from '../src/data/entities.ts'
import { exceedances } from '../src/data/exceedance.ts'
import { factors } from '../src/data/factors.ts'
import { judgeRuns } from '../src/data/judgments.ts'
import { observations } from '../src/data/observations.ts'
import { projections } from '../src/data/projections.ts'
import { consensus, entityOutcome, validateRun, worldOutcome } from '../src/model/judgment.ts'
import { displayScore, entityIndices, pressureScore } from '../src/model/score.ts'
import type { EntityScenario, FactorDefinition, JudgeRun, Observation, WorldJudgment, WorldScenario } from '../src/model/types.ts'

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

const scenario = (collapse: number, abundance: number, worst: number): EntityScenario => ({
  collapse: collapse,
  abundance: abundance,
  pillarLoss: { energy: worst, water: worst / 2, food: worst / 2, health: worst / 4, security: worst / 4 },
})

const worldScenario = (doom: number, abundance: number): WorldScenario => ({
  doom: doom,
  abundance: abundance,
  pathways: { ai: doom * 0.5, nuclear: doom * 0.2, pandemic: doom * 0.1, climate: doom * 0.1, resources: doom * 0.05, other: doom * 0.05 },
})

const mockWorld = (siBy2100: number, doomSi: number): WorldJudgment => ({
  siBy2050: siBy2100 / 2,
  siBy2100: siBy2100,
  si: worldScenario(doomSi, 0.2),
  noSi: worldScenario(0.04, 0.05),
  rationale: 'world',
})

test('mock factors, regions and batched judge runs flow end to end into the published numbers', () => {
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

  // Three world runs (world + one region), then country batches: two spotlight runs, one ordinary run.
  const worldRun = (id: string, siBy2100: number, doomSi: number, regionCollapse: number): JudgeRun => ({
    id: id,
    batch: 'world',
    model: 'mock',
    date: `2026-11-2${id.length}`,
    method: 'mock',
    world: mockWorld(siBy2100, doomSi),
    entities: [{ entity: 'europe-west', si: scenario(regionCollapse, 0.3, regionCollapse * 0.8), noSi: scenario(0.08, 0.2, 0.06), rationale: 'region' }],
  })
  const countryRun = (id: string, batch: string, collapse: number): JudgeRun => ({
    id: id,
    batch: batch,
    model: 'mock',
    date: '2026-11-24',
    method: 'mock',
    entities: [{ entity: 'FRA', si: scenario(collapse, 0.25, collapse * 0.8), noSi: scenario(0.1, 0.15, 0.08), rationale: 'France' }],
  })
  const runs = [
    worldRun('a', 0.8, 0.1, 0.2),
    worldRun('bb', 0.9, 0.2, 0.3),
    worldRun('ccc', 0.6, 0.05, 0.15),
    countryRun('f1', 'spotlight-1', 0.3),
    countryRun('f2', 'spotlight-1', 0.4),
    countryRun('f3', 'spotlight-1', 0.2),
  ]
  const verdict = consensus({ runs: runs })
  assert.equal(verdict.worldRuns, 3)
  close(verdict.world.siBy2100, 0.8)
  close(verdict.world.si.doom, 0.1)
  assert.equal(verdict.date, '2026-11-24')
  close(verdict.entities['europe-west'].si.collapse, 0.2)
  assert.equal(verdict.entities['europe-west'].runs, 3)
  const france = verdict.entities.FRA
  assert.equal(france.runs, 3)
  close(france.si.collapse, 0.3)

  // Headlines: the law of total probability over SI, and outcomes that add to one.
  const world = worldOutcome({ world: verdict.world, scenario: 'weighted' })
  close(world.collapse, 0.8 * 0.1 + 0.2 * 0.04)
  close(world.abundance + world.muddle + world.collapse, 1)
  const weighted = entityOutcome({ world: verdict.world, entity: france, scenario: 'weighted' })
  close(weighted.collapse, 0.8 * 0.3 + 0.2 * 0.1)
  close(weighted.abundance, 0.8 * 0.25 + 0.2 * 0.15)
  close(verdict.doomSpread.high, 0.9 * 0.2 + 0.1 * 0.04)

  // Incoherent judgments are rejected before they reach the site.
  const broken = structuredClone(runs[3])
  broken.entities[0].si.abundance = 0.9
  assert.throws(() => validateRun({ run: broken, world: verdict.world, checkUpper: true }), /exclusive/)
  const safer = structuredClone(runs[3])
  safer.entities[0].si = scenario(0.05, 0.2, 0.04)
  assert.throws(() => validateRun({ run: safer, world: verdict.world, checkUpper: true }), /below global doom/)
  const early = structuredClone(runs[0])
  ;(early.world as WorldJudgment).siBy2050 = 0.95
  assert.throws(() => validateRun({ run: early, world: early.world as WorldJudgment, checkUpper: true }), /2050/)
  const union = structuredClone(runs[0])
  ;(union.world as WorldJudgment).si.pathways.ai = 0.5
  assert.throws(() => validateRun({ run: union, world: union.world as WorldJudgment, checkUpper: true }), /largest part/)
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
  assert.match(definitions.abundance, /less than 10% of national income/)

  assert.ok(judgeRuns.length >= 1, 'at least one judge run is published')
  const verdict = consensus({ runs: judgeRuns })
  for (const id of Object.keys(verdict.entities)) assert.ok(entityIds.has(id), `judged entity ${id} exists`)

  const worldPrompt = buildWorldPrompt()
  for (const region of regions) assert.ok(worldPrompt.includes(`(${region.id})`), `world prompt covers ${region.id}`)
  const batches = countryBatches({ size: 20 })
  assert.equal(batches.spotlight.flat().length + batches.rest.flat().length, countries.length, 'every country is in one batch')
  const countryPrompt = buildCountryPrompt({ ids: batches.spotlight[0], world: verdict.world })
  assert.ok(countryPrompt.includes('(FRA)') || countryPrompt.includes('(USA)'))
})
