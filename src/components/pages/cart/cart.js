import CartClient from "./cart-client";
import getAccessToken from "@/lib/utils/getAccessToken";

export default async function Cart() {
    const { decode } = getAccessToken();

    return (
        <CartClient
            decode={decode}
        />
    )
}
