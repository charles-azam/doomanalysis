import type { CountryId, EntityId } from '../model/types.ts'

export type Entity = {
  id: EntityId
  slug: string
  name: string
  flag: string
  blurb: string
}

export const world: Entity = {
  id: 'WLD',
  slug: 'world',
  name: 'World',
  flag: '🌍',
  blurb: 'Humanity as a whole. Doom here means an irreversible, civilization-wide collapse.',
}

export const countries: (Entity & { id: CountryId })[] = [
  { id: 'FRA', slug: 'france', name: 'France', flag: '🇫🇷', blurb: 'Rich and aging, with low-to-medium water stress and a nuclear-powered grid.' },
  { id: 'USA', slug: 'united-states', name: 'United States', flag: '🇺🇸', blurb: 'Frontier AI, energy exporter, high political polarization.' },
  { id: 'CHN', slug: 'china', name: 'China', flag: '🇨🇳', blurb: 'Refines most critical minerals, fertility near 1.0.' },
  { id: 'IND', slug: 'india', name: 'India', flag: '🇮🇳', blurb: 'The most populous country, under extremely high water stress.' },
  { id: 'NGA', slug: 'nigeria', name: 'Nigeria', flag: '🇳🇬', blurb: 'Fast-growing population; over a third of people have no electricity.' },
  { id: 'BRA', slug: 'brazil', name: 'Brazil', flag: '🇧🇷', blurb: 'Agricultural superpower, hydro-heavy grid, Amazon tipping risk.' },
  { id: 'BGD', slug: 'bangladesh', name: 'Bangladesh', flag: '🇧🇩', blurb: 'Dense, low-lying delta exposed to sea-level rise.' },
  { id: 'EGY', slug: 'egypt', name: 'Egypt', flag: '🇪🇬', blurb: 'Depends on the Nile and on imported wheat.' },
]

export const entities: Entity[] = [world, ...countries]

export function entityById({ id }: { id: EntityId }): Entity {
  const found = entities.find((entity) => entity.id === id)
  if (found === undefined) throw new Error(`unknown entity ${id}`)
  return found
}
