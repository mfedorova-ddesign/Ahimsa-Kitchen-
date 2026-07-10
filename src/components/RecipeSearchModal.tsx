import { useMemo, useState } from 'react';
import { recipes } from '../data/recipes';
import { allCuisines } from '../data/cuisines';
import { useI18n } from '../i18n';
import type { CuisineRegion, MealType, RecipeFilterTag, RecipeSearchFilters } from '../types';
import { getRecipeNutrients } from '../utils/recipeNutrients';
import { recipeEmoji } from '../utils/recipeEmoji';
import { defaultFilters, searchRecipes } from '../utils/recipeSearch';
import { NutrientSummary } from './NutrientSummary';
import { RecipeDetailModal } from './RecipeDetailModal';
import { PortionStepper } from './PortionStepper';
import { IconClose, IconInfo, IconSearch, MEAL_EMOJI } from './Icons';
import { recipesById } from '../data/recipes';
import { getRecipeServingWeightG } from '../utils/recipeServing';
import { scaleNutrients } from '../utils/nutrients';

const FILTER_TAGS: RecipeFilterTag[] = [
  'high-protein', 'iron-rich', 'iodine-rich', 'd3-source',
  'gluten-free', 'no-added-sugar', 'vitamin-c', 'quick',
];

const REGIONS: CuisineRegion[] = [
  'european', 'asian', 'americas', 'african', 'middle-eastern', 'fusion',
];

interface Props {
  initialMealType: MealType;
  onClose: () => void;
  onSelect: (recipeId: string, portions: number) => void;
  embedded?: boolean;
}

export function RecipeSearchModal({ initialMealType, onClose, onSelect, embedded = false }: Props) {
  const { t, recipeName, recipeDescription, cuisineName, mealLabel } = useI18n();
  const [filters, setFilters] = useState<RecipeSearchFilters>({
    ...defaultFilters(),
    mealType: initialMealType,
  });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [portions, setPortions] = useState(1);
  const [viewRecipeId, setViewRecipeId] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => {
    const base = searchRecipes(filters);
    const q = filters.query.trim().toLowerCase();
    if (!q) return base;
    return base.filter((r) =>
      recipeName(r.id).toLowerCase().includes(q) ||
      recipeDescription(r.id).toLowerCase().includes(q),
    );
  }, [filters, recipeName, recipeDescription]);

  const mealTitle = `${mealLabel(initialMealType)} ${MEAL_EMOJI[initialMealType]}`;
  const modalTitle = t.planner.addToMeal.replace('{meal}', mealTitle);
  const countLabel = t.planner.recipeCount.replace('{n}', String(recipes.length));

  function toggleTag(tag: RecipeFilterTag) {
    setFilters((f) => ({
      ...f,
      tags: f.tags.includes(tag) ? f.tags.filter((x) => x !== tag) : [...f.tags, tag],
    }));
  }

  const selectedRecipe = selectedId ? recipesById.get(selectedId) : undefined;
  const previewNutrients = selectedId
    ? scaleNutrients(getRecipeNutrients(selectedId), portions)
    : null;
  const previewWeightG = selectedId
    ? Math.round(getRecipeServingWeightG(selectedId) * portions)
    : null;

  function truncate(text: string, max = 72): string {
    if (text.length <= max) return text;
    return `${text.slice(0, max).trim()}…`;
  }

  const content = (
    <>
      <header className="modal-header recipe-search-header">
        <div>
          <h2>{modalTitle}</h2>
          <p className="recipe-search-subtitle">{countLabel}</p>
        </div>
        {!embedded && (
          <button type="button" className="btn-icon modal-close" onClick={onClose} aria-label={t.planner.close}>
            <IconClose size={20} />
          </button>
        )}
      </header>

          <div className="search-input-wrap">
            <IconSearch size={18} className="search-input-icon" />
            <input
              type="search"
              className="search-input"
              placeholder={t.planner.searchPlaceholder}
              value={filters.query}
              onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
            />
          </div>

          <div className="recipe-search-toolbar">
            <button type="button" className="btn-text" onClick={() => setShowFilters((v) => !v)}>
              {t.planner.toggleFilters}
            </button>
          </div>

          {showFilters && (
            <div className="filters-panel">
              <span className="filters-label">{t.planner.filters}</span>
              <select
                value={filters.mealType}
                onChange={(e) => setFilters((f) => ({ ...f, mealType: e.target.value as MealType | 'all' }))}
              >
                <option value="all">{t.planner.allMeals}</option>
                {(['breakfast', 'lunch', 'dinner', 'snack'] as MealType[]).map((mt) => (
                  <option key={mt} value={mt}>{mealLabel(mt)}</option>
                ))}
              </select>
              <select
                value={filters.cuisineRegion}
                onChange={(e) => setFilters((f) => ({ ...f, cuisineRegion: e.target.value as CuisineRegion | 'all' }))}
              >
                <option value="all">{t.planner.allRegions}</option>
                {REGIONS.map((r) => (
                  <option key={r} value={r}>{t.planner.regions[r]}</option>
                ))}
              </select>
              <select
                value={filters.cuisine}
                onChange={(e) => setFilters((f) => ({ ...f, cuisine: e.target.value }))}
              >
                <option value="all">{t.planner.allCuisines}</option>
                {allCuisines.map((c) => (
                  <option key={c} value={c}>{cuisineName(c)}</option>
                ))}
              </select>
              <div className="filter-tags">
                {FILTER_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={`filter-tag ${filters.tags.includes(tag) ? 'active' : ''}`}
                    onClick={() => toggleTag(tag)}
                  >
                    {t.planner.filterTags[tag]}
                  </button>
                ))}
              </div>
              <button type="button" className="btn-text" onClick={() => setFilters(defaultFilters())}>
                {t.planner.resetFilters}
              </button>
            </div>
          )}

          <div className="search-results recipe-search-list">
            {results.length === 0 ? (
              <p className="no-results">{t.planner.noResults}</p>
            ) : (
              results.map((recipe) => (
                <button
                  key={recipe.id}
                  type="button"
                  className={`recipe-search-item ${selectedId === recipe.id ? 'selected' : ''}`}
                  onClick={() => { setSelectedId(recipe.id); setPortions(1); }}
                  onDoubleClick={() => onSelect(recipe.id, portions)}
                >
                  <span className="recipe-search-emoji" aria-hidden>
                    {recipeEmoji(recipe.id, recipe.mealType)}
                  </span>
                  <span className="recipe-search-body">
                    <span className="recipe-search-name">{recipeName(recipe.id)}</span>
                    <span className="recipe-search-desc">{truncate(recipeDescription(recipe.id))}</span>
                    <NutrientSummary nutrients={getRecipeNutrients(recipe.id)} inline />
                  </span>
                  <button
                    type="button"
                    className="btn-icon recipe-search-info"
                    onClick={(e) => { e.stopPropagation(); setViewRecipeId(recipe.id); }}
                    aria-label={t.planner.viewRecipe}
                  >
                    <IconInfo size={16} />
                  </button>
                </button>
              ))
            )}
          </div>

          <footer className="modal-footer recipe-search-footer recipe-search-footer--portions">
            <div className="recipe-add-portion-panel">
              {selectedRecipe && (
                <p className="recipe-serving-hint">
                  {t.planner.perServingWeight.replace('{n}', String(getRecipeServingWeightG(selectedRecipe.id)))}
                  {selectedRecipe.servings != null && selectedRecipe.servings > 1 && (
                    <> · {t.planner.recipeYield.replace('{n}', String(selectedRecipe.servings))}</>
                  )}
                </p>
              )}
              <PortionStepper
                portions={portions}
                onChange={setPortions}
                weightG={previewWeightG}
                disabled={!selectedId}
              />
              {previewNutrients && (
                <NutrientSummary nutrients={previewNutrients} inline />
              )}
            </div>
            <div className="recipe-search-footer-actions">
              <button type="button" className="btn-text" onClick={() => selectedId && setViewRecipeId(selectedId)} disabled={!selectedId}>
                {t.planner.viewRecipe}
              </button>
              <button
                type="button"
                className="btn-primary btn-primary--inline"
                disabled={!selectedId}
                onClick={() => selectedId && onSelect(selectedId, portions)}
              >
                {t.planner.apply}
              </button>
            </div>
          </footer>
    </>
  );

  if (embedded) {
    return (
      <>
        <div className="recipe-search-embedded">{content}</div>
        {viewRecipeId && (
          <RecipeDetailModal
            recipeId={viewRecipeId}
            onClose={() => setViewRecipeId(null)}
            onAdd={
              selectedId === viewRecipeId
                ? () => { onSelect(viewRecipeId, portions); setViewRecipeId(null); }
                : () => { onSelect(viewRecipeId, portions); onClose(); }
            }
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className="modal-overlay" onClick={onClose} role="presentation">
        <div className="modal recipe-search-modal" onClick={(e) => e.stopPropagation()} role="dialog">
          {content}
        </div>
      </div>

      {viewRecipeId && (
        <RecipeDetailModal
          recipeId={viewRecipeId}
          onClose={() => setViewRecipeId(null)}
          onAdd={
            selectedId === viewRecipeId
              ? () => { onSelect(viewRecipeId, portions); setViewRecipeId(null); }
              : () => { onSelect(viewRecipeId, portions); onClose(); }
          }
        />
      )}
    </>
  );
}
