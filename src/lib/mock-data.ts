import { MealPlanType, ShoppingListType } from "./types";

export const mealPlanData: MealPlanType[] = [
  {
    id: 1,
    day: "Monday",
    breakfast: ["Oatmeal with berries"],
    lunch: ["Grilled chicken salad"],
    dinner: ["Salmon with quinoa"],
    snacks: ["Greek yogurt", "Mixed nuts"]
  },
  {
    id: 2,
    day: "Tuesday",
    breakfast: ["Scrambled eggs with spinach"],
    lunch: ["Turkey and avocado wrap"],
    dinner: ["Stir-fried tofu with vegetables and brown rice"],
    snacks: ["Apple slices with peanut butter", "Carrot sticks"]
  },
  {
    id: 3,
    day: "Wednesday",
    breakfast: ["Greek yogurt parfait with granola"],
    lunch: ["Quinoa and chickpea salad"],
    dinner: ["Grilled shrimp tacos with cabbage slaw"],
    snacks: ["Protein bar", "Handful of almonds"]
  },
  {
    id: 4,
    day: "Thursday",
    breakfast: ["Smoothie with banana, spinach, and protein powder"],
    lunch: ["Lentil soup with whole grain bread"],
    dinner: ["Baked chicken breast with sweet potato and green beans"],
    snacks: ["Rice cakes with hummus", "Berries"]
  },
  {
    id: 5,
    day: "Friday",
    breakfast: ["Whole grain toast with avocado and poached egg"],
    lunch: ["Tuna salad with mixed greens"],
    dinner: ["Beef stir-fry with vegetables and brown rice"],
    snacks: ["Trail mix", "Cottage cheese with pineapple"]
  },
  {
    id: 6,
    day: "Saturday",
    breakfast: ["Pancakes with fresh fruit"],
    lunch: ["Grilled veggie and hummus wrap"],
    dinner: ["Baked cod with roasted vegetables"],
    snacks: ["Celery sticks with peanut butter", "Protein shake"]
  },
  {
    id: 7,
    day: "Sunday",
    breakfast: ["Bagel with smoked salmon and cream cheese"],
    lunch: ["Caprese salad with whole grain bread"],
    dinner: ["Roast chicken with mashed cauliflower"],
    snacks: ["Dark chocolate square", "Fruit salad"]
  }
];

export const shoppingListData: ShoppingListType[] = [
  {
    id: 1,
    name: "Salmon fillets",
    amount: "2 lbs"
  },
  {
    id: 2,
    name: "Quinoa",
    amount: "1 bag"
  },
  {
    id: 3,
    name: "Mixed berries",
    amount: "2 cups"
  },
  {
    id: 4,
    name: "Greek yogurt",
    amount: "32 oz"
  },
  {
    id: 5,
    name: "Avocados",
    amount: "4 pieces"
  },
  {
    id: 6,
    name: "Eggs",
    amount: "1 dozen"
  },
  {
    id: 7,
    name: "Spinach",
    amount: "1 bag"
  },
  {
    id: 8,
    name: "Chicken breasts",
    amount: "2 lbs"
  },
  {
    id: 9,
    name: "Whole grain bread",
    amount: "1 loaf"
  }
];

export const mealTemplates = [
  { name: "Mediterranean Week", description: "Fresh, healthy Mediterranean cuisine", meals: 21, rating: 4.8 },
  { name: "Quick & Easy", description: "30-minute meals for busy schedules", meals: 18, rating: 4.6 },
  { name: "Vegetarian Delight", description: "Plant-based meals full of flavor", meals: 20, rating: 4.7 },
  { name: "Family Favorites", description: "Kid-friendly meals the whole family loves", meals: 19, rating: 4.5 },
  { name: "Keto Friendly", description: "Low-carb, high-fat meal plans", meals: 17, rating: 4.4 },
  { name: "Meal Prep Master", description: "Batch cooking for the week ahead", meals: 15, rating: 4.9 },
]

export const popularRecipes = [
  { name: "Chicken Teriyaki Bowl", time: "25 min", difficulty: "Easy", rating: 4.8 },
  { name: "Mediterranean Pasta", time: "20 min", difficulty: "Easy", rating: 4.7 },
  { name: "Beef Stir Fry", time: "15 min", difficulty: "Medium", rating: 4.6 },
  { name: "Veggie Burger", time: "30 min", difficulty: "Medium", rating: 4.5 },
  { name: "Fish & Chips", time: "35 min", difficulty: "Hard", rating: 4.4 },
  { name: "Taco Tuesday", Fime: "20 min", difficulty: "Easy", rating: 4.9 },
];

