import { api } from "@/app/service/api";
import ListUsers from "../ListUsers";

export interface IUser {
  id: string;
  cpf: string;
  name: string;
  lastname: string;
  birthday: string;
  email: string;
  gender: string;
  created_at: string;
  updated_at: string;
}

export default async function Main() {
  return (
    <main className="py-8 w-full container max-h-screen">
      <h1 className="text-3xl font-semibold">Lista de usuários</h1>
      <ListUsers />
    </main>
  );
}
