import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "@/redux/slices/counter/counterSlice";
import productFiltersReducer from "@/redux/slices/product-filters/product-filters-slice";
import productFiltersToggleReducer from "@/redux/slices/product-filters/product-filters-toggle-slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        productFilters: productFiltersReducer,
        productFiltersToggle: productFiltersToggleReducer
    }
});