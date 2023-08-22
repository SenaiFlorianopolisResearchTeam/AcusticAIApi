import { z } from "zod"

const User = z.object({
    name: z.string().min(6),
    email: z.string().email().min(5),
    password: z.string().min(6),
    rpassword: z.string().min(6), 
});

export default User