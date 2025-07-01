import EventClient from "./event-client";

import getAccessToken from "@/lib/utils/getAccessToken";

export default async function Event({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();

    return (
        <EventClient
            permissions={permissions}
            searchParams={searchParams}
        />
    )
}