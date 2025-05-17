import RoleEditClient from "./role-edit-client";
import Error from "@/components/customs/error";

import { getPermissions } from "@/lib/api/server-action/permission";
import { getRole } from "@/lib/api/server-action/role";

export default async function RoleEdit({ slug = "slug" }) {
    const { response: responsePer, permissions } = await getPermissions();
    const { response: responseRole, role } = await getRole(slug);

    const perError = !permissions?.success;
    const roleError = !role?.success;

    // Nếu cả hai đều lỗi
    if (perError && roleError) {
        return (
        <Error message={`Quyền: ${responsePer?.status},${permissions?.message} | Vai trò: ${responseRole?.status},${role?.message}`} />
        );
    }

    // Nếu chỉ lỗi permissions
    if (perError) {
        return <Error message={`${responsePer?.status},${permissions?.message}`} />;
    }

    // Nếu chỉ lỗi role
    if (roleError) {
        return <Error message={`${responseRole?.status},${role?.message}`} />;
    }

    return (
        <RoleEditClient
            permissions={permissions?.data?.permissions || []}
            role={role?.data?.role}
            slug={slug}
        />
    )
}