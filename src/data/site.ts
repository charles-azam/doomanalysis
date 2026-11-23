import type { LeaderboardRow } from '../components/Leaderboard.tsx'
import { consensus, countryOutcome, worldOutcome } from '../model/judgment.ts'
import { entityIndices, scoredFactors } from '../model/score.ts'
import type { CountryId, CountryJudgment, EntityId, Family } from '../model/types.ts'
import { countries, world } from './countries.ts'
import { factors } from './factors.ts'
import { judgeRuns } from './judgments.ts'
import { observations } from './observations.ts'

/** Everything a page needs, computed once at build time from the data files. */
export const verdict = consensus({ runs: judgeRuns })

export function judgmentFor({ id }: { id: CountryId }): CountryJudgment {
  const found = verdict.countries.find((country) => country.entity === id)
  if (found === undefined) throw new Error(`no judgment for ${id}`)
  return found
}

export const leaderboardRows: LeaderboardRow[] = [
  {
    id: world.id,
    slug: world.slug,
    name: world.name,
    flag: world.flag,
    isWorld: true,
    outcomes: {
      weighted: worldOutcome({ world: verdict.world, scenario: 'weighted' }),
      si: worldOutcome({ world: verdict.world, scenario: 'si' }),
      noSi: worldOutcome({ world: verdict.world, scenario: 'noSi' }),
    },
  },
  ...countries.map((country) => {
    const judged = judgmentFor({ id: country.id })
    return {
      id: country.id,
      slug: country.slug,
      name: country.name,
      flag: country.flag,
      isWorld: false,
      outcomes: {
        weighted: countryOutcome({ world: verdict.world, country: judged, scenario: 'weighted' }),
        si: countryOutcome({ world: verdict.world, country: judged, scenario: 'si' }),
        noSi: countryOutcome({ world: verdict.world, country: judged, scenario: 'noSi' }),
      },
    }
  }),
]

export const scored = ({ entity, family }: { entity: EntityId; family: Family }) =>
  scoredFactors({ factors: factors, observations: observations, entity: entity, family: family })

export const indices = ({ entity }: { entity: EntityId }) =>
  entityIndices({ factors: factors, observations: observations, entity: entity })

export const measuredFactorCount = new Set(observations.map((observation) => observation.factorId)).size

export const latestJudgeDate = new Date(verdict.date).toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})
