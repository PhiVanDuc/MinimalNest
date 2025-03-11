import { Suspense } from "react";

import ProductFiltersHeader from "./product-filters-header";
import ProductFiltersContent from "./product-filters-content";
import ProductSearchButton from "./product-search-button";
import ProductFiltersCheckSearchParams from "./product-filters-check-searchparams";
import ProductFiltersLoading from "./product-filters-loading";

export default async function ProductFilters() {
    return (
        <aside
            className="fixed top-0 left-0 bottom-0 w-full md:w-fit translate-x-[-100%] md:translate-x-0 pt-[20px] md:pt-[86px] xl:pt-[96px] pb-[20px] md:border-r md:border-slate-200 bg-white z-30 md:z-10"
        >
            <div className="h-full flex flex-col">
                <Suspense fallback={<ProductFiltersLoading />}>
                    <ProductFiltersCheckSearchParams>
                        <ProductFiltersHeader />
                        {/* <ProductFiltersContent />
                        <ProductSearchButton /> */}
                    </ProductFiltersCheckSearchParams>
                </Suspense>
            </div>
        </aside>
    )
}