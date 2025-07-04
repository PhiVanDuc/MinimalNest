import { configureStore } from "@reduxjs/toolkit";
import productFilterSlice from "@/redux/slices/product-filter/product-filter-slice";
import productFilterOpenSlice from "@/redux/slices/product-filter/product-filter-open-slice";
import addressDialogSlice from "@/redux/slices/address-dialog/address-dialog-slice";
import cartItemIdsSlice from "@/redux/slices/cart-products/cart-item-ids-slice";
import adminSidebarToggleSlice from "@/redux/slices/admin-sidebar/admin-sidebar-toggle-slice";

export const store = configureStore({
    reducer: {
        productFilterOpen: productFilterOpenSlice,
        productFilter: productFilterSlice,
        addressDialog: addressDialogSlice,
        cartItemIds: cartItemIdsSlice,
        adminSidebarToggle: adminSidebarToggleSlice
    }
});