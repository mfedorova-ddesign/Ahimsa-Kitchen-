import { useCallback, useEffect, useState } from 'react';
import type { DragPayload, MealType, PlannerState, PlanPeriod } from '../types';
import { generateMealPlan } from '../utils/mealGenerator';
import type { NutrientFocus } from '../types';
import {
  addDish,
  copyDay,
  createEmptyPlanner,
  duplicateDish,
  mealPlanToPlanner,
  moveDish,
  removeDish,
  setPeriod,
} from '../utils/plannerOps';

const PLANNER_KEY = 'ahimsa-kitchen-planner-v2';

function loadPlanner(): PlannerState {
  try {
    const raw = localStorage.getItem(PLANNER_KEY);
    if (raw) {
      const p = JSON.parse(raw) as PlannerState;
      if (p?.days?.length && p.period) return p;
    }
  } catch { /* ignore */ }
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

  const addRecipe = useCallback((dayIndex: number, mealType: MealType, recipeId: string) => {
    setPlanner((p) => addDish(p, dayIndex, mealType, recipeId));
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
    deleteDish,
    copyDish,
    dragDish,
    copyDayTo,
    suggestMenu,
    clearPlanner,
  };
}
