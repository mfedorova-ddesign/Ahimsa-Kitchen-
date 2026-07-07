import { useState } from 'react';
import type { ActivityLevel, Gender, NutrientProfile } from '../types';
import { useI18n } from '../i18n';
import { DEFAULT_NUTRIENT_PROFILE, useNutrientGoals } from '../hooks/useNutrientGoals';
import { calculateNutrientTargets, isValidNutrientProfile } from '../utils/nutrientGoals';
import { IconClose } from './Icons';

interface Props {
  onClose: () => void;
}

export function NutrientGoalsModal({ onClose }: Props) {
  const { t } = useI18n();
  const { profile, setProfile, clearProfile } = useNutrientGoals();
  const g = t.planner.nutrientGoals;

  const initial = profile ?? DEFAULT_NUTRIENT_PROFILE;
  const [weightKg, setWeightKg] = useState(String(initial.weightKg));
  const [heightCm, setHeightCm] = useState(String(initial.heightCm));
  const [gender, setGender] = useState<Gender>(initial.gender);
  const [activity, setActivity] = useState<ActivityLevel>(initial.activity);

  const parsedWeight = Number(weightKg);
  const parsedHeight = Number(heightCm);
  const valid = isValidNutrientProfile(parsedWeight, parsedHeight);

  const preview = valid
    ? calculateNutrientTargets({ weightKg: parsedWeight, heightCm: parsedHeight, gender, activity })
    : null;

  function handleSave() {
    if (!valid) return;
    const next: NutrientProfile = {
      weightKg: parsedWeight,
      heightCm: parsedHeight,
      gender,
      activity,
    };
    setProfile(next);
    onClose();
  }

  function handleReset() {
    clearProfile();
    onClose();
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal nutrient-goals-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="nutrient-goals-title"
      >
        <header className="modal-header">
          <div>
            <h2 id="nutrient-goals-title">{g.title}</h2>
            <p className="nutrient-goals-subtitle">{g.subtitle}</p>
          </div>
          <button type="button" className="btn-icon modal-close" onClick={onClose} aria-label={t.planner.close}>
            <IconClose size={20} />
          </button>
        </header>

        <form
          className="nutrient-goals-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <div className="nutrient-goals-grid">
            <label className="nutrient-goals-field">
              <span>{g.weight}</span>
              <input
                type="number"
                min={30}
                max={250}
                step={0.5}
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                required
              />
              <span className="nutrient-goals-unit">{g.weightUnit}</span>
            </label>

            <label className="nutrient-goals-field">
              <span>{g.height}</span>
              <input
                type="number"
                min={120}
                max={230}
                step={1}
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                required
              />
              <span className="nutrient-goals-unit">{g.heightUnit}</span>
            </label>
          </div>

          <fieldset className="nutrient-goals-fieldset">
            <legend>{g.gender}</legend>
            <div className="nutrient-goals-options">
              <label className="nutrient-goals-option">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />
                <span>{g.genderFemale}</span>
              </label>
              <label className="nutrient-goals-option">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />
                <span>{g.genderMale}</span>
              </label>
            </div>
          </fieldset>

          <fieldset className="nutrient-goals-fieldset">
            <legend>{g.activity}</legend>
            <div className="nutrient-goals-options nutrient-goals-options--stack">
              <label className="nutrient-goals-option">
                <input
                  type="radio"
                  name="activity"
                  checked={activity === 'minimal'}
                  onChange={() => setActivity('minimal')}
                />
                <span>
                  <strong>{g.activityMinimal}</strong>
                  <small>{g.activityMinimalHint}</small>
                </span>
              </label>
              <label className="nutrient-goals-option">
                <input
                  type="radio"
                  name="activity"
                  checked={activity === 'moderate'}
                  onChange={() => setActivity('moderate')}
                />
                <span>
                  <strong>{g.activityModerate}</strong>
                  <small>{g.activityModerateHint}</small>
                </span>
              </label>
              <label className="nutrient-goals-option">
                <input
                  type="radio"
                  name="activity"
                  checked={activity === 'athlete'}
                  onChange={() => setActivity('athlete')}
                />
                <span>
                  <strong>{g.activityAthlete}</strong>
                  <small>{g.activityAthleteHint}</small>
                </span>
              </label>
            </div>
          </fieldset>

          {preview && (
            <div className="nutrient-goals-preview">
              <p className="nutrient-goals-preview-title">{g.previewTitle}</p>
              <p className="nutrient-goals-preview-line">
                {preview.kcal} {t.nutrientsShort.kcal} · {g.previewProtein} {preview.proteinG}g ·
                {' '}{g.previewCarbs} {preview.carbsG}g · {g.previewFat} {preview.fatG}g
              </p>
            </div>
          )}

          <footer className="modal-footer nutrient-goals-footer">
            <button type="button" className="btn-text" onClick={handleReset}>
              {g.reset}
            </button>
            <button type="submit" className="btn-primary btn-primary--inline" disabled={!valid}>
              {g.save}
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
