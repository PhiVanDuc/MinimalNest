"use client"

import { usePathname } from "next/navigation";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { RotateCcw, SlidersHorizontal } from "lucide-react";
import ProductFilterRightSideItem from "./product-filter-right-side-item";

import _ from "lodash";
import { v4 } from "uuid";
import { cn } from "@/lib/utils";
import useProductFilter from "@/hooks/use-product-filter";

export default function ProductFilterRightSide() {
    const pathname = usePathname();
    const {
        isOpen,
        toggleFilter,
        handleDelete,
        handleSearch,
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
    } = useProductFilter();

    return (
        <div className="flex flex-wrap items-center gap-[8px]">
            <div
                className={cn(
                    "shrink-0 flex items-center gap-x-[15px] w-fit text-[14px] font-medium text-darkMedium px-[20px] py-[8px] rounded-full border border-neutral-300 cursor-pointer hover:text-darkBold hover:bg-neutral-50 hover:border-neutral-500 transition-all duration-300",
                    isOpen ? "text-darkBold bg-neutral-50 border-neutral-500" : ""
                )}
                onClick={toggleFilter}
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