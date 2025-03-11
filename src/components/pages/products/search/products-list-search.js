"use client"

import { cn } from "@/lib/utils"
import { useSelector } from "react-redux"

export default function ProductsListSearch() {
    const expand = useSelector(state => state.productFiltersToggle.expand);

    return (
        <div className={cn(
            "w-full pl-[320px] flex justify-center",
            !expand ? "pl-[92px]" : ""
        )}>
            <div className="p-[40px] max-width space-y-[40px]">
                Tìm Kiếm Sản Phẩm
            </div>
        </div>
    )
}
