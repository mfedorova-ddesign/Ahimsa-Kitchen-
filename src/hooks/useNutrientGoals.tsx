import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { NutrientProfile, NutrientTargets } from '../types';
import {
  calculateNutrientTargets,
  DEFAULT_NUTRIENT_PROFILE,
  DEFAULT_NUTRIENT_TARGETS,
  isValidNutrientProfile,
} from '../utils/nutrientGoals';

const STORAGE_KEY = 'ahimsa-kitchen-nutrient-goals-v1';

interface NutrientGoalsContextValue {
  profile: NutrientProfile | null;
  targets: NutrientTargets;
  hasCustomGoals: boolean;
  setProfile: (profile: NutrientProfile) => void;
  clearProfile: () => void;
}

const NutrientGoalsContext = createContext<NutrientGoalsContextValue | null>(null);

function loadProfile(): NutrientProfile | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const p = JSON.parse(raw) as NutrientProfile;
    if (!p || !isValidNutrientProfile(p.weightKg, p.heightCm)) return null;
    return p;
  } catch {
    return null;
  }
}

export function NutrientGoalsProvider({ children }: { children: ReactNode }) {
  const [profile, setProfileState] = useState<NutrientProfile | null>(loadProfile);

  const targets = useMemo(
    () => (profile ? calculateNutrientTargets(profile) : DEFAULT_NUTRIENT_TARGETS),
    [profile],
  );

  useEffect(() => {
    if (profile) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [profile]);

  const setProfile = useCallback((next: NutrientProfile) => {
    if (!isValidNutrientProfile(next.weightKg, next.heightCm)) return;
    setProfileState(next);
  }, []);

  const clearProfile = useCallback(() => {
    setProfileState(null);
  }, []);

  const value = useMemo(
    () => ({
      profile,
      targets,
      hasCustomGoals: profile !== null,
      setProfile,
      clearProfile,
    }),
    [profile, targets, setProfile, clearProfile],
  );

  return (
    <NutrientGoalsContext.Provider value={value}>
      {children}
    </NutrientGoalsContext.Provider>
  );
}

export function useNutrientGoals(): NutrientGoalsContextValue {
  const ctx = useContext(NutrientGoalsContext);
  if (!ctx) {
    throw new Error('useNutrientGoals must be used within NutrientGoalsProvider');
  }
  return ctx;
}

export { DEFAULT_NUTRIENT_PROFILE };
