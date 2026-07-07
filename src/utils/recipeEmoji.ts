import type { MealType } from '../types';

const BREAKFAST = ['🫐', '🥑', '🥤', '🥣', '🍳', '🌾'];
const LUNCH = ['🥗', '🍲', '🌯', '🥙', '🍜', '🥘'];
const DINNER = ['🍝', '🍛', '🥘', '🍲', '🥗', '🌮'];
const SNACK = ['🍫', '🧁', '🍰', '🥜', '🍪', '🫘'];

function pickEmoji(pool: string[], id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash + id.charCodeAt(i) * (i + 1)) % pool.length;
  return pool[hash]!;
}

export function recipeEmoji(recipeId: string, mealType: MealType): string {
  switch (mealType) {
    case 'breakfast': return pickEmoji(BREAKFAST, recipeId);
    case 'lunch': return pickEmoji(LUNCH, recipeId);
    case 'dinner': return pickEmoji(DINNER, recipeId);
    case 'snack': return pickEmoji(SNACK, recipeId);
  }
}
