import { z } from 'zod';

export const createRoomSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  capacity: z.number().positive('La capacidad debe ser un número positivo').optional(),
  location: z.string().optional(),
  available: z.boolean().default(true),
  active: z.boolean().default(true),
  branchId: z.number().positive('Debe seleccionar una sucursal'),
});

export type CreateRoomDto = z.infer<typeof createRoomSchema>;
