import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedProducts: []
}

const cartSelectedProductsSlice = createSlice({
    name: "cartSelectedProducts",
    initialState,
    reducers: {
        setSelectedProducts: (state, action) => {
            state.selectedProducts = action.payload;
        }
    }
});

export default cartSelectedProductsSlice.reducer;
export const { setSelectedProducts } = cartSelectedProductsSlice.actions;