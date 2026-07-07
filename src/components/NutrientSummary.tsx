import { useState } from 'react';
import type { Nutrients } from '../types';
import { useI18n } from '../i18n';
import { useNutrientGoals } from '../hooks/useNutrientGoals';
import { formatNutrients } from '../utils/nutrients';
import { NutrientGoalsModal } from './NutrientGoalsModal';
import { IconSettings } from './Icons';

interface Props {
  nutrients: Nutrients;
  compact?: boolean;
  inline?: boolean;
  panel?: boolean;
  title?: string;
}

function pct(value: number, target: number): number {
  if (target <= 0) return 0;
  return Math.min(100, Math.round((value / target) * 100));
}

function NutrientRow({
  label,
  value,
  target,
  unit,
  tone,
}: {
  label: string;
  value: number;
  target: number;
  unit: string;
  tone?: string;
}) {
  return (
    <div className="nutrient-row">
      <span className="nutrient-row-label">{label}</span>
      <div className="nutrient-row-track">
        <div
          className={`nutrient-row-fill${tone ? ` nutrient-row-fill--${tone}` : ''}`}
          style={{ width: `${pct(value, target)}%` }}
        />
      </div>
      <span className="nutrient-row-value">
        {value}{unit} / {target}{unit}
      </span>
    </div>
  );
}

function KcalRing({ kcal, target, goalLabel, remainingLabel }: {
  kcal: number;
  target: number;
  goalLabel: string;
  remainingLabel: string;
}) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const offset = c - (pct(kcal, target) / 100) * c;
  const remaining = Math.max(0, target - kcal);

  return (
    <div className="kcal-ring-block">
      <div className="kcal-ring">
        <svg viewBox="0 0 120 120" className="kcal-ring-svg" aria-hidden>
          <circle cx="60" cy="60" r={r} className="kcal-ring-bg" />
          <circle
            cx="60"
            cy="60"
            r={r}
            className="kcal-ring-progress"
            strokeDasharray={c}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="kcal-ring-center">
          <span className="kcal-ring-value">{kcal}</span>
          <span className="kcal-ring-label">kcal</span>
        </div>
      </div>
      <p className="kcal-goal-text">{goalLabel}</p>
      <p className="kcal-remaining-text">{remainingLabel.replace('{n}', String(remaining))}</p>
    </div>
  );
}

export function NutrientSummary({ nutrients, compact, inline, panel, title }: Props) {
  const { t } = useI18n();
  const { targets } = useNutrientGoals();
  const [showGoals, setShowGoals] = useState(false);
  const n = formatNutrients(nutrients);

  if (inline) {
    return (
      <p className="nutrient-inline">
        <span className="nutrient-inline-kcal">{n.kcal} {t.nutrientsShort.kcal}</span>
        <span className="nutrient-inline-macros">
          {t.nutrientsShort.protein} {n.proteinG}g{' '}
          {t.nutrientsShort.carbs} {n.carbsG}g{' '}
          {t.nutrientsShort.fat} {n.fatG}g
        </span>
      </p>
    );
  }

  if (compact) {
    return (
      <p className="nutrient-inline nutrient-inline--compact">
        <span className="nutrient-inline-kcal">{n.kcal} {t.nutrientsShort.kcal}</span>
        <span className="nutrient-inline-macros">
          P {n.proteinG}g C {n.carbsG}g F {n.fatG}g
        </span>
      </p>
    );
  }

  const goalLabel = t.planner.kcalGoal.replace('{n}', String(targets.kcal));
  const remainingLabel = t.planner.kcalRemaining;

  const calculator = (
    <div className="nutrient-calculator">
      <div className="nutrient-calculator-header">
        <h3 className="nutrient-calculator-title">{title ?? t.planner.dailyNutrition}</h3>
        {panel && (
          <button
            type="button"
            className="btn-icon nutrient-goals-btn"
            onClick={() => setShowGoals(true)}
            title={t.planner.nutrientGoals.customize}
            aria-label={t.planner.nutrientGoals.customize}
          >
            <IconSettings size={18} />
          </button>
        )}
      </div>
      <KcalRing
        kcal={n.kcal}
        target={targets.kcal}
        goalLabel={goalLabel}
        remainingLabel={remainingLabel}
      />
      <div className="nutrient-rows">
        <NutrientRow label={t.nutrients.protein} value={n.proteinG} target={targets.proteinG} unit="g" tone="protein" />
        <NutrientRow label={t.nutrients.carbs} value={n.carbsG} target={targets.carbsG} unit="g" tone="carbs" />
        <NutrientRow label={t.nutrients.fat} value={n.fatG} target={targets.fatG} unit="g" tone="fats" />
        <NutrientRow label={t.nutrients.fiber} value={n.fiberG} target={targets.fiberG} unit="g" tone="fibre" />
        <NutrientRow label={t.nutrients.iron} value={n.ironMg} target={targets.ironMg} unit="mg" tone="iron" />
        <NutrientRow label={t.nutrients.iodine} value={n.iodineMcg} target={targets.iodineMcg} unit="mcg" tone="vitamin-c" />
        <NutrientRow label={t.nutrients.d3} value={n.d3Mcg} target={targets.d3Mcg} unit="mcg" tone="calcium" />
      </div>
    </div>
  );

  const content = panel ? <aside className="nutrient-panel">{calculator}</aside> : calculator;

  return (
    <>
      {content}
      {showGoals && <NutrientGoalsModal onClose={() => setShowGoals(false)} />}
    </>
  );
}
