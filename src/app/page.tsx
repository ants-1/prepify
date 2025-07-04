import Navbar from "@/components/navbar";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Calendar, ChefHat, Clock, ShoppingCart, Star } from "lucide-react";
import Footer from "@/components/footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const features = [
  {
    icon: Calendar,
    title: "Smart Meal Planning",
    description:
      "Plan your entire week in minutes with AI-powered suggestions based on your preferences and dietary needs.",
  },
  {
    icon: ChefHat,
    title: "Recipe Discovery",
    description: "Access thousands of recipes with step-by-step instructions, nutritional info, and cooking tips.",
  },
  {
    icon: ShoppingCart,
    title: "Auto Shopping Lists",
    description: "Generate smart shopping lists automatically from your meal plans with organized categories.",
  },
  {
    icon: Clock,
    title: "Time Saving",
    description: "Save hours each week with streamlined meal prep schedules and batch cooking suggestions.",
  },

];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Busy Mom of 3",
    content:
      "Prepify has transformed our family dinners. I save 3 hours every week and my kids actually eat their vegetables now!",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
  },
  {
    name: "Mike Chen",
    role: "Fitness Enthusiast",
    content:
      "The meal prep feature is incredible. I've never been more consistent with my diet goals.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Working Professional",
    content: "Finally, a meal planning app that actually works! The shopping lists alone have saved me so much time.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
  },
]

export default async function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 my-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center text-orange-600">Welcome to Prepify</h1>
          {/* Features Section */}
          <section className="py-20 pb-30">
            <div className="container px-4 mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-2xl font-semibold">Everything You Need to Plan Perfect Meals</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  From meal planning to grocery shopping, we&apos;ve got every step of your cooking journey covered.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6 border rounded-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="h-12 w-12 bg-orange-200 rounded-lg flex items-center justify-center mb-2">
                        <feature.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          {/* How It Works */}
          <section className="py-30 border-t">
            <div className="container px-4 mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold">How It Works</h2>
                <p className="text-xl text-muted-foreground">Get started in just 3 simple steps</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="h-16 w-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    1
                  </div>
                  <h3 className="text-xl font-semibold">Set Your Preferences</h3>
                  <p className="text-muted-foreground">
                    Tell us about your dietary needs, cooking skills, and family size to get personalized recommendations.
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="h-16 w-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">Plan Your Week</h3>
                  <p className="text-muted-foreground">
                    Choose from thousands of recipes or let our AI suggest meals that fit your schedule and preferences.
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="h-16 w-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">Shop & Cook</h3>
                  <p className="text-muted-foreground">
                    Get organized shopping lists and step-by-step cooking instructions to make delicious meals effortlessly.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonials */}
          <section className="py-30 border-t">
            <div className="container px-4 mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold">Loved by Thousands of Home Cooks</h2>
                <p className="text-xl text-muted-foreground">See what our users are saying about MealPlan</p>
              </div>
              <div className="grid gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-6 border rounded-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6">&quot{testimonial.content}&quot</p>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
