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
): PlannerState {
  const dish: PlannedDish = { id: newDishId(), recipeId };
  return updateDay(planner, dayIndex, (day) => ({
    ...day,
    slots: {
      ...day.slots,
      [mealType]: [...day.slots[mealType], dish],
    },
  }));
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

  const copy: PlannedDish = { id: newDishId(), recipeId: dish.recipeId };
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
    cloned[mt] = source.slots[mt].map((d) => ({
      id: newDishId(),
      recipeId: d.recipeId,
    }));
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
      slots[meal.type].push({ id: newDishId(), recipeId: meal.recipeId });
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

export function slotsNutrients(
  slots: MealSlots,
  getNutrients: (recipeId: string) => import('../types').Nutrients,
): import('../types').Nutrients {
  const allDishes = MEAL_TYPES.flatMap((mt) => slots[mt]);
  return allDishes.reduce(
    (acc, dish) => {
      const n = getNutrients(dish.recipeId);
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
