import AdminProductDiscountClient from "./admin-product-discount-client";
import Error from "@/components/customs/error";

import { getCategories } from "@/lib/api/server-action/categories";
import { getLivingSpaces } from "@/lib/api/server-action/living-space";
import { getProductTypes } from "@/lib/api/server-action/product-type";
import { getGeneralDiscounts } from "@/lib/api/server-action/general-discount";

export default async function AdminProductDiscount() {
    const [ generalDiscountsRes, productTypesRes, categoriesRes, livingSpacesRes] = await Promise.all([
        getGeneralDiscounts(),
        getProductTypes(),
        getCategories(),
        getLivingSpaces()
    ]);

    const { response: generalDiscountsResponse, result: generalDiscounts } = generalDiscountsRes;
    const { response: productTypesResponse, result: productType } = productTypesRes;
    const { response: categoriesResponse, result: categories } = categoriesRes;
    const { response: livingSpacesResponse, result: livingSpaces } = livingSpacesRes;

    if (!generalDiscounts?.success) return <Error message={`${generalDiscountsResponse?.status},${generalDiscounts?.message}`} />;
    if (!productType?.success) return <Error message={`${productTypesResponse?.status},${productType?.message}`} />;
    if (!categories?.success) return <Error message={`${categoriesResponse?.status},${categories?.message}`} />;
    if (!livingSpaces?.success) return <Error message={`${livingSpacesResponse?.status},${livingSpaces?.message}`} />;

    return (
        <AdminProductDiscountClient
            generalDiscounts={generalDiscounts?.data?.general_discounts}
            productTypes={productType?.data?.product_types}
            categories={categories?.data?.categories}
            livingSpaces={livingSpaces?.data?.living_spaces}
        />
    )
}