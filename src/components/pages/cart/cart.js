import CartClient from "./cart-client";
import Error from "@/components/customs/error";

import { getCart } from "@/lib/api/server-action/cart";
import getAccessToken from "@/lib/utils/getAccessToken";

export default async function Cart() {
    const { decode } = getAccessToken();
    const { response, result: cart } = await getCart(decode?.decode?.id || "");

    if (!cart?.success) return <Error message={`${response?.status},${cart?.message}`} />

    return (
        <CartClient
            decode={decode}
            cart={cart?.data?.cart}
        />
    )
}
