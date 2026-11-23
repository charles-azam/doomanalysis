import type { Observation } from '../model/types.ts'
import { countryObservations } from './observations-countries.ts'
import { globalObservations } from './observations-global.ts'

export const observations: Observation[] = [...globalObservations, ...countryObservations]
