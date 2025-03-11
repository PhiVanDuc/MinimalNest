"use client"

import { cn } from "@/lib/utils";
import { toggleMobileAction } from "@/redux/slices/product-filters/product-filters-toggle-slice";
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
                <p onClick={handleToggleFilterMobile}>Test Filters</p>
            </div>
        </div>
    )
}
