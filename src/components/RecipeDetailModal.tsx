import { recipesById } from '../data/recipes';
import { useI18n } from '../i18n';
import { getAllComputedTags, getRecipeNutrients } from '../utils/recipeNutrients';
import { recipeToItems } from '../utils/recipeUtils';
import { NutrientSummary } from './NutrientSummary';

interface Props {
  recipeId: string;
  onClose: () => void;
  onAdd?: () => void;
}

export function RecipeDetailModal({ recipeId, onClose, onAdd }: Props) {
  const {
    t,
    recipeName,
    recipeDescription,
    recipeIngredientLines,
    recipeSteps,
    recipeTip,
    cuisineName,
    mealLabel,
    productName,
    productPortion,
  } = useI18n();

  const recipe = recipesById.get(recipeId);
  if (!recipe) return null;

  const nutrients = getRecipeNutrients(recipeId);
  const productItems = recipeToItems(recipe);
  const ingredientLines = recipeIngredientLines(recipeId);
  const steps = recipeSteps(recipeId);
  const tip = recipeTip(recipeId);
  const tags = getAllComputedTags(recipeId);

  return (
    <div className="modal-overlay recipe-detail-overlay" onClick={onClose} role="presentation">
      <div
        className="modal recipe-detail-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="recipe-detail-title"
      >
        <header className="modal-header">
          <div>
            <h2 id="recipe-detail-title">{recipeName(recipeId)}</h2>
            <div className="recipe-detail-meta">
              <span className="cuisine-badge">{cuisineName(recipe.cuisine)}</span>
              <span className="meal-type-pill">{mealLabel(recipe.mealType)}</span>
              {recipe.prepTimeMin != null && (
                <span className="meal-type-pill">{recipe.prepTimeMin} {t.planner.prepTimeUnit}</span>
              )}
              {recipe.servings != null && (
                <span className="meal-type-pill">{recipe.servings} {t.planner.servingsUnit}</span>
              )}
            </div>
          </div>
          <button type="button" className="btn-icon modal-close" onClick={onClose} aria-label={t.common.cancel}>
            ×
          </button>
        </header>

        <div className="recipe-detail-body">
          <p className="recipe-detail-description">{recipeDescription(recipeId)}</p>

          {tags.length > 0 && (
            <div className="recipe-detail-tags">
              {tags.map((tag) => (
                <span key={tag} className="filter-tag active tag-readonly">
                  {t.planner.filterTags[tag]}
                </span>
              ))}
            </div>
          )}

          <section className="recipe-detail-section">
            <h3>{t.common.ingredients}</h3>
            {ingredientLines.length > 0 ? (
              <ul className="ingredients-list detail-ingredients detail-ingredients-lines">
                {ingredientLines.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            ) : (
              <ul className="ingredients-list detail-ingredients">
                {productItems.map((item, idx) => (
                  <li key={`${item.product.id}-${idx}`}>
                    <span className="ingredient-name">
                      {productName(item.product.id)}
                      {item.portions !== 1 && (
                        <span className="portions"> × {item.portions}</span>
                      )}
                    </span>
                    <span className="ingredient-portion">{productPortion(item.product.id)}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {steps.length > 0 && (
            <section className="recipe-detail-section">
              <h3>{t.planner.instructionsTitle}</h3>
              <ol className="recipe-steps">
                {steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </section>
          )}

          {tip && (
            <p className="recipe-detail-tip">
              <strong>{t.planner.tipTitle}:</strong> {tip}
            </p>
          )}

          <section className="recipe-detail-section">
            <h3>{t.planner.nutrientsTitle}</h3>
            <NutrientSummary nutrients={nutrients} />
          </section>
        </div>

        <footer className="modal-footer recipe-detail-footer">
          {onAdd && (
            <button type="button" className="btn-primary" onClick={onAdd}>
              {t.planner.apply}
            </button>
          )}
          <button type="button" className="btn-secondary" onClick={onClose}>
            {t.planner.close}
          </button>
        </footer>
      </div>
    </div>
  );
}
