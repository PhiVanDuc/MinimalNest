import getAccessToken from "@/lib/utils/getAccessToken"
import ReturnGoodsClient from "./return-goods-client";

export default async function ReturnGoods() {
    const { decode } = getAccessToken();

    return (
        <ReturnGoodsClient
            decode={decode}
        />
    )
}
