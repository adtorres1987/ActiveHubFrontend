import { z } from 'zod';

export const createRoleSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  description: z.string().min(5, 'La descripción debe tener al menos 5 caracteres'),
});

export type CreateRoleDto = z.infer<typeof createRoleSchema>;
