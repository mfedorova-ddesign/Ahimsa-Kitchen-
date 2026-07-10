import type {
  DragPayload,
  MealPlan,
  MealSlots,
  MealType,
  PlannedDish,
  PlannerDay,
  PlannerState,
  PlanPeriod,
} from '../types';
import { clampPortions } from './portionUtils';
import { getPlannedItemNutrients } from './plannedNutrients';

const MEAL_TYPES: MealType[] = ['breakfast', 'lunch', 'dinner', 'snack'];

let dishCounter = 0;

export function newDishId(): string {
  return `dish-${++dishCounter}-${Date.now().toString(36)}`;
}

export function emptySlots(): MealSlots {
  return { breakfast: [], lunch: [], dinner: [], snack: [] };
}

export function createEmptyDay(dayIndex: number): PlannerDay {
  return { dayIndex, slots: emptySlots() };
}

export function createEmptyPlanner(period: PlanPeriod): PlannerState {
  const dayCount = period === 'day' ? 1 : 7;
  return {
    period,
    days: Array.from({ length: dayCount }, (_, i) => createEmptyDay(i)),
    updatedAt: new Date().toISOString(),
  };
}

export function addDish(
  planner: PlannerState,
  dayIndex: number,
  mealType: MealType,
  recipeId: string,
  portions = 1,
): PlannerState {
  const dish: PlannedDish = {
    id: newDishId(),
    kind: 'recipe',
    recipeId,
    portions: clampPortions(portions),
  };
  return updateDay(planner, dayIndex, (day) => ({
    ...day,
    slots: {
      ...day.slots,
      [mealType]: [...day.slots[mealType], dish],
    },
  }));
}

export function addProduct(
  planner: PlannerState,
  dayIndex: number,
  mealType: MealType,
  productId: string,
  portions = 1,
): PlannerState {
  const dish: PlannedDish = {
    id: newDishId(),
    kind: 'product',
    productId,
    portions: clampPortions(portions),
  };
  return updateDay(planner, dayIndex, (day) => ({
    ...day,
    slots: {
      ...day.slots,
      [mealType]: [...day.slots[mealType], dish],
    },
  }));
}

export function updateDishPortions(
  planner: PlannerState,
  dayIndex: number,
  mealType: MealType,
  dishId: string,
  portions: number,
): PlannerState {
  if (portions <= 0) {
    return removeDish(planner, dayIndex, mealType, dishId);
  }

  const nextPortions = clampPortions(portions);
  return updateDay(planner, dayIndex, (day) => ({
    ...day,
    slots: {
      ...day.slots,
      [mealType]: day.slots[mealType].map((d) =>
        d.id === dishId ? { ...d, portions: nextPortions } : d,
      ),
    },
  }));
}

/** @deprecated use updateDishPortions */
export function updateProductPortions(
  planner: PlannerState,
  dayIndex: number,
  mealType: MealType,
  dishId: string,
  portions: number,
): PlannerState {
  return updateDishPortions(planner, dayIndex, mealType, dishId, portions);
}

export function removeDish(
  planner: PlannerState,
  dayIndex: number,
  mealType: MealType,
  dishId: string,
): PlannerState {
  return updateDay(planner, dayIndex, (day) => ({
    ...day,
    slots: {
      ...day.slots,
      [mealType]: day.slots[mealType].filter((d) => d.id !== dishId),
    },
  }));
}

export function duplicateDish(
  planner: PlannerState,
  dayIndex: number,
  mealType: MealType,
  dishId: string,
): PlannerState {
  const day = planner.days.find((d) => d.dayIndex === dayIndex);
  const dish = day?.slots[mealType].find((d) => d.id === dishId);
  if (!dish) return planner;

  const copy: PlannedDish =
    dish.kind === 'recipe'
      ? { id: newDishId(), kind: 'recipe', recipeId: dish.recipeId, portions: dish.portions }
      : { id: newDishId(), kind: 'product', productId: dish.productId, portions: dish.portions };
  return updateDay(planner, dayIndex, (d) => ({
    ...d,
    slots: {
      ...d.slots,
      [mealType]: [...d.slots[mealType], copy],
    },
  }));
}

export function moveDish(
  planner: PlannerState,
  payload: DragPayload,
  toDay: number,
  toMeal: MealType,
  insertIndex?: number,
): PlannerState {
  const fromDay = planner.days.find((d) => d.dayIndex === payload.fromDay);
  if (!fromDay) return planner;

  const dish = fromDay.slots[payload.fromMeal].find((d) => d.id === payload.dishId);
  if (!dish) return planner;

  let next = removeDish(planner, payload.fromDay, payload.fromMeal, payload.dishId);

  next = updateDay(next, toDay, (day) => {
    const list = [...day.slots[toMeal]];
    const idx = insertIndex ?? list.length;
    list.splice(idx, 0, dish);
    return {
      ...day,
      slots: { ...day.slots, [toMeal]: list },
    };
  });

  return { ...next, updatedAt: new Date().toISOString() };
}

export function copyDay(
  planner: PlannerState,
  fromDayIndex: number,
  toDayIndex: number,
): PlannerState {
  const source = planner.days.find((d) => d.dayIndex === fromDayIndex);
  if (!source) return planner;

  const cloned: MealSlots = { breakfast: [], lunch: [], dinner: [], snack: [] };
  for (const mt of MEAL_TYPES) {
    cloned[mt] = source.slots[mt].map((d) =>
      d.kind === 'recipe'
        ? { id: newDishId(), kind: 'recipe' as const, recipeId: d.recipeId, portions: d.portions }
        : { id: newDishId(), kind: 'product' as const, productId: d.productId, portions: d.portions },
    );
  }

  return updateDay(planner, toDayIndex, () => ({
    dayIndex: toDayIndex,
    slots: cloned,
  }));
}

export function clearDay(planner: PlannerState, dayIndex: number): PlannerState {
  return updateDay(planner, dayIndex, (day) => ({
    ...day,
    slots: emptySlots(),
  }));
}

export function setPeriod(planner: PlannerState, period: PlanPeriod): PlannerState {
  if (planner.period === period) return planner;

  if (period === 'day') {
    return {
      period,
      days: [planner.days[0] ?? createEmptyDay(0)],
      updatedAt: new Date().toISOString(),
    };
  }

  const days: PlannerDay[] = [];
  for (let i = 0; i < 7; i++) {
    days.push(planner.days[i] ?? createEmptyDay(i));
  }
  return { period, days, updatedAt: new Date().toISOString() };
}

export function mealPlanToPlanner(plan: MealPlan): PlannerState {
  dishCounter = 0;
  const days: PlannerDay[] = plan.days.map((dayPlan) => {
    const slots = emptySlots();
    for (const meal of dayPlan.meals) {
      slots[meal.type].push({ id: newDishId(), kind: 'recipe', recipeId: meal.recipeId, portions: 1 });
    }
    return { dayIndex: dayPlan.dayIndex, slots };
  });

  return {
    period: plan.period,
    days,
    updatedAt: new Date().toISOString(),
  };
}

function updateDay(
  planner: PlannerState,
  dayIndex: number,
  fn: (day: PlannerDay) => PlannerDay,
): PlannerState {
  return {
    ...planner,
    days: planner.days.map((d) => (d.dayIndex === dayIndex ? fn(d) : d)),
    updatedAt: new Date().toISOString(),
  };
}

export function slotsNutrients(slots: MealSlots): import('../types').Nutrients {
  const allDishes = MEAL_TYPES.flatMap((mt) => slots[mt]);
  return allDishes.reduce(
    (acc, dish) => {
      const n = getPlannedItemNutrients(dish);
      return {
        kcal: acc.kcal + n.kcal,
        proteinG: acc.proteinG + n.proteinG,
        fatG: acc.fatG + n.fatG,
        carbsG: acc.carbsG + n.carbsG,
        fiberG: acc.fiberG + n.fiberG,
        ironMg: acc.ironMg + n.ironMg,
        iodineMcg: acc.iodineMcg + n.iodineMcg,
        d3Mcg: acc.d3Mcg + n.d3Mcg,
      };
    },
    { kcal: 0, proteinG: 0, fatG: 0, carbsG: 0, fiberG: 0, ironMg: 0, iodineMcg: 0, d3Mcg: 0 },
  );
}

export function migratePlannedDish(raw: unknown): PlannedDish | null {
  if (!raw || typeof raw !== 'object') return null;
  const d = raw as Record<string, unknown>;
  if (typeof d.id !== 'string') return null;

  if (d.kind === 'recipe' && typeof d.recipeId === 'string') {
    const portions = typeof d.portions === 'number' && d.portions > 0 ? d.portions : 1;
    return { id: d.id, kind: 'recipe', recipeId: d.recipeId, portions: clampPortions(portions) };
  }
  if (d.kind === 'product' && typeof d.productId === 'string') {
    const portions = typeof d.portions === 'number' && d.portions > 0 ? d.portions : 1;
    return { id: d.id, kind: 'product', productId: d.productId, portions: clampPortions(portions) };
  }
  if (typeof d.recipeId === 'string') {
    return { id: d.id, kind: 'recipe', recipeId: d.recipeId, portions: 1 };
  }
  return null;
}

export function migratePlannerSlots(slots: MealSlots): MealSlots {
  const migrateList = (list: unknown[]) =>
    list.map(migratePlannedDish).filter((d): d is PlannedDish => d !== null);

  return {
    breakfast: migrateList(slots.breakfast as unknown[]),
    lunch: migrateList(slots.lunch as unknown[]),
    dinner: migrateList(slots.dinner as unknown[]),
    snack: migrateList(slots.snack as unknown[]),
  };
}
