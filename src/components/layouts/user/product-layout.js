import { Suspense } from "react"
import ProductFilter from "@/components/pages/products/filter/product-filter"
import ProductFilterLoading from "@/components/pages/products/filter/product-filter-loading"

export default function ProductLayout({ children }) {
    return (
        <>
            <Suspense fallback={<ProductFilterLoading />}>
                <ProductFilter />
            </Suspense>
            
            {children}
        </>
    )
}