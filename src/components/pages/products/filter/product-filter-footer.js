"use client"

import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

import CustomButton from "@/components/customs/custom-button";
import { Search } from "lucide-react";

import _ from "lodash";
import { toggle } from "@/redux/slices/product-filter/product-filter-open-slice";
import generateSignatureClient from "@/lib/generate-signature-client";

export default function ProductFilterFooter() {
    const router = useRouter();
    const pathname = usePathname();

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.productFilterOpen);
    const {
        livingSpaceState,
        productNameState,
        discountState,
        typeState,
        categoriesState,
        priceMinState,
        priceMaxState,
        colorsState
    } = useSelector(state => state.productFilter);

    const hasActiveFilters = useMemo(() => {
        return (
            Boolean(productNameState.value) ||
            Boolean(discountState.value) ||
            !_.isEmpty(typeState) ||
            categoriesState.length > 0 ||
            priceMinState.value > 0 ||
            priceMaxState.value > 0 ||
            colorsState.length > 0
        );
    },
        [
            productNameState.value,
            discountState.value,
            typeState,
            categoriesState,
            priceMinState.value,
            priceMaxState.value,
            colorsState,
        ]
    );

    const handleSearch = () => {
        if (!hasActiveFilters && pathname.startsWith("/san-pham/tim-kiem")) {
            router.replace("/san-pham");
            return;
        }
        const currentSearchParams = new URLSearchParams();

        if (productNameState?.value) currentSearchParams.set(productNameState?.param, productNameState?.value);
        if (discountState?.value) currentSearchParams.set(discountState?.param, discountState?.value);
        if (!_.isEmpty(typeState)) currentSearchParams.set("type", typeState?.param);
        if (priceMinState?.value > 0 && priceMaxState?.value > 0) {
            currentSearchParams.set(priceMinState?.param, priceMinState?.value);
            currentSearchParams.set(priceMaxState?.param, priceMaxState?.value);
        }

        if (categoriesState.length > 0) {
            const value = categoriesState.map(category => category.param).join(",");
            currentSearchParams.set("categories", value);
        }

        if (colorsState.length > 0) {
            const value = colorsState.map(color => color.param).join(",");
            currentSearchParams.set("colors", value);
        }

        const stringSearchParams = currentSearchParams.toString().replace(/%2C/g, ",");
        const signature = generateSignatureClient(stringSearchParams);

        router.push(`/san-pham/tim-kiem?${stringSearchParams}&signature=${signature}`);
        dispatch(toggle(!isOpen));
    };

    return (
        <div className="pt-[20px] px-[20px]">
            <CustomButton
                icon={<Search size={22} />}
                className="w-full rounded-[10px] bg-yellowBold hover:bg-yellowBold hover:opacity-80 transition-opacity"
                onClick={handleSearch}
            >
                Tìm kiếm
            </CustomButton>
        </div>
    )
}