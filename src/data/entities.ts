import generated from './generated/entities.json' with { type: 'json' }
import type { EntityId, EntityKind } from '../model/types.ts'

export type Entity = {
  id: EntityId
  kind: EntityKind
  name: string
  slug: string
  mark: string
  region?: string
  population: number
  spotlight: boolean
}

type GeneratedEntity = { id: string; kind: string; name: string; slug: string; iso2?: string; region?: string; population: number; spotlight: boolean }

/** Emoji flag from a two-letter country code. */
const flag = ({ iso2 }: { iso2: string }): string =>
  String.fromCodePoint(...[...iso2.toUpperCase()].map((letter) => 0x1f1e6 + letter.charCodeAt(0) - 65))

const regionMarks: Record<string, string> = {
  'europe-north': '🌍',
  'europe-west': '🌍',
  'europe-south': '🌍',
  'europe-east': '🌍',
  mena: '🌍',
  'sub-saharan-africa': '🌍',
  'north-america': '🌎',
  'latin-america': '🌎',
  'central-south-asia': '🌏',
  'east-asia': '🌏',
  'southeast-asia': '🌏',
  oceania: '🌏',
}

export const world: Entity = { id: 'WLD', kind: 'world', name: 'World', slug: 'world', mark: '🌐', population: 0, spotlight: true }

const rows = (generated as GeneratedEntity[]).map(
  (row): Entity => ({
    id: row.id,
    kind: row.kind === 'region' ? 'region' : 'country',
    name: row.name,
    slug: row.slug,
    mark: row.kind === 'region' ? (regionMarks[row.id] ?? '🌐') : flag({ iso2: row.iso2 ?? 'UN' }),
    region: row.region,
    population: row.population,
    spotlight: row.spotlight,
  }),
)

export const regions: Entity[] = rows.filter((row) => row.kind === 'region')
/** Every published country, most populous first. */
export const countries: Entity[] = rows.filter((row) => row.kind === 'country')
export const entities: Entity[] = [world, ...regions, ...countries]

const byId = new Map(entities.map((entity) => [entity.id, entity]))

export function entityById({ id }: { id: EntityId }): Entity {
  const found = byId.get(id)
  if (found === undefined) throw new Error(`unknown entity ${id}`)
  return found
}

export const pathFor = ({ entity }: { entity: Entity }): string =>
  entity.kind === 'region' ? `/regions/${entity.slug}/` : `/countries/${entity.slug}/`

export const formatPopulation = ({ people }: { people: number }): string =>
  people >= 1e9 ? `${(people / 1e9).toFixed(2)} billion people` : `${(people / 1e6).toFixed(people >= 1e7 ? 0 : 1)} million people`
