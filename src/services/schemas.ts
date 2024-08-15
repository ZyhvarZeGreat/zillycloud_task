import { z, string } from "zod";

/* This TypeScript code snippet is defining a schema using the Zod library for validating signup data.
Here's a breakdown of what the schema is doing: */

export const loginSchema = z.object({
  email: string().email(),
  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/, {
      message:
        "Password must contain at least one uppercase letter and one symbol ",
    }),
});

export const signupSchema = z.object({
  username: string().min(8, {
    message: "Username must contain at least 8 characters",
  }),
  email: string().email(),
  password: z
    .string()
    .min(8)
    .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/, {
      message:
        "Password must contain at least one uppercase letter and one symbol ",
    }),
});
