import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItemIds: [],
};

const cartItemIdsSlice = createSlice({
    name: "cartItemIds",
    initialState,
    reducers: {
        initialCartItemId: (state, action) => {
            state.cartItemIds = action.payload;
        },
        addCartItemId: (state, action) => {
            if (!state.cartItemIds.includes(action.payload)) {
                state.cartItemIds.push(action.payload);
            }
        },
        deleteCartItemId: (state, action) => {
            state.cartItemIds = state.cartItemIds.filter(id => id !== action.payload);
        },
        resetCartItemIds: (state) => {
            state.cartItemIds = [];
        },
    },
});

export const {
    initialCartItemId,
    addCartItemId,
    deleteCartItemId,
    resetCartItemIds
} = cartItemIdsSlice.actions;

export default cartItemIdsSlice.reducer;
