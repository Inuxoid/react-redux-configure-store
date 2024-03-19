import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CashState {
    cash : number
}

const initialState: CashState = {
    cash: 0,
}

export const cashSlice = createSlice({
    name: 'cash',
    initialState,
    reducers: {
        addCash: (state, action: PayloadAction<number>) => {
            state.cash += action.payload;
        },
        getCash: (state, action: PayloadAction<number>) => {
            state.cash -= action.payload;
        }
    }
});

export default cashSlice.reducer;
export const { addCash, getCash } = cashSlice.actions;