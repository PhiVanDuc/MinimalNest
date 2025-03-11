import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expand: false
}

const productFiltersToggleSlice = createSlice({
    name: "productFiltersToggle",
    initialState,
    reducers: {
        toggle: (state, action) => {
            state.expand = action.payload;
        }
    }
});

export default productFiltersToggleSlice.reducer;
export const { toggle: toggleAction } = productFiltersToggleSlice.actions;