import PaymentClient from "./payment-client";
import Error from "@/components/customs/error";

import { v4 } from "uuid";
import getAccessToken from "@/lib/utils/getAccessToken";
import { getBookAddresses } from "@/lib/api/server-action/book-address";
import { getReservedOrder } from "@/lib/api/server-action/reserved_order";

const data = Array.from({ length: 3 }).map((_, index) => {
    return {
        id: v4(),
        category: "Danh mục",
        productName: "Tên sản phẩm",
        color: {
            id: v4(),
            label: "Màu đen",
            param: "black",
            codeColor: "#000000"
        },
        size: {
            id: v4(),
            label: "S",
            param: "s"
        },
        quantity: 1,
        singlePrice: "400000000",
        totalPrice: "400000000"
    }
});

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