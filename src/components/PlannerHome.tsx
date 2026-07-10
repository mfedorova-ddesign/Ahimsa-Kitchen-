import { useState } from 'react';
import { AppLogo } from './AppLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { GeneralDisclaimer } from './GeneralDisclaimer';
import { DayPlannerRow } from './DayPlannerRow';
import { AddToMealModal } from './AddToMealModal';
import { SuggestMenuModal } from './SuggestMenuModal';
import { RecipeDetailModal } from './RecipeDetailModal';
import { useI18n } from '../i18n';
import { usePlanner } from '../hooks/usePlanner';
import type { MealType } from '../types';
import {
  downloadTextFile,
  exportPlanAsPrintHtml,
  exportPlanAsText,
  printPlan,
} from '../utils/exportPlan';
import { formatNutrients } from '../utils/nutrients';
import { getPlannedItemNutrients } from '../utils/plannedNutrients';

interface SearchTarget {
  dayIndex: number;
  mealType: MealType;
  initialTab: 'recipe' | 'product';
}

const DATE_LOCALE: Record<string, string> = {
  en: 'en-US',
  ru: 'ru-RU',
  uk: 'uk-UA',
};

export function PlannerHome() {
  const { t, locale, dayLabel, mealLabel, recipeName, productName, productPortion } = useI18n();
  const {
    planner,
    setPlannerPeriod,
    addRecipe,
    addProductToMeal,
    setDishPortions,
    deleteDish,
    copyDish,
    dragDish,
    copyDayTo,
    suggestMenu,
    clearPlanner,
  } = usePlanner();

  const [searchTarget, setSearchTarget] = useState<SearchTarget | null>(null);
  const [showSuggest, setShowSuggest] = useState(false);
  const [copySourceDay, setCopySourceDay] = useState<number | null>(null);
  const [viewRecipeId, setViewRecipeId] = useState<string | null>(null);

  const today = new Date();
  const dateLong = today.toLocaleDateString(DATE_LOCALE[locale] ?? 'en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  function nutrientsLine(n: ReturnType<typeof getPlannedItemNutrients>) {
    const f = formatNutrients(n);
    return `${f.kcal} kcal, P ${f.proteinG}g, F ${f.fatG}g, C ${f.carbsG}g, Fi ${f.fiberG}g, Fe ${f.ironMg}mg`;
  }

  function handleExportText() {
    downloadTextFile(
      exportPlanAsText(planner, {
        dayLabel,
        mealLabel,
        recipeName,
        productName,
        productPortion,
        nutrientsLine,
        halfPortion: t.planner.halfPortion,
        weightGrams: (n) => t.planner.weightGrams.replace('{n}', String(n)),
      }),
      'ahimsa-kitchen-plan.txt',
    );
  }

  function handleExportPdf() {
    printPlan(exportPlanAsPrintHtml(planner, {
      title: t.app.title,
      dayLabel,
      mealLabel,
      recipeName,
      productName,
      productPortion,
      nutrientsLine,
      halfPortion: t.planner.halfPortion,
      weightGrams: (n) => t.planner.weightGrams.replace('{n}', String(n)),
    }));
  }

  function handleCopyDay(fromDay: number) {
    if (copySourceDay === null) {
      setCopySourceDay(fromDay);
      return;
    }
    copyDayTo(copySourceDay, fromDay);
    setCopySourceDay(null);
  }

  return (
    <div className="planner-home">
      <header className="app-shell-header">
        <AppLogo size="md" />
        <div className="app-shell-header-actions">
          <div className="period-toggle period-toggle--header">
            <button
              type="button"
              className={planner.period === 'day' ? 'active' : ''}
              onClick={() => setPlannerPeriod('day')}
            >
              {t.planner.periodDay}
            </button>
            <button
              type="button"
              className={planner.period === 'week' ? 'active' : ''}
              onClick={() => setPlannerPeriod('week')}
            >
              {t.planner.periodWeek}
            </button>
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      {planner.period === 'day' && (
        <div className="planner-date-header">
          <div>
            <h1 className="planner-date-title">{dateLong}</h1>
            <p className="planner-date-sub">{t.planner.today}</p>
          </div>
        </div>
      )}

      <GeneralDisclaimer />

      <div className="planner-secondary-toolbar">
        <button type="button" className="btn-secondary" onClick={() => setShowSuggest(true)}>
          {t.planner.suggestMenu}
        </button>
        <button type="button" className="btn-secondary" onClick={handleExportText}>
          {t.planner.exportText}
        </button>
        <button type="button" className="btn-secondary" onClick={handleExportPdf}>
          {t.planner.exportPdf}
        </button>
        <button type="button" className="btn-text" onClick={clearPlanner}>
          {t.planner.clearPlan}
        </button>
      </div>

      <p className="drag-hint">{t.planner.dragHint}</p>
      {copySourceDay !== null && (
        <p className="copy-hint">
          {dayLabel(copySourceDay)} → {t.planner.copyDay}
          <button type="button" className="btn-text" onClick={() => setCopySourceDay(null)}>{t.common.cancel}</button>
        </p>
      )}

      <div className="planner-days">
        {planner.days.map((day) => (
          <DayPlannerRow
            key={day.dayIndex}
            day={day}
            showDayLabel={planner.period === 'week'}
            onAdd={(mealType, tab = 'recipe') => setSearchTarget({ dayIndex: day.dayIndex, mealType, initialTab: tab })}
            onRemove={(mealType, dishId) => deleteDish(day.dayIndex, mealType, dishId)}
            onCopyDish={(mealType, dishId) => copyDish(day.dayIndex, mealType, dishId)}
            onViewRecipe={setViewRecipeId}
            onPortionsChange={(mealType, dishId, portions) =>
              setDishPortions(day.dayIndex, mealType, dishId, portions)
            }
            onDrop={(payload, toMeal) => dragDish(payload, day.dayIndex, toMeal)}
            onCopyDay={() => handleCopyDay(day.dayIndex)}
          />
        ))}
      </div>

      {searchTarget && (
        <AddToMealModal
          initialMealType={searchTarget.mealType}
          initialTab={searchTarget.initialTab}
          onClose={() => setSearchTarget(null)}
          onSelectRecipe={(recipeId, portions) => {
            addRecipe(searchTarget.dayIndex, searchTarget.mealType, recipeId, portions);
            setSearchTarget(null);
          }}
          onSelectProduct={(productId, portions) => {
            addProductToMeal(searchTarget.dayIndex, searchTarget.mealType, productId, portions);
            setSearchTarget(null);
          }}
        />
      )}

      {viewRecipeId && (
        <RecipeDetailModal recipeId={viewRecipeId} onClose={() => setViewRecipeId(null)} />
      )}

      {showSuggest && (
        <SuggestMenuModal
          onClose={() => setShowSuggest(false)}
          onGenerate={(focus, protein) => {
            suggestMenu(focus, protein);
            setShowSuggest(false);
          }}
        />
      )}
    </div>
  );
}
