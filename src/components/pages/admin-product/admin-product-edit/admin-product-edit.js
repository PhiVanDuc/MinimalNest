import Error from "@/components/customs/error";
import AdminProductEditClient from "./admin-product-edit-client";

import { getSizes } from "@/lib/api/server-action/size";
import { getColors } from "@/lib/api/server-action/color";
import { getCategories } from "@/lib/api/server-action/categories";
import { getLivingSpaces } from "@/lib/api/server-action/living-space";
import { getProduct } from "@/lib/api/server-action/product";

export default async function AdminProductEdit({ params }) {
    const [categoriesRes, livingSpacesRes, sizesRes, colorsRes, productRes] = await Promise.all([
        getCategories(),
        getLivingSpaces(),
        getSizes({ all: true }),
        getColors({ all: true }),
        getProduct(params?.slug || "")
    ]);

    const { response: categoriesResponse, result: categories } = categoriesRes;
    const { response: livingSpacesResponse, result: livingSpaces } = livingSpacesRes;
    const { response: sizesResponse, result: sizes } = sizesRes; 
    const { response: colorsResponse, result: colors } = colorsRes;
    const { response: productResponse, result: product } = productRes;

    if (!categories?.success) return <Error message={`${categoriesResponse?.status},${categories?.message}`} />
    if (!livingSpaces?.success) return <Error message={`${livingSpacesResponse?.status},${livingSpaces?.message}`} />
    if (!sizes?.success) return <Error message={`${sizesResponse?.status},${sizes?.message}`} />
    if (!colors?.success) return <Error message={`${colorsResponse?.status},${colors?.message}`} />
    if (!product?.success) return <Error message={`${productResponse?.status},${product?.message}`} />

    return (
        <AdminProductEditClient
            slug={params?.slug}
            categories={categories?.data?.categories}
            livingSpaces={livingSpaces?.data?.living_spaces}
            sizes={sizes?.data?.sizes}
            colors={colors?.data?.colors}
            productInfo={product?.data?.product}
            livingSpaceIdsInfo={product?.data?.living_space_ids}
            sizesInfo={product?.data?.sizes}
            colorsInfo={product?.data?.colors}
            imagesInfo={product?.data?.images}
        />
    )
}