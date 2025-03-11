"use client"

import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateProductFilters } from "@/redux/slices/product-filters/product-filters-slice"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search, Undo2 } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { toggleAction, toggleMobileAction } from "@/redux/slices/product-filters/product-filters-toggle-slice"
import { cn } from "@/lib/utils"

export default function ProductFiltersHeader() {
    const searchParams = useSearchParams();
    const dispath = useDispatch();
    const filters = useSelector(state => state.productFilters.seperate);
    const expand = useSelector(state => state.productFiltersToggle.expand);
    const expandMobile = useSelector(state => state.productFiltersToggle.expandMobile);

    const [productName, setProductName] = useState(() => {
        return filters['product-name'] ||
                searchParams.get("product-name") ||
                ''
    });
    const prevValueRef = useRef("");

    const handleToggle = () => {
        dispath(toggleAction(!expand));
    }

    const handleToggleMobile = () => {
        dispath(toggleMobileAction(!expandMobile));
    }

    useEffect(() => {
        if (prevValueRef.current === productName) return;
        prevValueRef.current = productName;

        const timer = setTimeout(() => {
            dispath(updateProductFilters({ seperate: true, payload: { 'product-name': productName } }))
        }, 500);

        return () => clearTimeout(timer);
    }, [dispath, productName]);

    return (
        <header className={cn(
            "relative px-[20px] mb-[30px] text-center transition-all duration-300 ease-linear",
            !expand ? "xl:w-[92px]" : "xl:w-[320px]"
        )}>
            <div className="w-full space-y-[20px]">
                <div className="relative flex items-center justify-center">
                    <h2 className={cn(
                        "text-[17px] font-semibold text-darkBold whitespace-nowrap overflow-hidden text-center transition-all duration-300",
                        !expand ? "xl:opacity-0 xl:w-0 xl:invisible" : "opacity-100"
                    )}>
                        Bộ Lọc
                    </h2>

                    <div className={cn(
                        "hidden xl:block absolute right-0 top-[50%] translate-y-[-50%]",
                        !expand ? "text-center left-0" : ""
                    )}>
                        <Button
                            variant="ghost"
                            className="text-darkMedium bg-neutral-50"
                            onClick={handleToggle}
                        >
                            <Menu size={20} />
                        </Button>
                    </div>

                    <div className={cn(
                        "xl:hidden absolute right-0 top-[50%] translate-y-[-50%]",
                    )}>
                        <Button
                            variant="ghost"
                            className="text-darkMedium bg-neutral-50"
                            onClick={handleToggleMobile}
                        >
                            <Undo2 size={20} />
                        </Button>
                    </div>
                </div>

                <div className={cn(
                    "relative w-full transition-all duration-300 overflow-hidden",
                    !expand ? "xl:opacity-0 xl:invisible" : ""
                )}>
                    <Input
                        value={productName}
                        placeholder="Tên sản phẩm . . ."
                        className="py-[19px] pr-[40px] placeholder:text-[#94A3B8] text-darkBold focus:border-[1.5px] focus:border-darkBland"
                        onChange={(e) => { setProductName(e.target.value) }}
                    />

                    <Search
                        size={20}
                        className="absolute top-[50%] translate-y-[-50%] right-[10px] text-darkMedium cursor-pointer"
                        style={{
                            marginTop: 0
                        }}
                    />
                </div>
            </div>
        </header>
    )
}