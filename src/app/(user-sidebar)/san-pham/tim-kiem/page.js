import { Suspense } from "react";
import ProductsListSearchLoading from "@/components/pages/products/search/products-list-search-loading";
import ProductsListSearch from "@/components/pages/products/search/products-list-search";

import { redirect } from "next/navigation";
import crypto from 'crypto';

export const metadata = {
	title: `Tìm kiếm sản phẩm`
};

export default async function Page({ searchParams }) {
    if (!searchParams?.signature) redirect("/san-pham");
    
    const copyData = {...searchParams};
    if (copyData?.signature) delete copyData.signature;

    const convert = new URLSearchParams(copyData);
    const final = convert.toString().replace(/%2C/g, ",");
    const currentSignature = crypto.createHmac("sha256", "This is key for signature").update(final).digest('hex');

    if (searchParams?.signature !== currentSignature) redirect("/san-pham");

    return (
        <Suspense fallback={<ProductsListSearchLoading />}>
            <ProductsListSearch searchParams={searchParams} />
        </Suspense>
    )
}