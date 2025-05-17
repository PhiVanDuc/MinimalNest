import RoleAddClient from "./role-add-client";
import Error from "@/components/customs/error";

import { getPermissions } from "@/lib/api/server-action/permission";

export default async function RoleAdd() {
    const { response, permissions } = await getPermissions();

    return (
        <>
            {
                !permissions?.success ?
                ( <Error message={`${response?.status},${permissions?.message}`} /> ) :
                ( <RoleAddClient permissions={permissions?.data?.permissions || []} /> )
            }
        </>
    )
}