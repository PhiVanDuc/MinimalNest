import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const productFilterOpenSlice = createSlice({
    name: "productFilterOpen",
    initialState,
    reducers: {
        toggle: (state, action) => {
            state = action.payload
            return state;
        }
    }
});

export default productFilterOpenSlice.reducer;
export const { toggle } = productFilterOpenSlice.actions;