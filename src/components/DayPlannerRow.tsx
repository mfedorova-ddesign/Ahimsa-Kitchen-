import type { DragPayload, MealType, PlannerDay } from '../types';
import { useI18n } from '../i18n';
import { getRecipeNutrients } from '../utils/recipeNutrients';
import { slotsNutrients } from '../utils/plannerOps';
import { MealSlotColumn } from './MealSlotColumn';
import { NutrientSummary } from './NutrientSummary';

const MEAL_TYPES: MealType[] = ['breakfast', 'lunch', 'dinner', 'snack'];

interface Props {
  day: PlannerDay;
  showDayLabel: boolean;
  onAdd: (mealType: MealType) => void;
  onRemove: (mealType: MealType, dishId: string) => void;
  onCopyDish: (mealType: MealType, dishId: string) => void;
  onViewRecipe: (recipeId: string) => void;
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
  onDrop,
  onCopyDay,
}: Props) {
  const { t, dayLabel } = useI18n();
  const dayNutrients = slotsNutrients(day.slots, getRecipeNutrients);

  return (
    <section className="day-planner-row">
      <div className="day-planner-header">
        {showDayLabel && <h2 className="day-planner-title">{dayLabel(day.dayIndex)}</h2>}
        <button type="button" className="btn-text" onClick={onCopyDay}>
          {t.planner.copyDay}
        </button>
      </div>

      <div className="meal-slots-grid">
        {MEAL_TYPES.map((mealType) => (
          <MealSlotColumn
            key={mealType}
            dayIndex={day.dayIndex}
            mealType={mealType}
            dishes={day.slots[mealType]}
            onAdd={() => onAdd(mealType)}
            onRemove={(dishId) => onRemove(mealType, dishId)}
            onCopy={(dishId) => onCopyDish(mealType, dishId)}
            onViewRecipe={onViewRecipe}
            onDrop={(payload) => onDrop(payload, mealType)}
          />
        ))}
      </div>

      <div className="day-planner-total">
        <h3>{t.common.dayTotal}</h3>
        <NutrientSummary nutrients={dayNutrients} />
      </div>
    </section>
  );
}
