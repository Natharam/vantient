import { createSlice } from "@reduxjs/toolkit";

interface ProductsSlice {
  products: any[];
  productCount: number;
}

const initialState: ProductsSlice = {
  products: [],
  productCount: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.productCount = action.payload.productCount;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
