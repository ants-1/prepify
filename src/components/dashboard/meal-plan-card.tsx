import { MealPlanType } from "@/lib/types";
import { EllipsisVertical } from "lucide-react";
import clsx from "clsx";

import {
    Card,
    CardHeader,
    CardContent
} from "../ui/card";
import { Badge } from "../ui/badge";

interface MealPlanCardProps {
    mealPlan: MealPlanType;
}

export default function MealPlanCard({ mealPlan }: MealPlanCardProps) {
    const { day, breakfast, lunch, dinner, snacks } = mealPlan;
    const current = "Monday";

    return (
        <Card className={clsx(day == current ? "bg-orange-200 dark:bg-orange-900" : "")}>
            <CardHeader className="flex justify-between">
                <p className="font-bold text-xl">{day}</p>
                <EllipsisVertical className="w-5 h-5 cursor-pointer" />
            </CardHeader>
            <CardContent>
                <div>
                    <p className="font-medium mb-2">Breakfast{" "}({breakfast.length})</p>
                    {breakfast.length > 0 ? (
                        breakfast.map((item) => (
                            <Badge
                                key={item.toString()}
                                className="text-sm bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200"
                            >
                                {item}
                            </Badge>
                        ))
                    ) : (
                        <p>No breakfast added</p>
                    )}
                </div>
                <div>
                    <p className="font-medium mb-2 mt-2">Lunch{" "}({lunch.length})</p>
                    {lunch.length > 0 ? (
                        lunch.map((item) => (
                            <Badge
                                key={item.toString()}
                                className="text-sm bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200"
                            >
                                {item}
                            </Badge>
                        ))
                    ) : (
                        <p>No lunch added</p>
                    )}
                </div>
                <div>
                    <p className="font-medium mb-2 mt-2">Dinner{" "}({dinner.length})</p>
                    {dinner.length > 0 ? (
                        dinner.map((item) => (
                            <Badge
                                key={item.toString()}
                                className="text-sm bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200"
                            >
                                {item}
                            </Badge>
                        ))
                    ) : (
                        <p>No dinner added</p>
                    )}
                </div>
                <div>
                    <p className="font-medium mb-2 mt-2">Snacks{" "}({snacks.length})</p>
                    {snacks.length > 0 ? (
                        snacks.map((item) => (
                            <Badge
                                key={item.toString()}
                                className="text-sm bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200 mr-2"
                            >
                                {item}
                            </Badge>
                        ))
                    ) : (
                        <p>No snacks added</p>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}