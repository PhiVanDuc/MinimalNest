import ColorClient from "./color-client";
import getAccessToken from "@/lib/utils/getAccessToken";

export default async function Color({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();

    return (
        <ColorClient
            permissions={permissions}
            searchParams={searchParams}
        />
    )
}
