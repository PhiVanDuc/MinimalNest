import getAccessToken from "@/lib/utils/getAccessToken";
import AdminReturnGoodsClient from "./admin-return-goods-client";

export default async function AdminReturnGoods({ searchParams }) {
    const {decode: { decode: { permissions }}} = getAccessToken();

    return (
        <AdminReturnGoodsClient
            permissions={permissions}
            searchParams={searchParams}
        />
    )
}
