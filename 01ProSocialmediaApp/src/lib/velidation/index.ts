import * as z from "zod";

export const singupFormSchema = z.object({
  name: z.string().min(3, { message: "Too short name " }),
  username: z
    .string()
    .min(3, { message: "Too short username" })
    .max(50, { message: "Too long username" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password is to short" }),
});
