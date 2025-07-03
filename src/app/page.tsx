import Navbar from "@/components/navbar";
import prisma from '@/lib/prisma'

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Prepify</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Plan Your Week</h2>
              <p className="text-muted-foreground">
                Create meal plans for the entire week and stay organized with your cooking schedule.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Discover Recipes</h2>
              <p className="text-muted-foreground">
                Browse through thousands of recipes and find new favorites for your meal plans.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Smart Shopping</h2>
              <p className="text-muted-foreground">
                Generate shopping lists automatically based on your meal plans and recipes.
              </p>
            </div>
          </div>
        </div>
        <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
          {users.map((user) => (
            <li key={user.id} className="mb-2">
              {user.name}
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
