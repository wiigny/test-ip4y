import z from "zod";

export const registerUserForm = z.object({
  name: z.string().min(3, "Insira pelomenos 3 caracteres"),
  lastname: z.string().min(3, "Insira pelomenos 3 caracteres"),
  email: z.string().email("Insira um email válido"),
  cpf: z
    .string()
    .max(14, "Insira um CPF válido")
    .min(14, "Insira um CPF válido")
    .refine(
      (val) => {
        const num = String(
          val
            .replace(/[^0-9]+/g, "")
            .split("")
            .reduce((acc, cur) => acc + +cur, 0)
        );

        if (num[0] == num[1]) {
          return val;
        }
      },
      { message: "Insira um CPF válido" }
    ),
  birthday: z.string().refine(
    (val) => {
      const date = new Date(val);

      if (!isNaN(date.getTime())) {
        return val;
      }
    },
    { message: "Insira uma data de nascimento válida" }
  ),
  gender: z.enum(["DEFAULT", "male", "female"]),
});

export type TRegisterUserForm = z.infer<typeof registerUserForm>;
