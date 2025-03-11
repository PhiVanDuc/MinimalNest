"use client"

import { Suspense } from "react";
import { useSelector } from "react-redux";

import ProductFiltersHeader from "./product-filters-header";
import ProductFiltersContent from "./product-filters-content";
import ProductSearchButton from "./product-search-button";
import ProductFiltersCheckSearchParams from "./product-filters-check-searchparams";
import ProductFiltersLoading from "./product-filters-loading";
import { cn } from "@/lib/utils";

export default function ProductFilters() {
    const expandMobile = useSelector(state => state.productFiltersToggle.expandMobile);

    return (
        <aside
            className={cn(
                "fixed top-0 left-0 bottom-0 w-full xl:w-fit xl:translate-x-0 pt-[20px] xl:pt-[96px] pb-[20px] xl:border-r xl:border-slate-200 bg-white z-30 xl:z-10 transition-all duration-500",
                !expandMobile ? "translate-x-[-100%]" : "translate-x-0"
            )}
        >
            <div className="h-full flex flex-col">
                <Suspense fallback={<ProductFiltersLoading />}>
                    <ProductFiltersCheckSearchParams>
                        <ProductFiltersHeader />
                        <ProductFiltersContent />
                        <ProductSearchButton />
                    </ProductFiltersCheckSearchParams>
                </Suspense>
            </div>
        </aside>
    )
}