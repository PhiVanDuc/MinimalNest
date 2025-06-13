import ProductsNormal from "./products-normal";
import ProductsPromote from "./products-promote";
import ProductsListClient from "./products-list-client";

import { getAllPublicProducts, getPublicProducts } from "@/lib/api/server-action/public-product";
import { getPublicEvents } from "@/lib/api/server-action/public-event";

export default async function ProductsList({ searchParams }) {
    const [publicEventsRes, publicLatestProductsRes, publicBestSellerProductsRes, publicAllProductsRes] = await Promise.all([
        getPublicEvents(),
        getPublicProducts({
            productType: 'moi-nhat'
        }),
        getPublicProducts({
            productType: 'ban-chay-nhat'
        }),
        getAllPublicProducts({
            limit: 20,
            page: searchParams?.page || 1
        })
    ]);

    const { result: publicEvents } = publicEventsRes;
    const { result: publicLatestProducts } = publicLatestProductsRes;
    const { result: publicBestSellerProducts } = publicBestSellerProductsRes;
    const { result: publicAllProducts } = publicAllProductsRes;

    return (
        <ProductsListClient>
            <ProductsPromote
                publicEvents={publicEvents?.data?.events}
                publicLatestProducts={publicLatestProducts?.data?.products}
                publicBestSellerProducts={publicBestSellerProducts?.data?.products}
            />

            {
                publicAllProducts?.success && publicAllProducts?.data?.rows?.length ?
                <ProductsNormal
                    searchParams={searchParams}
                    publicAllProducts={publicAllProducts?.data}
                /> : <></>
            }
        </ProductsListClient>
    )
}