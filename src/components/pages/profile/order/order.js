import OrderClient from "./order-client";

import getAccessToken from "@/lib/utils/getAccessToken";

export default async function Order({ searchParams }) {
    const { decode } = getAccessToken();

    return (
        <OrderClient
            userInfo={decode?.decode}
            searchParams={searchParams}
        />
    )
}
