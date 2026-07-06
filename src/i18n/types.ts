import type { NutrientFocus } from '../types';

export type Locale = 'en' | 'ru' | 'uk';

export interface EducationalBlock {
  title: string;
  body: string;
}

export interface FocusTranslation {
  label: string;
  description: string;
}

export interface Translations {
  app: {
    title: string;
    subtitle: string;
  };
  lang: {
    en: string;
    ru: string;
    uk: string;
  };
  common: {
    back: string;
    cancel: string;
    generate: string;
    newMenu: string;
    otherMenu: string;
    swap: string;
    swapTo: string;
    swapRecipe: string;
    ingredients: string;
    dayTotal: string;
    mealTotal: string;
    perDay: string;
    proteinTarget: string;
    proteinUnit: string;
  };
  selector: {
    chooseFocus: string;
    proteinGoal: string;
    proteinHint: string;
    period: string;
    periodDay: string;
    periodWeek: string;
  };
  plan: {
    menuDay: string;
    menuWeek: string;
    proteinGoalLine: string;
  };
  meals: Record<string, string>;
  days: string[];
  nutrients: {
    kcal: string;
    protein: string;
    fat: string;
    carbs: string;
    fiber: string;
    iron: string;
    iodine: string;
    d3: string;
  };
  nutrientsShort: {
    kcal: string;
    protein: string;
    fat: string;
    carbs: string;
    fiber: string;
  };
  focus: Record<NutrientFocus, FocusTranslation>;
  disclaimers: Record<'iron' | 'iodine' | 'd3', string>;
  d3ExtraDisclaimer: string;
  education: Record<NutrientFocus, EducationalBlock[]>;
  planner: {
    disclaimer: string;
    periodDay: string;
    periodWeek: string;
    addDish: string;
    copyDay: string;
    copyDish: string;
    removeDish: string;
    suggestMenu: string;
    exportText: string;
    exportPdf: string;
    clearPlan: string;
    searchRecipes: string;
    searchPlaceholder: string;
    filters: string;
    allMeals: string;
    allCuisines: string;
    allRegions: string;
    proteinMin: string;
    proteinMax: string;
    apply: string;
    resetFilters: string;
    noResults: string;
    slotTotal: string;
    dragHint: string;
    suggestTitle: string;
    suggestDesc: string;
    suggestGenerate: string;
    regions: Record<string, string>;
    filterTags: Record<string, string>;
  };
}
