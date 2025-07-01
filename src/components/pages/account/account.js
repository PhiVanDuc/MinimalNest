import getAccessToken from "@/lib/utils/getAccessToken";
import AccountClient from "./account-client";

export default async function Account({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();

    return (
        <AccountClient
            permissions={permissions}
            searchParams={searchParams}
        />
    )
}