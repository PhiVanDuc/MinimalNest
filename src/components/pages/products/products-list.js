import ProductsListClient from "./products-list-client";
import ProductsNormal from "./products-normal";
import ProductsPromote from "./products-promote";

export default function ProductsList() {
    return (
        <ProductsListClient>
            <ProductsPromote />
            <ProductsNormal />
        </ProductsListClient>
    )
}