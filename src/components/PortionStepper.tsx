import { useI18n } from '../i18n';
import { clampPortions, formatPortionValue, PORTION_STEP } from '../utils/portionUtils';

interface Props {
  portions: number;
  onChange: (portions: number) => void;
  weightG?: number | null;
  compact?: boolean;
  disabled?: boolean;
  showHalfButton?: boolean;
}

export function PortionStepper({
  portions,
  onChange,
  weightG,
  compact = false,
  disabled = false,
  showHalfButton = true,
}: Props) {
  const { t } = useI18n();

  function adjust(delta: number) {
    onChange(clampPortions(portions + delta));
  }

  const portionText = formatPortionValue(portions, t.planner.halfPortion);

  return (
    <div className={`portion-stepper ${compact ? 'portion-stepper--compact' : ''}`}>
      {!compact && (
        <span className="portion-stepper-label">{t.planner.portionsLabel}</span>
      )}
      <div className="portion-stepper-controls">
        <button
          type="button"
          className="portion-stepper-btn"
          onClick={() => adjust(-PORTION_STEP)}
          disabled={disabled}
          aria-label={t.planner.decreasePortions}
        >
          −
        </button>
        <span className="portion-stepper-value" title={t.planner.portionsLabel}>
          {compact ? `×${portionText}` : portionText}
        </span>
        <button
          type="button"
          className="portion-stepper-btn"
          onClick={() => adjust(PORTION_STEP)}
          disabled={disabled}
          aria-label={t.planner.increasePortions}
        >
          +
        </button>
        {showHalfButton && (
          <button
            type="button"
            className={`portion-stepper-btn portion-stepper-btn--half ${portions === 0.5 ? 'active' : ''}`}
            onClick={() => onChange(0.5)}
            disabled={disabled}
            title={t.planner.halfPortion}
          >
            {t.planner.halfPortion}
          </button>
        )}
      </div>
      {weightG != null && weightG > 0 && (
        <span className="portion-weight-badge">
          {t.planner.weightGrams.replace('{n}', String(Math.round(weightG)))}
        </span>
      )}
    </div>
  );
}
