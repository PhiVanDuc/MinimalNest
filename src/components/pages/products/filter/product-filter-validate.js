"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { types, categories, colors } from "./product-filter-data";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters, updateOthers } from "@/redux/slices/product-filter/product-filter-slice";

export default function ProductFilterValidate({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const dispatch = useDispatch();
    const currentFilters = useSelector((state) => state.productFilter.filters);

    useEffect(() => {
        if (!searchParams?.size) {
            if (pathname !== "/san-pham") router.push("/san-pham");
            return;
        }
        
        const searchParamsString = new URLSearchParams();

        const validParams = new Set(["filters", "product-name", "price-min", "price-max"]);
        const params = Object.fromEntries(
            [...searchParams.entries()].filter(([key, value]) => value && validParams.has(key))
        );

        if (!Object.keys(params).length) {
            if (pathname !== "/san-pham") router.push("/san-pham");
            return;
        }

        // Tạo danh sách filter hợp lệ từ data
        const rootFilters = [
            ...types,
            ...categories,
            ...colors,
            { label: "discount", subLabel: "Giảm giá" }
        ];
        const validFilters = Object.fromEntries(rootFilters.map(filter => [filter.label, filter]));

        // Xây dựng finalParams từ URL params
        const finalParams = {};

        if (params["filters"]) {
            finalParams["filters"] = Object.fromEntries(
                params["filters"]
                    .split(",")
                    .map(filter => [filter, validFilters[filter]])
                    .filter(([, val]) => val)
                );
            }

            ["product-name", "price-min", "price-max"].forEach(key => {
                if (params[key]) {
                    finalParams[key] = {
                        label: key,
                        subLabel:
                            key === "product-name"
                            ? "Tên sản phẩm"
                            : key === "price-min"
                            ? "Giá tối thiểu"
                            : "Giá tối đa",
                        value: params[key]
                    };
                }
            }
        );

        // Cập nhật từng filter nếu chưa có trong state (để tránh toggle không mong muốn)
        let temp;
        if (finalParams["filters"]) {
            Object.entries(finalParams["filters"]).forEach(([key, value]) => {
                if (!currentFilters?.[key]) {
                    dispatch(updateFilters({ [key]: value }));
                }
            });

            let string = "";
            Object.entries(finalParams["filters"]).forEach((filter, index) => {
                if (index === Object.entries(finalParams["filters"]).length - 1) {
                    string += filter[0];
                    return;
                }

                string += filter[0] + ",";
            });

            searchParamsString.set("filters", string);
            temp = {...finalParams};
            delete temp["filters"];
        }

        // Cập nhật các params khác vào state
        if (Object.keys(temp).length) {
            Object.keys(temp).forEach(key => {
                searchParamsString.set(key, temp[key].value);
            })
            dispatch(updateOthers(temp));
        }

        router.replace(`${pathname}?${searchParamsString.toString().replace(/%2C/g, ",")}`);
    }, [pathname, searchParams, currentFilters, dispatch]);

    return <>{children}</>;
}