import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string().min(3, 'El usuario debe tener al menos 3 caracteres'),
  email: z.string().email('Debe ser un email válido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastname: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  rolId: z.number().positive('Debe seleccionar un rol'),
});

export type RegisterDto = z.infer<typeof registerSchema>;

export interface RegisterResponse {
  user: any;
  accessToken: string;
  refreshToken: string;
}
