import { productsById } from '../data/products';
import type { Nutrients, PlannedDish } from '../types';
import { calcItemNutrients, emptyNutrients, scaleNutrients } from './nutrients';
import { getRecipeNutrients } from './recipeNutrients';

export function getPlannedItemNutrients(item: PlannedDish): Nutrients {
  if (item.kind === 'recipe') {
    return scaleNutrients(getRecipeNutrients(item.recipeId), item.portions);
  }

  const product = productsById.get(item.productId);
  if (!product) return emptyNutrients();

  return calcItemNutrients({ product, portions: item.portions });
}
