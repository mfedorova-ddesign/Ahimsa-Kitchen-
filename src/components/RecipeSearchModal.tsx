import { useMemo, useState } from 'react';
import { allCuisines } from '../data/cuisines';
import { useI18n } from '../i18n';
import type { CuisineRegion, MealType, RecipeFilterTag, RecipeSearchFilters } from '../types';
import { getRecipeNutrients } from '../utils/recipeNutrients';
import { defaultFilters, searchRecipes } from '../utils/recipeSearch';
import { NutrientSummary } from './NutrientSummary';

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
  onSelect: (recipeId: string) => void;
}

export function RecipeSearchModal({ initialMealType, onClose, onSelect }: Props) {
  const { t, recipeName, recipeDescription, cuisineName, mealLabel } = useI18n();
  const [filters, setFilters] = useState<RecipeSearchFilters>({
    ...defaultFilters(),
    mealType: initialMealType,
  });
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const results = useMemo(() => {
    const base = searchRecipes(filters);
    const q = filters.query.trim().toLowerCase();
    if (!q) return base;
    return base.filter((r) =>
      recipeName(r.id).toLowerCase().includes(q) ||
      recipeDescription(r.id).toLowerCase().includes(q),
    );
  }, [filters, recipeName, recipeDescription]);

  function toggleTag(tag: RecipeFilterTag) {
    setFilters((f) => ({
      ...f,
      tags: f.tags.includes(tag) ? f.tags.filter((x) => x !== tag) : [...f.tags, tag],
    }));
  }

  const preview = selectedId ? getRecipeNutrients(selectedId) : null;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div className="modal recipe-search-modal" onClick={(e) => e.stopPropagation()} role="dialog">
        <header className="modal-header">
          <h2>{t.planner.searchRecipes}</h2>
          <button type="button" className="btn-icon modal-close" onClick={onClose}>×</button>
        </header>

        <input
          type="search"
          className="search-input"
          placeholder={t.planner.searchPlaceholder}
          value={filters.query}
          onChange={(e) => setFilters((f) => ({ ...f, query: e.target.value }))}
        />

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

          <label className="filter-number">
            {t.planner.proteinMin}
            <input
              type="number"
              min={0}
              max={80}
              value={filters.proteinMin ?? ''}
              onChange={(e) => setFilters((f) => ({
                ...f,
                proteinMin: e.target.value ? Number(e.target.value) : null,
              }))}
            />
          </label>

          <label className="filter-number">
            {t.planner.proteinMax}
            <input
              type="number"
              min={0}
              max={80}
              value={filters.proteinMax ?? ''}
              onChange={(e) => setFilters((f) => ({
                ...f,
                proteinMax: e.target.value ? Number(e.target.value) : null,
              }))}
            />
          </label>

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

        <div className="search-results">
          {results.length === 0 ? (
            <p className="no-results">{t.planner.noResults}</p>
          ) : (
            results.map((recipe) => (
              <button
                key={recipe.id}
                type="button"
                className={`search-result-item ${selectedId === recipe.id ? 'selected' : ''}`}
                onClick={() => setSelectedId(recipe.id)}
              >
                <strong>{recipeName(recipe.id)}</strong>
                <span className="result-meta">{cuisineName(recipe.cuisine)} · {mealLabel(recipe.mealType)}</span>
                <NutrientSummary nutrients={getRecipeNutrients(recipe.id)} compact />
              </button>
            ))
          )}
        </div>

        {selectedId && preview && (
          <div className="recipe-preview">
            <h3>{recipeName(selectedId)}</h3>
            <p>{recipeDescription(selectedId)}</p>
            <NutrientSummary nutrients={preview} />
          </div>
        )}

        <footer className="modal-footer">
          <button
            type="button"
            className="btn-primary"
            disabled={!selectedId}
            onClick={() => selectedId && onSelect(selectedId)}
          >
            {t.planner.apply}
          </button>
        </footer>
      </div>
    </div>
  );
}
