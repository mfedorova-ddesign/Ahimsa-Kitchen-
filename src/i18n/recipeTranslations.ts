import type { Locale } from './types';
import { vegRecipeTexts } from './vegRecipesContent';
import { vegRecipesEnUk } from './vegRecipesEnUk';
import { snackRecipeTexts } from './snackRecipesContent';
import { snackRecipesEnUk } from './snackRecipesEnUk';
import { extraRecipeTexts } from './extraRecipesContent';
import { extraRecipesEnUk } from './extraRecipesEnUk';

const allRecipeTexts = { ...vegRecipeTexts, ...snackRecipeTexts, ...extraRecipeTexts };
const allRecipesEnUk = { ...vegRecipesEnUk, ...snackRecipesEnUk, ...extraRecipesEnUk };

export interface RecipeText {
  name: string;
  description: string;
  ingredientLines: string[];
  steps: string[];
  tip?: string;
}

type LocaleMap<T> = Record<Locale, T>;

export const cuisineTexts: Record<string, LocaleMap<string>> = {
  indian: { en: 'Indian', ru: 'Индия', uk: 'Індія' },
  levantine: { en: 'Lebanon', ru: 'Ливан', uk: 'Ліван' },
  thai: { en: 'Thai', ru: 'Таиланд', uk: 'Таїланд' },
  italian: { en: 'Italian', ru: 'Италия', uk: 'Італія' },
  japanese: { en: 'Japanese', ru: 'Япония', uk: 'Японія' },
  korean: { en: 'Korean', ru: 'Корея', uk: 'Корея' },
  mediterranean: { en: 'Mediterranean', ru: 'Средиземноморье', uk: 'Середземномор\'я' },
  greek: { en: 'Greek', ru: 'Греция', uk: 'Греція' },
  american: { en: 'American', ru: 'Американская', uk: 'Американська' },
  mexican: { en: 'Mexican', ru: 'Мексика', uk: 'Мексика' },
  turkish: { en: 'Turkish', ru: 'Турция', uk: 'Туреччина' },
  european: { en: 'European', ru: 'Европейская', uk: 'Європейська' },
  scandinavian: { en: 'Scandinavian', ru: 'Скандинавская', uk: 'Скандинавська' },
  fusion: { en: 'Fusion', ru: 'Фьюжн', uk: 'Ф\'южн' },
};

export function getRecipeText(recipeId: string, locale: Locale): RecipeText {
  const base = allRecipeTexts[recipeId]?.[locale];
  if (!base) {
    return { name: recipeId, description: '', ingredientLines: [], steps: [] };
  }
  const translated = locale !== 'ru' ? allRecipesEnUk[recipeId]?.[locale] : undefined;
  if (!translated) return base;
  return {
    ...base,
    ingredientLines: translated.ingredientLines,
    steps: translated.steps,
    tip: translated.tip ?? base.tip,
  };
}

export function getCuisineText(cuisineId: string, locale: Locale): string {
  return cuisineTexts[cuisineId]?.[locale] ?? cuisineId;
}
