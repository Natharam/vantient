import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ProductsSlice {
  value: number;
}

const initialState: ProductsSlice = {
  value: 0
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productsSlice.actions;

export default productsSlice.reducer;
