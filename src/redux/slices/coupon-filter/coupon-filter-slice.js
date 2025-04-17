import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    typeState: {},
    eventsState: [],
    discountTypeState: {},
    userTypesState: []
};

const couponFilterSlice = createSlice({
    name: "couponFilter",
    initialState,
    reducers: {
        // Add
        addType: (state, action) => {
            if (state.typeState?.param === action.payload?.param) state.typeState = {}
            else state.typeState = action.payload;
        },

        addEvents: (state, action) => {
            if (state.eventsState.length > 0) {
                const deleteIndex = state.eventsState.findIndex(event => action.payload.param === event?.param);

                if (deleteIndex === -1) state.eventsState.push(action.payload);
                else state.eventsState.splice(deleteIndex, 1);
            }
            else state.eventsState.push(action.payload);
        },

        addDiscountType: (state, action) => {
            if (state.discountTypeState?.param === action.payload?.param) state.discountTypeState = {};
            else state.discountTypeState = action.payload;
        },

        addUserTypes: (state, action) => {
            if (state.userTypesState.length > 0) {
                const deleteIndex = state.userTypesState.findIndex(event => action.payload.param === event?.param);

                if (deleteIndex === -1) state.userTypesState.push(action.payload);
                else state.userTypesState.splice(deleteIndex, 1);
            }
            else state.userTypesState.push(action.payload);
        },

        // Update
        updateInitialState: (state, action) => {
            switch(action.payload?.filter) {
                case "type": {
                    state.typeState = action.payload.data;
                    break;
                }
                case "events": {
                    state.eventsState = action.payload.data;
                    break;
                }
                case "discountType": {
                    state.discountTypeState = action.payload.data;
                    break;
                }
                case "userTypes": {
                    state.userTypesState = action.payload.data;
                    break;
                }
            }
        },

        // Delete
        deleteType: (state, action) => {
            state.typeState = {}
        },

        deleteEvents: (state, action) => {
            const deleteIndex = state.eventsState.findIndex(event => {
                return event.param === action.payload?.param;
            });

            state.eventsState.splice(deleteIndex, 1);
        },

        deleteDiscountType: (state, action) => {
            state.discountTypeState = {}
        },

        deleteUserTypes: (state, action) => {
            const deleteIndex = state.userTypesState.findIndex(userType => {
                return userType.param === action.payload?.param;
            });

            state.userTypesState.splice(deleteIndex, 1);
        },
    }
});

export default couponFilterSlice.reducer;
export const {
    addType,
    addEvents,
    addDiscountType,
    addUserTypes,
    updateInitialState,
    deleteType,
    deleteEvents,
    deleteDiscountType,
    deleteUserTypes
} = couponFilterSlice.actions;