export type MealPlanType = {
    id: number;
    day: string;
    breakfast: string[];
    lunch: string[];
    dinner: string[];
    snacks: string[];
}

export type ShoppingListType = {
    id: number;
    name: string;
    amount: string;
}

export type Recipe = {
  id: string;
  name: string;
  description: string;
  category: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  image?: string;
  rating: number;
  reviews: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  isFavorite?: boolean;
}