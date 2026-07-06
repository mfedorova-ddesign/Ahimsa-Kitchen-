import { useState } from 'react';
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

export function PlannerHome() {
  const { t, dayLabel, mealLabel, recipeName } = useI18n();
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

  function nutrientsLine(n: ReturnType<typeof getRecipeNutrients>) {
    const f = formatNutrients(n);
    return `${f.kcal} kcal, P ${f.proteinG}g, F ${f.fatG}g, C ${f.carbsG}g, Fi ${f.fiberG}g, Fe ${f.ironMg}mg`;
  }

  function handleExportText() {
    const text = exportPlanAsText(planner, {
      dayLabel,
      mealLabel,
      recipeName,
      nutrientsLine,
    });
    downloadTextFile(text, 'ahimsa-kitchen-plan.txt');
  }

  function handleExportPdf() {
    const html = exportPlanAsPrintHtml(planner, {
      title: t.app.title,
      dayLabel,
      mealLabel,
      recipeName,
      nutrientsLine,
    });
    printPlan(html);
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
      <div className="top-bar">
        <LanguageSwitcher />
      </div>

      <header className="app-header">
        <h1>{t.app.title}</h1>
        <p className="subtitle">{t.app.subtitle}</p>
      </header>

      <GeneralDisclaimer />

      <div className="planner-toolbar">
        <div className="period-toggle">
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

        <div className="toolbar-actions">
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
      </div>

      <p className="drag-hint">{t.planner.dragHint}</p>
      {copySourceDay !== null && (
        <p className="copy-hint">
          {dayLabel(copySourceDay)} → {t.planner.copyDay} (click target day)
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
        <RecipeDetailModal
          recipeId={viewRecipeId}
          onClose={() => setViewRecipeId(null)}
        />
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
