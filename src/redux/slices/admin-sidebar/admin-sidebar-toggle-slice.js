import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: true,
}

const adminSidebarToggleSlice = createSlice({
    name: "adminSidebarToggle",
    initialState,
    reducers: {
        toggleAdminSidebar: (state, action) => {
            state.isOpen = action.payload;
        }
    }
});

export default adminSidebarToggleSlice.reducer;
export const { toggleAdminSidebar } = adminSidebarToggleSlice.actions;