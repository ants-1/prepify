"use client";

import { Target } from "lucide-react"
import { useState } from "react"

import {
    Card,
    CardHeader,
    CardContent
} from "../ui/card";
import { Progress } from "../ui/progress"

export default function NutritionalInfo() {
    const [calorieProgress] = useState(13);
    const [proteinProgress] = useState(4);
    const [carbProgress] = useState(6);
    const [fatProgress] = useState(5);

    return (
        <Card className="mt-12 p-6">
            <CardHeader>
                <div className="flex gap-2 items-center">
                    <Target className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Today&apos;s Nutrition</h3>
                </div>
                <p className="text-gray-500 text-sm">Track your daily nutritional goals</p>
            </CardHeader>
            <CardContent>
                {/* Calorie Intake */}
                <div className="flex justify-between">
                    <p className="font-semibold">Calories</p>
                    <p className="text-gray-600">1850/2000 kcal</p>
                </div>
                <Progress value={calorieProgress} className="mt-1 mb-2" />
                {/* Protein Intake */}
                <div className="flex justify-between">
                    <p className="font-semibold">Protein</p>
                    <p className="text-gray-600">120/250g</p>
                </div>
                <Progress value={proteinProgress} className="mt-1 mb-2" />
                {/* Carbs Intake */}
                <div className="flex justify-between">
                    <p className="font-semibold">Carbs</p>
                    <p className="text-gray-600">180/250g</p>
                </div>
                <Progress value={carbProgress} className="mt-1 mb-2" />
                {/* Fats Intake */}
                <div className="flex justify-between">
                    <p className="font-semibold">Fats</p>
                    <p className="text-gray-600">65/80g</p>
                </div>
                <Progress value={fatProgress} className="mt-1 mb-2" />
            </CardContent>
        </Card>
    )
}