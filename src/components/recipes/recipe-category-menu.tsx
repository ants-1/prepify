import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"

type Category = { id: string; name: string; count?: number };

type RecipeCategoryMenuProps = {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export const RecipeCategoryMenu: React.FC<RecipeCategoryMenuProps> = ({ categories, setSelectedCategory, selectedCategory }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                {categories.map((category: Category) => (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left p-2 rounded-lg transition-colors ${selectedCategory === category.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                            }`}
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-sm">{category.name}</span>
                            <span className="text-xs opacity-70">{category.count}</span>
                        </div>
                    </button>
                ))}
            </CardContent>
        </Card>
    )
}