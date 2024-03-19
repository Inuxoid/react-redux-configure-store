import {Customer} from "../types.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CustomerState {
    customers : Customer[]
}

const initialState: CustomerState  = {
    customers: [],
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.customers.push(action.payload);
        },
        addCustomersArray: (state, action: PayloadAction<Customer[]>) => {
            for (const customer of action.payload) {
                state.customers.push(customer);
            }
        },
        deleteCustomer: (state, action: PayloadAction<number>) => {
            state.customers = state.customers.filter(customer => customer.id !== action.payload);
        }
    }
});

export default customerSlice.reducer;
export const { addCustomer, deleteCustomer, addCustomersArray } = customerSlice.actions;