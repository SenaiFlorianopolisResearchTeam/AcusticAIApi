import { z } from "zod"

export const SignUser = z.object({
    name: z.string().min(6),
    email: z.string().email().min(5),
    password: z.string().min(6),
    rpassword: z.string().min(6), 
});

export const LogUser = z.object({
    email: z.string().email().min(5),
    password: z.string().min(6),
});
