import type { PlannerState } from '../types';
import { getPlannedItemNutrients } from './plannedNutrients';
import { getPlannedItemWeightG } from './recipeServing';
import { formatPortionValue } from './portionUtils';
import { slotsNutrients } from './plannerOps';
import type { Nutrients } from '../types';

type LabelFn = {
  dayLabel: (i: number) => string;
  mealLabel: (t: string) => string;
  recipeName: (id: string) => string;
  productName: (id: string) => string;
  productPortion: (id: string) => string;
  nutrientsLine: (n: Nutrients) => string;
  halfPortion: string;
  weightGrams: (n: number) => string;
};

function formatPlannedItem(
  dish: PlannerState['days'][0]['slots']['breakfast'][number],
  labels: LabelFn,
): string {
  const n = getPlannedItemNutrients(dish);
  const portionText = dish.portions === 1 ? '' : ` ×${formatPortionValue(dish.portions, labels.halfPortion)}`;
  const weightG = getPlannedItemWeightG(
    dish,
    dish.kind === 'product' ? labels.productPortion(dish.productId) : undefined,
  );
  const weightText = weightG != null && weightG > 0
    ? `, ${labels.weightGrams(weightG)}`
    : '';

  if (dish.kind === 'recipe') {
    return `${labels.recipeName(dish.recipeId)}${portionText}${weightText} (${labels.nutrientsLine(n)})`;
  }
  const portionLabel = labels.productPortion(dish.productId);
  return `${labels.productName(dish.productId)}${portionText} — ${portionLabel}${weightText} (${labels.nutrientsLine(n)})`;
}

export function exportPlanAsText(
  planner: PlannerState,
  labels: LabelFn,
): string {
  const lines: string[] = ['Ahimsa Kitchen — Meal Plan', ''];

  for (const day of planner.days) {
    lines.push(`## ${labels.dayLabel(day.dayIndex)}`);
    lines.push('');

    for (const mealType of ['breakfast', 'lunch', 'dinner', 'snack'] as const) {
      const dishes = day.slots[mealType];
      if (dishes.length === 0) continue;

      lines.push(`### ${labels.mealLabel(mealType)}`);
      for (const dish of dishes) {
        lines.push(`- ${formatPlannedItem(dish, labels)}`);
      }
      lines.push('');
    }

    const dayTotal = slotsNutrients(day.slots);
    lines.push(`**Day total:** ${labels.nutrientsLine(dayTotal)}`);
    lines.push('');
  }

  return lines.join('\n');
}

export function downloadTextFile(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function printPlan(html: string) {
  const win = window.open('', '_blank');
  if (!win) return;
  win.document.write(html);
  win.document.close();
  win.focus();
  win.print();
}

export function exportPlanAsPrintHtml(
  planner: PlannerState,
  labels: LabelFn & { title: string },
): string {
  let body = `<h1>${labels.title}</h1>`;

  for (const day of planner.days) {
    body += `<h2>${labels.dayLabel(day.dayIndex)}</h2><ul>`;
    for (const mealType of ['breakfast', 'lunch', 'dinner', 'snack'] as const) {
      for (const dish of day.slots[mealType]) {
        body += `<li><strong>${labels.mealLabel(mealType)}:</strong> ${formatPlannedItem(dish, labels)}</li>`;
      }
    }
    const total = slotsNutrients(day.slots);
    body += `</ul><p><strong>Day total:</strong> ${labels.nutrientsLine(total)}</p>`;
  }

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${labels.title}</title>
    <style>body{font-family:sans-serif;max-width:700px;margin:2rem auto;line-height:1.5}
    h1,h2{margin-top:1.5rem}ul{padding-left:1.25rem}em{color:#555;font-size:0.9em}</style></head><body>${body}</body></html>`;
}
