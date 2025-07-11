import { Plus, Copy, Download, Users } from "lucide-react";

import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function QuickActions() {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent hover:cursor-pointer">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Recipe
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent hover:cursor-pointer">
                    <Copy className="h-4 w-4 mr-2" />
                    Duplicate Last Week
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent hover:cursor-pointer">
                    <Download className="h-4 w-4 mr-2" />
                    Generate Shopping List
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent hover:cursor-pointer">
                    <Users className="h-4 w-4 mr-2" />
                    Share with Family
                </Button>
            </CardContent>
        </Card>
    )
}