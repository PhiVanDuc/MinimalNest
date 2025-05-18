import { configureStore } from "@reduxjs/toolkit";
import productFilterSlice from "@/redux/slices/product-filter/product-filter-slice";
import productFilterOpenSlice from "@/redux/slices/product-filter/product-filter-open-slice";
import couponFilterOpenSlice from "@/redux/slices/coupon-filter/coupon-filter-open-slice";
import couponFilterSlice from "@/redux/slices/coupon-filter/coupon-filter-slice";
import addressDialogSlice from "@/redux/slices/address-dialog/address-dialog-slice";
import cartSelectedProductsSlice from "@/redux/slices/cart-products/cart-selected-products-slice";
import adminSidebarToggleSlice from "@/redux/slices/admin-sidebar/admin-sidebar-toggle-slice";

export const store = configureStore({
    reducer: {
        productFilterOpen: productFilterOpenSlice,
        productFilter: productFilterSlice,
        couponFilterOpen: couponFilterOpenSlice,
        couponFilter: couponFilterSlice,
        addressDialog: addressDialogSlice,
        cartSelectedProducts: cartSelectedProductsSlice,
        adminSidebarToggle: adminSidebarToggleSlice
    }
});