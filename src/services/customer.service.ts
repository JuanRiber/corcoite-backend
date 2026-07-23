import customers from "../mocks/customer.mock";
import type { Customer } from "../types";

export function findAllCustomers(): Customer[] {
    return customers;
}
