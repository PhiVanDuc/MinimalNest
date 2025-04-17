import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const couponFilterOpenSlice = createSlice({
    name: "couponFilterOpen",
    initialState,
    reducers: {
        toggle: (state, action) => {
            state = action.payload
            return state;
        }
    }
});

export default couponFilterOpenSlice.reducer;
export const { toggle } = couponFilterOpenSlice.actions;