import ConsiderClient from "./consider-client";
import Error from "@/components/customs/error";

import { getDetailAdminReturnGoods } from "@/lib/api/server-action/return_goods";

export default async function Consider({ params }) {
    const { response, result: returnGoods } = await getDetailAdminReturnGoods(params?.returnGoodsId);
    if (!returnGoods?.success) return <Error message={`${response?.status},${returnGoods?.message}`} />
    
    return (
        <ConsiderClient
            returnGoods={returnGoods?.data?.return_goods}
        />
    )
}
