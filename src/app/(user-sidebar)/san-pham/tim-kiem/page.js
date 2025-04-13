import { Suspense } from "react";

import ProductsListSearch from "@/components/pages/products/search/products-list-search";
import ProductsListSearchLoading from "@/components/pages/products/search/products-list-search-loading";

import { redirect } from "next/navigation";
import crypto from 'crypto';

export const metadata = {
	title: `${process.env.WEBSITE_NAME} - Tìm kiếm sản phẩm`,
	description: "Generated by create next app"
};

export default async function Page({ searchParams }) {
    if (!searchParams?.signature) redirect("/san-pham");
    
    const copyData = {...searchParams};
    delete copyData.signature;

    const convert = new URLSearchParams(copyData);
    const final = convert.toString().replace(/%2C/g, ",");
    const currentSignature = crypto.createHmac("sha256", "This is key for signature").update(final).digest('hex');

    if (searchParams.signature !== currentSignature) redirect("/san-pham");

    return (
        <Suspense fallback={<ProductsListSearchLoading />}>
            <ProductsListSearch />
        </Suspense>
    )
}