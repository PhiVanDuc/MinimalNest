"use client"

import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

import {
    deleteLivingSpace,
    deleteProductName,
    deleteDiscount,
    deleteType,
    deleteCategories,
    deletePrices,
    deleteColors
} from "@/redux/slices/product-filter/product-filter-slice";

import _ from "lodash";
import generateSignatureClient from "@/lib/utils/generate-signature-client";
import { toggle } from "@/redux/slices/product-filter/product-filter-open-slice";

export default function useProductFilter() {
    const router = useRouter();
    const dispatch = useDispatch();
    const pathname = usePathname();

    const isOpen = useSelector((state) => state.productFilterOpen);
    const {
        livingSpaceState,
        productNameState,
        discountState,
        typeState,
        categoriesState,
        priceMinState,
        priceMaxState,
        colorsState,
    } = useSelector((state) => state.productFilter);

    // Xác định xem có lựa chọn filter nào có giá trị không.
    const hasActiveFilters = useMemo(
        () => {
            return !_.isEmpty(livingSpaceState) ||
            Boolean(productNameState.value) ||
            Boolean(discountState.value) ||
            !_.isEmpty(typeState) ||
            categoriesState.length > 0 ||
            priceMinState.value > 0 ||
            priceMaxState.value > 0 ||
            colorsState.length > 0;
        },
        [
            livingSpaceState,
            productNameState.value,
            discountState.value,
            typeState,
            categoriesState,
            priceMinState.value,
            priceMaxState.value,
            colorsState
        ]
    );

    const handleSearch = () => {
        if (!hasActiveFilters && pathname.startsWith("/san-pham/tim-kiem")) {
            router.replace("/san-pham");
            dispatch(toggle(false));
            return;
        }
        const params = new URLSearchParams();
    
        if (!_.isEmpty(livingSpaceState)) params.set("living-space", livingSpaceState.param);
        if (productNameState.value) params.set(productNameState.param, productNameState.value);
        if (discountState.value) params.set(discountState.param, discountState.value);
        if (!_.isEmpty(typeState)) params.set("type", typeState.param);
        if (priceMinState.value > 0 && priceMaxState.value > 0) {
            params.set(priceMinState.param, priceMinState.value);
            params.set(priceMaxState.param, priceMaxState.value);
        }
        if (categoriesState.length > 0) {
            params.set(
                "categories",
                categoriesState.map((c) => c.param).join(",")
            );
        }
        if (colorsState.length > 0) {
            params.set(
                "colors",
                colorsState.map((c) => c.param).join(",")
            );
        }
    
        const str = params.toString().replace(/%2C/g, ",");
        const signature = generateSignatureClient(str);
    
        router.push(`/san-pham/tim-kiem?${str}&signature=${signature}`);
        dispatch(toggle(false));
    };

    const toggleFilter = () => {
        dispatch(toggle(!isOpen));
    };

    const handleDelete = (filter, payload) => {
        switch (filter) {
            case "living-space":
                dispatch(deleteLivingSpace());
                break;
            case "product-name":
                dispatch(deleteProductName());
                break;
            case "discount":
                dispatch(deleteDiscount());
                break;
            case "type":
                dispatch(deleteType());
                break;
            case "categories":
                dispatch(deleteCategories(payload));
                break;
            case "price-min":
            case "price-max":
                dispatch(deletePrices());
                break;
            case "colors":
                dispatch(deleteColors(payload));
                break;
        }
    };

    return {
        isOpen,
        hasActiveFilters,
        handleSearch,
        toggleFilter,
        handleDelete,
        filterState: {
            livingSpaceState,
            productNameState,
            discountState,
            typeState,
            categoriesState,
            priceMinState,
            priceMaxState,
            colorsState,
        },
    };
}
