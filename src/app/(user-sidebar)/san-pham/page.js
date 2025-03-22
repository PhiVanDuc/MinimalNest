import { Suspense } from "react";

import ProductsList from "@/components/pages/products/products-list";
import ProductsListLoading from "@/components/pages/products/products-list-loading";

export default function Page() {
    return (
        <Suspense fallback={<ProductsListLoading />}>
            <ProductsList />
        </Suspense>
    )
}
