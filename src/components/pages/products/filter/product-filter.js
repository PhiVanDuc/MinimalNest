import ProductFilterClient from "./product-filter-client";

import { getCategories } from "@/lib/api/server-action/categories";
import { getPublicColor } from "@/lib/api/server-action/public_color";
import { getProductTypes } from "@/lib/api/server-action/product-type";
import { getLivingSpaces } from "@/lib/api/server-action/living-space";

export default async function ProductFilter() {
    const [productTypesRes, categoriesRes, colorsRes, livingSpacesRes] = await Promise.all([
        getProductTypes(),
        getCategories(),
        getPublicColor(),
        getLivingSpaces()
    ]);

    const { result: productTypes } = productTypesRes;
    const { result: categories } = categoriesRes;
    const { result: colors } = colorsRes;
    const { result: livingSpaces } = livingSpacesRes;

    return (
        <ProductFilterClient
            productTypes={productTypes?.data?.product_types || []}
            categories={categories?.data?.categories || []}
            colors={colors?.data?.colors || []}
            livingSpaces={livingSpaces?.data?.living_spaces}
        />
    )
}