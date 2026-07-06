import { useState } from 'react';
import { useI18n } from '../i18n';
import type { NutrientFocus } from '../types';

const FOCUS_OPTIONS: NutrientFocus[] = [
  'balanced', 'protein', 'iron', 'iodine', 'd3',
];

interface Props {
  onClose: () => void;
  onGenerate: (focus: NutrientFocus, proteinTarget: number) => void;
}

export function SuggestMenuModal({ onClose, onGenerate }: Props) {
  const { t } = useI18n();
  const [focus, setFocus] = useState<NutrientFocus>('balanced');
  const [proteinTarget, setProteinTarget] = useState(70);

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div className="modal suggest-modal" onClick={(e) => e.stopPropagation()} role="dialog">
        <header className="modal-header">
          <h2>{t.planner.suggestTitle}</h2>
          <button type="button" className="btn-icon modal-close" onClick={onClose}>×</button>
        </header>

        <p className="suggest-desc">{t.planner.suggestDesc}</p>

        <div className="focus-grid compact">
          {FOCUS_OPTIONS.map((f) => (
            <button
              key={f}
              type="button"
              className={`focus-card ${focus === f ? 'selected' : ''}`}
              onClick={() => setFocus(f)}
            >
              <span className="focus-card-title">{t.focus[f].label}</span>
            </button>
          ))}
        </div>

        {focus === 'protein' && (
          <div className="protein-input">
            <input
              type="range"
              min={50}
              max={120}
              step={5}
              value={proteinTarget}
              onChange={(e) => setProteinTarget(Number(e.target.value))}
            />
            <span>{proteinTarget} {t.common.perDay}</span>
          </div>
        )}

        <footer className="modal-footer">
          <button
            type="button"
            className="btn-primary"
            onClick={() => onGenerate(focus, proteinTarget)}
          >
            {t.planner.suggestGenerate}
          </button>
        </footer>
      </div>
    </div>
  );
}
