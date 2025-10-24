import { z } from 'zod';

export const updateUserSchema = z.object({
  username: z.string().min(3, 'El usuario debe tener al menos 3 caracteres').optional(),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').optional(),
  email: z.string().email('Debe ser un email válido').optional(),
  image: z.string().optional(),
  phone: z.string().optional(),
  emailValidated: z.boolean().optional(),
  active: z.boolean().optional(),
});

export type UpdateUserDto = z.infer<typeof updateUserSchema>;

export interface UpdateUserResponse {
  id: number;
  username: string;
  email: string;
  image: string | null;
  phone: string | null;
  emailValidated: boolean;
  active: boolean;
  updatedAt: string;
  roleId: number;
}
