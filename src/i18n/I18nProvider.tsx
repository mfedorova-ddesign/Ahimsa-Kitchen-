import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { en } from './locales/en';
import { ru } from './locales/ru';
import { uk } from './locales/uk';
import { getProductText, getRecipeText, getCuisineText } from './content';
import type { Locale, Translations } from './types';

const LOCALE_KEY = 'ahimsa-kitchen-locale';

const locales: Record<Locale, Translations> = { en, ru, uk };

function detectLocale(): Locale {
  const saved = localStorage.getItem(LOCALE_KEY) as Locale | null;
  if (saved && saved in locales) return saved;

  const lang = navigator.language.slice(0, 2).toLowerCase();
  if (lang === 'ru') return 'ru';
  if (lang === 'uk') return 'uk';
  return 'en';
}

interface I18nContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  productName: (id: string) => string;
  productPortion: (id: string) => string;
  recipeName: (id: string) => string;
  recipeDescription: (id: string) => string;
  cuisineName: (id: string) => string;
  mealLabel: (type: string) => string;
  dayLabel: (index: number) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_KEY, next);
  };

  const t = locales[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title =
      locale === 'en'
        ? 'Ahimsa Kitchen — vegan meal planner'
        : locale === 'uk'
          ? 'Ahimsa Kitchen — веганське меню'
          : 'Ahimsa Kitchen — веганское меню';
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      t,
      setLocale,
      productName: (id) => getProductText(id, locale).name,
      productPortion: (id) => getProductText(id, locale).portion,
      recipeName: (id) => getRecipeText(id, locale).name,
      recipeDescription: (id) => getRecipeText(id, locale).description,
      cuisineName: (id) => getCuisineText(id, locale),
      mealLabel: (type) => t.meals[type] ?? type,
      dayLabel: (index) => t.days[index % 7] ?? '',
    }),
    [locale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
