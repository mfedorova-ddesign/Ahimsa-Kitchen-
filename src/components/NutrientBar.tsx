import type { Nutrients } from '../types';
import { useI18n } from '../i18n';
import { formatNutrients } from '../utils/nutrients';

interface Props {
  nutrients: Nutrients;
  compact?: boolean;
  highlight?: 'protein' | 'iron' | 'iodine' | 'd3';
}

export function NutrientBar({ nutrients, compact, highlight }: Props) {
  const { t, locale } = useI18n();
  const n = formatNutrients(nutrients);
  const unit = locale === 'en' ? 'g' : t.common.proteinUnit;

  if (compact) {
    return (
      <div className="nutrient-bar compact">
        <span>{n.kcal} {t.nutrientsShort.kcal}</span>
        <span className={highlight === 'protein' ? 'highlight' : ''}>
          {t.nutrientsShort.protein} {n.proteinG} {unit}
        </span>
        <span>{t.nutrientsShort.fat} {n.fatG} {unit}</span>
        <span>{t.nutrientsShort.carbs} {n.carbsG} {unit}</span>
        <span>{t.nutrientsShort.fiber} {n.fiberG} {unit}</span>
      </div>
    );
  }

  return (
    <div className="nutrient-bar">
      <div className="nutrient-item">
        <span className="nutrient-value">{n.kcal}</span>
        <span className="nutrient-label">{t.nutrients.kcal}</span>
      </div>
      <div className={`nutrient-item ${highlight === 'protein' ? 'highlight' : ''}`}>
        <span className="nutrient-value">{n.proteinG}</span>
        <span className="nutrient-label">{t.nutrients.protein}</span>
      </div>
      <div className="nutrient-item">
        <span className="nutrient-value">{n.fatG}</span>
        <span className="nutrient-label">{t.nutrients.fat}</span>
      </div>
      <div className="nutrient-item">
        <span className="nutrient-value">{n.carbsG}</span>
        <span className="nutrient-label">{t.nutrients.carbs}</span>
      </div>
      <div className="nutrient-item">
        <span className="nutrient-value">{n.fiberG}</span>
        <span className="nutrient-label">{t.nutrients.fiber}</span>
      </div>
      {(highlight === 'iron' || n.ironMg > 0) && (
        <div className={`nutrient-item ${highlight === 'iron' ? 'highlight' : ''}`}>
          <span className="nutrient-value">{n.ironMg}</span>
          <span className="nutrient-label">{t.nutrients.iron}</span>
        </div>
      )}
      {(highlight === 'iodine' || n.iodineMcg > 0) && (
        <div className={`nutrient-item ${highlight === 'iodine' ? 'highlight' : ''}`}>
          <span className="nutrient-value">{n.iodineMcg}</span>
          <span className="nutrient-label">{t.nutrients.iodine}</span>
        </div>
      )}
      {(highlight === 'd3' || n.d3Mcg > 0) && (
        <div className={`nutrient-item ${highlight === 'd3' ? 'highlight' : ''}`}>
          <span className="nutrient-value">{n.d3Mcg}</span>
          <span className="nutrient-label">{t.nutrients.d3}</span>
        </div>
      )}
    </div>
  );
}
