import { LoginForm } from "@/components/forms/login-form";
import { ChefHat } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p">
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
                    <ChefHat className="h-8 w-8 text-orange-300 dark:text-orange-600" />
                </div>
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className=" mt-2">Sign in to your MealPlanner account</p>
            </div>

            <LoginForm />

            <div className="text-center mt-8 text-sm text-muted-foreground">
                <p>
                    By signing in, you agree to our{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                    </Link>
                </p>
            </div>
        </div>
    )
}