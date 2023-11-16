"use client";

import { useUser } from "@/app/hooks/useUser";
import CardUser from "../CardUser";

export default function ListUsers() {
  const { users } = useUser();

  return (
    <ul className="bg-slate-100 rounded-lg w-full h-[85%] mt-10 p-5 flex flex-col gap-4 overflow-y-auto">
      {users?.length ? (
        users.map((user) => <CardUser user={user} key={user.id} />)
      ) : (
        <p className="text-xl text-center">Lista de usuários vazia!</p>
      )}
    </ul>
  );
}
