import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "@/redux/slices/counter/counterSlice";
import productFilterSlice from "@/redux/slices/product-filter/product-filter-slice";
import productFilterOpenSlice from "@/redux/slices/product-filter/product-filter-open-slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        productFilter: productFilterSlice,
        productFilterOpen: productFilterOpenSlice
    }
});