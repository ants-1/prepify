import { EditIcon, Trash } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Checkbox } from "../ui/checkbox"

type ShoppingListCardProps = {
    name: string;
    quantity: string;
    price: string;
}

export const ShoppingListCard: React.FC<ShoppingListCardProps> = ({ name, quantity, price }) => {
    return (
        <Card>
            <CardContent className="flex justify-between">
                <div className="flex items-center gap-2">
                    <Checkbox />
                    <div>
                        <p className="font-bold text-lg">{name}</p>
                        <p className="text-sm">{quantity}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <p className="font-bold">{price}</p>
                    <EditIcon className="w-5 h-5 text-gray-400" />
                    <Trash className="w-5 h-5" />
                </div>
            </CardContent>
        </Card>
    )
}