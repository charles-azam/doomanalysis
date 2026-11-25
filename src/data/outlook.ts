import { causeDanger, headline, placeOutcomes, verdictOf, worldDanger, type DangerKey, dangerKeys, rootCauses, type Headline } from '../model/forecast.ts'
import type { EntityId, HeadlineRecord, RootCause, ScenarioKey, SixOutcomes } from '../model/types.ts'
import { cards } from './cards.ts'
import { countries, entities, pathFor, type Entity } from './entities.ts'
import { forecastRuns } from './forecasts.ts'
import { history } from './history.ts'
import { observations } from './observations.ts'
import { population2100 } from './population.ts'

/** Everything the v0.3 pages need, computed once at build time from the stored judge runs. */
export const outlook = verdictOf({ runs: forecastRuns, cards: cards })

export const top: Headline = headline({ world: outlook.world })

/** The version of the estimates on the site now, and of the definitions they use. */
export const currentVersion = 'v0.3'
export const currentDefinitions = 'v0.3'

/** The headline published before this one, for the change since the last run. */
export const previous: HeadlineRecord | undefined = [...history].reverse().find((record) => record.version !== currentVersion)
export const sameDefinitions = previous?.definitions === currentDefinitions

/** The history to chart: every published record, plus the current headline if it is not recorded yet. */
export const historyToChart: HeadlineRecord[] = history.some((record) => record.version === currentVersion)
  ? history
  : [...history, { date: outlook.date, version: currentVersion, definitions: currentDefinitions, doom: top.doom, doomGivenSi: top.doomGivenSi, abundance: top.abundance, si: top.si, note: 'Not yet recorded.' }]

export const scenarioKeys: ScenarioKey[] = ['weighted', 'si', 'noSi']

export type CauseCell = { total: number; causes: Record<RootCause, number> }

export const causeTable: Record<ScenarioKey, Record<DangerKey, CauseCell>> = Object.fromEntries(
  scenarioKeys.map((scenario) => [
    scenario,
    Object.fromEntries(
      dangerKeys.map((key) => [
        key,
        {
          total: worldDanger({ world: outlook.world, key: key, scenario: scenario }),
          causes: Object.fromEntries(rootCauses.map((cause) => [cause, causeDanger({ world: outlook.world, cause: cause, key: key, scenario: scenario })])) as Record<RootCause, number>,
        },
      ]),
    ) as Record<DangerKey, CauseCell>,
  ]),
) as Record<ScenarioKey, Record<DangerKey, CauseCell>>

/** People expected in 2100 (UN medium variant), the weights for humanity's outcomes. */
export const people2100 = population2100.WLD

/** The world's six outcomes are those of humanity: doom from the causes, the rest from the regions weighted by their 2100 population. */
export function sixOutcomesFor({ id }: { id: EntityId }): Record<ScenarioKey, SixOutcomes> | undefined {
  if (id === 'WLD') return worldOutcomes
  const place = outlook.places[id]
  if (place === undefined) return undefined
  return Object.fromEntries(scenarioKeys.map((scenario) => [scenario, placeOutcomes({ world: outlook.world, place: place, scenario: scenario })])) as Record<ScenarioKey, SixOutcomes>
}

const regionRows = entities.filter((entity) => entity.kind === 'region')
const worldOutcomes: Record<ScenarioKey, SixOutcomes> | undefined = (() => {
  const judged = regionRows.filter((region) => outlook.places[region.id] !== undefined)
  if (judged.length === 0) return undefined
  const weight = (region: Entity) => population2100[region.id] ?? region.population
  const people = judged.reduce((sum, region) => sum + weight(region), 0)
  return Object.fromEntries(
    scenarioKeys.map((scenario) => {
      const mixed = judged.reduce<Record<string, number>>((acc, region) => {
        const six = placeOutcomes({ world: outlook.world, place: outlook.places[region.id], scenario: scenario })
        for (const [key, value] of Object.entries(six)) acc[key] = (acc[key] ?? 0) + (value * weight(region)) / people
        return acc
      }, {})
      return [scenario, mixed as SixOutcomes]
    }),
  ) as Record<ScenarioKey, SixOutcomes>
})()

export type PlaceRow = {
  id: EntityId
  kind: Entity['kind']
  name: string
  mark: string
  href: string
  region?: string
  spotlight: boolean
  population: number
  runs: number
  outcomes?: Record<ScenarioKey, SixOutcomes>
}

export const placeRows: PlaceRow[] = entities.map((entity) => ({
  id: entity.id,
  kind: entity.kind,
  name: entity.name,
  mark: entity.mark,
  href: entity.kind === 'world' ? '/countries/world/' : pathFor({ entity: entity }),
  region: entity.region,
  spotlight: entity.spotlight,
  population: entity.population,
  runs: entity.kind === 'world' ? outlook.worldRuns : (outlook.places[entity.id]?.runs ?? 0),
  outcomes: sixOutcomesFor({ id: entity.id }),
}))

const valueOf = ({ factorId, entity }: { factorId: string; entity: EntityId }): number | undefined =>
  observations.find((o) => o.factorId === factorId && o.entity === entity)?.value

/**
 * People who have the essentials that can be counted person by person: electricity, safely managed water,
 * and enough food. For each country the weakest of the three is taken as the share covered.
 * Health and security have no per-person count, so this is an upper bound, labelled as an estimate.
 */
export const decentToday = (() => {
  let covered = 0
  let counted = 0
  for (const country of countries) {
    const shares = [valueOf({ factorId: 'electricity_access', entity: country.id }), valueOf({ factorId: 'water_access', entity: country.id }), (() => {
      const hungry = valueOf({ factorId: 'undernourishment', entity: country.id })
      return hungry === undefined ? undefined : 100 - hungry
    })()]
    if (shares.some((share) => share === undefined)) continue
    covered += (country.population * Math.min(...(shares as number[]))) / 100
    counted += country.population
  }
  const everyone = countries.reduce((sum, country) => sum + country.population, 0)
  return { share: covered / counted, people: (covered / counted) * everyone, reporting: counted / everyone }
})()

export const latestForecastDate = new Date(`${outlook.date}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
