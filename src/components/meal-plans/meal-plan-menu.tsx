import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

import { ChevronRight, ChevronLeft, Plus } from "lucide-react";

export default function MealPlanMenu() {
    return (
        <Card className="w-full mt-12">
            <CardContent className="flex justify-between">
                <div className="flex items-center gap-5">
                    <Button variant="outline" className="cursor-pointer">
                        <ChevronLeft />
                    </Button>
                    <div>
                        <p className="text-center text-xl font-semibold">Jul - Jul 13, 2025</p>
                        <p className="text-center text-gray-500 text-sm">Week View</p>
                    </div>
                    <Button variant="outline" className="cursor-pointer">
                        <ChevronRight />
                    </Button>
                </div>
                <Button size="lg" className="cursor-pointer">
                    <Plus />
                    <p>Add Meal</p>
                </Button>
            </CardContent>
        </Card>
    )
}