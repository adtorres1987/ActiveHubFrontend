import { z } from 'zod';

export const createBranchSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email('Debe ser un email válido').optional().or(z.literal('')),
  active: z.boolean().default(true),
  institutionId: z.number().positive('Debe seleccionar una institución'),
});

export type CreateBranchDto = z.infer<typeof createBranchSchema>;
