import { Calendar, ChefHat, ShoppingCart, Clock } from "lucide-react"
import {
    Card,
    CardContent
} from "../ui/card"

export default function MealPlanInfo() {
    return (
        <div className="flex mt-12 gap-5 flex-col lg:flex-row">
            <Card className="w-full">
                <CardContent>
                    <div className="flex justify-between">
                        <p className="font-semibold">Meals Planned</p>
                        <Calendar className="w-5 h-5 text-orange-600 dark:text-orange-300" />
                    </div>
                    <p className="text-2xl font-bold mb-1">21</p>
                    <p className="text-gray-500 text-sm">This week</p>
                </CardContent>
            </Card>
            <Card className="w-full">
                <CardContent>
                    <div className="flex justify-between">
                        <p className="font-semibold">Recipes Saved</p>
                        <ChefHat className="w-5 h-5 text-orange-600 dark:text-orange-300" />
                    </div>
                    <p className="text-2xl font-bold mb-1">156</p>
                    <p className="text-gray-500 text-sm">+12 this month</p>
                </CardContent>
            </Card>
            <Card className="w-full">
                <CardContent>
                    <div className="flex justify-between">
                        <p className="font-semibold">Shopping Items</p>
                        <ShoppingCart className="w-5 h-5 text-orange-600 dark:text-orange-300" />
                    </div>
                    <p className="text-2xl font-bold mb-1">23</p>
                    <p className="text-gray-500 text-sm">7 Completed</p>
                </CardContent>
            </Card>
            <Card className="w-full">
                <CardContent>
                    <div className="flex justify-between">
                        <p className="font-semibold">Avg. Prep Time</p>
                        <Clock className="w-5 h-5 text-orange-600 dark:text-orange-300" />
                    </div>
                    <p className="text-2xl font-bold mb-1">32</p>
                    <p className="text-gray-500 text-sm">Per meal</p>
                </CardContent>
            </Card>
        </div>
    )
}