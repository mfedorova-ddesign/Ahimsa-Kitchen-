import type { DragPayload, MealType, PlannedDish } from '../types';
import { useI18n } from '../i18n';
import { getRecipeNutrients } from '../utils/recipeNutrients';
import { NutrientSummary } from './NutrientSummary';
import { IconClose, IconCopy, IconDrag, IconInfo } from './Icons';

interface Props {
  dish: PlannedDish;
  dayIndex: number;
  mealType: MealType;
  onRemove: () => void;
  onCopy: () => void;
  onView: () => void;
  onDragStart: (payload: DragPayload) => void;
}

export function DishCard({ dish, dayIndex, mealType, onRemove, onCopy, onView, onDragStart }: Props) {
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
        <span className="dish-card-drag" aria-hidden><IconDrag /></span>
        <button type="button" className="dish-card-title-btn" onClick={onView}>
          {recipeName(dish.recipeId)}
        </button>
        <div className="dish-card-actions">
          <button type="button" className="btn-icon" onClick={onView} title={t.planner.viewRecipe}>
            <IconInfo />
          </button>
          <button type="button" className="btn-icon" onClick={onCopy} title={t.planner.copyDish}>
            <IconCopy />
          </button>
          <button type="button" className="btn-icon btn-icon--danger" onClick={onRemove} title={t.planner.removeDish}>
            <IconClose />
          </button>
        </div>
      </div>
      <NutrientSummary nutrients={nutrients} inline />
    </div>
  );
}
