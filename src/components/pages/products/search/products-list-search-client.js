"use client"

import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

export default function ProductsListSearchClient({ children }) {
    const isOpen = useSelector(state => state.productFilterOpen);

    return (
        <div className="flex justify-center">
            <div
                className={cn(
                    "max-width transition-all duration-300 space-y-[60px]",
                    isOpen ? "pl-[20px] md:pl-[40px] xl:pl-[360px] pr-[20px] md:pr-[40px]" : "responsive-horizontal"
                )}
            >
                {children}
            </div>
        </div>
    )
}