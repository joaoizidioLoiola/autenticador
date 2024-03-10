import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "É necessário um email válido."
  }),
  password: z.string().min(1, {
    message: "A senha é obrigatória."
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "É necessário um email válido."
  }),
  password: z.string().min(6, {
    message: "Mínimo de 6 caracteres."
  }),
  name: z.string().min(1, {
    message: "O nome é obrigatório.",
  }),
});