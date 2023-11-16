"use client";

import { useState } from "react";
import Modal from "../Modal";
import FormRegister from "../Modal/formRegister";
import Button from "../Button";
import { useUser } from "@/app/hooks/useUser";
import axios from "axios";
import { toast } from "sonner";

export default function Aside() {
  const [isOpen, setIsOpen] = useState(false);
  const { users } = useUser();

  const handleSendInfo = async () => {
    if (users?.length === 0) {
      return;
    }

    try {
      const response = await axios.post(
        "https://api-teste.ip4y.com.br/cadastro",
        users
      );

      toast.success("Informações enviada com sucesso!");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <aside className="max-w-xs w-full bg-slate-500 min-h-screen flex flex-col justify-between text-white items-start py-8 pl-5">
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        nameButton="Cadastrar usuário"
        title="Cadastro de Usuário"
      >
        <FormRegister />
      </Modal>

      <Button
        onClick={handleSendInfo}
        className="flex border-b-2 border-b-white hover:border-b-blue-400 hover:px-3 duration-200"
      >
        Enviar informações
      </Button>
    </aside>
  );
}
