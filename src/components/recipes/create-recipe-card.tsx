import { Plus } from "lucide-react"

import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader } from "@/components/ui/dialog";

type Category = { id: string; name: string; count?: number };

type CreateRecipeCardProps = {
    categories: Category[];
}

export const CreateRecipeCard: React.FC<CreateRecipeCardProps> = ({ categories }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="lg" className="flex items-center gap-2 mt-6 hover:cursor-pointer w-34">
                    <Plus className="h-5 w-5" />
                    Add Recipe
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto p-10">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Add New Recipe</DialogTitle>
                    <DialogDescription>Create a new recipe to add to your collection</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    <div className="grid  gap-4">
                        <div className="space-y-2 w">
                            <Label htmlFor="recipe-name">Recipe Name</Label>
                            <Input id="recipe-name" placeholder="Enter recipe name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="recipe-category">Category</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.slice(1).map((category: Category) => (
                                        <SelectItem key={category.id} value={category.id}>
                                            {category.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="recipe-description">Description</Label>
                        <Textarea id="recipe-description" placeholder="Brief description of the recipe" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="space-y-2 ">
                            <Label htmlFor="prep-time">Prep Time (min)</Label>
                            <Input id="prep-time" type="number" placeholder="15" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cook-time">Cook Time (min)</Label>
                            <Input id="cook-time" type="number" placeholder="30" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="servings">Servings</Label>
                            <Input id="servings" type="number" placeholder="4" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="difficulty">Difficulty</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select difficulty" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="easy">Easy</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="hard">Hard</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="ingredients">Ingredients</Label>
                        <Textarea id="ingredients" placeholder="List ingredients, one per line" className="min-h-[120px]" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="instructions">Instructions</Label>
                        <Textarea id="instructions" placeholder="Step-by-step instructions" className="min-h-[120px]" />
                    </div>
                    <Button className="w-full">Save Recipe</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}