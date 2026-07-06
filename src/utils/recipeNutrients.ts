import { recipesById } from '../data/recipes';
import { productsById } from '../data/products';
import { ADDED_SUGAR_PRODUCTS, GLUTEN_PRODUCTS } from '../data/cuisines';
import type { Nutrients, Recipe, RecipeFilterTag } from '../types';
import { recipeToItems } from './recipeUtils';
import { sumNutrients } from './nutrients';

const nutrientCache = new Map<string, Nutrients>();

export function getRecipeNutrients(recipeId: string): Nutrients {
  const cached = nutrientCache.get(recipeId);
  if (cached) return cached;

  const recipe = recipesById.get(recipeId);
  if (!recipe) {
    return { kcal: 0, proteinG: 0, fatG: 0, carbsG: 0, fiberG: 0, ironMg: 0, iodineMcg: 0, d3Mcg: 0 };
  }

  const n = sumNutrients(recipeToItems(recipe));
  nutrientCache.set(recipeId, n);
  return n;
}

export function isGlutenFree(recipe: Recipe): boolean {
  return !recipe.ingredients.some((i) => GLUTEN_PRODUCTS.has(i.productId));
}

export function isNoAddedSugar(recipe: Recipe): boolean {
  return !recipe.ingredients.some((i) => ADDED_SUGAR_PRODUCTS.has(i.productId));
}

export function getComputedTags(recipe: Recipe): RecipeFilterTag[] {
  const n = getRecipeNutrients(recipe.id);
  const tags: RecipeFilterTag[] = [];

  if (n.proteinG >= 20) tags.push('high-protein');
  if (n.ironMg >= 5) tags.push('iron-rich');
  if (n.iodineMcg >= 50) tags.push('iodine-rich');
  if (n.d3Mcg >= 2) tags.push('d3-source');
  if (recipe.tags.includes('vitamin-c') || recipe.ingredients.some((i) =>
    productsById.get(i.productId)?.tags.includes('vitamin-c'),
  )) tags.push('vitamin-c');
  if (isGlutenFree(recipe)) tags.push('gluten-free');
  if (isNoAddedSugar(recipe)) tags.push('no-added-sugar');
  if (recipe.ingredients.length <= 5) tags.push('quick');

  return tags;
}

export function getAllComputedTags(recipeId: string): RecipeFilterTag[] {
  const recipe = recipesById.get(recipeId);
  if (!recipe) return [];
  return getComputedTags(recipe);
}
