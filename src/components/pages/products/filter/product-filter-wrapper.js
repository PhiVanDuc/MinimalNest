"use client"

import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

import { types, categories, colors, params } from "./product-filter-data";
import { updateDefault } from "@/redux/slices/product-filter/product-filter-slice";
import _ from "lodash";

export default function ProductFilterWrapper({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!pathname.startsWith("/san-pham/tim-kiem")) {
            dispatch(updateDefault());
            return;
        }

        const listFilters = [
            ...types,
            ...categories,
            ...colors,
            {
                subLabel: "Giảm giá",
                label: "discount"
            }
        ];

        const currentParams = Object.fromEntries(searchParams.entries());

        let finalData = {};
        if (currentParams["filters"]) {
            const arrFilters = currentParams["filters"].split(",");

            finalData["filters"] = arrFilters.reduce((acc, label) => {
                const found = listFilters.find(item => item.label === label);
                if (found) {
                    const { subLabel, codeColor } = found;
                    acc[label] = codeColor ? { label: subLabel, param: label, codeColor } : { label: subLabel, param: label };
                }
                return acc;
            }, {});
            delete currentParams["filters"];
        }

        if (Object.keys(currentParams).length > 0) {
            finalData["others"] = Object.entries(currentParams).reduce((prev, [key, value]) => {
                const found = params.find(param => param === key);

                if (found) {
                    prev[key] = {
                        label: key === "living-space"
                            ? "Không gian sống"
                            : key === "product-name"
                            ? "Tên sản phẩm"
                            : key === "price-min"
                            ? "Giá tối thiểu"
                            : key === "price-min" 
                            ? "Giá tối đa"
                            : "ID phiếu giảm giá",
                        param: key,
                        value
                    }
                }

                return prev;
            }, {});
        }

        dispatch(updateDefault(finalData));
    }, [router, pathname, searchParams, dispatch]);
    
    return (
        <>{children}</>
    )
}