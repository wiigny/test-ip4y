import { combineNameUsers } from "@/app/utils/combineNameUsers";
import { IUser } from "../Main";
import { formatDate } from "@/app/utils/formatDate";
import DeleteUser from "../Modal/deleteUser";
import UpdateUser from "../Modal/updateUser";

interface IListUserProps {
  user: IUser;
}

export default function CardUser({ user }: IListUserProps) {
  return (
    <li className="bg-white rounded-lg px-2 py-1 flex justify-between">
      <div>
        <p className="text-base text-gray-900 font-medium">
          id:{" "}
          <span className="text-sm text-gray-700 font-normal">{user.id}</span>
        </p>

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
          <span className="text-sm text-gray-700 font-normal">{user.cpf}</span>
        </p>

        <p className="text-base text-gray-900 font-medium">
          Data de nascimento:{" "}
          <span className="text-sm text-gray-700 font-normal">
            {formatDate(user.birthday)}
          </span>
        </p>

        <p className="text-base text-gray-900 font-medium">
          Gênero:{" "}
          <span className="text-sm text-gray-700 font-normal">
            {user.gender === "male" ? "Masculino" : "Feminino"}
          </span>
        </p>

        <p className="text-base text-gray-900 font-medium">
          Criado em:{" "}
          <span className="text-sm text-gray-700 font-normal">
            {formatDate(user.created_at, true)}
          </span>
        </p>

        <p className="text-base text-gray-900 font-medium">
          Atualizado em:{" "}
          <span className="text-sm text-gray-700 font-normal">
            {formatDate(user.updated_at, true)}
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <UpdateUser user={user} />

        <DeleteUser user={user} />
      </div>
    </li>
  );
}
