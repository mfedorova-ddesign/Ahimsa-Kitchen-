import type { Translations } from '../types';

export const en: Translations = {
  app: {
    title: 'Ahimsa Kitchen',
    subtitle: 'Custom vegan meal planner — build your day, track nutrients',
  },
  lang: { en: 'EN', ru: 'RU', uk: 'UA' },
  common: {
    back: '← Back',
    cancel: 'Cancel',
    generate: 'Generate menu',
    newMenu: 'New menu',
    otherMenu: 'Different meal',
    swap: 'Swap',
    swapTo: 'Replace with:',
    swapRecipe: 'Swap recipe',
    ingredients: 'Ingredients',
    dayTotal: 'Daily total',
    mealTotal: 'Meal total:',
    perDay: 'g / day',
    proteinTarget: 'g protein goal',
    proteinUnit: 'g',
  },
  selector: {
    chooseFocus: 'Choose meal plan type',
    proteinGoal: 'Protein target',
    proteinHint: 'Set your desired protein intake. This is meal planning, not a medical recommendation.',
    period: 'Period',
    periodDay: 'One day',
    periodWeek: 'One week',
  },
  plan: {
    menuDay: 'Daily menu',
    menuWeek: 'Weekly menu',
    proteinGoalLine: 'goal {n} g protein',
  },
  meals: {
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
    snack: 'Snack',
  },
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  nutrients: {
    kcal: 'kcal',
    protein: 'protein, g',
    fat: 'fat, g',
    carbs: 'carbs, g',
    fiber: 'fiber, g',
    iron: 'iron, mg',
    iodine: 'iodine, µg',
    d3: 'D3, µg',
  },
  nutrientsShort: {
    kcal: 'kcal',
    protein: 'P',
    fat: 'F',
    carbs: 'C',
    fiber: 'Fi',
  },
  focus: {
    balanced: {
      label: 'Balanced vegan diet',
      description: 'Varied menu of whole plant foods with even macro distribution.',
    },
    protein: {
      label: 'Protein-focused diet',
      description: 'Higher-protein menu. Set your daily target in grams.',
    },
    iron: {
      label: 'Iron-rich diet',
      description: 'Emphasis on iron-rich foods with vitamin C sources in the same meals.',
    },
    iodine: {
      label: 'Iodine-rich diet',
      description: 'Includes seaweed and iodized salt as concentrated iodine sources.',
    },
    d3: {
      label: 'D3 food sources',
      description: 'D3 from UV mushrooms and fortified drinks. Food covers only part of your needs.',
    },
  },
  disclaimers: {
    iron: 'This is a diet high in iron, not medical advice. If you suspect a deficiency, see a doctor for testing.',
    iodine: 'This is a diet high in iodine, not medical advice. If you suspect a deficiency, see a doctor for testing.',
    d3: 'This menu includes D3 food sources, not medical advice. If you suspect a deficiency, see a doctor for testing.',
  },
  d3ExtraDisclaimer:
    'Food covers only a small part of daily D3 needs — sunlight and supplements are the main sources.',
  education: {
    balanced: [
      {
        title: 'Balanced vegan diet',
        body: 'A variety of whole grains, legumes, nuts, seeds, vegetables and fruit can cover most macronutrients. The key is rotating protein sources and including foods with different micronutrient profiles.',
      },
      {
        title: 'Fiber',
        body: 'Plant-based diets are typically rich in fiber. Gradually increasing intake and drinking enough water may help digestion adapt to more plant foods.',
      },
    ],
    protein: [
      {
        title: 'Plant protein',
        body: 'Legumes, soy, nuts and seeds are the main concentrated protein sources in a vegan diet. Combining different sources throughout the day can provide a complete amino acid profile without needing to pair them in every meal.',
      },
      {
        title: 'How much protein?',
        body: 'For healthy adults, EFSA recommends at least 0.83 g protein per kg body weight. Active people and older adults may need more. This tool helps plan meals, not determine a medical norm.',
      },
    ],
    iron: [
      {
        title: 'Iron in a plant-based diet',
        body: 'Non-heme iron from plants is absorbed less efficiently than from animal products. Lentils, tofu, tempeh, spinach and pumpkin seeds are among the more concentrated plant sources.',
      },
      {
        title: 'Absorption enhancers',
        body: 'Vitamin C in the same meal as iron-rich foods may improve non-heme iron absorption. Peppers, citrus, tomatoes and broccoli are common vitamin C sources.',
      },
      {
        title: 'What may reduce absorption',
        body: 'Tannins (tea, coffee), large doses of calcium and phytates (whole grains) may reduce iron absorption when taken with iron-rich food. This is a reason to spread them across meals, not to avoid these foods.',
      },
    ],
    iodine: [
      {
        title: 'Iodine in a vegan diet',
        body: 'Iodine is found mainly in seafood and iodized salt. Seaweed (nori, wakame) is among the most concentrated plant sources, but iodine content varies widely.',
      },
      {
        title: 'Iodized salt',
        body: 'In many countries salt is iodized at ~15–40 µg iodine per gram (WHO). Regular use of iodized salt in cooking can contribute meaningfully to daily intake.',
      },
    ],
    d3: [
      {
        title: 'Vitamin D in a plant-based diet',
        body: 'Natural plant sources of D3 are scarce. UV-treated mushrooms and fortified plant drinks contain small amounts. For most people, the main D3 source is skin synthesis from sunlight.',
      },
      {
        title: 'Supplements — educational note',
        body: 'EFSA sets the recommended daily intake of D3 at 15 µg (600 IU) for adults. Supplement labels usually show dose in µg or IU. Discuss supplement needs with a doctor, especially with limited sun exposure.',
      },
    ],
  },
  planner: {
    disclaimer:
      'This is a meal planning tool, not medical advice. Nutrient values are estimates based on food databases. For health concerns, consult a qualified professional.',
    periodDay: 'One day',
    periodWeek: 'One week',
    addDish: '+ Add',
    copyDay: 'Copy day',
    copyDish: 'Copy',
    removeDish: 'Remove',
    suggestMenu: 'Suggest menu',
    exportText: 'Export text',
    exportPdf: 'Print / PDF',
    clearPlan: 'Clear plan',
    searchRecipes: 'Find a recipe',
    searchPlaceholder: 'Search by name…',
    filters: 'Filters',
    allMeals: 'All meals',
    allCuisines: 'All cuisines',
    allRegions: 'All regions',
    proteinMin: 'Protein min (g)',
    proteinMax: 'Protein max (g)',
    apply: 'Add to plan',
    resetFilters: 'Reset',
    noResults: 'No recipes match your filters.',
    slotTotal: 'Subtotal',
    dragHint: 'Drag dishes between meals and days',
    suggestTitle: 'Suggest a menu',
    suggestDesc: 'Auto-fill your planner with a random balanced menu. You can edit, remove or add dishes afterwards.',
    suggestGenerate: 'Fill planner',
    viewRecipe: 'View recipe',
    close: 'Close',
    nutrientsTitle: 'Nutrients per serving',
    instructionsTitle: 'How to cook',
    prepTimeUnit: 'min',
    servingsUnit: 'servings',
    tipTitle: 'Tip',
    regions: {
      european: 'European',
      asian: 'Asian',
      americas: 'Americas',
      african: 'African',
      'middle-eastern': 'Middle Eastern',
      fusion: 'Fusion',
    },
    filterTags: {
      'high-protein': 'High protein (20g+)',
      'iron-rich': 'Iron-rich',
      'iodine-rich': 'Iodine-rich',
      'd3-source': 'D3 sources',
      'gluten-free': 'Gluten-free',
      'no-added-sugar': 'No added sugar',
      'vitamin-c': 'Vitamin C sources',
      quick: 'Quick (≤5 ingredients)',
    },
  },
};
