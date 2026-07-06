import { productsById } from '../data/products';
import type { MealItem, Recipe } from '../types';

export function recipeToItems(recipe: Recipe): MealItem[] {
  const items: MealItem[] = [];

  for (const ing of recipe.ingredients) {
    const product = productsById.get(ing.productId);
    if (!product) continue;
    items.push({ product, portions: ing.portions });
  }

  return items;
}

export function scaleRecipeProtein(items: MealItem[], factor: number): MealItem[] {
  return items.map((item) => {
    if (!item.product.tags.includes('protein')) return item;
    return { ...item, portions: Math.round(item.portions * factor * 10) / 10 };
  });
}
