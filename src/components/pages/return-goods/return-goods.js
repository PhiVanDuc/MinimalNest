import getAccessToken from "@/lib/utils/getAccessToken"
import ReturnGoodsClient from "./return-goods-client";

export default function ReturnGoods() {
    const { decode} = getAccessToken();

    let orders;
    if (decode?.success) {}
        
    return (
        <ReturnGoodsClient
            decode={decode}
            orders={orders}
        />
    )
}
