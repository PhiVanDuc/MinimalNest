import ProductsListSearchClient from "./products-list-search-client";
import ProductItem from "../product-item";

import { v4 } from "uuid";

const products = [
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    },
    {
        id: v4(),
        component: <ProductItem />
    }
]

export default function ProductsListSearch() {
    return (
        <ProductsListSearchClient products={products} />
    )
}
