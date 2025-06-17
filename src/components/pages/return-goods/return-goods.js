import getAccessToken from "@/lib/utils/getAccessToken"
import ReturnGoodsClient from "./return-goods-client";

import Error from "@/components/customs/error";
import { getOrders } from "@/lib/api/server-action/order";

export default async function ReturnGoods() {
    const { decode } = getAccessToken();

    const { response, result: orders } = await getOrders(decode?.decode?.id, "fulfilled");
    if (!orders?.success) return <Error message={`${response?.status},${orders?.message}`} />

    return (
        <ReturnGoodsClient
            decode={decode}
            orders={orders?.data?.orders}
        />
    )
}
