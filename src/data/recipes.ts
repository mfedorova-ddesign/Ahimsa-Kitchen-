import type { Recipe } from '../types';
import { snackRecipes } from './snackRecipes';

/** Vegan recipe collection (39 recipes). */
export const recipes: Recipe[] = [
  {
    id: 'oatmeal-almond-seeds',
    cuisine: 'american',
    mealType: 'breakfast',
    tags: ['protein', 'fiber'], 
    ingredients: [],
    prepTimeMin: 10,
    servings: 1,
    perServing: { kcal: 420, proteinG: 20, fatG: 16, carbsG: 48, fiberG: 10, ironMg: 3, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'rye-toast-hummus-avocado',
    cuisine: 'levantine',
    mealType: 'breakfast',
    tags: ['balanced'], 
    ingredients: [],
    prepTimeMin: 10,
    servings: 1,
    perServing: { kcal: 380, proteinG: 12, fatG: 18, carbsG: 42, fiberG: 9, ironMg: 2, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'korean-chickpea-pancakes',
    cuisine: 'korean',
    mealType: 'breakfast',
    tags: ['protein'], 
    ingredients: [],
    prepTimeMin: 25,
    servings: 2,
    perServing: { kcal: 340, proteinG: 17, fatG: 10, carbsG: 48, fiberG: 8, ironMg: 3, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'vegan-miso-ramen',
    cuisine: 'japanese',
    mealType: 'dinner',
    tags: ['protein', 'iodine'], 
    ingredients: [],
    prepTimeMin: 30,
    servings: 2,
    perServing: { kcal: 480, proteinG: 28, fatG: 14, carbsG: 58, fiberG: 6, ironMg: 4, iodineMcg: 40, d3Mcg: 0 },
  },
  {
    id: 'quinoa-black-beans-sweet-potato',
    cuisine: 'mexican',
    mealType: 'dinner',
    tags: ['protein', 'iron'], 
    ingredients: [],
    prepTimeMin: 40,
    servings: 2,
    perServing: { kcal: 450, proteinG: 20, fatG: 12, carbsG: 62, fiberG: 11, ironMg: 4, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'baked-tempeh-sweet-chili',
    cuisine: 'fusion',
    mealType: 'dinner',
    tags: ['protein'], 
    ingredients: [],
    prepTimeMin: 35,
    servings: 2,
    perServing: { kcal: 390, proteinG: 20, fatG: 14, carbsG: 38, fiberG: 4, ironMg: 2, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'pea-soup-vegan-sausages',
    cuisine: 'scandinavian',
    mealType: 'lunch',
    tags: ['protein'], 
    ingredients: [],
    prepTimeMin: 60,
    servings: 4,
    perServing: { kcal: 320, proteinG: 20, fatG: 8, carbsG: 48, fiberG: 10, ironMg: 3, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'falafel-wrap',
    cuisine: 'levantine',
    mealType: 'lunch',
    tags: ['protein'], 
    ingredients: [],
    prepTimeMin: 15,
    servings: 1,
    perServing: { kcal: 420, proteinG: 20, fatG: 16, carbsG: 48, fiberG: 10, ironMg: 4, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'edamame-vegetable-salad',
    cuisine: 'japanese',
    mealType: 'lunch',
    tags: ['protein'], 
    ingredients: [],
    prepTimeMin: 15,
    servings: 2,
    perServing: { kcal: 280, proteinG: 18, fatG: 14, carbsG: 18, fiberG: 6, ironMg: 3, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'turkish-red-lentil-soup',
    cuisine: 'turkish',
    mealType: 'lunch',
    tags: ['protein', 'iron'], 
    ingredients: [],
    prepTimeMin: 35,
    servings: 4,
    perServing: { kcal: 260, proteinG: 13, fatG: 6, carbsG: 38, fiberG: 8, ironMg: 4, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'vegetable-chickpea-curry',
    cuisine: 'indian',
    mealType: 'dinner',
    tags: ['protein'], 
    ingredients: [],
    prepTimeMin: 35,
    servings: 3,
    perServing: { kcal: 380, proteinG: 14, fatG: 18, carbsG: 42, fiberG: 9, ironMg: 3, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'mediterranean-stewed-beans',
    cuisine: 'mediterranean',
    mealType: 'dinner',
    tags: ['protein', 'iron'], 
    ingredients: [],
    prepTimeMin: 35,
    servings: 3,
    perServing: { kcal: 340, proteinG: 16, fatG: 10, carbsG: 48, fiberG: 12, ironMg: 4, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'wholegrain-pasta-bean-sauce',
    cuisine: 'italian',
    mealType: 'dinner',
    tags: ['protein', 'iron'], 
    ingredients: [],
    prepTimeMin: 30,
    servings: 2,
    perServing: { kcal: 480, proteinG: 22, fatG: 12, carbsG: 68, fiberG: 11, ironMg: 4, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'sweet-protein-pancakes',
    cuisine: 'american',
    mealType: 'breakfast',
    tags: ['protein', 'fiber'], 
    ingredients: [],
    prepTimeMin: 20,
    servings: 2,
    perServing: { kcal: 360, proteinG: 15, fatG: 10, carbsG: 52, fiberG: 8, ironMg: 2, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'stir-fry-noodles-tofu-sauce',
    cuisine: 'korean',
    mealType: 'dinner',
    tags: ['protein'], 
    ingredients: [],
    prepTimeMin: 25,
    servings: 2,
    perServing: { kcal: 440, proteinG: 26, fatG: 14, carbsG: 52, fiberG: 6, ironMg: 3, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'vegan-berry-pie',
    cuisine: 'european',
    mealType: 'snack',
    tags: [], 
    ingredients: [],
    prepTimeMin: 50,
    servings: 8,
    perServing: { kcal: 280, proteinG: 5, fatG: 14, carbsG: 34, fiberG: 3, ironMg: 1, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'vegan-panna-cotta',
    cuisine: 'italian',
    mealType: 'snack',
    tags: [], 
    ingredients: [],
    prepTimeMin: 20,
    servings: 4,
    perServing: { kcal: 220, proteinG: 2, fatG: 14, carbsG: 20, fiberG: 1, ironMg: 1, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'chickpea-chocolate-mousse',
    cuisine: 'european',
    mealType: 'snack',
    tags: [], 
    ingredients: [],
    prepTimeMin: 30,
    servings: 4,
    perServing: { kcal: 240, proteinG: 4, fatG: 12, carbsG: 28, fiberG: 3, ironMg: 2, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'chickpea-brownies',
    cuisine: 'american',
    mealType: 'snack',
    tags: [], 
    ingredients: [],
    prepTimeMin: 35,
    servings: 9,
    perServing: { kcal: 180, proteinG: 4, fatG: 8, carbsG: 24, fiberG: 3, ironMg: 1, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'brown-lentil-dal',
    cuisine: 'indian',
    mealType: 'dinner',
    tags: ['protein', 'iron'], 
    ingredients: [],
    prepTimeMin: 45,
    servings: 4,
    perServing: { kcal: 400, proteinG: 18, fatG: 10, carbsG: 58, fiberG: 12, ironMg: 5, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'vegan-butter-masala',
    cuisine: 'indian',
    mealType: 'dinner',
    tags: ['protein'], 
    ingredients: [],
    prepTimeMin: 45,
    servings: 4,
    perServing: { kcal: 420, proteinG: 20, fatG: 16, carbsG: 48, fiberG: 6, ironMg: 3, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'pesto-pasta-green-peas',
    cuisine: 'italian',
    mealType: 'dinner',
    tags: ['protein'], 
    ingredients: [],
    prepTimeMin: 20,
    servings: 2,
    perServing: { kcal: 460, proteinG: 18, fatG: 16, carbsG: 62, fiberG: 8, ironMg: 2, iodineMcg: 0, d3Mcg: 0 },
  },
  {
    id: 'potato-mushroom-pea-stew',
    cuisine: 'european',
    mealType: 'dinner',
    tags: ['balanced'], 
    ingredients: [],
    prepTimeMin: 35,
    servings: 4,
    perServing: { kcal: 280, proteinG: 8, fatG: 8, carbsG: 42, fiberG: 6, ironMg: 2, iodineMcg: 0, d3Mcg: 0 },
  },
  ...snackRecipes,
];

export const recipesById = new Map(recipes.map((r) => [r.id, r]));

export function getRecipesByMealType(mealType: Recipe['mealType']): Recipe[] {
  return recipes.filter((r) => r.mealType === mealType);
}

export function getRecipesForFocus(
  mealType: Recipe['mealType'],
  focus: string,
): Recipe[] {
  const pool = getRecipesByMealType(mealType);
  if (focus === 'balanced') return pool;

  const focused = pool.filter((r) => r.tags.includes(focus));
  if (focused.length > 0) return focused;

  if (focus === 'iron') {
    return pool.filter((r) => r.tags.includes('iron') || r.tags.includes('vitamin-c'));
  }
  if (focus === 'iodine') {
    return pool.filter((r) => r.tags.includes('iodine'));
  }
  if (focus === 'd3') {
    return pool.filter((r) => r.tags.includes('d3'));
  }
  if (focus === 'protein') {
    return pool.filter((r) => r.tags.includes('protein'));
  }

  return pool;
}

export function getAlternativeRecipes(
  recipeId: string,
  mealType: Recipe['mealType'],
  focus: string,
): Recipe[] {
  const current = recipesById.get(recipeId);
  const pool = getRecipesForFocus(mealType, focus).filter((r) => r.id !== recipeId);

  if (!current) return pool;

  const sameCuisine = pool.filter((r) => r.cuisine !== current.cuisine);
  return sameCuisine.length >= 3 ? sameCuisine : pool;
}
