import { Suspense } from "react";
import ProductsList from "@/components/pages/products/products-list";
import ProductsListLoading from "@/components/pages/products/products-list-loading";

export const metadata = {
	title: `${process.env.WEBSITE_NAME} - Sản phẩm`,
	description: "Generated by create next app"
};

export default function Page() {
    return (
        <Suspense fallback={<ProductsListLoading />}>
            <ProductsList />
        </Suspense>
    )
}
