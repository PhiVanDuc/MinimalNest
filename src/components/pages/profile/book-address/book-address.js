import BookAddressClient from "./book-address-client";
import Error from "@/components/customs/error";

import getAccessToken from "@/lib/utils/getAccessToken";
import { getBookAddresses } from "@/lib/api/server-action/book-address";

export default async function BookAddress() {
    const { accessToken, decode } = getAccessToken();
    const { response, result: bookAddresses } = await getBookAddresses(`${decode?.decode?.id}` || "");

    if (!bookAddresses?.success) return <Error message={`${response?.status},${bookAddresses?.message}`} />

    return (
        <BookAddressClient
            decode={decode?.decode}
            bookAddresses={bookAddresses?.data?.book_addresses}
        />
    )
}
