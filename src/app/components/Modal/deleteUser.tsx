"use client";

import { useState } from "react";
import Button from "../Button";
import Modal from ".";
import { IUser } from "../Main";
import { combineNameUsers } from "@/app/utils/combineNameUsers";
import { api } from "@/app/service/api";
import { toast } from "sonner";
import { useUser } from "@/app/hooks/useUser";

interface IDeleteUserProps {
  user: IUser;
}

export default function DeleteUser({ user }: IDeleteUserProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { getUsers } = useUser();

  const handleDelete = async () => {
    try {
      const response = await api.delete(`/users/${user.id}`);

      toast.success(`Usuário deletado com sucesso!`);
    } catch (error: any) {
      toast.error(String(Object.values(error.response.data)[0]));
    } finally {
      setIsOpen(false);
      getUsers();
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="text-gray-600 hover:text-white bg-red-200 hover:bg-red-500 rounded-lg p-2 duration-200"
      >
        Excluir
      </Button>

      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Deletar usuário">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Deseja realmente excluir o usuário </h2>

            <div>
              <p className="text-base text-gray-900 font-medium">
                Nome:{" "}
                <span className="text-sm text-gray-700 font-normal">
                  {combineNameUsers(user.name, user.lastname)}
                </span>
              </p>

              <p className="text-base text-gray-900 font-medium">
                Email:{" "}
                <span className="text-sm text-gray-700 font-normal">
                  {user.email}
                </span>
              </p>

              <p className="text-base text-gray-900 font-medium">
                CPF:{" "}
                <span className="text-sm text-gray-700 font-normal">
                  {user.cpf}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <Button
              className="font-medium rounded-lg px-4 py-2 text-gray-600 bg-blue-300 hover:bg-blue-500 hover:text-white duration-200 "
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              className="font-medium rounded-lg px-4 py-2 text-gray-600 bg-red-300 hover:bg-red-500 hover:text-white duration-200"
              onClick={() => handleDelete()}
            >
              Deletar
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
