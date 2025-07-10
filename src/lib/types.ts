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