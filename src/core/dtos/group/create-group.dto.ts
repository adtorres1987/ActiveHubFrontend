import { z } from 'zod';

export const createGroupSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  active: z.boolean().default(true),
});

export type CreateGroupDto = z.infer<typeof createGroupSchema>;
