import PaymentClient from "./payment-client";
import Error from "@/components/customs/error";

import getAccessToken from "@/lib/utils/getAccessToken";
import { getBookAddresses } from "@/lib/api/server-action/book-address";
import { getReservedOrder } from "@/lib/api/server-action/reserved_order";

export default async function Payment({ params }) {
    const { decode } = getAccessToken();

    const [bookAddressesRes, reservedOrderRes] = await Promise.all([
        getBookAddresses(decode?.decode?.id),
        getReservedOrder(params?.reservedOrderId || "")
    ]);

    const { response: bookAddressesResponse, result: bookAddresses } = bookAddressesRes;
    const { response: reservedOrderResponse, result: reservedOrder } = reservedOrderRes;

    if (!bookAddresses?.success) return <Error message={`${bookAddressesResponse?.status},${bookAddresses?.message}`} />
    if (!reservedOrder?.success) return <Error message={`${reservedOrderResponse?.status},${reservedOrder?.message}`} />
    
    return (
        <PaymentClient
            bookAddresses={bookAddresses?.data?.book_addresses}
            reservedOrderInfo={reservedOrder?.data}
        />
    )
}