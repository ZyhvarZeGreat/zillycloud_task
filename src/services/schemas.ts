import { z, string } from "zod";

/* This TypeScript code snippet is defining a schema using the Zod library for validating signup data.
Here's a breakdown of what the schema is doing: */
const phoneNumberRegex =
  /^\+?(\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
// const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif"];
export const loginSchema = z.object({
  email: string().email(),
  password: z.string().min(8),
});

export const signupSchema = z.object({
  name: string().min(8, {
    message: "Username must contain at least 8 characters",
  }),
  email: string().email(),
  locality_id: string(),
  phone: z.string().regex(phoneNumberRegex, {
    message: "Invalid phone number format",
  }),
  avatar: z
    .custom<FileList>(
      (files) =>
        files.length > 0 && ["image/jpeg", "image/png"].includes(files[0].type),
      {
        message: "The avatar field must be a file of type: jpg, jpeg, png.",
      }
    )
    .refine((files) => files[0] !== undefined, {
      message: "The avatar field must be an image.",
    }),
  // Other fields can go her
  password: z.string().min(8),
  password_confirmation: z.string().min(8),
});
