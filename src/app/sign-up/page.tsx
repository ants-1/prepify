import { SignUpForm } from "@/components/forms/sign-up-form";
import { ChefHat } from "lucide-react";


export default function SignUpPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p">
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
                    <ChefHat className="h-8 w-8 text-orange-300 dark:text-orange-600" />
                </div>
                <h1 className="text-2xl font-bold">Create your account</h1>
                <p className=" mt-2">Start your meal planning journey today</p>
            </div>
            <SignUpForm />
        </div>
    )
}