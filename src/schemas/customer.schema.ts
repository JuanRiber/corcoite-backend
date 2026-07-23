import { z } from 'zod';

export const createCustomerSchema = z.object({
	name: z.string().trim().min(1, { message: 'O nome é obrigatório' }),
	email: z.string().trim().email({ message: 'E-mail inválido' })
});

export const updateCustomerSchema = z.object({
	name: z.string().trim().min(1, { message: 'O nome não pode ser vazio' }).optional(),
	email: z.string().trim().email({ message: 'E-mail inválido' }).optional(),
	status: z.boolean().optional()
});

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>;
