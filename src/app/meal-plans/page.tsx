import Footer from "@/components/footer";
import MealPlanCalendar from "@/components/meal-plans/meal-plan-calendar";
import MealPlanMenu from "@/components/meal-plans/meal-plan-menu";
import MealPlanTemplates from "@/components/meal-plans/meal-plan-templates";
import MealWeekInfo from "@/components/meal-plans/meal-week-info";
import QuickActions from "@/components/meal-plans/quick-actions";
import Navbar from "@/components/navbar";

import { Button } from "@/components/ui/button";
import { Copy, Download, Share } from "lucide-react";

export default function MealPlans() {
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
                            <Copy className="w-5 h-5" />
                            <span>Copy Plan</span>
                        </Button>
                        <Button className="hover:cursor-pointer">
                            <Share className="w-5 h-5" />
                            <span>Share</span>
                        </Button>
                        <Button className="chover:cursor-pointer">
                            <Download className="w-5 h-5" />
                            <span>Export</span>
                        </Button>
                    </div>
                </section>
                <MealPlanMenu />
                <section className="flex flex-col lg:flex-row lg:gap-6">
                    <div className="lg:w-2/3">
                        <MealPlanCalendar />
                    </div>
                    <div className="lg:w-1/3">
                        <MealWeekInfo />
                        <MealPlanTemplates />
                        <QuickActions />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}