import { CheckCircle, PoundSterling, ShoppingCart } from "lucide-react"

import { Card, CardContent } from "../ui/card"

export const ShoppingListInfo: React.FC = () => {
    return (
        <div className="space-y-6">
            <Card>
                <CardContent className="flex justify-between items-center">
                    <div>
                        <p className="text-sm">Total Items</p>
                        <p className="text-2xl font-semibold">4/23</p>
                    </div>
                    <div>
                        <CheckCircle className="text-green-500" />
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="flex justify-between items-center">
                    <div>
                        <p className="text-sm">Total Items</p>
                        <p className="text-2xl font-semibold">£120</p>
                    </div>
                    <div>
                        <PoundSterling className="text-blue-500" />
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="flex justify-between items-center">
                    <div>
                        <p className="text-sm">Categories</p>
                        <p className="text-2xl font-semibold">8</p>
                    </div>
                    <div>
                        <ShoppingCart className="text-purple-500" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}