import { z } from "zod";

// login
export const loginSchema = z.object({
   email: z.string().email("E-poçt tələb olunur"),
   password: z.string().min(6).max(50),
});
export type LoginSchemaType = z.infer<typeof loginSchema>;

// register
export const registerSchema = z.object({
   username: z.string().min(2),
   email: z.string().email("E-poçt tələb olunur"),
   password: z.string().min(6).max(50),
});
export type RegisterSchemaType = z.infer<typeof registerSchema>;
