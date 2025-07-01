import getAccessToken from "@/lib/utils/getAccessToken";
import ReturnGoodsClient from "./return-goods-client";

export default async function ReturnGoods({ searchParams }) {
    const { decode } = getAccessToken();

    return (
        <ReturnGoodsClient
            userInfo={decode?.decode}
            searchParams={searchParams}
        />
    )
}
