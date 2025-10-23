import { z } from 'zod';

export const createEventSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  startDate: z.string().min(1, 'La fecha de inicio es requerida'),
  endDate: z.string().min(1, 'La fecha de fin es requerida'),
  groupId: z.number().positive('Debe seleccionar un grupo'),
  active: z.boolean().default(false),
});

export const createRecurrentEventSchema = createEventSchema.extend({
  recurrence: z.object({
    frequency: z.enum(['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY']),
    interval: z.number().positive('El intervalo debe ser positivo').default(1),
    count: z.number().positive('El conteo debe ser positivo').optional(),
    until: z.string().optional(),
    byDay: z.string().optional(),
  }),
});

export type CreateEventDto = z.infer<typeof createEventSchema>;
export type CreateRecurrentEventDto = z.infer<typeof createRecurrentEventSchema>;
