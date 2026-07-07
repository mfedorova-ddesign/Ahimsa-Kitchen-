import type { ActivityLevel, Gender, NutrientProfile, NutrientTargets } from '../types';

/** Reference age for Mifflin–St Jeor when age is not collected in the form. */
const REFERENCE_AGE = 30;

const ACTIVITY_MULTIPLIER: Record<ActivityLevel, number> = {
  minimal: 1.2,
  moderate: 1.55,
  athlete: 1.75,
};

/** g protein per kg body weight — slightly higher for plant-based diets. */
const PROTEIN_PER_KG: Record<ActivityLevel, number> = {
  minimal: 1.0,
  moderate: 1.2,
  athlete: 1.6,
};

export const DEFAULT_NUTRIENT_TARGETS: NutrientTargets = {
  kcal: 2000,
  proteinG: 50,
  carbsG: 275,
  fatG: 65,
  fiberG: 28,
  ironMg: 18,
  iodineMcg: 150,
  d3Mcg: 15,
};

function mifflinStJeorBmr(weightKg: number, heightCm: number, gender: Gender): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * REFERENCE_AGE;
  return gender === 'male' ? base + 5 : base - 161;
}

export function calculateNutrientTargets(profile: NutrientProfile): NutrientTargets {
  const kcal = Math.round(mifflinStJeorBmr(profile.weightKg, profile.heightCm, profile.gender)
    * ACTIVITY_MULTIPLIER[profile.activity]);

  const proteinG = Math.round(profile.weightKg * PROTEIN_PER_KG[profile.activity]);
  const fatG = Math.round((kcal * 0.28) / 9);
  const carbsG = Math.max(0, Math.round((kcal - proteinG * 4 - fatG * 9) / 4));
  const fiberG = Math.max(25, Math.round((kcal / 1000) * 14));

  // Vegan-oriented iron targets (higher for lower bioavailability from plants).
  const ironMg = profile.gender === 'female' ? 18 : 10;

  return {
    kcal,
    proteinG,
    carbsG,
    fatG,
    fiberG,
    ironMg,
    iodineMcg: 150,
    d3Mcg: 15,
  };
}

export function isValidNutrientProfile(
  weightKg: number,
  heightCm: number,
): boolean {
  return weightKg >= 30 && weightKg <= 250 && heightCm >= 120 && heightCm <= 230;
}

export const DEFAULT_NUTRIENT_PROFILE: NutrientProfile = {
  weightKg: 65,
  heightCm: 170,
  gender: 'female',
  activity: 'moderate',
};
