import { useMemo, useState } from 'react';
import { products } from '../data/products';
import { useI18n } from '../i18n';
import type { MealType, ProductCategoryFilter } from '../types';
import { getProductNutrients } from '../utils/productNutrients';
import { getProductServingWeightG } from '../utils/recipeServing';
import { NutrientSummary } from './NutrientSummary';
import { PortionStepper } from './PortionStepper';
import { IconClose, IconSearch } from './Icons';

const CATEGORIES: ProductCategoryFilter[] = [
  'all',
  'vegetable',
  'fruit',
  'nut_seed',
  'legume',
  'soy',
  'grain',
  'other',
];

interface Props {
  initialMealType: MealType;
  onClose: () => void;
  onSelect: (productId: string, portions: number) => void;
  embedded?: boolean;
}

export function ProductSearchModal({
  initialMealType,
  onClose,
  onSelect,
  embedded = false,
}: Props) {
  const { t, productName, productPortion, mealLabel } = useI18n();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<ProductCategoryFilter>('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [portions, setPortions] = useState(1);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((product) => {
      if (category !== 'all' && product.category !== category) return false;
      if (!q) return true;
      const name = productName(product.id).toLowerCase();
      const portion = productPortion(product.id).toLowerCase();
      return name.includes(q) || portion.includes(q) || product.tags.some((tag) => tag.includes(q));
    });
  }, [query, category, productName, productPortion]);

  const mealTitle = mealLabel(initialMealType);
  const modalTitle = t.planner.addProductToMeal.replace('{meal}', mealTitle);
  const countLabel = t.planner.productCount.replace('{n}', String(products.length));

  const previewWeightG = selectedId
    ? Math.round((getProductServingWeightG(selectedId, productPortion(selectedId)) ?? 0) * portions)
    : null;

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
          placeholder={t.planner.searchProductsPlaceholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="product-category-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`product-category-tab ${category === cat ? 'active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {t.planner.productCategories[cat]}
          </button>
        ))}
      </div>

      <div className="search-results recipe-search-list">
        {results.length === 0 ? (
          <p className="no-results">{t.planner.noProductResults}</p>
        ) : (
          results.map((product) => (
            <button
              key={product.id}
              type="button"
              className={`recipe-search-item ${selectedId === product.id ? 'selected' : ''}`}
              onClick={() => {
                setSelectedId(product.id);
                setPortions(1);
              }}
              onDoubleClick={() => onSelect(product.id, portions)}
            >
              <span className="recipe-search-emoji" aria-hidden>🥗</span>
              <span className="recipe-search-body">
                <span className="recipe-search-name">{productName(product.id)}</span>
                <span className="recipe-search-desc">{productPortion(product.id)}</span>
                <NutrientSummary nutrients={getProductNutrients(product.id, 1)} inline />
              </span>
            </button>
          ))
        )}
      </div>

      <footer className="modal-footer recipe-search-footer recipe-search-footer--portions">
        <div className="recipe-add-portion-panel">
          {selectedId && (
            <p className="recipe-serving-hint">{productPortion(selectedId)}</p>
          )}
          <PortionStepper
            portions={portions}
            onChange={setPortions}
            weightG={previewWeightG}
            disabled={!selectedId}
          />
        </div>
        <button
          type="button"
          className="btn-primary btn-primary--inline"
          disabled={!selectedId}
          onClick={() => selectedId && onSelect(selectedId, portions)}
        >
          {t.planner.apply}
        </button>
      </footer>
    </>
  );

  if (embedded) {
    return <div className="product-search-embedded">{content}</div>;
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div className="modal recipe-search-modal" onClick={(e) => e.stopPropagation()} role="dialog">
        {content}
      </div>
    </div>
  );
}
