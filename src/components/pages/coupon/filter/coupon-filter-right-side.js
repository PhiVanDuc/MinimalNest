"use client"

import { useDispatch } from "react-redux";
import useCouponFilter from "@/hooks/use-coupon-filter";

import { Search, SlidersHorizontal } from "lucide-react";
import ProductFilterRightSideItem from "../../products/filter/product-filter-right-side-item";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import _ from "lodash";
import { v4 } from "uuid";
import { cn } from "@/lib/utils";
import { toggle } from "@/redux/slices/coupon-filter/coupon-filter-open-slice";

export default function CouponFilterRightSide() {
    const dispatch = useDispatch();

    const {
        isOpen,
        filterState: {
            typeState,
            eventsState,
            discountTypeState,
            userTypesState
        },
        handleDelete,
        handleSearch
    } = useCouponFilter();

    const toggleFilter = () => { dispatch(toggle(!isOpen)) }

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
                !_.isEmpty(typeState) &&
                <ProductFilterRightSideItem
                    payload={typeState}
                    handleDelete={() => { handleDelete("type") }}
                />
            }

            {
                eventsState.length > 0 &&
                eventsState.map(event => {
                    return (
                        <ProductFilterRightSideItem
                            key={v4()}
                            payload={event}
                            handleDelete={() => { handleDelete("events", event) }}
                        />
                    )
                })
            }

            {
                !_.isEmpty(discountTypeState) &&
                <ProductFilterRightSideItem
                    payload={discountTypeState}
                    handleDelete={() => { handleDelete("discountType") }}
                />
            }

            {
                userTypesState.length > 0 &&
                userTypesState.map(userType => {
                    return (
                        <ProductFilterRightSideItem
                            key={v4()}
                            payload={userType}
                            handleDelete={() => { handleDelete("userTypes", userType) }}
                        />
                    )
                })
            }

            <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div
                            className="shrink-0 h-[38px] aspect-square rounded-full flex items-center justify-center text-darkMedium border border-neutral-300 hover:text-darkBold hover:bg-neutral-50 transition-all duration-300 cursor-pointer"
                            onClick={handleSearch}
                        >
                            <Search size={16} />
                        </div>
                    </TooltipTrigger>

                    <TooltipContent>
                        <p>Tìm kiếm.</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}