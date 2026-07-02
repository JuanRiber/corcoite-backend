export type Customer = {
	id: number;
	name: string;
	email: string;
	status: boolean;
};

export type CreateCustomer = Omit<Customer, 'id' | 'status'>;
export type CustomerWithoutId = Omit<Customer, 'id'>;
export type UpdateCustomer = Partial<CustomerWithoutId>;
