"use client";

import Button from "../Button";
import { Dispatch, SetStateAction, useState } from "react";
import { IoIosClose } from "react-icons/io";

interface IModalRegisterProps {
  children: React.ReactNode;
  title: string;
  nameButton?: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({
  children,
  title,
  nameButton,
  isOpen,
  setIsOpen,
}: IModalRegisterProps) {
  return (
    <>
      {nameButton && (
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="flex border-b-2 border-b-white hover:border-b-blue-400 hover:px-3 duration-200"
        >
          {nameButton}
        </Button>
      )}

      {isOpen && (
        <div className="absolute z-10 left-0 right-0 top-0 min-h-screen flex justify-center items-center bg-black/40 py-10 px-3">
          <section className="relative max-w-xs w-full bg-white py-6 px-5 rounded-lg">
            <Button
              className="absolute top-2 right-2 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <IoIosClose size={28} />
            </Button>

            <header className="mb-6 text-xl font-semibold text-gray-800">
              {title}
            </header>

            {children}
          </section>
        </div>
      )}
    </>
  );
}
