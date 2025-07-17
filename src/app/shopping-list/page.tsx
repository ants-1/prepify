import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Plus, Share } from "lucide-react";
import QuickActions from "@/components/meal-plans/quick-actions";
import { ShoppingListPanel } from "@/components/shopping-list/shopping-list-panel";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ShoppingList() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container mx-auto px-4 my-20">
                <section className="flex flex-col md:flex-row md:justify-between">
                    <div>
                        <h1 className=" text-4xl font-bold mb-2 text-orange-600">Meal Plans</h1>
                        <p className="text-gray-500 text-lg">Plan and organise your weekly meals.</p>
                    </div>
                    <div className="flex gap-2 mt-6">
                        <Button className="hover:cursor-pointer">
                            <Share className="w-5 h-5" />
                            <span>Share</span>
                        </Button>
                        <Button className="hover:cursor-pointer">
                            <Plus className="w-5 h-5" />
                            <span>Add Item</span>
                        </Button>
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row lg:gap-6 mt-10 space-y-10">
                    <Tabs className="lg:w-2/3" defaultValue="this-week">
                        <TabsList className="w-full h-16">
                            <TabsTrigger value="this-week" className="flex flex-col">
                                <p className="font-semibold">This Week</p>
                                <p className="text-sm font-light">0/23 items</p>
                            </TabsTrigger>
                            <TabsTrigger value="next-week" className="flex flex-col">
                                <p className="font-semibold">Next Week</p>
                                <p className="text-sm font-light">0/15 items</p>
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent className="p-2" value="this-week">
                            <ShoppingListPanel />
                        </TabsContent>
                        <TabsContent className="p-2" value="next-week">
                            <ShoppingListPanel />
                        </TabsContent>
                    </Tabs>
                    <div className="lg:w-1/3">
                        <QuickActions />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}