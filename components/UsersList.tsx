"use client";

import { useQuery } from "@apollo/client/react";
import { GET_USERS } from "@/graphql/queries/getUsersQuery";
import { User } from "@/lib/types";

export default function UsersList() {
  const { data, loading, error } = useQuery<{ users: User[] }>(GET_USERS);

  const users: User[] | undefined = data?.users;

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <ol>
      {users?.map((user: any) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ol>
  )
}