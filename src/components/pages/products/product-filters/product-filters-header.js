"use client"

import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateProductFilters } from "@/redux/slices/product-filters/product-filters-slice"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { toggleAction } from "@/redux/slices/product-filters/product-filters-toggle-slice"
import { cn } from "@/lib/utils"

export default function ProductFiltersHeader() {
    const searchParams = useSearchParams();
    const dispath = useDispatch();
    const filters = useSelector(state => state.productFilters.seperate);
    const expand = useSelector(state => state.productFiltersToggle.expand)

    const [productName, setProductName] = useState(() => {
        return filters['product-name'] ||
                searchParams.get("product-name") ||
                ''
    });
    const prevValueRef = useRef("");

    // Thực hiện đóng / mở filter
    const handleToggle = () => {
        dispath(toggleAction(!expand));
    }

    // Xử lý Debounce input
    useEffect(() => {
        // Ngăn chặn ần đầu render mà bị chạy vào debounce input
        if (prevValueRef.current === productName) return;
        prevValueRef.current = productName;

        const timer = setTimeout(() => {
            dispath(updateProductFilters({ seperate: true, payload: { 'product-name': productName } }))
        }, 500);

        return () => clearTimeout(timer);
    }, [dispath, productName]);

    return (
        <header className={cn(
            "relative w-[320px] space-y-[20px] px-[20px] mb-[30px] text-center",
            !expand ? "w-fit" : ""
        )}>
            <div className="relative">
                <h2 className={cn(
                    "text-[17px] font-semibold text-darkBold w-full text-center",
                    !expand ? "hidden" : ""
                )}>
                    Bộ Lọc
                </h2>

                <Button
                    variant="ghost"
                    className={cn(
                        "absolute right-0 top-[50%] translate-y-[-50%] text-darkMedium bg-neutral-50",
                        !expand ? "static translate-y-0" : ""
                    )}
                    onClick={handleToggle}
                >
                    <Menu size={20} />
                </Button>
            </div>

            <div className={cn(
                "relative w-full",
                !expand ? "hidden" : ""
            )}>
                <Input
                    value={productName}
                    placeholder="Tên sản phẩm . . ."
                    className="py-[19px] pr-[40px] placeholder:text-[#94A3B8] text-darkBold"
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
        </header>
    )
}