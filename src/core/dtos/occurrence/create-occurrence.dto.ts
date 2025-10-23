import { z } from 'zod';

export const createOccurrenceSchema = z.object({
  eventId: z.number().positive('Debe seleccionar un evento'),
  date: z.string().min(1, 'La fecha es requerida'),
  duration: z.number().positive('La duración debe ser un número positivo'),
  roomId: z.number().positive('Debe seleccionar una sala').optional(),
});

export type CreateOccurrenceDto = z.infer<typeof createOccurrenceSchema>;
