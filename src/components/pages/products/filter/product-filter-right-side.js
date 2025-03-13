"use client"

import { useSelector, useDispatch } from "react-redux";
import { toggle } from "@/redux/slices/product-filter/product-filter-open-slice";
import { deleteFilters, deleteOthers } from "@/redux/slices/product-filter/product-filter-slice";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { RotateCcw, SlidersHorizontal } from "lucide-react";
import { X } from "lucide-react";

import { v4 } from "uuid";
import { cn } from "@/lib/utils";

export default function ProductFilterRightSide() {
    const dispatch = useDispatch();
    const { filters, others } = useSelector(state => state.productFilter);
    const isOpen = useSelector(state => state.productFilterOpen);

    const handleOpenFilter = () => {
        dispatch(toggle(!isOpen));
    }
    
    const handleDeleteFilters = (type, data) => {
        if (type === "others") {
            dispatch(deleteOthers(data));
            return;
        }

        dispatch(deleteFilters(data));
    }

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
                Object.entries(filters)?.map(filter => {
                    return (
                        <div
                            key={v4()}
                            className="group flex items-center gap-x-[15px] w-fit text-[14px] font-medium text-darkMedium px-[20px] py-[8px] rounded-full border border-neutral-300 hover:text-darkBold hover:bg-neutral-50 hover:border-neutral-500 transition-all duration-300 cursor-pointer"
                            onClick={() => {
                                handleDeleteFilters(
                                    "filters",
                                    filter[0]
                                );
                            }}
                        >
                            <p>{filter[1]?.subLabel}</p>
                            <X size={16} className="translate-y-[0.5px] text-darkBland group-hover:text-red-300 transition-colors duration-300" />
                        </div>
                    )
                })
            }

            {
                Object.entries(others)?.map(other => {
                    return (
                        <div
                            key={v4()}
                            className="group flex items-center gap-x-[15px] w-fit text-[14px] font-medium text-darkMedium px-[20px] py-[8px] rounded-full border border-neutral-300 hover:text-darkBold hover:bg-neutral-50 hover:border-neutral-500 transition-all duration-300 cursor-pointer"
                            onClick={() => {
                                handleDeleteFilters(
                                    "others",
                                    other[0]
                                );
                            }}
                        >
                            <p>{other[1].subLabel} - {other[1].value}</p>
                            <X size={16} className="translate-y-[0.5px] text-darkBland group-hover:text-red-300 transition-colors duration-300" />
                        </div>
                    )
                })
            }

            {
                (Object.entries(others)?.length > 0 || Object.entries(filters)?.length > 0) &&
                (
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="shrink-0 h-[38px] aspect-square rounded-full flex items-center justify-center text-darkMedium border border-neutral-300 hover:text-darkBold hover:bg-neutral-50 transition-all duration-300 cursor-pointer">
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