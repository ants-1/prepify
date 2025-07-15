import { Heart, Share, Clock, Users, ChefHat, Star, Calendar, Edit } from "lucide-react"
import { Recipe } from "@/lib/types"
import Image from "next/image"

import { Checkbox } from "../ui/checkbox"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import { Separator } from "../ui/separator"


type RecipeDetailModalProps = {
    selectedRecipe: Recipe;
    setSelectedRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
};

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({ selectedRecipe, setSelectedRecipe }) => {
    return (
        <Dialog open={!!selectedRecipe} onOpenChange={() => setSelectedRecipe(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader className="mt-5">
                    <div className="flex items-start justify-between">
                        <div>
                            <DialogTitle className="text-2xl">{selectedRecipe.name}</DialogTitle>
                            <DialogDescription className="mt-2">{selectedRecipe.description}</DialogDescription>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="icon">
                                <Heart className={`h-4 w-4 hover:cursor-pointer ${selectedRecipe.isFavorite ? "fill-red-500 text-red-500" : ""}`} />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Share className="h-4 w-4 hover:cursor-pointer" />
                            </Button>
                        </div>
                    </div>
                </DialogHeader>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <Image
                            src={selectedRecipe.image || "/placeholder.svg"}
                            alt={selectedRecipe.name}
                            width={300}
                            height={200}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center p-3 bg-muted rounded-lg">
                                <Clock className="h-5 w-5 mx-auto mb-1" />
                                <p className="text-sm font-medium">{selectedRecipe.prepTime + selectedRecipe.cookTime} min</p>
                                <p className="text-xs text-muted-foreground">Total Time</p>
                            </div>
                            <div className="text-center p-3 bg-muted rounded-lg">
                                <Users className="h-5 w-5 mx-auto mb-1" />
                                <p className="text-sm font-medium">{selectedRecipe.servings}</p>
                                <p className="text-xs text-muted-foreground">Servings</p>
                            </div>
                            <div className="text-center p-3 bg-muted rounded-lg">
                                <ChefHat className="h-5 w-5 mx-auto mb-1" />
                                <p className="text-sm font-medium">{selectedRecipe.difficulty}</p>
                                <p className="text-xs text-muted-foreground">Difficulty</p>
                            </div>
                            <div className="text-center p-3 bg-muted rounded-lg">
                                <Star className="h-5 w-5 mx-auto mb-1 fill-yellow-400 text-yellow-400" />
                                <p className="text-sm font-medium">{selectedRecipe.rating}</p>
                                <p className="text-xs text-muted-foreground">{selectedRecipe.reviews} reviews</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">Nutrition (per serving)</h3>
                                <div className="grid grid-cols-4 gap-2 text-sm">
                                    <div className="text-center p-2 bg-muted/50 rounded">
                                        <p className="font-medium">{selectedRecipe.calories}</p>
                                        <p className="text-xs text-muted-foreground">Calories</p>
                                    </div>
                                    <div className="text-center p-2 bg-muted/50 rounded">
                                        <p className="font-medium">{selectedRecipe.protein}g</p>
                                        <p className="text-xs text-muted-foreground">Protein</p>
                                    </div>
                                    <div className="text-center p-2 bg-muted/50 rounded">
                                        <p className="font-medium">{selectedRecipe.carbs}g</p>
                                        <p className="text-xs text-muted-foreground">Carbs</p>
                                    </div>
                                    <div className="text-center p-2 bg-muted/50 rounded">
                                        <p className="font-medium">{selectedRecipe.fat}g</p>
                                        <p className="text-xs text-muted-foreground">Fat</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Button className="flex-1">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Add to Meal Plan
                                </Button>
                                {/* Only show if created recipe */}
                                <Button variant="outline">
                                    <Edit className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-3">Ingredients</h3>
                            <ul className="space-y-2">
                                {selectedRecipe.ingredients.map((ingredient: string, index: number) => (
                                    <li key={index} className="flex items-center gap-2 text-sm">
                                        <Checkbox />
                                        <span>{ingredient}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="font-semibold mb-3">Instructions</h3>
                            <ol className="space-y-3">
                                {selectedRecipe.instructions.map((instruction: string, index: number) => (
                                    <li key={index} className="flex gap-3 text-sm">
                                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">
                                            {index + 1}
                                        </span>
                                        <span>{instruction}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="flex gap-1 flex-wrap">
                            {selectedRecipe.tags.map((tag: string) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}