export type PortionType = '100g' | 'tbsp' | 'pcs' | 'cup';

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export type NutrientFocus =
  | 'balanced'
  | 'protein'
  | 'iron'
  | 'iodine'
  | 'd3';

export type PlanPeriod = 'day' | 'week';

export type CuisineRegion =
  | 'european'
  | 'asian'
  | 'americas'
  | 'african'
  | 'middle-eastern'
  | 'fusion';

export type RecipeFilterTag =
  | 'high-protein'
  | 'iron-rich'
  | 'iodine-rich'
  | 'd3-source'
  | 'gluten-free'
  | 'no-added-sugar'
  | 'vitamin-c'
  | 'quick';

export type ProductCategory =
  | 'grain'
  | 'legume'
  | 'soy'
  | 'nut_seed'
  | 'vegetable'
  | 'fruit'
  | 'seaweed'
  | 'fortified'
  | 'fat'
  | 'other';

export interface Product {
  id: string;
  name: string;
  portionType: PortionType;
  portionLabel: string;
  category: ProductCategory;
  tags: string[];
  proteinG: number;
  kcal: number;
  fatG: number;
  carbsG: number;
  fiberG: number;
  ironMg: number;
  iodineMcg: number;
  d3Mcg: number;
  source: string;
}

export interface MealItem {
  product: Product;
  portions: number;
}

export interface RecipeIngredient {
  productId: string;
  portions: number;
}

export interface Recipe {
  id: string;
  cuisine: string;
  mealType: MealType;
  tags: string[];
  ingredients: RecipeIngredient[];
}

export interface Nutrients {
  kcal: number;
  proteinG: number;
  fatG: number;
  carbsG: number;
  fiberG: number;
  ironMg: number;
  iodineMcg: number;
  d3Mcg: number;
}

/** One added recipe instance in the planner */
export interface PlannedDish {
  id: string;
  recipeId: string;
}

export type MealSlots = Record<MealType, PlannedDish[]>;

export interface PlannerDay {
  dayIndex: number;
  slots: MealSlots;
}

export interface PlannerState {
  period: PlanPeriod;
  days: PlannerDay[];
  updatedAt: string;
}

export interface RecipeSearchFilters {
  query: string;
  mealType: MealType | 'all';
  cuisine: string | 'all';
  cuisineRegion: CuisineRegion | 'all';
  proteinMin: number | null;
  proteinMax: number | null;
  tags: RecipeFilterTag[];
}

export interface DragPayload {
  dishId: string;
  recipeId: string;
  fromDay: number;
  fromMeal: MealType;
}

export interface Meal {
  id: string;
  type: MealType;
  label: string;
  recipeId: string;
  items: MealItem[];
}

export interface DayPlan {
  dayIndex: number;
  label: string;
  meals: Meal[];
}

export interface MealPlan {
  focus: NutrientFocus;
  period: PlanPeriod;
  proteinTargetG?: number;
  days: DayPlan[];
  createdAt: string;
}

export interface AppSettings {
  period: PlanPeriod;
}
