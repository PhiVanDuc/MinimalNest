"use client"

import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

export default function ProductsListClient({ children }) {
    const isOpen = useSelector(state => state.productFilterOpen);

    return (
        <div
            className={cn(
                "mb-[100px] lg:mb-[150px] space-y-[60px] transition-all duration-300",
                isOpen ? "pl-[20px] md:pl-[40px] xl:pl-[360px] pr-[20px] md:pr-[40px]" : "responsive-horizontal"
            )}
        >
            {children}
        </div>
    )
}