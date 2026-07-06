import type { Nutrients } from '../types';
import { useI18n } from '../i18n';
import { formatNutrients } from '../utils/nutrients';

interface Props {
  nutrients: Nutrients;
  compact?: boolean;
}

export function NutrientSummary({ nutrients, compact }: Props) {
  const { t } = useI18n();
  const n = formatNutrients(nutrients);

  if (compact) {
    return (
      <div className="nutrient-summary compact">
        <span>{n.kcal} {t.nutrientsShort.kcal}</span>
        <span>{t.nutrientsShort.protein} {n.proteinG}{t.common.proteinUnit}</span>
        <span>{t.nutrientsShort.fat} {n.fatG}{t.common.proteinUnit}</span>
        <span>{t.nutrientsShort.carbs} {n.carbsG}{t.common.proteinUnit}</span>
        <span>{t.nutrientsShort.fiber} {n.fiberG}{t.common.proteinUnit}</span>
        {n.ironMg > 0 && <span>Fe {n.ironMg}</span>}
      </div>
    );
  }

  return (
    <div className="nutrient-summary">
      <div className="nutrient-item"><span className="nutrient-value">{n.kcal}</span><span className="nutrient-label">{t.nutrients.kcal}</span></div>
      <div className="nutrient-item"><span className="nutrient-value">{n.proteinG}</span><span className="nutrient-label">{t.nutrients.protein}</span></div>
      <div className="nutrient-item"><span className="nutrient-value">{n.fatG}</span><span className="nutrient-label">{t.nutrients.fat}</span></div>
      <div className="nutrient-item"><span className="nutrient-value">{n.carbsG}</span><span className="nutrient-label">{t.nutrients.carbs}</span></div>
      <div className="nutrient-item"><span className="nutrient-value">{n.fiberG}</span><span className="nutrient-label">{t.nutrients.fiber}</span></div>
      <div className="nutrient-item"><span className="nutrient-value">{n.ironMg}</span><span className="nutrient-label">{t.nutrients.iron}</span></div>
      <div className="nutrient-item"><span className="nutrient-value">{n.iodineMcg}</span><span className="nutrient-label">{t.nutrients.iodine}</span></div>
      <div className="nutrient-item"><span className="nutrient-value">{n.d3Mcg}</span><span className="nutrient-label">{t.nutrients.d3}</span></div>
    </div>
  );
}
