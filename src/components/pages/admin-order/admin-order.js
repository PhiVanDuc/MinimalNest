import AdminOrderClient from "./admin-order-client";
import getAccessToken from "@/lib/utils/getAccessToken";

export default async function AdminOrder({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();

    return (
        <AdminOrderClient
            searchParams={searchParams}
            permissions={permissions}
        />
    )
}
