import generated from './generated/population-2100.json' with { type: 'json' }

/**
 * People in 2100, by entity id: UN World Population Prospects 2024, medium variant, on 1 July 2100.
 * 'WLD' is the UN's world total; a region is the sum of its published countries.
 */
export const population2100: Record<string, number> = generated
