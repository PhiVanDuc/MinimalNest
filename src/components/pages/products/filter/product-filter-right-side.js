"use client"

import { useMemo } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "@/redux/slices/product-filter/product-filter-open-slice";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { RotateCcw, SlidersHorizontal } from "lucide-react";
import ProductFilterRightSideItem from "./product-filter-right-side-item";

import { v4 } from "uuid";
import _ from "lodash";
import { cn } from "@/lib/utils";
import {
    deleteCategories,
    deleteColors,
    deleteDiscount,
    deleteLivingSpace,
    deletePrices,
    deleteProductName,
    deleteType
} from "@/redux/slices/product-filter/product-filter-slice";
import generateSignatureClient from "@/lib/generate-signature-client";

export default function ProductFilterRightSide() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

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

    const handleOpenFilter = () => {
        dispatch(toggle(!isOpen));
    }

    const handleDelete = (filter, payload = {}) => {
        switch(filter) {
            case "living-space": {
                dispatch(deleteLivingSpace());
                break;
            }
            case "product-name": {
                dispatch(deleteProductName());
                break;
            }
            case "discount": {
                dispatch(deleteDiscount());
                break;
            }
            case "type": {
                dispatch(deleteType());
                break;
            }
            case "categories": {
                dispatch(deleteCategories(payload));
                break;
            }
            case "price-min": {
                dispatch(deletePrices());
                break;
            }
            case "price-max": {
                dispatch(deletePrices());
                break;
            }
            case "colors": {
                dispatch(deleteColors(payload));
                break;
            }
            default: {
                console.log("Không có bộ lọc đó!");
            }
        }
    }

    const hasActiveFilters = useMemo(() => {
        return (
            !_.isEmpty(livingSpaceState) ||
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
            livingSpaceState,
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
            console.log(livingSpaceState);
            
            router.replace("/san-pham");
            return;
        }
        const currentSearchParams = new URLSearchParams();

        if (!_.isEmpty(livingSpaceState)) currentSearchParams.set("living-space", livingSpaceState?.param);
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
    };

    return (
        <div className="flex flex-wrap items-center gap-[8px]">
            <div
                className={cn(
                    "shrink-0 flex items-center gap-x-[15px] w-fit text-[14px] font-medium text-darkMedium px-[20px] py-[8px] rounded-full border border-neutral-300 cursor-pointer hover:text-darkBold hover:bg-neutral-50 hover:border-neutral-500 transition-all duration-300",
                    isOpen ? "text-darkBold bg-neutral-50 border-neutral-500" : ""
                )}
                onClick={handleOpenFilter}
            >
                <p>Bộ Lọc</p>
                <SlidersHorizontal size={16} />
            </div>

            {
                !_.isEmpty(livingSpaceState) &&
                <ProductFilterRightSideItem
                    payload={livingSpaceState}
                    handleDelete={() => { handleDelete("living-space") }}
                />
            }
            
            {
                productNameState?.value &&
                <ProductFilterRightSideItem
                    payload={productNameState}
                    handleDelete={() => { handleDelete("product-name") }}
                    displayValue={true}
                />
            }

            {
                discountState?.value &&
                <ProductFilterRightSideItem
                    payload={discountState}
                    handleDelete={() => { handleDelete("discount") }}
                />
            }

            {
                !_.isEmpty(typeState) &&
                <ProductFilterRightSideItem
                    payload={typeState}
                    handleDelete={() => { handleDelete("type") }}
                />
            }

            {
                categoriesState.length > 0 &&
                categoriesState.map(category => {
                    return (
                        <ProductFilterRightSideItem
                            key={v4()}
                            payload={category}
                            handleDelete={() => { handleDelete("categories", category) }}
                        />
                    )
                })
            }

            {
                priceMinState?.value > 0 &&
                <ProductFilterRightSideItem
                    payload={priceMinState}
                    handleDelete={() => { handleDelete("price-min") }}
                    displayValue={true}
                />
            }

            {
                priceMaxState?.value > 0 &&
                <ProductFilterRightSideItem
                    payload={priceMaxState}
                    handleDelete={() => { handleDelete("price-max") }}
                    displayValue={true}
                />
            }

            {
                colorsState.length > 0 &&
                colorsState.map(color => {
                    return (
                        <ProductFilterRightSideItem
                            key={v4()}
                            payload={color}
                            handleDelete={() => { handleDelete("colors", color) }}
                        />
                    )
                })
            }

            {
                pathname.startsWith("/san-pham/tim-kiem") &&
                (
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div
                                    className="shrink-0 h-[38px] aspect-square rounded-full flex items-center justify-center text-darkMedium border border-neutral-300 hover:text-darkBold hover:bg-neutral-50 transition-all duration-300 cursor-pointer"
                                    onClick={handleSearch}
                                >
                                    <RotateCcw size={16} />
                                </div>
                            </TooltipTrigger>

                            <TooltipContent>
                                <p>Tìm kiếm lại.</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )
            }
        </div>
    )
}