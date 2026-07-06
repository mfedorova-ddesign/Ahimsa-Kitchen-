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
  const q = filters.query.trim().toLowerCase();

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

    if (q) {
      const haystack = `${recipe.id} ${recipe.cuisine} ${recipe.mealType} ${recipe.tags.join(' ')}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }

    return true;
  });
}
