import type { DragPayload, MealType, PlannedDish } from '../types';
import { useI18n } from '../i18n';
import { getRecipeNutrients } from '../utils/recipeNutrients';
import { NutrientSummary } from './NutrientSummary';

interface Props {
  dish: PlannedDish;
  dayIndex: number;
  mealType: MealType;
  onRemove: () => void;
  onCopy: () => void;
  onDragStart: (payload: DragPayload) => void;
}

export function DishCard({ dish, dayIndex, mealType, onRemove, onCopy, onDragStart }: Props) {
  const { t, recipeName } = useI18n();
  const nutrients = getRecipeNutrients(dish.recipeId);

  return (
    <div
      className="dish-card"
      draggable
      onDragStart={(e) => {
        const payload: DragPayload = {
          dishId: dish.id,
          recipeId: dish.recipeId,
          fromDay: dayIndex,
          fromMeal: mealType,
        };
        e.dataTransfer.setData('application/json', JSON.stringify(payload));
        e.dataTransfer.effectAllowed = 'move';
        onDragStart(payload);
      }}
    >
      <div className="dish-card-header">
        <span className="dish-card-title">{recipeName(dish.recipeId)}</span>
        <div className="dish-card-actions">
          <button type="button" className="btn-icon" onClick={onCopy} title={t.planner.copyDish}>⧉</button>
          <button type="button" className="btn-icon" onClick={onRemove} title={t.planner.removeDish}>×</button>
        </div>
      </div>
      <NutrientSummary nutrients={nutrients} compact />
    </div>
  );
}
