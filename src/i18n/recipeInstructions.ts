import type { Locale } from './types';
import { getRecipeText } from './recipeTranslations';

export function getRecipeSteps(recipeId: string, locale: Locale): string[] {
  return getRecipeText(recipeId, locale).steps;
}
