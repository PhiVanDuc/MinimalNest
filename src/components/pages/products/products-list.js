"use client"

import { cn } from "@/lib/utils";
import { useSelector } from "react-redux"

export default function ProductList() {
    const expand = useSelector(state => state.productFiltersToggle.expand);

    return (
        <div className={cn(
            "w-full pl-0 md:pl-[320px] flex justify-center transition duration-300",
            !expand ? "md:pl-[92px]" : ""
        )}>
            <div className="p-[20px] md:p-[40px] max-width space-y-[40px]">
                <div className="w-full aspect-video xl:aspect-16/5 rounded-[15px] bg-slate-300" />
            </div>
        </div>
    )
}
