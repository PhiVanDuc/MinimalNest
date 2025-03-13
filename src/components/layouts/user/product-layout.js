import { Suspense } from "react"
import ProductFilter from "@/components/pages/products/filter/product-filter"
import ProductFilterLoading from "@/components/pages/products/filter/product-filter-loading"

export default function ProductLayout({ children }) {
    return (
        <div className="pt-[66px] xl:pt-[76px] ">
            <Suspense fallback={<ProductFilterLoading />}>
                <ProductFilter />
            </Suspense>
            {children}
        </div>
    )
}