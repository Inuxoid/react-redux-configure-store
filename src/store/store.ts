
import {configureStore} from "@reduxjs/toolkit";
import cashReducer  from "./cashSlice.ts";
import customerReducer from "./customerSlice.ts";


export const store = configureStore({
    reducer: {
        cash: cashReducer,
        customers: customerReducer ,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;