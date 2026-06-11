import { z } from 'zod';

export const LoginSchema = z.object({
    password: z.string().min(6),
    email: z.string().email(),
});

export const RegisterSchema = z.object({
    password: z.string().min(8),
    email: z.string().email(),
    name: z.string().min(1),
});

export type LoginDto = z.infer<typeof LoginSchema>;
export type RegisterDto = z.infer<typeof RegisterSchema>;