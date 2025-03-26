import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    partial: false,
    empty: false,
    list: false,
    add: false,
    edit: false
}

const addressDialogSlice = createSlice({
    name: "address-dialog",
    initialState,
    reducers: {
        displayPartial: (state, action) => {
            state.partial = action.payload;
        },
        displayEmpty: (state, action) => {
            state.empty = action.payload;
        },
        displayListForm: (state, action) => {
            state.list = action.payload;
        },
        displayAddForm: (state, action) => {
            state.add = action.payload;
        },
        displayEditForm: (state, action) => {
            state.edit = action.payload;
        }
    }
});

export default addressDialogSlice.reducer;
export const { displayPartial, displayEmpty, displayListForm, displayAddForm, displayEditForm } = addressDialogSlice.actions;