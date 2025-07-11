"use client";

import { Plus, Search } from "lucide-react"
import { popularRecipes, mealPlanData } from "@/lib/mock-data";
import { MealPlanType } from "@/lib/types";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogHeader
} from "../ui/dialog";
import {
    Card,
    CardContent
} from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function MealPlanCalendar() {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snacks"]

    return (
        <div className="mt-6">
            {/* Weekly Meal Grid */}
            <Card className="p-0">
                <CardContent className="p-0">
                    <div className="grid grid-cols-5 gap-0 border-b">
                        <div className="font-medium text-sm bg-muted/50"></div>
                        {mealTypes.map((mealType) => (
                            <div key={mealType} className="p-4 font-medium text-sm text-center bg-muted/50 border-l">
                                {mealType}
                            </div>
                        ))}
                    </div>

                    {weekDays.map((day) => (
                        <div key={day} className="grid grid-cols-5 gap-0 border-b last:border-b-0">
                            <div className="p-2 md:p-4 font-medium text-sm bg-muted/20 flex items-center">{day}</div>
                            {mealTypes.map((mealType) => {
                                const dayPlan = mealPlanData.find((plan) => plan.day === day);
                                const meal = dayPlan ? dayPlan[mealType.toLowerCase() as keyof MealPlanType] : null;

                                return (
                                    <div key={`${day}-${mealType}`} className="p-2 border-l min-h-[120px]">
                                        {meal && Array.isArray(meal) && meal.length > 0 ? (
                                            <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 h-full cursor-pointer hover:bg-primary/10 transition-colors">
                                                <h4 className="font-medium text-sm mb-2 line-clamp-2">
                                                    {meal.join(", ")}
                                                </h4>
                                            </div>
                                        ) : (
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-3 h-full flex items-center justify-center cursor-pointer hover:border-muted-foreground/50 transition-colors">
                                                        <Plus className="h-4 w-4 text-muted-foreground" />
                                                    </div>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>
                                                            Add Meal for {day} {mealType}
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            Choose a recipe or create a new meal for this time slot.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="space-y-4">
                                                        <div className="space-y-2">
                                                            <Label htmlFor="meal-search">Search Recipes</Label>
                                                            <div className="relative">
                                                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                                                <Input id="meal-search" placeholder="Search for recipes..." className="pl-8" />
                                                            </div>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label>Popular Recipes</Label>
                                                            <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
                                                                {popularRecipes.map((recipe, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className="flex items-center justify-between p-2 border rounded-lg hover:bg-muted/50 cursor-pointer"
                                                                    >
                                                                        <div>
                                                                            <p className="font-medium text-sm">{recipe.name}</p>
                                                                            <p className="text-xs text-muted-foreground">
                                                                                {recipe.time} • {recipe.difficulty}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <Button className="w-full">Add Selected Meal</Button>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}