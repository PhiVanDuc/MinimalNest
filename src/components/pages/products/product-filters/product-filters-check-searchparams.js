"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { types, sorts, furniture, colors } from "./product-filters-data";

import { useDispatch } from "react-redux";
import { defaultProductFilters, resetProductFilters } from "@/redux/slices/product-filters/product-filters-slice";

const validFilters = [
    "discount",
    ...types.map(({ name }) => name),
    ...sorts.map(({ name }) => name),
    ...furniture.map(({ name }) => name),
    ...colors.map(({ name }) => name)
];

export default function ProductFiltersCheckSearchParams({ children }) {
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const firstRunRef = useRef(false);    

    useEffect(() => {
        if (!firstRunRef.current) {
            firstRunRef.current = true;
            return;
        }

        let objSearchParams = Object.fromEntries(searchParams.entries());
        const newSearchParams = new URLSearchParams();

        if (Object.keys(objSearchParams).length === 0) {
            dispatch(resetProductFilters());
            return;
        }

        for (let key in objSearchParams) if (!objSearchParams[key]) delete objSearchParams[key];

        let filters = objSearchParams?.filters;
        if (filters) {
            filters = filters.split(',');
            const valid = filters.filter(item => validFilters.includes(item));

            if (valid.length !== filters.length) {
                if (valid.length === 0) delete objSearchParams.filters;
                else {
                    objSearchParams = {
                        ...objSearchParams,
                        filters: valid.length === 1 ? valid[0] : valid.join(',')
                    }
                }
            }
            dispatch(defaultProductFilters({ group: true, payload: valid }));
        }

        Object.entries(objSearchParams).forEach(([key, value]) => {
            newSearchParams.set(key, value);
        });
        delete objSearchParams?.filters;
        dispatch(defaultProductFilters({ seperate: true, payload: objSearchParams }));
        
        console.log("Run in use effect of ProductFiltersCheckSearchParams");
        
        router.replace(`${pathname}?${newSearchParams.toString().replace(/%2C/g, ',')}`);
    }, [searchParams, pathname, router, dispatch]);

    return <>{children}</>;
}