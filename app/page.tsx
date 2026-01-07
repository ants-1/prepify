import prisma from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-8">Prepify</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ol>
    </div>
  );
}
