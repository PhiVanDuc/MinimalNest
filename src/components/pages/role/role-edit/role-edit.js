import RoleEditClient from "./role-edit-client";
import Error from "@/components/customs/error";

import { getPermissions } from "@/lib/api/server-action/permission";
import { getRole } from "@/lib/api/server-action/role";

export default async function RoleEdit({ slug = "slug" }) {
    const [permRes, roleRes] = await Promise.all([
        getPermissions(),
        getRole(slug),
    ]);

    const { response: responsePer, permissions } = permRes;
    const { response: responseRole, role } = roleRes;

    const perError = !permissions?.success;
    const roleError = !role?.success;

    if (perError && roleError) {
        return (
            <>
                <Error message={`${responsePer.status}, ${permissions.message}`} />
                <Error message={`${responseRole.status}, ${role.message}`} />
            </>
        );
    }

    if (perError) return <Error message={`${responsePer.status}, ${permissions.message}`} />;
    if (roleError) return <Error message={`${responseRole.status}, ${role.message}`} />;

    return (
        <RoleEditClient
            permissions={permissions?.data?.permissions || []}
            role={role?.data?.role}
            slug={slug}
        />
    )
}