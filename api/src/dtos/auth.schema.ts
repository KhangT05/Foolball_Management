import { z } from 'zod';

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(1),
});

export type LoginDto = z.infer<typeof LoginSchema>;
export type RegisterDto = z.infer<typeof RegisterSchema>;