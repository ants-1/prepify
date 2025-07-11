import { Calendar } from "lucide-react";

import { Card, CardHeader, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function MealWeekInfo() {
    return (
        <Card className="mt-6">
            <CardHeader className="font-bold text-xl">This Week</CardHeader>
            <CardContent>
                <div className="flex justify-between">
                    <p className="text-gray-500 mb-4">Meals Planned</p>
                    <p className="font-bold">18/21</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-500 mb-4">Avg. Prep Time</p>
                    <p className="font-bold">24 mins</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-500">Total Calories</p>
                    <p className="font-bold">12,450 kcal</p>
                </div>
                <Separator className="my-6" />
                <Button className="w-full hover:cursor-pointer">
                    <Calendar className="w-6 h-6"/>
                    <span>View Nutrition</span>
                </Button>
            </CardContent>
        </Card>
    )
}