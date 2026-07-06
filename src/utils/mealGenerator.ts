import {
  getAlternativeRecipes,
  getRecipesForFocus,
  recipesById,
} from '../data/recipes';
import { productsById } from '../data/products';
import { sumNutrients } from './nutrients';
import { recipeToItems, scaleRecipeProtein } from './recipeUtils';
import type {
  DayPlan,
  Meal,
  MealPlan,
  MealType,
  NutrientFocus,
  PlanPeriod,
  Recipe,
} from '../types';

const MEAL_TYPES: MealType[] = ['breakfast', 'lunch', 'dinner', 'snack'];

let idCounter = 0;
function uid(): string {
  return `m-${++idCounter}-${Date.now()}`;
}

function pick<T>(arr: T[], index: number): T {
  return arr[index % arr.length];
}

function shuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = (seed + i * 7) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function buildMealFromRecipe(recipe: Recipe): Meal {
  return {
    id: uid(),
    type: recipe.mealType,
    label: recipe.mealType,
    recipeId: recipe.id,
    items: recipeToItems(recipe),
  };
}

function selectRecipe(
  mealType: MealType,
  focus: NutrientFocus,
  dayIndex: number,
  slotOffset: number,
  usedRecipeIds: Set<string>,
): Recipe {
  const pool = getRecipesForFocus(mealType, focus);
  const available = pool.filter((r) => !usedRecipeIds.has(r.id));
  const candidates = available.length > 0 ? available : pool;
  const seed = dayIndex * 17 + slotOffset * 3;
  return pick(shuffle(candidates, seed), 0);
}

function generateDay(dayIndex: number, focus: NutrientFocus): DayPlan {
  const usedRecipeIds = new Set<string>();
  const meals: Meal[] = [];

  for (let i = 0; i < MEAL_TYPES.length; i++) {
    const mealType = MEAL_TYPES[i];
    const recipe = selectRecipe(mealType, focus, dayIndex, i, usedRecipeIds);
    usedRecipeIds.add(recipe.id);
    meals.push(buildMealFromRecipe(recipe));
  }

  return {
    dayIndex,
    label: String(dayIndex),
    meals,
  };
}

function boostProtein(day: DayPlan, targetG: number): DayPlan {
  const allItems = day.meals.flatMap((m) => m.items);
  let total = sumNutrients(allItems);

  if (total.proteinG >= targetG) return day;

  const meals = day.meals.map((meal) => {
    if (meal.type === 'snack') return meal;
    const scaled = scaleRecipeProtein(meal.items, 1.25);
    return { ...meal, items: scaled };
  });

  total = sumNutrients(meals.flatMap((m) => m.items));
  if (total.proteinG >= targetG) return { ...day, meals };

  const boosted = meals.map((meal) => {
    if (meal.type === 'snack') return meal;
    return { ...meal, items: scaleRecipeProtein(meal.items, 1.4) };
  });

  return { ...day, meals: boosted };
}

export function generateMealPlan(
  focus: NutrientFocus,
  period: PlanPeriod,
  proteinTargetG = 70,
): MealPlan {
  idCounter = 0;
  const dayCount = period === 'day' ? 1 : 7;

  let days = Array.from({ length: dayCount }, (_, i) => generateDay(i, focus));

  if (focus === 'protein') {
    days = days.map((d) => boostProtein(d, proteinTargetG));
  }

  return {
    focus,
    period,
    proteinTargetG: focus === 'protein' ? proteinTargetG : undefined,
    days,
    createdAt: new Date().toISOString(),
  };
}

export function swapMealRecipe(
  plan: MealPlan,
  dayIndex: number,
  mealId: string,
  newRecipeId: string,
): MealPlan {
  const recipe = recipesById.get(newRecipeId);
  if (!recipe) return plan;

  const days = plan.days.map((day) => {
    if (day.dayIndex !== dayIndex) return day;

    const meals = day.meals.map((meal) => {
      if (meal.id !== mealId) return meal;
      return {
        ...meal,
        recipeId: recipe.id,
        items: recipeToItems(recipe),
      };
    });

    return { ...day, meals };
  });

  return { ...plan, days };
}

export function regenerateMeal(
  plan: MealPlan,
  dayIndex: number,
  mealId: string,
): MealPlan {
  const day = plan.days.find((d) => d.dayIndex === dayIndex);
  if (!day) return plan;

  const meal = day.meals.find((m) => m.id === mealId);
  if (!meal) return plan;

  const usedRecipeIds = new Set(
    day.meals.filter((m) => m.id !== mealId).map((m) => m.recipeId),
  );

  const alternatives = getAlternativeRecipes(meal.recipeId, meal.type, plan.focus)
    .filter((r) => !usedRecipeIds.has(r.id));

  const pool = alternatives.length > 0
    ? alternatives
    : getRecipesForFocus(meal.type, plan.focus).filter((r) => !usedRecipeIds.has(r.id));

  const seed = dayIndex * 31 + Date.now() % 100;
  const recipe = pick(shuffle(pool.length > 0 ? pool : getRecipesForFocus(meal.type, plan.focus), seed), 0);

  const newMeal = buildMealFromRecipe(recipe);

  const days = plan.days.map((d) => {
    if (d.dayIndex !== dayIndex) return d;
    return {
      ...d,
      meals: d.meals.map((m) =>
        m.id === mealId ? { ...newMeal, id: mealId } : m,
      ),
    };
  });

  let result = { ...plan, days };

  if (plan.focus === 'protein' && plan.proteinTargetG) {
    result = {
      ...result,
      days: result.days.map((d) =>
        d.dayIndex === dayIndex ? boostProtein(d, plan.proteinTargetG!) : d,
      ),
    };
  }

  return result;
}

/** @deprecated use swapMealRecipe */
export function swapMealItem(
  plan: MealPlan,
  dayIndex: number,
  mealId: string,
  _itemIndex: number,
  newProduct: { id: string },
): MealPlan {
  const recipe = [...recipesById.values()].find((r) =>
    r.ingredients.some((i) => i.productId === newProduct.id),
  );
  if (recipe) return swapMealRecipe(plan, dayIndex, mealId, recipe.id);
  return plan;
}

export function hydrateMealProducts(meal: Meal): Meal {
  const items = meal.items.map((item) => {
    const product = productsById.get(item.product.id) ?? item.product;
    return { product, portions: item.portions };
  });
  return { ...meal, items };
}
