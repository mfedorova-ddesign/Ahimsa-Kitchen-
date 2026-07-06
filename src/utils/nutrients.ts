import type { MealItem, Nutrients } from '../types';

export function calcItemNutrients(item: MealItem): Nutrients {
  const { product, portions } = item;
  return {
    kcal: product.kcal * portions,
    proteinG: product.proteinG * portions,
    fatG: product.fatG * portions,
    carbsG: product.carbsG * portions,
    fiberG: product.fiberG * portions,
    ironMg: product.ironMg * portions,
    iodineMcg: product.iodineMcg * portions,
    d3Mcg: product.d3Mcg * portions,
  };
}

export function sumNutrients(items: MealItem[]): Nutrients {
  return items.reduce(
    (acc, item) => {
      const n = calcItemNutrients(item);
      return {
        kcal: acc.kcal + n.kcal,
        proteinG: acc.proteinG + n.proteinG,
        fatG: acc.fatG + n.fatG,
        carbsG: acc.carbsG + n.carbsG,
        fiberG: acc.fiberG + n.fiberG,
        ironMg: acc.ironMg + n.ironMg,
        iodineMcg: acc.iodineMcg + n.iodineMcg,
        d3Mcg: acc.d3Mcg + n.d3Mcg,
      };
    },
    emptyNutrients(),
  );
}

export function emptyNutrients(): Nutrients {
  return {
    kcal: 0,
    proteinG: 0,
    fatG: 0,
    carbsG: 0,
    fiberG: 0,
    ironMg: 0,
    iodineMcg: 0,
    d3Mcg: 0,
  };
}

export function roundNutrient(value: number, decimals = 1): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

export function formatNutrients(n: Nutrients) {
  return {
    kcal: Math.round(n.kcal),
    proteinG: roundNutrient(n.proteinG),
    fatG: roundNutrient(n.fatG),
    carbsG: roundNutrient(n.carbsG),
    fiberG: roundNutrient(n.fiberG),
    ironMg: roundNutrient(n.ironMg),
    iodineMcg: roundNutrient(n.iodineMcg),
    d3Mcg: roundNutrient(n.d3Mcg, 2),
  };
}
