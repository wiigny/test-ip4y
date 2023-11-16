"use client";

import { useState } from "react";
import Button from "../Button";
import Modal from ".";
import { IUser } from "../Main";
import { combineNameUsers } from "@/app/utils/combineNameUsers";
import { api } from "@/app/service/api";
import { toast } from "sonner";
import FormUpdate from "./formUpdate";

interface IDeleteUserProps {
  user: IUser;
}

export default function UpdateUser({ user }: IDeleteUserProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="text-gray-600 hover:text-white bg-yellow-200 hover:bg-yellow-500 rounded-lg p-2 duration-200"
      >
        Editar
      </Button>

      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Atualizar usuário">
          <FormUpdate user={user} />
        </Modal>
      )}
    </>
  );
}
