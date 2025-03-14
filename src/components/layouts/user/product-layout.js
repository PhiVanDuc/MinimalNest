import { Suspense } from "react"
import ProductFilter from "@/components/pages/products/filter/product-filter"
import ProductFilterLoading from "@/components/pages/products/filter/product-filter-loading"
import Newsletter from "./newsletter"
import Footer from "./footer"

export default function ProductLayout({ children }) {
    return (
        <>
            <Suspense fallback={<ProductFilterLoading />}>
                <ProductFilter />
            </Suspense>
            
            {children}

            <Newsletter />
            <div className="border-t border-slate-200">
                <Footer />
            </div>
        </>
    )
}