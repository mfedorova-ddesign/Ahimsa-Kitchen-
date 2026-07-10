import { recipesById } from '../data/recipes';
import { productsById } from '../data/products';
import type { PlannedDish } from '../types';
import { parseGramsFromLabel } from './portionUtils';

const MEAL_WEIGHT_FALLBACK = {
  breakfast: 320,
  lunch: 420,
  dinner: 450,
  snack: 140,
} as const;

export function getRecipeServingWeightG(recipeId: string): number {
  const recipe = recipesById.get(recipeId);
  if (!recipe) return 0;
  if (recipe.servingWeightG) return recipe.servingWeightG;
  if (recipe.perServing?.kcal) {
    return Math.round(recipe.perServing.kcal / 1.25);
  }
  return MEAL_WEIGHT_FALLBACK[recipe.mealType];
}

export function getProductServingWeightG(productId: string, portionLabel: string): number | null {
  const product = productsById.get(productId);
  if (!product) return null;
  return parseGramsFromLabel(portionLabel) ?? parseGramsFromLabel(product.portionLabel);
}

export function getPlannedItemWeightG(
  item: PlannedDish,
  productPortionLabel?: string,
): number | null {
  if (item.kind === 'recipe') {
    return Math.round(getRecipeServingWeightG(item.recipeId) * item.portions);
  }
  const base = productPortionLabel
    ? getProductServingWeightG(item.productId, productPortionLabel)
    : getProductServingWeightG(item.productId, productsById.get(item.productId)?.portionLabel ?? '');
  if (base == null) return null;
  return Math.round(base * item.portions);
}
