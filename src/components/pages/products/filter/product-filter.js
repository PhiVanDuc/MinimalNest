import ProductFilterClient from "./product-filter-client";

import { getCategories } from "@/lib/api/server-action/categories";
import { getPublicColor } from "@/lib/api/server-action/public_color";
import { getProductTypes } from "@/lib/api/server-action/product-type";

export default async function ProductFilter() {
    const [productTypesRes, categoriesRes, colorsRes] = await Promise.all([
        getProductTypes(),
        getCategories(),
        getPublicColor()
    ]);

    const { response: productTypesResponse, result: productTypes } = productTypesRes;
    const { response: categoriesResponse, result: categories } = categoriesRes;
    const { response: colorsResponse, result: colors } = colorsRes;

    return (
        <ProductFilterClient
            productTypes={productTypes?.data?.product_types || []}
            categories={categories?.data?.categories || []}
            colors={colors?.data?.colors || []}
        />
    )
}