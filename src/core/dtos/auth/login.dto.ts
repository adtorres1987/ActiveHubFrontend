import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Debe ser un email válido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export type LoginDto = z.infer<typeof loginSchema>;

export interface LoginResponse {
  user: any;
  accessToken: string;
  refreshToken: string;
}
