import type { DragPayload, MealType, PlannedDish } from '../types';
import { useI18n } from '../i18n';
import { getPlannedItemNutrients } from '../utils/plannedNutrients';
import { getPlannedItemWeightG } from '../utils/recipeServing';
import { recipesById } from '../data/recipes';
import { NutrientSummary } from './NutrientSummary';
import { PortionStepper } from './PortionStepper';
import { IconClose, IconCopy, IconDrag, IconInfo } from './Icons';

interface Props {
  dish: PlannedDish;
  dayIndex: number;
  mealType: MealType;
  onRemove: () => void;
  onCopy: () => void;
  onViewRecipe?: (recipeId: string) => void;
  onPortionsChange?: (portions: number) => void;
  onDragStart: (payload: DragPayload) => void;
}

export function DishCard({
  dish,
  dayIndex,
  mealType,
  onRemove,
  onCopy,
  onViewRecipe,
  onPortionsChange,
  onDragStart,
}: Props) {
  const { t, recipeName, productName, productPortion } = useI18n();
  const nutrients = getPlannedItemNutrients(dish);
  const isProduct = dish.kind === 'product';
  const isRecipe = dish.kind === 'recipe';
  const recipe = isRecipe ? recipesById.get(dish.recipeId) : undefined;

  const weightG = getPlannedItemWeightG(
    dish,
    isProduct ? productPortion(dish.productId) : undefined,
  );

  function buildPayload(): DragPayload {
    const base = { dishId: dish.id, fromDay: dayIndex, fromMeal: mealType, portions: dish.portions };
    if (dish.kind === 'recipe') {
      return { ...base, kind: 'recipe', recipeId: dish.recipeId };
    }
    return { ...base, kind: 'product', productId: dish.productId };
  }

  const title = isProduct
    ? productName(dish.productId)
    : recipeName(dish.recipeId);

  return (
    <div
      className={`dish-card ${isProduct ? 'dish-card--product' : 'dish-card--recipe'}`}
      draggable
      onDragStart={(e) => {
        const payload = buildPayload();
        e.dataTransfer.setData('application/json', JSON.stringify(payload));
        e.dataTransfer.effectAllowed = 'move';
        onDragStart(payload);
      }}
    >
      <div className="dish-card-header">
        <span className="dish-card-drag" aria-hidden><IconDrag /></span>
        {isProduct ? (
          <span className="dish-card-title dish-card-title--product">{title}</span>
        ) : (
          <button type="button" className="dish-card-title-btn" onClick={() => onViewRecipe?.(dish.recipeId)}>
            {title}
          </button>
        )}
        <div className="dish-card-actions">
          {isRecipe && onViewRecipe && (
            <button type="button" className="btn-icon" onClick={() => onViewRecipe(dish.recipeId)} title={t.planner.viewRecipe}>
              <IconInfo />
            </button>
          )}
          <button type="button" className="btn-icon" onClick={onCopy} title={t.planner.copyDish}>
            <IconCopy />
          </button>
          <button type="button" className="btn-icon btn-icon--danger" onClick={onRemove} title={t.planner.removeDish}>
            <IconClose />
          </button>
        </div>
      </div>

      <div className="dish-card-portion-row">
        {isProduct && (
          <span className="dish-card-portion-label">{productPortion(dish.productId)}</span>
        )}
        {isRecipe && recipe?.servings != null && recipe.servings > 1 && (
          <span className="dish-card-recipe-yield">
            {t.planner.recipeYield.replace('{n}', String(recipe.servings))}
          </span>
        )}
        {onPortionsChange && (
          <PortionStepper
            compact
            portions={dish.portions}
            onChange={onPortionsChange}
            weightG={weightG}
          />
        )}
      </div>

      <NutrientSummary nutrients={nutrients} inline />
    </div>
  );
}
