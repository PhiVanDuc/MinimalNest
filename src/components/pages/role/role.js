import RoleClient from "./role-client";

import getAccessToken from "@/lib/utils/getAccessToken";

export default async function Role({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();
    
    return (
        <RoleClient
            permissions={permissions}
            searchParams={searchParams}
        />
    )
}