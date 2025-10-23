import { z } from 'zod';

export const createInstitutionSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  ein: z.string().min(3, 'El EIN debe tener al menos 3 caracteres'),
  address: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email('Debe ser un email válido').optional().or(z.literal('')),
  active: z.boolean().default(true),
});

export type CreateInstitutionDto = z.infer<typeof createInstitutionSchema>;
