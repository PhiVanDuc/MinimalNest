import ProductsListClient from "./products-list-client";
import ProductsNormal from "./products-normal";
import ProductsPromote from "./products-promote";

export default async function ProductsList() {
    new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 3000)
    );

    return (
        <ProductsListClient>
            <ProductsPromote />
            <ProductsNormal />
        </ProductsListClient>
    )
}