import { useCallback, useEffect, useState } from 'react';
import type { DragPayload, MealType, PlannerState, PlanPeriod } from '../types';
import { generateMealPlan } from '../utils/mealGenerator';
import type { NutrientFocus } from '../types';
import {
  addDish,
  addProduct,
  copyDay,
  createEmptyPlanner,
  duplicateDish,
  mealPlanToPlanner,
  migratePlannerSlots,
  moveDish,
  removeDish,
  setPeriod,
  updateDishPortions,
} from '../utils/plannerOps';

const PLANNER_KEY = 'ahimsa-kitchen-planner-v7';
const LEGACY_PLANNER_KEY = 'ahimsa-kitchen-planner-v6';

function loadPlanner(): PlannerState {
  for (const key of [PLANNER_KEY, LEGACY_PLANNER_KEY]) {
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const p = JSON.parse(raw) as PlannerState;
        if (p?.days?.length && p.period) {
          return {
            ...p,
            days: p.days.map((day) => ({
              ...day,
              slots: migratePlannerSlots(day.slots),
            })),
          };
        }
      }
    } catch { /* ignore */ }
  }
  return createEmptyPlanner('day');
}

export function usePlanner() {
  const [planner, setPlanner] = useState<PlannerState>(loadPlanner);

  useEffect(() => {
    localStorage.setItem(PLANNER_KEY, JSON.stringify(planner));
  }, [planner]);

  const setPlannerPeriod = useCallback((period: PlanPeriod) => {
    setPlanner((p) => setPeriod(p, period));
  }, []);

  const addRecipe = useCallback((
    dayIndex: number,
    mealType: MealType,
    recipeId: string,
    portions = 1,
  ) => {
    setPlanner((p) => addDish(p, dayIndex, mealType, recipeId, portions));
  }, []);

  const addProductToMeal = useCallback((
    dayIndex: number,
    mealType: MealType,
    productId: string,
    portions = 1,
  ) => {
    setPlanner((p) => addProduct(p, dayIndex, mealType, productId, portions));
  }, []);

  const setDishPortions = useCallback((
    dayIndex: number,
    mealType: MealType,
    dishId: string,
    portions: number,
  ) => {
    setPlanner((p) => updateDishPortions(p, dayIndex, mealType, dishId, portions));
  }, []);

  const deleteDish = useCallback((dayIndex: number, mealType: MealType, dishId: string) => {
    setPlanner((p) => removeDish(p, dayIndex, mealType, dishId));
  }, []);

  const copyDish = useCallback((dayIndex: number, mealType: MealType, dishId: string) => {
    setPlanner((p) => duplicateDish(p, dayIndex, mealType, dishId));
  }, []);

  const dragDish = useCallback((payload: DragPayload, toDay: number, toMeal: MealType) => {
    setPlanner((p) => moveDish(p, payload, toDay, toMeal));
  }, []);

  const copyDayTo = useCallback((from: number, to: number) => {
    setPlanner((p) => copyDay(p, from, to));
  }, []);

  const suggestMenu = useCallback((
    focus: NutrientFocus,
    proteinTargetG = 70,
  ) => {
    const plan = generateMealPlan(focus, planner.period, proteinTargetG);
    setPlanner(mealPlanToPlanner(plan));
  }, [planner.period]);

  const clearPlanner = useCallback(() => {
    const empty = createEmptyPlanner(planner.period);
    setPlanner(empty);
    localStorage.setItem(PLANNER_KEY, JSON.stringify(empty));
  }, [planner.period]);

  return {
    planner,
    setPlannerPeriod,
    addRecipe,
    addProductToMeal,
    setDishPortions,
    deleteDish,
    copyDish,
    dragDish,
    copyDayTo,
    suggestMenu,
    clearPlanner,
  };
}
