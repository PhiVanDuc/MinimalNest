import SizeEditClient from "./size-edit-client";
import Error from "@/components/customs/error";

import { getCategories } from "@/lib/api/server-action/categories";
import { getSize } from "@/lib/api/server-action/size";

export default async function SizeEdit({ params }) {
    const [categoriesRes, sizeRes] = await Promise.all([
        getCategories(),
        getSize(params?.sizeId)
    ]);
    
    const { response: categoriesResponse, result: categories } = categoriesRes;
    const { response: sizeResponse, result: size } = sizeRes;

    const cateError = !categories?.success;
    const sizeError = !size?.success;

    if (cateError && sizeError) {
        return (
            <>
                <Error message={`${categoriesResponse?.status},${categories?.message}`} />
                <Error message={`${sizeResponse?.status},${size?.message}`} />
            </>
        );
    }

    if (cateError) return <Error message={`${categoriesResponse?.status},${categories?.message}`} />;
    if (sizeError) return <Error message={`${sizeResponse?.status},${size?.message}`} />;

    return (
        <SizeEditClient categories={categories?.data?.categories} size={size?.data?.size} />
    )
}
