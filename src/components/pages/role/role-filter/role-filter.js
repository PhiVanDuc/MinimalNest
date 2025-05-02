"use client"

import { useState } from "react";

import {
    Search,
    SlidersHorizontal
} from "lucide-react";

import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

import RoleFilterName from "./role-filter-name";

import { cn } from "@/lib/utils";

export default function RoleFilter() {
    const [openFilter, setOpenFilter] = useState(false);

    return (
        <div className="flex items-center gap-[5px]">
            <div
                className={cn(
                    "shrink-0 flex items-center gap-x-[12px] w-fit text-[13px] font-medium px-[15px] py-[8px] rounded-full border cursor-pointer hover:text-darkBold hover:border-neutral-300 bg-white transition-all duration-300",
                    openFilter ? "text-darkBold border-neutral-300" : "text-darkMedium"
                )}
                onClick={() => { setOpenFilter(!openFilter) }}
            >
                <p>Bộ Lọc</p>
                <SlidersHorizontal size={15} />
            </div>

            <div className={cn(
                "self-stretch flex flex-wrap items-center gap-[5px] w-full transition-all duration-300",
                openFilter ? "opacity-100 visible" : "opacity-0 invisible"
            )}>
                <RoleFilterName />

                {/* Nút tìm kiếm */}
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div
                                className="shrink-0 h-full aspect-square rounded-full flex items-center justify-center border text-darkMedium bg-white cursor-pointer"
                            >
                                <Search size={15} />
                            </div>
                        </TooltipTrigger>

                        <TooltipContent>
                            <p>Tìm kiếm.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}