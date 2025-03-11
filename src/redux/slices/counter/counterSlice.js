import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        update: (state, action) => {
            if (action.payload === "desc") state.count -= 1;
            else state.count += 1;
        }
    }
});

export default counterSlice.reducer;
export const { update } = counterSlice.actions;