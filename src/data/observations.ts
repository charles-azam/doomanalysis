import generated from './generated/observations.json' with { type: 'json' }
import type { Observation } from '../model/types.ts'
import { globalObservations } from './observations-global.ts'

/** Global values written by hand with sources, plus every country and region value from the pipeline. */
export const observations: Observation[] = [...globalObservations, ...(generated as Observation[])]
