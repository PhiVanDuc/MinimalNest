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
        resetCartItemIds: (state, action) => {
            const idsToRemove = action.payload;
            if (!idsToRemove || idsToRemove?.length === 0) {
                state.cartItemIds = [];
                return;
            }

            state.cartItemIds = state.cartItemIds.filter(id => !idsToRemove.includes(id));
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
