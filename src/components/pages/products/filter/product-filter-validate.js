"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

import { types, categories, colors, params } from "./product-filter-data";
import { updateDefault } from "@/redux/slices/product-filter/product-filter-slice";
import _ from "lodash";

export default function ProductFilterValidate({ children }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!pathname.startsWith("/san-pham/tim-kiem")) {
            dispatch(updateDefault());
            return;
        }

        const urlSearchParams = new URLSearchParams;
        const currentParams = Object.fromEntries(searchParams.entries());

        // Kiểm tra xem params có thuộc vào danh sách chấp nhận hay không.
        let acceptParams = Object.entries(currentParams).reduce((prev, [key, value]) => {
            if (params.includes(key)) {
                prev[key] = value;
            }

            return prev;
        }, {});

        // Kiểm tra xem có value nào là falsy, nếu có thì xóa cặp key - value đó
        acceptParams = _.pickBy(acceptParams, value => value);

        // Kiểm tra nếu không có params nào thì chuyển hướng về /san-pham
        if (Object.keys(acceptParams).length === 0) {
            router.replace("/san-pham");
            return;
        }

        // Chuẩn bị dữ liệu để cập nhật product filter state
        const listFilters = [
            ...types,
            ...categories,
            ...colors,
            {
                label: "discount",
                subLabel: "Giảm giá"
            }
        ];

        let finalData = {};
        if (acceptParams["filters"]) {
            const arrFilters = acceptParams["filters"].split(",");
            let paramFilters = "";

            finalData["filters"] = arrFilters.reduce((acc, label, index) => {
                const found = listFilters.find(item => item.label === label);
                if (found) {
                    const { subLabel, codeColor } = found;

                    if (index < arrFilters.length - 1) paramFilters += label + ",";
                    else paramFilters += label;

                    acc[label] = codeColor ? { subLabel, codeColor } : { subLabel };
                }
                return acc;
            }, {});

            urlSearchParams.set("filters", paramFilters);
            delete acceptParams["filters"];
        }

        if (Object.keys(acceptParams).length > 0) {
            finalData["others"] = Object.entries(acceptParams).reduce((prev, [key, value]) => {
                const found = params.find(param => param === key);
                if (found) {
                    urlSearchParams.set(key, value);

                    prev[key] = {
                        label: key,
                        subLabel: key === "living-space"
                            ? "Không gian sống"
                            : key === "product-name"
                            ? "Tên sản phẩm"
                            : key === "price-min"
                            ? "Giá tối thiểu"
                            : "Giá tối đa",
                        value
                    }
                }

                return prev;
            }, {});
        }

        // Dùng finalData cập nhật product filter state
        dispatch(updateDefault(finalData));
        router.replace(`${pathname}?${urlSearchParams.toString().replace(/%2C/g, ",")}`);
        
    }, [router, pathname, searchParams, dispatch]);

    return <>{children}</>;
}