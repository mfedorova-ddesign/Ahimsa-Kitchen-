import { cuisineInRegion } from '../data/cuisines';
import { recipes } from '../data/recipes';
import type { Recipe, RecipeSearchFilters } from '../types';
import { getComputedTags, getRecipeNutrients } from './recipeNutrients';

export function defaultFilters(): RecipeSearchFilters {
  return {
    query: '',
    mealType: 'all',
    cuisine: 'all',
    cuisineRegion: 'all',
    proteinMin: null,
    proteinMax: null,
    tags: [],
  };
}

export function searchRecipes(filters: RecipeSearchFilters): Recipe[] {
  return recipes.filter((recipe) => {
    if (filters.mealType !== 'all' && recipe.mealType !== filters.mealType) return false;

    if (filters.cuisine !== 'all' && recipe.cuisine !== filters.cuisine) return false;

    if (filters.cuisineRegion !== 'all' && !cuisineInRegion(recipe.cuisine, filters.cuisineRegion)) {
      return false;
    }

    const nutrients = getRecipeNutrients(recipe.id);
    if (filters.proteinMin !== null && nutrients.proteinG < filters.proteinMin) return false;
    if (filters.proteinMax !== null && nutrients.proteinG > filters.proteinMax) return false;

    if (filters.tags.length > 0) {
      const computed = getComputedTags(recipe);
      if (!filters.tags.every((t) => computed.includes(t))) return false;
    }

    return true;
  });
}

export interface RecipeTextSearch {
  name: (id: string) => string;
  description: (id: string) => string;
  ingredientLines: (id: string) => string[];
  tip: (id: string) => string | undefined;
  cuisineName: (cuisineId: string) => string;
}

export function recipeMatchesQuery(
  recipe: Recipe,
  query: string,
  text: RecipeTextSearch,
): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  const haystack = [
    recipe.id,
    recipe.id.replace(/-/g, ' '),
    recipe.cuisine,
    recipe.mealType,
    ...recipe.tags,
    text.name(recipe.id),
    text.description(recipe.id),
    text.cuisineName(recipe.cuisine),
    ...(text.ingredientLines(recipe.id) ?? []),
    text.tip(recipe.id) ?? '',
  ]
    .join(' ')
    .toLowerCase();

  return haystack.includes(q);
}

export function searchRecipesWithText(
  filters: RecipeSearchFilters,
  text: RecipeTextSearch,
): Recipe[] {
  const q = filters.query.trim();
  return searchRecipes(filters).filter((recipe) => recipeMatchesQuery(recipe, q, text));
}
