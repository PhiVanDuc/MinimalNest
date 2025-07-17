import { Suspense } from "react";
import ProductsList from "@/components/pages/products/products-list";
import ProductsListLoading from "@/components/pages/products/products-list-loading";

export const metadata = {
	title: `Sản phẩm`
};

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={<ProductsListLoading />}>
            <ProductsList searchParams={searchParams} />
        </Suspense>
    )
}
