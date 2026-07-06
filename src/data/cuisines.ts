import type { CuisineRegion } from '../types';

export const GLUTEN_PRODUCTS = new Set(['whole-wheat-bread', 'pasta-whole']);

export const ADDED_SUGAR_PRODUCTS = new Set([
  'banana', 'berries', 'orange', 'apple', 'sweet-potato',
]);

export const cuisineRegions: Record<CuisineRegion, string[]> = {
  european: ['scandinavian', 'mediterranean', 'italian', 'greek'],
  asian: ['japanese', 'korean', 'chinese', 'thai', 'indian'],
  americas: ['mexican', 'american', 'brazilian', 'caribbean'],
  african: ['ethiopian', 'moroccan', 'west-african'],
  'middle-eastern': ['levantine', 'moroccan'],
  fusion: ['fusion'],
};

export const allCuisines = [
  'scandinavian', 'mediterranean', 'caribbean', 'japanese', 'levantine',
  'mexican', 'indian', 'american', 'thai', 'ethiopian', 'korean',
  'moroccan', 'greek', 'chinese', 'italian', 'brazilian', 'fusion',
  'west-african',
] as const;

export function cuisineInRegion(cuisine: string, region: CuisineRegion): boolean {
  return cuisineRegions[region]?.includes(cuisine) ?? false;
}
