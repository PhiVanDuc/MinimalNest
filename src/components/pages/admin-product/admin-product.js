import AdminProductClient from "./admin-product-client";
import getAccessToken from "@/lib/utils/getAccessToken";

export default async function AdminProduct({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();

    return (
        <AdminProductClient
            permissions={permissions}
            searchParams={searchParams}
        />
    )
}