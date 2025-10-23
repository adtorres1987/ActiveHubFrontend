import { z } from 'zod';

export const updateUserSchema = z.object({
  username: z.string().min(3, 'El usuario debe tener al menos 3 caracteres').optional(),
  email: z.string().email('Debe ser un email válido').optional(),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').optional(),
  phone: z.string().optional(),
  image: z.string().optional(),
  active: z.boolean().optional(),
  emailValidated: z.boolean().optional(),
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').optional(),
  lastname: z.string().min(2, 'El apellido debe tener al menos 2 caracteres').optional(),
});

export type UpdateUserDto = z.infer<typeof updateUserSchema>;
