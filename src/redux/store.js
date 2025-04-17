import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "@/redux/slices/counter/counterSlice";
import productFilterSlice from "@/redux/slices/product-filter/product-filter-slice";
import productFilterOpenSlice from "@/redux/slices/product-filter/product-filter-open-slice";
import couponFilterOpenSlice from "@/redux/slices/coupon-filter/coupon-filter-open-slice";
import couponFilterSlice from "@/redux/slices/coupon-filter/coupon-filter-slice";
import addressDialogSlice from "@/redux/slices/address-dialog/address-dialog-slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        productFilterOpen: productFilterOpenSlice,
        productFilter: productFilterSlice,
        couponFilterOpen: couponFilterOpenSlice,
        couponFilter: couponFilterSlice,
        addressDialog: addressDialogSlice
    }
});