import type { DragPayload, MealType, PlannerDay } from '../types';
import { useI18n } from '../i18n';
import { slotsNutrients } from '../utils/plannerOps';
import { MealSlotColumn } from './MealSlotColumn';
import { NutrientSummary } from './NutrientSummary';

const MEAL_TYPES: MealType[] = ['breakfast', 'lunch', 'dinner', 'snack'];

interface Props {
  day: PlannerDay;
  showDayLabel: boolean;
  onAdd: (mealType: MealType, tab?: 'recipe' | 'product') => void;
  onRemove: (mealType: MealType, dishId: string) => void;
  onCopyDish: (mealType: MealType, dishId: string) => void;
  onViewRecipe: (recipeId: string) => void;
  onPortionsChange: (mealType: MealType, dishId: string, portions: number) => void;
  onDrop: (payload: DragPayload, toMeal: MealType) => void;
  onCopyDay: () => void;
}

export function DayPlannerRow({
  day,
  showDayLabel,
  onAdd,
  onRemove,
  onCopyDish,
  onViewRecipe,
  onPortionsChange,
  onDrop,
  onCopyDay,
}: Props) {
  const { t, dayLabel } = useI18n();
  const dayNutrients = slotsNutrients(day.slots);

  return (
    <section className="day-planner-row">
      {showDayLabel && (
        <div className="day-planner-header">
          <h2 className="day-planner-title day-planner-title--serif">{dayLabel(day.dayIndex)}</h2>
          <button type="button" className="btn-text" onClick={onCopyDay}>
            {t.planner.copyDay}
          </button>
        </div>
      )}

      <div className="day-planner-layout">
        <div className="day-planner-meals">
          {MEAL_TYPES.map((mealType) => (
            <MealSlotColumn
              key={mealType}
              dayIndex={day.dayIndex}
              mealType={mealType}
              dishes={day.slots[mealType]}
              onAdd={(tab) => onAdd(mealType, tab)}
              onRemove={(dishId) => onRemove(mealType, dishId)}
              onCopy={(dishId) => onCopyDish(mealType, dishId)}
              onViewRecipe={onViewRecipe}
              onPortionsChange={(dishId, portions) => onPortionsChange(mealType, dishId, portions)}
              onDrop={(payload) => onDrop(payload, mealType)}
            />
          ))}
        </div>

        <NutrientSummary nutrients={dayNutrients} panel />
      </div>
    </section>
  );
}
