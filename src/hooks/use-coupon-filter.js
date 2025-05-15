"use client"

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import {
    deleteDiscountType,
    deleteEvents,
    deleteType,
    deleteUserTypes
} from "@/redux/slices/coupon-filter/coupon-filter-slice";
import generateSignatureClient from "@/lib/utils/generate-signature-client";
import { toggle } from "@/redux/slices/coupon-filter/coupon-filter-open-slice";

export default function useCouponFilter() {
    const dispatch = useDispatch();
    const router = useRouter();

    const isOpen = useSelector(state => state.couponFilterOpen);
    const {
        typeState,
        eventsState,
        discountTypeState,
        userTypesState
    } = useSelector(state => state.couponFilter);

    const hasActiveFilters = useMemo(
        () => {
            return (
                !_.isEmpty(typeState) || eventsState.length > 0 || !_.isEmpty(discountTypeState) || userTypesState.length > 0
            );
        },
        [
            typeState,
            eventsState,
            discountTypeState,
            userTypesState
        ]
    );

    const toggleFilter = () => { dispatch(toggle(!isOpen)); }

    const handleDelete = (filter, payload) => {
        switch (filter) {
            case "type": {
                dispatch(deleteType());
                break;
            }
            case "events": {
                dispatch(deleteEvents(payload));
                break;
            }
            case "discountType": {
                dispatch(deleteDiscountType());
                break;
            }
            case "userTypes": {
                dispatch(deleteUserTypes(payload));
                break;
            }
        }
    };

    const handleSearch = () => {
        if (!hasActiveFilters) {
            router.push(`/phieu-giam-gia`);
            dispatch(toggle(false));
            return;
        }

        const params = new URLSearchParams();
        params.delete("signature");

        if (!_.isEmpty(typeState)) params.set("type", typeState.param);
        if (!_.isEmpty(discountTypeState)) params.set("discountType", discountTypeState.param);

        if (eventsState.length > 0) {
            params.set(
                "events",
                eventsState.map((event) => event.param).join(",")
            );
        }
        if (userTypesState.length > 0) {
            params.set(
                "userTypes",
                userTypesState.map((userType) => userType.param).join(",")
            );
        }
    
        const str = params.toString().replace(/%2C/g, ",");
        const signature = generateSignatureClient(str);
    
        router.push(`/phieu-giam-gia?${str}&signature=${signature}`);
        dispatch(toggle(false));
    }

    return {
        isOpen,
        filterState: {
            typeState,
            eventsState,
            discountTypeState,
            userTypesState
        },
        hasActiveFilters,
        toggleFilter,
        handleDelete,
        handleSearch
    }
}