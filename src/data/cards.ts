import type { Card } from '../model/types.ts'
import { cards as climateCore } from './cards/climate-core.ts'
import { cards as iceOcean } from './cards/ice-ocean.ts'
import { cards as livingWorld } from './cards/living-world.ts'
import { cards as natural } from './cards/natural.ts'
import { cards as war } from './cards/war.ts'
import { cards as civil } from './cards/civil.ts'
import { cards as disease } from './cards/disease.ts'
import { cards as fuels } from './cards/fuels.ts'
import { cards as minerals } from './cards/minerals.ts'
import { cards as energyTech } from './cards/energy-tech.ts'
import { cards as otherTech } from './cards/other-tech.ts'
import { cards as superintelligence } from './cards/superintelligence.ts'
import { cards as living } from './cards/living.ts'

/** Every card on the site, one file per group under ./cards/, in the order the home page shows them. */
export const cards: Card[] = [...climateCore, ...iceOcean, ...livingWorld, ...natural, ...war, ...civil, ...disease, ...fuels, ...minerals, ...energyTech, ...otherTech, ...superintelligence, ...living]
