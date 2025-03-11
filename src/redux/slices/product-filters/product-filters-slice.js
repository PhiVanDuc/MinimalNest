import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    group: [],
    seperate: {}
};

const productFiltersSlice = createSlice({
    name: "productFilters",
    initialState,
    reducers: {
        updateProductFilters: (state, action) => {
            if (action.payload.seperate) {
                return {
                    ...state,
                    seperate: {
                        ...state.seperate,
                        ...action.payload.payload
                    }
                }
            }
            else if (action.payload.group) {
                const index = state.group.indexOf(action.payload.payload);

                if (index !== -1) {
                    state.group.splice(index, 1);
                    return state;
                }

                state.group.push(action.payload.payload);
                return state;
            }
        },
        defaultProductFilters: (state, action) => {
            if (action.payload.seperate) {
                return {
                    ...state,
                    seperate: action.payload.payload
                }
            }
            else if (action.payload.group) {
                return {
                    ...state,
                    group: action.payload.payload
                }
            }
        }
    }
})

export default productFiltersSlice.reducer;
export const { updateProductFilters, defaultProductFilters } = productFiltersSlice.actions;