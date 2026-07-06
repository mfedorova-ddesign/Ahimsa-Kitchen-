import type { PlannerState } from '../types';
import { getRecipeNutrients } from './recipeNutrients';
import { slotsNutrients } from './plannerOps';

type LabelFn = {
  dayLabel: (i: number) => string;
  mealLabel: (t: string) => string;
  recipeName: (id: string) => string;
  nutrientsLine: (n: ReturnType<typeof getRecipeNutrients>) => string;
};

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
        const n = getRecipeNutrients(dish.recipeId);
        lines.push(`- ${labels.recipeName(dish.recipeId)} (${labels.nutrientsLine(n)})`);
      }
      lines.push('');
    }

    const dayTotal = slotsNutrients(day.slots, getRecipeNutrients);
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
        const n = getRecipeNutrients(dish.recipeId);
        body += `<li><strong>${labels.mealLabel(mealType)}:</strong> ${labels.recipeName(dish.recipeId)} <em>(${labels.nutrientsLine(n)})</em></li>`;
      }
    }
    const total = slotsNutrients(day.slots, getRecipeNutrients);
    body += `</ul><p><strong>Day total:</strong> ${labels.nutrientsLine(total)}</p>`;
  }

  return `<!DOCTYPE html><html><head><meta charset="utf-8"><title>${labels.title}</title>
    <style>body{font-family:sans-serif;max-width:700px;margin:2rem auto;line-height:1.5}
    h1{color:#2d6a4f}h2{margin-top:1.5rem;border-bottom:1px solid #ddd}</style></head><body>${body}</body></html>`;
}
