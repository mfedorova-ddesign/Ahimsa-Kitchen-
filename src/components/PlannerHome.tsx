import { useState } from 'react';
import { AppLogo } from './AppLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { GeneralDisclaimer } from './GeneralDisclaimer';
import { DayPlannerRow } from './DayPlannerRow';
import { RecipeSearchModal } from './RecipeSearchModal';
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
import { getRecipeNutrients } from '../utils/recipeNutrients';

interface SearchTarget {
  dayIndex: number;
  mealType: MealType;
}

const DATE_LOCALE: Record<string, string> = {
  en: 'en-US',
  ru: 'ru-RU',
  uk: 'uk-UA',
};

export function PlannerHome() {
  const { t, locale, dayLabel, mealLabel, recipeName } = useI18n();
  const {
    planner,
    setPlannerPeriod,
    addRecipe,
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

  function nutrientsLine(n: ReturnType<typeof getRecipeNutrients>) {
    const f = formatNutrients(n);
    return `${f.kcal} kcal, P ${f.proteinG}g, F ${f.fatG}g, C ${f.carbsG}g, Fi ${f.fiberG}g, Fe ${f.ironMg}mg`;
  }

  function handleExportText() {
    downloadTextFile(
      exportPlanAsText(planner, { dayLabel, mealLabel, recipeName, nutrientsLine }),
      'ahimsa-kitchen-plan.txt',
    );
  }

  function handleExportPdf() {
    printPlan(exportPlanAsPrintHtml(planner, {
      title: t.app.title,
      dayLabel,
      mealLabel,
      recipeName,
      nutrientsLine,
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
            onAdd={(mealType) => setSearchTarget({ dayIndex: day.dayIndex, mealType })}
            onRemove={(mealType, dishId) => deleteDish(day.dayIndex, mealType, dishId)}
            onCopyDish={(mealType, dishId) => copyDish(day.dayIndex, mealType, dishId)}
            onViewRecipe={setViewRecipeId}
            onDrop={(payload, toMeal) => dragDish(payload, day.dayIndex, toMeal)}
            onCopyDay={() => handleCopyDay(day.dayIndex)}
          />
        ))}
      </div>

      {searchTarget && (
        <RecipeSearchModal
          initialMealType={searchTarget.mealType}
          onClose={() => setSearchTarget(null)}
          onSelect={(recipeId) => {
            addRecipe(searchTarget.dayIndex, searchTarget.mealType, recipeId);
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
