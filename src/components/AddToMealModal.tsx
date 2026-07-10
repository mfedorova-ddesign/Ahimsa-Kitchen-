import { useState } from 'react';
import type { MealType } from '../types';
import { useI18n } from '../i18n';
import { RecipeSearchModal } from './RecipeSearchModal';
import { ProductSearchModal } from './ProductSearchModal';
import { IconClose } from './Icons';

type Tab = 'recipe' | 'product';

interface Props {
  initialMealType: MealType;
  initialTab?: 'recipe' | 'product';
  onClose: () => void;
  onSelectRecipe: (recipeId: string, portions: number) => void;
  onSelectProduct: (productId: string, portions: number) => void;
}

export function AddToMealModal({
  initialMealType,
  initialTab = 'recipe',
  onClose,
  onSelectRecipe,
  onSelectProduct,
}: Props) {
  const { t } = useI18n();
  const [tab, setTab] = useState<Tab>(initialTab);

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div className="modal recipe-search-modal add-to-meal-modal" onClick={(e) => e.stopPropagation()} role="dialog">
        <div className="add-to-meal-toolbar">
          <div className="add-to-meal-tabs">
            <button
              type="button"
              className={`add-to-meal-tab ${tab === 'recipe' ? 'active' : ''}`}
              onClick={() => setTab('recipe')}
            >
              {t.planner.tabRecipes}
            </button>
            <button
              type="button"
              className={`add-to-meal-tab ${tab === 'product' ? 'active' : ''}`}
              onClick={() => setTab('product')}
            >
              {t.planner.tabProducts}
            </button>
          </div>
          <button type="button" className="btn-icon modal-close" onClick={onClose} aria-label={t.planner.close}>
            <IconClose size={20} />
          </button>
        </div>

        {tab === 'recipe' ? (
          <RecipeSearchModal
            embedded
            initialMealType={initialMealType}
            onClose={onClose}
            onSelect={onSelectRecipe}
          />
        ) : (
          <ProductSearchModal
            embedded
            initialMealType={initialMealType}
            onClose={onClose}
            onSelect={onSelectProduct}
          />
        )}
      </div>
    </div>
  );
}
