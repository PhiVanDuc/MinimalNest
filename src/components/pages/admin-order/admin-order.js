import Error from "@/components/customs/error";
import AdminOrderClient from "./admin-order-client";

import getAccessToken from "@/lib/utils/getAccessToken";
import { getAdminOrders } from "@/lib/api/server-action/order";

export default async function AdminOrder({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();

    const page = Number(searchParams?.page || 1);
    const status = searchParams?.status || "all";
    const from = searchParams?.from || "";
    const to = searchParams?.to || "";

    const { response, result: orders } = await getAdminOrders({ page, status, from, to });
    if (!orders?.success) return <Error message={`${response?.status},${orders?.message}`} />

    return (
        <AdminOrderClient
            searchParams={searchParams}
            permissions={permissions}
            orders={orders}
        />
    )
}
