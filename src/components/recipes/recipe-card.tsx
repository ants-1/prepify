import { Heart, Star, Clock, Users, ChefHat, Eye, Calendar } from "lucide-react"
import Image from "next/image"
import { Recipe } from "@/lib/types"

import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"

type RecipeCardProps = {
    recipe: Recipe;
    setSelectedRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
};

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, setSelectedRecipe }) => {
    return (
        <Card className="group cursor-pointer hover:shadow-lg transition-all duration-200" >
            <div className="relative" onClick={() => setSelectedRecipe(recipe)}>
                <Image
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-2 right-2 ${recipe.isFavorite ? "text-red-500" : "text-white"} hover:text-red-500`}
                >
                    <Heart className={`h-4 w-4 ${recipe.isFavorite ? "fill-current" : ""}`} />
                </Button>
                <div className="absolute bottom-2 left-2 flex gap-1">
                    {recipe.tags.slice(0, 2).map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
            <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg line-clamp-1">{recipe.name}</h3>
                    <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{recipe.rating}</span>
                    </div>
                </div>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{recipe.description}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{recipe.prepTime + recipe.cookTime} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{recipe.servings} servings</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <ChefHat className="h-4 w-4" />
                        <span>{recipe.difficulty}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{recipe.calories} calories</span>
                    <div className="flex gap-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                                e.stopPropagation()
                                setSelectedRecipe(recipe)
                            }}
                        >
                            <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                            <Calendar className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}