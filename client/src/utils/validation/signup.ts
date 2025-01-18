import { z } from "zod";
import { loginSchema } from "./login";

// form has name, email, password
export const signupSchema = loginSchema.extend({
  name: z
    .string({ message: "Name is required" })
    .min(3, "Name should be at least 3 characters"),
});

export type SignupSchema = z.infer<typeof signupSchema>;
