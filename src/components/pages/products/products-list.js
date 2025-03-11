"use client"

import { cn } from "@/lib/utils";
import { toggleMobileAction } from "@/redux/slices/product-filters/product-filters-toggle-slice";
import { SlidersHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux"

export default function ProductList() {
    const dispatch = useDispatch();
    const expand = useSelector(state => state.productFiltersToggle.expand);
    const expandMobile = useSelector(state => state.productFiltersToggle.expandMobile);

    const handleToggleFilterMobile = () => {
        dispatch(toggleMobileAction(!expandMobile));
    }

    return (
        <div className={cn(
            "pl-0 xl:pl-[320px] flex justify-center transition-all duration-300",
            !expand ? "xl:pl-[92px]" : ""
        )}>
            <div className="p-[20px] xl:p-[40px] max-width space-y-[40px]">
                <div className="w-full aspect-video lg:aspect-16/5 rounded-[15px] bg-slate-300" />
                
                <div className="flex justify-end">
                    <div
                        className="xl:hidden flex items-center gap-x-[20px] w-fit rounded-[99px] px-[15px] py-[6px] border border-neutral-300 text-[14px] font-medium text-darkMedium cursor-pointer"
                        onClick={handleToggleFilterMobile}
                    >
                        <p>Bộ lọc</p>
                        <SlidersHorizontal size={16} />
                    </div>
                </div>
            </div>
        </div>
    )
}
