import OrderClient from "./order-client";
import Error from "@/components/customs/error";

import getAccessToken from "@/lib/utils/getAccessToken";
import { getOrders } from "@/lib/api/server-action/order";

export default async function Order({ searchParams }) {
    const { decode } = getAccessToken();

    const { response, result: orders } = await getOrders(decode?.decode?.id, searchParams?.status);
    if (!orders?.success) return <Error message={`${response?.status},${orders?.message}`} />

    return (
        <OrderClient
            orders={orders?.data?.orders || []}
        />
    )
}
