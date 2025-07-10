import { ForkKnife } from "lucide-react"
import MealPlanCard from "./meal-plan-card";
import { mealPlanData } from "@/lib/mock-data";

export default function MealPlanList() {
    return (
        <div className="border shadow-sm rounded-xl mt-12 p-6">
            <div className="flex items-center mb-2">
                <ForkKnife className="w-6 h-6 mr-2" />
                <h3 className="text-2xl font-bold">This Week&apos;s Meal Plan</h3>
            </div>
            <p className="text-gray-500 text-sm mb-4">Your planned meals for the current week</p>
            <div className="space-y-4">
                {mealPlanData.length > 0 ? (
                    mealPlanData.map((mealPlan) => (
                        <MealPlanCard key={mealPlan.day.toString()} mealPlan={mealPlan} />
                    ))
                ) : (
                    <p className="text-gray-500 text-sm">No meals planned</p>
                )}
            </div>
        </div>
    )
}