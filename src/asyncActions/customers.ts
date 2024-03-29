import {Customer} from "../types.ts";

export const fetchCustomers = async () : Promise<Customer[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
}