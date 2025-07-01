import BookAddressClient from "./book-address-client";
import getAccessToken from "@/lib/utils/getAccessToken";

export default async function BookAddress() {
    const { decode } = getAccessToken();

    return (
        <BookAddressClient
            userInfo={decode?.decode}
        />
    )
}
