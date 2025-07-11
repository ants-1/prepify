import Footer from "@/components/footer";
import MealPlanList from "@/components/dashboard/meal-plan-list";
import Navbar from "@/components/navbar";
import MealPlanInfo from "@/components/dashboard/meal-plan-info";
import NutritionalInfo from "@/components/dashboard/nutritional-info";
import MealShoppingList from "@/components/dashboard/meal-shopping-list";

import { Button } from "@/components/ui/button";
import QuickActions from "@/components/meal-plans/quick-actions";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container mx-auto px-4 my-20">
                <section className="flex flex-col md:flex-row md:justify-between">
                    <div>
                        <h1 className=" text-4xl font-bold mb-2 text-orange-600">Meal Planner Dashboard</h1>
                        <p className="text-gray-500 text-lg">Plan your meals, track nutrition, and manage your shopping list.</p>
                    </div>
                    <Button size="lg" className="w-40 mt-6 hover:cursor-pointer">+ Add New Meal</Button>
                </section>
                <MealPlanInfo />
                <div className="flex flex-col lg:flex-row lg:gap-6">
                    <div className="lg:w-2/3">
                        <MealPlanList />
                    </div>
                    <div className="lg:w-1/3">
                        <NutritionalInfo />
                        <MealShoppingList />
                        <QuickActions />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}