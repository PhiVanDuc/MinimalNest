import Error from "@/components/customs/error";
import AdminProductAddClient from "./admin-product-add-client";

import { getSizes } from "@/lib/api/server-action/size";
import { getColors } from "@/lib/api/server-action/color";
import { getCategories } from "@/lib/api/server-action/categories";
import { getLivingSpaces } from "@/lib/api/server-action/living-space";

export default async function AdminProductAdd() {
    const [categoriesRes, livingSpacesRes, sizesRes, colorsRes] = await Promise.all([
        getCategories(),
        getLivingSpaces(),
        getSizes({ all: true }),
        getColors({ all: true })
    ]);

    const { response: categoriesResponse, result: categories } = categoriesRes;
    const { response: livingSpacesResponse, result: livingSpaces } = livingSpacesRes;
    const { response: sizesResponse, result: sizes } = sizesRes; 
    const { response: colorsResponse, result: colors } = colorsRes;

    if (!categories?.success) return <Error message={`${categoriesResponse?.status},${categories?.message}`} />
    if (!livingSpaces?.success) return <Error message={`${livingSpacesResponse?.status},${livingSpaces?.message}`} />
    if (!sizes?.success) return <Error message={`${sizesResponse?.status},${sizes?.message}`} />
    if (!colors?.success) return <Error message={`${colorsResponse?.status},${colors?.message}`} />

    return (
        <AdminProductAddClient
            categories={categories?.data?.categories}
            livingSpaces={livingSpaces?.data?.living_spaces}
            sizes={sizes?.data?.sizes}
            colors={colors?.data?.colors}
        />
    )
}