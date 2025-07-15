import { RecipeCard } from "./recipe-card";
import { Recipe } from "@/lib/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


type RecipeListProps = {
  filteredRecipes: Recipe[];
  recipes: Recipe[];
  setSelectedRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>;
};

export const RecipeList: React.FC<RecipeListProps> = ({ filteredRecipes, recipes, setSelectedRecipe }) => {
    return (
        <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                    Showing {filteredRecipes.length} of {recipes.length} recipes
                </p>
                <Select defaultValue="rating">
                    <SelectTrigger className="w-[140px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="prep-time">Prep Time</SelectItem>
                        <SelectItem value="calories">Calories</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredRecipes?.map((recipe: Recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} setSelectedRecipe={setSelectedRecipe} />
                ))}
            </div>
        </div>
    )
}