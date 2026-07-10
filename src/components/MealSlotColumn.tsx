import { useState, type DragEvent } from 'react';
import type { DragPayload, MealType, PlannedDish } from '../types';
import { useI18n } from '../i18n';
import { DishCard } from './DishCard';
import { IconAdd, IconBreakfast, IconDinner, IconLunch, IconSnack } from './Icons';

interface Props {
  dayIndex: number;
  mealType: MealType;
  dishes: PlannedDish[];
  onAdd: (tab?: 'recipe' | 'product') => void;
  onRemove: (dishId: string) => void;
  onCopy: (dishId: string) => void;
  onViewRecipe: (recipeId: string) => void;
  onPortionsChange: (dishId: string, portions: number) => void;
  onDrop: (payload: DragPayload) => void;
}

const MEAL_ICONS = {
  breakfast: IconBreakfast,
  lunch: IconLunch,
  dinner: IconDinner,
  snack: IconSnack,
} as const;

export function MealSlotColumn({
  dayIndex,
  mealType,
  dishes,
  onAdd,
  onRemove,
  onCopy,
  onViewRecipe,
  onPortionsChange,
  onDrop,
}: Props) {
  const { t, mealLabel } = useI18n();
  const [dragOver, setDragOver] = useState(false);
  const MealIcon = MEAL_ICONS[mealType];

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    setDragOver(true);
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setDragOver(false);
    try {
      const payload = JSON.parse(e.dataTransfer.getData('application/json')) as DragPayload;
      onDrop(payload);
    } catch { /* ignore */ }
  }

  return (
    <div
      className={`meal-slot meal-slot--${mealType} ${dragOver ? 'drag-over' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
    >
      <div className="meal-slot-glow" aria-hidden />
      <div className="meal-slot-header">
        <div className="meal-slot-label">
          <span className={`meal-slot-icon meal-slot-icon--${mealType}`}>
            <MealIcon size={18} />
          </span>
          <h4>{mealLabel(mealType)}</h4>
        </div>
        <button type="button" className="btn-add" onClick={() => onAdd('recipe')}>
          <IconAdd size={14} />
          <span>{t.planner.addDish}</span>
        </button>
      </div>

      <div className="meal-slot-dishes">
        {dishes.length === 0 ? (
          <p className="meal-slot-empty">
            {t.planner.emptySlot}{' · '}
            <button type="button" className="meal-slot-empty-link" onClick={() => onAdd('recipe')}>
              {t.planner.addRecipeLink}
            </button>
            {' · '}
            <button type="button" className="meal-slot-empty-link" onClick={() => onAdd('product')}>
              {t.planner.addProductLink}
            </button>
          </p>
        ) : (
          dishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              dayIndex={dayIndex}
              mealType={mealType}
              onRemove={() => onRemove(dish.id)}
              onCopy={() => onCopy(dish.id)}
              onViewRecipe={dish.kind === 'recipe' ? onViewRecipe : undefined}
              onPortionsChange={(portions) => onPortionsChange(dish.id, portions)}
              onDragStart={() => {}}
            />
          ))
        )}
      </div>
    </div>
  );
}
