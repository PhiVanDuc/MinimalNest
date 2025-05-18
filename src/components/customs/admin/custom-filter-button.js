"use client"

import { useState } from "react";

import {
    SlidersHorizontal
} from "lucide-react";

import { cn } from "@/lib/utils";

export default function CustomFilterButton({ children }) {
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
                "self-stretch w-full transition-all duration-300",
                openFilter ? "opacity-100 visible" : "opacity-0 invisible"
            )}>
                {children}
            </div>
        </div>
    )
}