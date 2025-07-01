import SizeClient from "./size-client";
import getAccessToken from "@/lib/utils/getAccessToken";

export default async function Size({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();

    return (
        <SizeClient
            permissions={permissions}
            searchParams={searchParams}
        />
    )
}