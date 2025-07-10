"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { shoppingListData } from "@/lib/mock-data";

import {
    Card,
    CardHeader,
    CardContent
} from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function MealShoppingList() {
    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    const toggleItem = (id: number) => {
        setCheckedItems((prev) =>
            prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
        );
    };

    return (
        <Card className="p-6 mt-12">
            <CardHeader>
                <div className="flex gap-2 items-center">
                    <ShoppingCart className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Shopping List</h3>
                </div>
                <p className="text-gray-500 text-sm">Items needed for this week&apos;s meals</p>
            </CardHeader>
            <CardContent>
                {shoppingListData.length > 0 ? (
                    <>
                        {shoppingListData.slice(0, 5).map((item) => {
                            const isChecked = checkedItems.includes(item.id);
                            return (
                                <label
                                    key={item.id}
                                    className="flex items-center gap-2 mb-2 cursor-pointer w-fit"
                                >
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => toggleItem(item.id)}
                                        className="w-4 h-4 accent-primary"
                                    />
                                    <span
                                        className={isChecked ? "line-through text-gray-400" : ""}
                                    >
                                        {item.name} — {item.amount}
                                    </span>
                                </label>
                            );
                        })}
                        {shoppingListData.length > 5 && (
                            <p className="text-sm text-muted-foreground mt-2">
                                +{shoppingListData.length - 5} more items
                            </p>
                        )}
                    </>
                ) : (
                    <p className="text-gray-500 text-sm">No items in shopping list</p>
                )}
                <Separator className="my-4" />
                <Button className="w-full cursor-pointer">
                    View Full List
                </Button>
            </CardContent>
        </Card>
    );
}
