import ProductsNormal from "./products-normal";
import ProductsPromote from "./products-promote";
import ProductsListClient from "./products-list-client";

import { getAllPublicProducts, getPublicProducts } from "@/lib/api/server-action/public-product";

export default async function ProductsList({ searchParams }) {
    const [publicLatestProductsRes, publicBestSellerProductsRes, publicAllProductsRes] = await Promise.all([
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

    const { result: publicLatestProducts } = publicLatestProductsRes;
    const { result: publicBestSellerProducts } = publicBestSellerProductsRes;
    const { result: publicAllProducts } = publicAllProductsRes;

    return (
        <ProductsListClient>
            <ProductsPromote
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