import AdminProductDiscountClient from "./admin-product-discount-client";
import Error from "@/components/customs/error";

import { getCategories } from "@/lib/api/server-action/categories";
import { getLivingSpaces } from "@/lib/api/server-action/living-space";

export default async function AdminProductDiscount() {
    const [categoriesRes, livingSpacesRes] = await Promise.all([
        getCategories(),
        getLivingSpaces()
    ]);

    const { response: categoriesResponse, result: categories } = categoriesRes;
    const { response: livingSpacesResponse, result: livingSpaces } = livingSpacesRes;

    if (!categories?.success) return <Error message={`${categoriesResponse?.status},${categories?.message}`} />;
    if (!livingSpaces?.success) return <Error message={`${livingSpacesResponse?.status},${livingSpaces?.message}`} />;

    return (
        <AdminProductDiscountClient
            categories={categories?.data?.categories}
            livingSpaces={livingSpaces?.data?.living_spaces}
        />
    )
}