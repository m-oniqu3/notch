import { z } from "zod";

// form has email, password
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  password: z.string().min(6, "Password should be at least 6 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
