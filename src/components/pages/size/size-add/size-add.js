import { getCategories } from "@/lib/api/server-action/categories";
import Error from "@/components/customs/error";
import SizeAddClient from "./size-add-client";

export default async function SizeAdd() {
    const { response, result: categories } = await getCategories();
    if (!categories?.success) return <Error message={`${response?.status},${categories?.success}`} />

    return (
        <SizeAddClient categories={categories?.data?.categories} />
    )
}
