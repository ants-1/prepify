import { PrismaClient, Prisma } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    email: "johndoe@example.com",
    name: "John Doe",
    password: "test",
  },
  {
    email: "maxsmith@example.com",
    name: "Max Smith",
    password: "test",
  },
];

export async function main() {
  for (const user of userData) {
    await prisma.user.create({ data: user });
  }
}

main();