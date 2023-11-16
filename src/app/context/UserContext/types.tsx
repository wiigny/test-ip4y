import { IUser } from "@/app/components/Main";

export interface IUserContextProps {
  users: IUser[] | undefined;
  getUsers: () => void;
}
