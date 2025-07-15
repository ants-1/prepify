"use client";

import { BookOpen } from "lucide-react"

import { Separator } from "../ui/separator";
import { Button } from "../ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"

export const QuickStats: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Your Recipe Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Total Recipes</span>
                    <span className="font-semibold">156</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Favorites</span>
                    <span className="font-semibold">23</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Created by You</span>
                    <span className="font-semibold">12</span>
                </div>
                <Separator />
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Cookbooks
                </Button>
            </CardContent>
        </Card>
    )
}