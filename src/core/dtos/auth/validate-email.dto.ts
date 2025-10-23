import { z } from 'zod';

export const validateEmailSchema = z.object({
  token: z.string().min(1, 'El token es requerido'),
});

export type ValidateEmailDto = z.infer<typeof validateEmailSchema>;

export interface ValidateEmailResponse {
  message: string;
  user?: any;
}
