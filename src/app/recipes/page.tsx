"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { CreateRecipeCard } from "@/components/recipes/create-recipe-card";
import { SearchFilterBar } from "@/components/search-filter-bar";
import { useState } from "react";
import { recipes } from "@/lib/mock-data";
import { Recipe } from "@/lib/types";

import { RecipeCategoryMenu } from "@/components/recipes/recipe-category-menu";
import { DietaryFilter } from "@/components/recipes/dietary-filter";
import { QuickStats } from "@/components/recipes/quick-stats";
import { RecipeList } from "@/components/recipes/recipe-list";
import { RecipeDetailModal } from "@/components/recipes/recipe-detail-modal";


export default function RecipesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

    const categories = [
        { id: "all", name: "All Recipes", count: 156 },
        { id: "breakfast", name: "Breakfast", count: 24 },
        { id: "lunch", name: "Lunch", count: 38 },
        { id: "dinner", name: "Dinner", count: 45 },
        { id: "snacks", name: "Snacks", count: 18 },
        { id: "desserts", name: "Desserts", count: 21 },
        { id: "beverages", name: "Beverages", count: 10 },
    ];

    const dietaryFilters = [
        { id: "vegetarian", name: "Vegetarian" },
        { id: "vegan", name: "Vegan" },
        { id: "gluten-free", name: "Gluten Free" },
        { id: "dairy-free", name: "Dairy Free" },
        { id: "keto", name: "Keto" },
        { id: "paleo", name: "Paleo" },
        { id: "low-carb", name: "Low Carb" },
    ];

    const filteredRecipes = recipes.filter((recipe) => {
        const matchesSearch =
            recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === "all" || recipe.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container mx-auto px-4 my-20">
                <section className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div>
                        <h1 className=" text-4xl font-bold mb-2 text-orange-600">Recipes</h1>
                        <p className="text-gray-500 text-lg">Discover and manage your favorite recipes.</p>
                    </div>
                    <CreateRecipeCard categories={categories} />
                </section>
                <section className="mt-6">
                    <SearchFilterBar
                        searchQuery={searchQuery}
                        setSelectedCategory={setSelectedCategory}
                        selectedCategory={selectedCategory}
                        setSearchQuery={setSearchQuery}
                        categories={categories}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <div className="space-y-6">
                            <RecipeCategoryMenu
                                categories={categories}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                            />
                            <DietaryFilter dietaryFilters={dietaryFilters} />
                            <QuickStats />
                        </div>

                        <RecipeList
                            filteredRecipes={filteredRecipes}
                            recipes={recipes}
                            setSelectedRecipe={setSelectedRecipe}
                        />

                        {selectedRecipe && (
                            <RecipeDetailModal
                                selectedRecipe={selectedRecipe}
                                setSelectedRecipe={setSelectedRecipe}
                            />
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}