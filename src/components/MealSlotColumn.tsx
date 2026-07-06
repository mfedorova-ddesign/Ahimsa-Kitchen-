import { useState, type DragEvent } from 'react';
import type { DragPayload, MealType, PlannedDish } from '../types';
import { useI18n } from '../i18n';
import { getRecipeNutrients } from '../utils/recipeNutrients';
import { DishCard } from './DishCard';
import { NutrientSummary } from './NutrientSummary';

interface Props {
  dayIndex: number;
  mealType: MealType;
  dishes: PlannedDish[];
  onAdd: () => void;
  onRemove: (dishId: string) => void;
  onCopy: (dishId: string) => void;
  onDrop: (payload: DragPayload) => void;
}

export function MealSlotColumn({
  dayIndex,
  mealType,
  dishes,
  onAdd,
  onRemove,
  onCopy,
  onDrop,
}: Props) {
  const { t, mealLabel } = useI18n();
  const [dragOver, setDragOver] = useState(false);

  const slotNutrients = dishes.reduce(
    (acc, d) => {
      const n = getRecipeNutrients(d.recipeId);
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
      className={`meal-slot ${dragOver ? 'drag-over' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
    >
      <div className="meal-slot-header">
        <h4>{mealLabel(mealType)}</h4>
        <button type="button" className="btn-add" onClick={onAdd}>
          {t.planner.addDish}
        </button>
      </div>

      <div className="meal-slot-dishes">
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
            dayIndex={dayIndex}
            mealType={mealType}
            onRemove={() => onRemove(dish.id)}
            onCopy={() => onCopy(dish.id)}
            onDragStart={() => {}}
          />
        ))}
      </div>

      {dishes.length > 0 && (
        <div className="meal-slot-total">
          <span className="slot-total-label">{t.planner.slotTotal}</span>
          <NutrientSummary nutrients={slotNutrients} compact />
        </div>
      )}
    </div>
  );
}
