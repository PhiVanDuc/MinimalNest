import getAccessToken from "@/lib/utils/getAccessToken";
import ReturnGoodsClient from "./return-goods-client";
import Error from "@/components/customs/error";

import { getReturnGoods } from "@/lib/api/server-action/return_goods";

export default async function ReturnGoods({ searchParams }) {
    const { decode } = getAccessToken();
    const { response, result: return_goods } = await getReturnGoods(decode?.decode?.id, searchParams?.status);

    if (!return_goods?.success) return <Error message={`${response?.status},${return_goods?.message}`} />

    return (
        <ReturnGoodsClient
            returnGoods={return_goods?.data?.return_goods}
        />
    )
}
