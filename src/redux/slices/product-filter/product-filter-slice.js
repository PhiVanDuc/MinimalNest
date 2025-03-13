import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: {},
    others: {}
}

const productFilterSlice = createSlice({
    name: "productFilter",
    initialState,
    reducers: {
        updateFilters: (state, action) => {
            const payload = action.payload;
            const arr = Object.entries(payload).flat();

            if (!state.filters?.[arr[0]]) {
                state.filters = {
                    ...state.filters,
                    ...payload
                }
            } else {
                delete state.filters?.[arr[0]];
            }
        },

        updateRadioFilters: (state, action) => {
            const { list, payload } = action.payload;
            const key = Object.keys(payload)[0];
          
            if (state.filters[key]) {
              delete state.filters[key];
            } else {
                list.forEach(item => {
                    if (state.filters.hasOwnProperty(item.label)) {
                    delete state.filters[item.label];
                    }
                });

                state.filters = {
                    ...state.filters,
                    ...payload
                };
            }
        },
          
        updateOthers: (state, action) => {
            const payload = action.payload;
            
            Object.keys(payload).forEach((key) => {
                if (!payload[key].value) {
                    if (state.others.hasOwnProperty(key)) {
                        delete state.others[key];
                    }
                } else {
                    state.others[key] = payload[key];
                }
            });
        },

        deleteFilters: (state, action) => {
            const payload = action.payload;
            delete state.filters?.[payload];
        },

        deleteOthers: (state, action) => {
            const payload = action.payload;
            delete state.others?.[payload];
        }
    }
});

export default productFilterSlice.reducer;
export const { updateFilters, updateRadioFilters, updateOthers, deleteFilters, deleteOthers } = productFilterSlice.actions;