import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItemIds: []
}

const cartQuantitySlice = createSlice({
    name: "cartQuantity",
    initialState,
    reducers: {
        rewriteQuantity: (state, action) => {
            state.cartItemIds = action.payload;
        },
        increaseQuantity: (state, action) => {
            const existing = state.cartItemIds.find(id => id === action.payload);
            if (!existing) state.cartItemIds.push(action.payload);
        },
        decreaseQuantity: (state, action) => {
            const index = state.cartItemIds.findIndex(id => id === action.payload);
            if (index !== -1) {
                state.cartItemIds.splice(index, 1);
            }
        }
    }
});

export default cartQuantitySlice.reducer;
export const { rewriteQuantity, increaseQuantity, decreaseQuantity } = cartQuantitySlice.actions;