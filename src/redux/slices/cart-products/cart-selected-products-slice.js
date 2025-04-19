import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedProducts: []
}

const cartSelectedProductsSlice = createSlice({
    name: "cartSelectedProducts",
    initialState,
    reducers: {
        addCartProduct: (state, action) => {
            state.selectedProducts = action.payload;
        }
    }
});

export default cartSelectedProductsSlice.reducer;
export const { addCartProduct } = cartSelectedProductsSlice.actions;