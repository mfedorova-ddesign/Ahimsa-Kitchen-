import type { Recipe } from '../types';

/**
 * Curated vegan recipes inspired by world cuisines.
 * Nutrients are computed from ingredient portions × product dataset (USDA/EFSA).
 * Recipe compositions are simplified home-cook versions, not restaurant clones.
 */
export const recipes: Recipe[] = [
  // ── Breakfast ──
  {
    id: 'golden-oat-parfait',
    cuisine: 'scandinavian',
    mealType: 'breakfast',
    tags: ['balanced', 'd3'],
    ingredients: [
      { productId: 'oatmeal', portions: 0.5 },
      { productId: 'fortified-oat-milk', portions: 1 },
      { productId: 'berries', portions: 1 },
      { productId: 'chia', portions: 1 },
    ],
  },
  {
    id: 'mediterranean-avocado-toast',
    cuisine: 'mediterranean',
    mealType: 'breakfast',
    tags: ['balanced'],
    ingredients: [
      { productId: 'whole-wheat-bread', portions: 1 },
      { productId: 'avocado', portions: 1 },
      { productId: 'tomato', portions: 1 },
      { productId: 'lemon', portions: 0.5 },
      { productId: 'olive-oil', portions: 0.5 },
    ],
  },
  {
    id: 'tropical-smoothie-bowl',
    cuisine: 'caribbean',
    mealType: 'breakfast',
    tags: ['balanced', 'protein', 'vitamin-c'],
    ingredients: [
      { productId: 'fortified-soy-milk', portions: 1 },
      { productId: 'banana', portions: 1 },
      { productId: 'berries', portions: 0.5 },
      { productId: 'hemp-seeds', portions: 1 },
      { productId: 'chia', portions: 0.5 },
    ],
  },
  {
    id: 'japanese-miso-tofu-bowl',
    cuisine: 'japanese',
    mealType: 'breakfast',
    tags: ['protein', 'iodine'],
    ingredients: [
      { productId: 'tofu-firm', portions: 0.5 },
      { productId: 'brown-rice', portions: 0.5 },
      { productId: 'nori', portions: 1 },
      { productId: 'edamame', portions: 0.5 },
      { productId: 'sesame-seeds', portions: 0.5 },
    ],
  },
  {
    id: 'middle-eastern-mezze',
    cuisine: 'levantine',
    mealType: 'breakfast',
    tags: ['balanced', 'protein', 'iron'],
    ingredients: [
      { productId: 'hummus', portions: 1 },
      { productId: 'whole-wheat-bread', portions: 1 },
      { productId: 'tomato', portions: 1 },
      { productId: 'zucchini', portions: 0.5 },
      { productId: 'olive-oil', portions: 0.5 },
    ],
  },
  {
    id: 'mexican-breakfast-burrito-bowl',
    cuisine: 'mexican',
    mealType: 'breakfast',
    tags: ['protein', 'iron'],
    ingredients: [
      { productId: 'black-beans', portions: 0.5 },
      { productId: 'avocado', portions: 0.5 },
      { productId: 'bell-pepper', portions: 0.5 },
      { productId: 'tomato', portions: 1 },
      { productId: 'whole-wheat-bread', portions: 0.5 },
    ],
  },
  {
    id: 'indian-spiced-porridge',
    cuisine: 'indian',
    mealType: 'breakfast',
    tags: ['balanced', 'iron'],
    ingredients: [
      { productId: 'millet', portions: 0.75 },
      { productId: 'fortified-oat-milk', portions: 1 },
      { productId: 'pumpkin-seeds', portions: 0.5 },
      { productId: 'banana', portions: 0.5 },
    ],
  },
  {
    id: 'protein-peanut-butter-toast',
    cuisine: 'american',
    mealType: 'breakfast',
    tags: ['protein'],
    ingredients: [
      { productId: 'whole-wheat-bread', portions: 1 },
      { productId: 'peanut-butter', portions: 1 },
      { productId: 'banana', portions: 1 },
      { productId: 'hemp-seeds', portions: 0.5 },
    ],
  },

  // ── Lunch ──
  {
    id: 'indian-chana-masala',
    cuisine: 'indian',
    mealType: 'lunch',
    tags: ['protein', 'iron', 'vitamin-c'],
    ingredients: [
      { productId: 'chickpeas', portions: 1 },
      { productId: 'brown-rice', portions: 1 },
      { productId: 'spinach', portions: 1 },
      { productId: 'tomato', portions: 1 },
      { productId: 'coconut-milk', portions: 0.25 },
    ],
  },
  {
    id: 'thai-coconut-curry',
    cuisine: 'thai',
    mealType: 'lunch',
    tags: ['protein', 'vitamin-c'],
    ingredients: [
      { productId: 'tofu-firm', portions: 1 },
      { productId: 'coconut-milk', portions: 0.5 },
      { productId: 'bell-pepper', portions: 1 },
      { productId: 'broccoli', portions: 0.5 },
      { productId: 'brown-rice', portions: 1 },
      { productId: 'lemon', portions: 0.5 },
    ],
  },
  {
    id: 'mexican-burrito-bowl',
    cuisine: 'mexican',
    mealType: 'lunch',
    tags: ['protein', 'iron', 'vitamin-c'],
    ingredients: [
      { productId: 'black-beans', portions: 1 },
      { productId: 'brown-rice', portions: 1 },
      { productId: 'avocado', portions: 0.5 },
      { productId: 'bell-pepper', portions: 1 },
      { productId: 'tomato', portions: 1 },
      { productId: 'lemon', portions: 1 },
    ],
  },
  {
    id: 'ethiopian-misir-wot',
    cuisine: 'ethiopian',
    mealType: 'lunch',
    tags: ['protein', 'iron', 'vitamin-c'],
    ingredients: [
      { productId: 'lentils', portions: 1 },
      { productId: 'buckwheat', portions: 1 },
      { productId: 'kale', portions: 1 },
      { productId: 'tomato', portions: 1 },
      { productId: 'olive-oil', portions: 0.5 },
    ],
  },
  {
    id: 'mediterranean-falafel-bowl',
    cuisine: 'mediterranean',
    mealType: 'lunch',
    tags: ['balanced', 'protein', 'iron'],
    ingredients: [
      { productId: 'hummus', portions: 1 },
      { productId: 'quinoa', portions: 1 },
      { productId: 'red-cabbage', portions: 1 },
      { productId: 'tomato', portions: 1 },
      { productId: 'tahini', portions: 0.5 },
    ],
  },
  {
    id: 'korean-bibimbap',
    cuisine: 'korean',
    mealType: 'lunch',
    tags: ['protein', 'iron', 'vitamin-c'],
    ingredients: [
      { productId: 'brown-rice', portions: 1 },
      { productId: 'tofu-firm', portions: 0.75 },
      { productId: 'spinach', portions: 1 },
      { productId: 'carrot', portions: 1 },
      { productId: 'edamame', portions: 0.5 },
      { productId: 'sesame-seeds', portions: 1 },
    ],
  },
  {
    id: 'moroccan-chickpea-tagine',
    cuisine: 'moroccan',
    mealType: 'lunch',
    tags: ['protein', 'iron'],
    ingredients: [
      { productId: 'chickpeas', portions: 1 },
      { productId: 'sweet-potato', portions: 1 },
      { productId: 'quinoa', portions: 0.5 },
      { productId: 'carrot', portions: 1 },
      { productId: 'tahini', portions: 0.5 },
    ],
  },
  {
    id: 'greek-hummus-plate',
    cuisine: 'greek',
    mealType: 'lunch',
    tags: ['balanced', 'protein', 'vitamin-c'],
    ingredients: [
      { productId: 'hummus', portions: 1 },
      { productId: 'quinoa', portions: 0.75 },
      { productId: 'zucchini', portions: 1 },
      { productId: 'tomato', portions: 1 },
      { productId: 'olive-oil', portions: 1 },
      { productId: 'lemon', portions: 1 },
    ],
  },
  {
    id: 'japanese-poke-bowl',
    cuisine: 'japanese',
    mealType: 'lunch',
    tags: ['protein', 'iodine'],
    ingredients: [
      { productId: 'brown-rice', portions: 1 },
      { productId: 'edamame', portions: 1 },
      { productId: 'avocado', portions: 0.5 },
      { productId: 'nori', portions: 1 },
      { productId: 'carrot', portions: 0.5 },
      { productId: 'sesame-seeds', portions: 0.5 },
    ],
  },
  {
    id: 'indian-dal-tadka',
    cuisine: 'indian',
    mealType: 'lunch',
    tags: ['protein', 'iron', 'vitamin-c'],
    ingredients: [
      { productId: 'lentils', portions: 1 },
      { productId: 'brown-rice', portions: 1 },
      { productId: 'spinach', portions: 1 },
      { productId: 'tomato', portions: 1 },
      { productId: 'nutritional-yeast', portions: 0.5 },
    ],
  },
  {
    id: 'chinese-tempeh-stir-fry',
    cuisine: 'chinese',
    mealType: 'lunch',
    tags: ['protein', 'iron'],
    ingredients: [
      { productId: 'tempeh', portions: 1 },
      { productId: 'broccoli', portions: 1 },
      { productId: 'bell-pepper', portions: 1 },
      { productId: 'brown-rice', portions: 1 },
      { productId: 'sesame-seeds', portions: 0.5 },
    ],
  },
  {
    id: 'italian-pasta-e-fagioli',
    cuisine: 'italian',
    mealType: 'lunch',
    tags: ['protein', 'iron'],
    ingredients: [
      { productId: 'pasta-whole', portions: 1 },
      { productId: 'white-beans', portions: 0.5 },
      { productId: 'tomato', portions: 1 },
      { productId: 'spinach', portions: 0.5 },
      { productId: 'olive-oil', portions: 0.5 },
    ],
  },
  {
    id: 'brazilian-feijoada-bowl',
    cuisine: 'brazilian',
    mealType: 'lunch',
    tags: ['protein', 'iron'],
    ingredients: [
      { productId: 'black-beans', portions: 1 },
      { productId: 'brown-rice', portions: 1 },
      { productId: 'orange', portions: 1 },
      { productId: 'kale', portions: 0.5 },
    ],
  },
  {
    id: 'levantine-tahini-bowl',
    cuisine: 'levantine',
    mealType: 'lunch',
    tags: ['protein', 'iron'],
    ingredients: [
      { productId: 'chickpeas', portions: 1 },
      { productId: 'buckwheat', portions: 1 },
      { productId: 'kale', portions: 1 },
      { productId: 'tahini', portions: 1 },
      { productId: 'lemon', portions: 1 },
    ],
  },
  {
    id: 'protein-tofu-power-bowl',
    cuisine: 'fusion',
    mealType: 'lunch',
    tags: ['protein'],
    ingredients: [
      { productId: 'tofu-firm', portions: 1.5 },
      { productId: 'quinoa', portions: 1 },
      { productId: 'edamame', portions: 0.5 },
      { productId: 'broccoli', portions: 0.5 },
      { productId: 'hemp-seeds', portions: 1 },
    ],
  },

  // ── Dinner ──
  {
    id: 'indian-palak-tofu',
    cuisine: 'indian',
    mealType: 'dinner',
    tags: ['protein', 'iron', 'vitamin-c'],
    ingredients: [
      { productId: 'tofu-firm', portions: 1 },
      { productId: 'spinach', portions: 1.5 },
      { productId: 'brown-rice', portions: 1 },
      { productId: 'tomato', portions: 1 },
      { productId: 'coconut-milk', portions: 0.25 },
    ],
  },
  {
    id: 'thai-peanut-noodles',
    cuisine: 'thai',
    mealType: 'dinner',
    tags: ['protein'],
    ingredients: [
      { productId: 'pasta-whole', portions: 1 },
      { productId: 'peanut-butter', portions: 1 },
      { productId: 'tofu-firm', portions: 0.75 },
      { productId: 'bell-pepper', portions: 1 },
      { productId: 'carrot', portions: 1 },
      { productId: 'lemon', portions: 1 },
    ],
  },
  {
    id: 'mexican-enchilada-bowl',
    cuisine: 'mexican',
    mealType: 'dinner',
    tags: ['protein', 'iron'],
    ingredients: [
      { productId: 'black-beans', portions: 1 },
      { productId: 'sweet-potato', portions: 1 },
      { productId: 'bell-pepper', portions: 1 },
      { productId: 'tomato', portions: 1 },
      { productId: 'avocado', portions: 0.5 },
    ],
  },
  {
    id: 'ethiopian-berbere-lentils',
    cuisine: 'ethiopian',
    mealType: 'dinner',
    tags: ['protein', 'iron', 'vitamin-c'],
    ingredients: [
      { productId: 'lentils', portions: 1 },
      { productId: 'millet', portions: 1 },
      { productId: 'kale', portions: 1 },
      { productId: 'tomato', portions: 1 },
      { productId: 'nutritional-yeast', portions: 0.5 },
    ],
  },
  {
    id: 'mediterranean-stuffed-peppers',
    cuisine: 'mediterranean',
    mealType: 'dinner',
    tags: ['balanced', 'protein', 'vitamin-c'],
    ingredients: [
      { productId: 'bell-pepper', portions: 1.5 },
      { productId: 'quinoa', portions: 1 },
      { productId: 'chickpeas', portions: 0.5 },
      { productId: 'tomato', portions: 1 },
      { productId: 'olive-oil', portions: 0.5 },
    ],
  },
  {
    id: 'japanese-teriyaki-tempeh',
    cuisine: 'japanese',
    mealType: 'dinner',
    tags: ['protein', 'iodine'],
    ingredients: [
      { productId: 'tempeh', portions: 1 },
      { productId: 'brown-rice', portions: 1 },
      { productId: 'broccoli', portions: 1 },
      { productId: 'edamame', portions: 0.5 },
      { productId: 'nori', portions: 0.5 },
    ],
  },
  {
    id: 'moroccan-harira-style',
    cuisine: 'moroccan',
    mealType: 'dinner',
    tags: ['protein', 'iron'],
    ingredients: [
      { productId: 'lentils', portions: 0.75 },
      { productId: 'chickpeas', portions: 0.5 },
      { productId: 'tomato', portions: 1.5 },
      { productId: 'spinach', portions: 1 },
      { productId: 'quinoa', portions: 0.5 },
    ],
  },
  {
    id: 'italian-minestrone-bowl',
    cuisine: 'italian',
    mealType: 'dinner',
    tags: ['balanced', 'iron'],
    ingredients: [
      { productId: 'white-beans', portions: 0.75 },
      { productId: 'pasta-whole', portions: 0.5 },
      { productId: 'zucchini', portions: 1 },
      { productId: 'tomato', portions: 1 },
      { productId: 'spinach', portions: 0.5 },
    ],
  },
  {
    id: 'korean-tofu-jjigae',
    cuisine: 'korean',
    mealType: 'dinner',
    tags: ['protein', 'iron'],
    ingredients: [
      { productId: 'tofu-firm', portions: 1 },
      { productId: 'brown-rice', portions: 1 },
      { productId: 'zucchini', portions: 1 },
      { productId: 'spinach', portions: 1 },
      { productId: 'sesame-seeds', portions: 0.5 },
    ],
  },
  {
    id: 'west-african-groundnut-stew',
    cuisine: 'west-african',
    mealType: 'dinner',
    tags: ['protein', 'iron'],
    ingredients: [
      { productId: 'peanut-butter', portions: 1 },
      { productId: 'sweet-potato', portions: 1 },
      { productId: 'chickpeas', portions: 0.5 },
      { productId: 'spinach', portions: 1 },
      { productId: 'brown-rice', portions: 1 },
    ],
  },
  {
    id: 'greek-gemista-bowl',
    cuisine: 'greek',
    mealType: 'dinner',
    tags: ['balanced', 'vitamin-c'],
    ingredients: [
      { productId: 'quinoa', portions: 1 },
      { productId: 'chickpeas', portions: 0.5 },
      { productId: 'tomato', portions: 1 },
      { productId: 'zucchini', portions: 1 },
      { productId: 'olive-oil', portions: 0.5 },
      { productId: 'lemon', portions: 0.5 },
    ],
  },
  {
    id: 'chinese-mapo-tofu-bowl',
    cuisine: 'chinese',
    mealType: 'dinner',
    tags: ['protein', 'iron'],
    ingredients: [
      { productId: 'tofu-firm', portions: 1.25 },
      { productId: 'brown-rice', portions: 1 },
      { productId: 'bell-pepper', portions: 0.5 },
      { productId: 'spinach', portions: 1 },
      { productId: 'sesame-seeds', portions: 0.5 },
    ],
  },
  {
    id: 'iodine-wakame-soup-bowl',
    cuisine: 'japanese',
    mealType: 'dinner',
    tags: ['iodine', 'protein'],
    ingredients: [
      { productId: 'wakame', portions: 1 },
      { productId: 'tofu-firm', portions: 0.75 },
      { productId: 'brown-rice', portions: 0.75 },
      { productId: 'edamame', portions: 0.5 },
      { productId: 'iodized-salt', portions: 0.5 },
    ],
  },
  {
    id: 'd3-mushroom-risotto',
    cuisine: 'italian',
    mealType: 'dinner',
    tags: ['d3', 'balanced'],
    ingredients: [
      { productId: 'brown-rice', portions: 1 },
      { productId: 'uv-mushrooms', portions: 1.5 },
      { productId: 'fortified-oat-milk', portions: 0.5 },
      { productId: 'nutritional-yeast', portions: 0.5 },
      { productId: 'spinach', portions: 0.5 },
    ],
  },

  // ── Snacks ──
  {
    id: 'hummus-crudites',
    cuisine: 'levantine',
    mealType: 'snack',
    tags: ['balanced', 'protein', 'iron'],
    ingredients: [
      { productId: 'hummus', portions: 1 },
      { productId: 'carrot', portions: 1 },
      { productId: 'bell-pepper', portions: 0.5 },
    ],
  },
  {
    id: 'trail-mix-bowl',
    cuisine: 'american',
    mealType: 'snack',
    tags: ['balanced', 'protein', 'iron'],
    ingredients: [
      { productId: 'almonds', portions: 0.5 },
      { productId: 'pumpkin-seeds', portions: 1 },
      { productId: 'apple', portions: 0.5 },
    ],
  },
  {
    id: 'edamame-sea-salt',
    cuisine: 'japanese',
    mealType: 'snack',
    tags: ['protein', 'iodine'],
    ingredients: [
      { productId: 'edamame', portions: 0.75 },
      { productId: 'lemon', portions: 0.5 },
    ],
  },
  {
    id: 'nut-butter-apple',
    cuisine: 'american',
    mealType: 'snack',
    tags: ['protein'],
    ingredients: [
      { productId: 'peanut-butter', portions: 0.5 },
      { productId: 'apple', portions: 1 },
      { productId: 'flax', portions: 0.5 },
    ],
  },
  {
    id: 'tropical-fruit-plate',
    cuisine: 'caribbean',
    mealType: 'snack',
    tags: ['balanced', 'vitamin-c'],
    ingredients: [
      { productId: 'orange', portions: 1 },
      { productId: 'berries', portions: 0.5 },
      { productId: 'walnuts', portions: 0.5 },
    ],
  },
  {
    id: 'beet-hummus-toast',
    cuisine: 'mediterranean',
    mealType: 'snack',
    tags: ['iron', 'vitamin-c'],
    ingredients: [
      { productId: 'whole-wheat-bread', portions: 0.5 },
      { productId: 'hummus', portions: 0.5 },
      { productId: 'beetroot', portions: 0.5 },
    ],
  },
  {
    id: 'protein-seed-mix',
    cuisine: 'fusion',
    mealType: 'snack',
    tags: ['protein', 'iron'],
    ingredients: [
      { productId: 'hemp-seeds', portions: 1 },
      { productId: 'pumpkin-seeds', portions: 1 },
      { productId: 'banana', portions: 0.5 },
    ],
  },
  {
    id: 'iodine-nori-bites',
    cuisine: 'japanese',
    mealType: 'snack',
    tags: ['iodine'],
    ingredients: [
      { productId: 'nori', portions: 2 },
      { productId: 'avocado', portions: 0.25 },
      { productId: 'brown-rice', portions: 0.25 },
    ],
  },
];

export const recipesById = new Map(recipes.map((r) => [r.id, r]));

export function getRecipesByMealType(mealType: Recipe['mealType']): Recipe[] {
  return recipes.filter((r) => r.mealType === mealType);
}

export function getRecipesForFocus(
  mealType: Recipe['mealType'],
  focus: string,
): Recipe[] {
  const pool = getRecipesByMealType(mealType);
  if (focus === 'balanced') return pool;

  const focused = pool.filter((r) => r.tags.includes(focus));
  if (focused.length > 0) return focused;

  if (focus === 'iron') {
    return pool.filter((r) => r.tags.includes('iron') || r.tags.includes('vitamin-c'));
  }
  if (focus === 'iodine') {
    return pool.filter((r) => r.tags.includes('iodine'));
  }
  if (focus === 'd3') {
    return pool.filter((r) => r.tags.includes('d3'));
  }
  if (focus === 'protein') {
    return pool.filter((r) => r.tags.includes('protein'));
  }

  return pool;
}

export function getAlternativeRecipes(
  recipeId: string,
  mealType: Recipe['mealType'],
  focus: string,
): Recipe[] {
  const current = recipesById.get(recipeId);
  const pool = getRecipesForFocus(mealType, focus).filter((r) => r.id !== recipeId);

  if (!current) return pool;

  const sameCuisine = pool.filter((r) => r.cuisine !== current.cuisine);
  return sameCuisine.length >= 3 ? sameCuisine : pool;
}
