"use client"

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import ProductFilterWrapper from "./product-filter-wrapper";
import ProductFilterHeader from "./product-filter-header";
import ProductFilterContent from "./product-filter-content";
import ProductFilterFooter from "./product-filter-footer";

import { toggle } from "@/redux/slices/product-filter/product-filter-open-slice";
import { cn } from "@/lib/utils";

const showPaths = ["/san-pham", "/san-pham/tim-kiem"];

export default function ProductFilterClient({
    productTypes,
    categories,
    colors,
    livingSpaces
}) {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.productFilterOpen);

    const pathname = usePathname();
    const [isShow, setIsShow] = useState(showPaths.some(path => pathname === path));

    useEffect(() => {
        setIsShow(showPaths.some(path => pathname === path));
    }, [pathname])

    const handleCloseFilter = () => {
        dispatch(toggle(!isOpen));
    }

    return (
        <>
            <div className={cn(
                "fixed top-0 xl:top-[76px] bottom-0 left-0 w-full sm:w-fit py-[20px] bg-white border-r border-slate-200 transition-all duration-500 z-30 xl:z-10",
                isOpen ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0",
                !isShow ? "hidden" : ""
            )}>
                <aside className="flex flex-col h-full">
                    <ProductFilterWrapper
                        productTypes={productTypes}
                        categories={categories}
                        colors={colors}
                        livingSpaces={livingSpaces}
                    >
                        <ProductFilterHeader />
                        <ProductFilterContent
                            productTypes={productTypes}
                            categories={categories}
                            colors={colors}
                        />
                        <ProductFilterFooter />
                    </ProductFilterWrapper>
                </aside>
            </div>

            <div
                className={cn(
                    "fixed inset-0 bg-black/80 z-20 cursor-pointer",
                    isOpen ? "xl:hidden" : "hidden"
                )}
                onClick={handleCloseFilter}
            />
        </>
    )
}