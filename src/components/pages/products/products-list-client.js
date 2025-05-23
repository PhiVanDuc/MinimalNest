"use client"

import useProductFilter from "@/hooks/use-product-filter";
import { cn } from "@/lib/utils";

export default function ProductsListClient({ children }) {
    const { isOpen } = useProductFilter();

    return (
        <div
            className={cn(
                "space-y-[60px] transition-all duration-300",
                isOpen ? "pl-[20px] md:pl-[40px] xl:pl-[360px] pr-[20px] md:pr-[40px]" : "responsive-horizontal"
            )}
        >
            {children}
        </div>
    )
}