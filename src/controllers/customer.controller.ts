import type { Request, Response, NextFunction } from 'express';
import type { CreateCustomerInput, UpdateCustomerInput } from '../schemas/customer.schema';
import * as CustomerService from '../services/customer.service';

export async function getAllCustomers(_request: Request, response: Response, next: NextFunction) {
	try {
		const customers = await CustomerService.findAllCustomers();
		response.status(200).json(customers);
	} catch (error) {
		next(error);
	}
}

export async function getCustomerById(request: Request, response: Response, next: NextFunction) {
	try {
		const id = Number(request.params.id);
		
		if (isNaN(id)) {
			return response.status(400).json({ message: 'ID inválido' });
		}

		const customer = await CustomerService.findCustomerById(id);

		if (!customer) {
			return response.status(404).json({ message: 'Cliente não encontrado' });
		}

		response.status(200).json(customer);
	} catch (error) {
		next(error);
	}
}

export async function createCustomer(request: Request, response: Response, next: NextFunction) {
	try {
		const { name, email } = request.body as CreateCustomerInput;
		const customer = await CustomerService.insertCustomer({ name, email });
		
		response.status(201).json(customer);
	} catch (error) {
		next(error);
	}
}

export async function updateCustomer(request: Request, response: Response, next: NextFunction) {
	try {
		const id = Number(request.params.id);
		
		if (isNaN(id)) {
			return response.status(400).json({ message: 'ID inválido' });
		}

		const { name, email, status } = request.body as UpdateCustomerInput;
		const customer = await CustomerService.modifyCustomer(id, { name, email, status });

		if (!customer) {
			return response.status(404).json({ message: 'Cliente não encontrado para atualização' });
		}

		response.status(200).json(customer);
	} catch (error) {
		next(error);
	}
}

export async function deleteCustomer(request: Request, response: Response, next: NextFunction) {
	try {
		const id = Number(request.params.id);

		if (isNaN(id)) {
			return response.status(400).json({ message: 'ID inválido' });
		}
		
		await CustomerService.removeCustomer(id); 

		response.status(204).send();
	} catch (error) {
		next(error);
	}
}
