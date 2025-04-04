"use client"

import { usePathname, useRouter } from "next/navigation";
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
import generateSignatureClient from "@/lib/generate-signature-client";

export default function ProductFilterRightSide() {
    const pathname = usePathname();
    const router = useRouter();

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

    const handleSearch = () => {
        if (Object.keys(filters).length === 0 && Object.keys(others).length === 0) {
            router.push("/san-pham");
            return;
        }
        
        const newSearchParams = new URLSearchParams();
    
        if (Object.keys(filters).length > 0) newSearchParams.set("filters", Object.keys(filters).join(","));
        else newSearchParams.delete("filters");
    
        if (Object.keys(others).length > 0) {
            Object.keys(others).forEach((key) => {
                const label = others[key]?.param;
                const value = others[key]?.value;
                if (label && value) {
                    newSearchParams.set(label, value);
                }
            });
        }

        const finalSearchParams = newSearchParams.toString().replace(/%2C/g, ",");
        const signature = generateSignatureClient(finalSearchParams);
        router.push(`/san-pham/tim-kiem?${finalSearchParams}&signature=${signature}`);
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
                            <p>{filter[1]?.label}</p>
                            <X size={16} className="translate-y-[0.5px] text-darkBland group-hover:text-red-300 transition-colors duration-300" />
                        </div>
                    )
                })
            }

            {
                Object.entries(others)?.map(other => {
                    if (other[1].param !== "living-space" && other[1].param !== "v-id") {
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
                                <p>{other[1].label} - {other[1].value}</p>
                                <X size={16} className="translate-y-[0.5px] text-darkBland group-hover:text-red-300 transition-colors duration-300" />
                            </div>
                        )
                    }
                })
            }

            {
                (Object.entries(others)?.length > 0 || Object.entries(filters)?.length > 0 || pathname.startsWith("/san-pham/tim-kiem")) &&
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