import { z } from 'zod';

export const createUserSchema = z.object({
  // Datos de usuario
  username: z.string().min(3, 'El usuario debe tener al menos 3 caracteres'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  email: z.string().email('Debe ser un email válido'),
  image: z.string().optional(),
  phone: z.string().optional(),
  emailValidated: z.boolean().optional(),
  active: z.boolean().optional(),

  // Datos de persona
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  lastname: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  birthdate: z.string().optional(),
  weight: z.string().optional(),
  height: z.string().optional(),

  // Rol
  rolId: z.number().positive('Debe seleccionar un rol'),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;

export interface CreateUserResponse {
  id: number;
  username: string;
  email: string;
  image: string | null;
  phone: string | null;
  emailValidated: boolean;
  active: boolean;
  person: {
    id: number;
    name: string;
    lastname: string;
    birthdate: string | null;
    weight: string | null;
    height: string | null;
  };
  role: {
    id: number;
    nameRol: string;
    description: string;
  };
}
