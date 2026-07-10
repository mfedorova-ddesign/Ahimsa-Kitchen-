export const PORTION_STEP = 0.25;
export const PORTION_MIN = 0.25;
export const PORTION_MAX = 20;

export function clampPortions(value: number): number {
  const stepped = Math.round(value / PORTION_STEP) * PORTION_STEP;
  return Math.min(PORTION_MAX, Math.max(PORTION_MIN, stepped));
}

export function parseGramsFromLabel(label: string): number | null {
  const match = label.match(/(\d+(?:[.,]\d+)?)\s*(?:г|g)\b/i);
  if (!match) return null;
  return Math.round(parseFloat(match[1].replace(',', '.')));
}

export function formatPortionValue(portions: number, halfLabel = '½'): string {
  if (portions === 0.5) return halfLabel;
  if (portions % 1 === 0) return String(portions);
  const whole = Math.floor(portions);
  const frac = portions - whole;
  if (Math.abs(frac - 0.5) < 0.01) {
    return whole > 0 ? `${whole}${halfLabel}` : halfLabel;
  }
  if (Math.abs(frac - 0.25) < 0.01) {
    return whole > 0 ? `${whole}¼` : '¼';
  }
  if (Math.abs(frac - 0.75) < 0.01) {
    return whole > 0 ? `${whole}¾` : '¾';
  }
  return String(portions);
}

export function formatWeightG(grams: number, approx = true): string {
  const rounded = Math.round(grams);
  return approx ? `~${rounded}` : String(rounded);
}
