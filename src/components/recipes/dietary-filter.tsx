"use client";

import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"

type DietaryFilterProps = {
    dietaryFilters: { id: string; name: string }[];
};
export const DietaryFilter: React.FC<DietaryFilterProps> = ({ dietaryFilters }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Dietary Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {dietaryFilters.map((filter: { id: string; name: string }) => (
                    <div key={filter.id} className="flex items-center space-x-2">
                        <Checkbox id={filter.id} />
                        <Label htmlFor={filter.id} className="text-sm">
                            {filter.name}
                        </Label>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}