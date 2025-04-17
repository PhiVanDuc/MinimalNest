import ProductsNormal from "./products-normal";
import ProductsPromote from "./products-promote";
import ProductsListClient from "./products-list-client";

export default function ProductsList() {
    return (
        <ProductsListClient>
            <ProductsPromote />
            <ProductsNormal />
        </ProductsListClient>
    )
}