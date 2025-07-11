import { mealTemplates } from "@/lib/mock-data"
import { Star } from "lucide-react"
import { Button } from "../ui/button"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from "../ui/card"
import { ScrollArea } from "../ui/scroll-area"


export default function MealPlanTemplates() {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle className="text-lg">Meal Plan Templates</CardTitle>
                <CardDescription>Quick start with pre-made plans</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-64">
                    <div className="space-y-3">
                        {mealTemplates.map((template, index) => (
                            <div
                                key={index}
                                className="border rounded-lg p-3 cursor-pointer hover:bg-muted/50 transition-colors"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-medium text-sm">{template.name}</h4>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                        <span className="text-xs">{template.rating}</span>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mb-2">{template.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground">{template.meals} meals</span>
                                    <Button variant="ghost" size="sm" className="h-6 text-xs">
                                        Use Template
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}