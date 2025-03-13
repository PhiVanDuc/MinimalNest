"use client"

import { useSelector } from "react-redux";
import { Suspense } from "react";

import ProductFilterHeader from "./product-filter-header";
import ProductFilterContent from "./product-filter-content";
import ProductFilterFooter from "./product-filter-footer";

import { cn } from "@/lib/utils";
import ProductFilterValidate from "./product-filter-validate";

export default function ProductFilter() {
    const isOpen = useSelector(state => state.productFilterOpen);

    return (
        <>
            <div className={cn(
                "fixed top-0 xl:top-[76px] bottom-0 left-0 w-full sm:w-fit py-[20px] bg-white border-r border-slate-200 transition-all duration-500 z-30 xl:z-10",
                isOpen ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"
            )}>
                <aside className="flex flex-col h-full">
                    <Suspense fallback={""}>
                        <ProductFilterValidate>
                            <ProductFilterHeader />
                            <ProductFilterContent />
                            <ProductFilterFooter />
                        </ProductFilterValidate>
                    </Suspense>
                </aside>
            </div>

            <div className={cn(
                "fixed inset-0 bg-black/80 z-20",
                isOpen ? "xl:hidden" : "hidden"
            )} />
        </>
    )
}