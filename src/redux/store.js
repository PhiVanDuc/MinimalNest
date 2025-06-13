import { configureStore } from "@reduxjs/toolkit";
import productFilterSlice from "@/redux/slices/product-filter/product-filter-slice";
import productFilterOpenSlice from "@/redux/slices/product-filter/product-filter-open-slice";
import addressDialogSlice from "@/redux/slices/address-dialog/address-dialog-slice";
import cartQuantitySlice from "@/redux/slices/cart-products/cart-quantity-slice";
import adminSidebarToggleSlice from "@/redux/slices/admin-sidebar/admin-sidebar-toggle-slice";

export const store = configureStore({
    reducer: {
        productFilterOpen: productFilterOpenSlice,
        productFilter: productFilterSlice,
        addressDialog: addressDialogSlice,
        cartQuantity: cartQuantitySlice,
        adminSidebarToggle: adminSidebarToggleSlice
    }
});