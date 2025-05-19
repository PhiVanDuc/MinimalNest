import AdminSidebarHeader from "./admin-sidebar-header";
import AdminSidebarFooter from "./admin-sidebar-footer";
import AdminSidebarContent from "./admin-sidebar-content";
import AdminSidebarContainer from "./admin-sidebar-container";

import getAccessToken from "@/lib/utils/getAccessToken";
export default function AdminSidebar() {
    const { decode } = getAccessToken();

    return (
        <AdminSidebarContainer>
            <AdminSidebarHeader />
            <AdminSidebarContent />
            <AdminSidebarFooter infoUser={decode?.decode} />
        </AdminSidebarContainer>
    )
}
