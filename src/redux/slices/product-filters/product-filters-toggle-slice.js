import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expand: false,
    expandMobile: false
}

const productFiltersToggleSlice = createSlice({
    name: "productFiltersToggle",
    initialState,
    reducers: {
        toggle: (state, action) => {
            state.expand = action.payload;
        },
        toggleMobile: (state, action) => {
            state.expandMobile = action.payload;
        },
    }
});

export default productFiltersToggleSlice.reducer;
export const { toggle: toggleAction, toggleMobile: toggleMobileAction } = productFiltersToggleSlice.actions;