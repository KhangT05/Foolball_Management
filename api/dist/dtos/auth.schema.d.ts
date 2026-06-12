import { z } from 'zod';
export declare const LoginSchema: z.ZodObject<{
    password: z.ZodString;
    email: z.ZodString;
}, z.core.$strip>;
export declare const RegisterSchema: z.ZodObject<{
    password: z.ZodString;
    email: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type LoginDto = z.infer<typeof LoginSchema>;
export type RegisterDto = z.infer<typeof RegisterSchema>;
//# sourceMappingURL=auth.schema.d.ts.map