import { ShoppingListInfo } from "./shopping-list-info"
import { ShoppingListCard } from "./shopping-list-card"
import { ShoppingListItem } from "@/lib/types"
import { mockShoppingList } from "@/lib/mock-data"
import {
    Carrot,
    Egg,
    Drumstick,
    Snowflake,
    Wheat,
    Wine,
    BrushCleaning,
    ShoppingCart,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
    "Produce": <Carrot className="w-5 h-5 text-orange-600" />,
    "Dairy & Eggs": <Egg className="w-5 h-5 text-yellow-500" />,
    "Meat": <Drumstick className="w-5 h-5 text-red-500" />,
    "Frozen": <Snowflake className="w-5 h-5 text-blue-400" />,
    "Bakery": <Wheat className="w-5 h-5 text-yellow-700" />,
    "Beverages": <Wine className="w-5 h-5 text-purple-600" />,
    "Household": <BrushCleaning className="w-5 h-5 text-gray-600" />,
};

import { Card } from "../ui/card"

export const ShoppingListPanel: React.FC = () => {
    const groupedItems = mockShoppingList.reduce<Record<string, ShoppingListItem[]>>((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <>
            <div>
                <ShoppingListInfo />
            </div>
            <div className="space-y-6 mt-8">
                {Object.entries(groupedItems).map(([category, items]) => (
                    <Card key={category} className="px-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 border-2 border-gray-400 rounded-lg">
                                {categoryIcons[category] ?? <ShoppingCart className="w-5 h-5 text-gray-400" />}
                            </div>
                            <h2 className="text-2xl font-semibold text-orange-600">{category}</h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            {items.map((item: ShoppingListItem, index: number) => (
                                <ShoppingListCard key={index} name={item.name} quantity={item.quantity} price={item.price} />
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </>
    )
}