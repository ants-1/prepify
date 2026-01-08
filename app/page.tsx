import UsersList from "@/components/UsersList";

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-8">Prepify</h1>
      <UsersList />
    </div>
  );
}
