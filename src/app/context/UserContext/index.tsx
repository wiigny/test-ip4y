"use client";

import { IUser } from "@/app/components/Main";
import { api } from "@/app/service/api";
import { createContext, useEffect, useState } from "react";
import { IUserContextProps } from "./types";

export const UserContext = createContext<IUserContextProps>(
  {} as IUserContextProps
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<IUser[]>();

  useEffect(() => {
    (async () => {
      const response: IUser[] = (await api.get("/users")).data;

      setUsers(response);
    })();
  }, []);

  const getUsers = async () => {
    const response: IUser[] = (await api.get("/users")).data;

    setUsers(response);
  };

  return (
    <UserContext.Provider value={{ users, getUsers }}>
      {children}
    </UserContext.Provider>
  );
};
