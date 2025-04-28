import AdminSidebarHeader from "./admin-sidebar-header";
import AdminSidebarFooter from "./admin-sidebar-footer";
import AdminSidebarContent from "./admin-sidebar-content";
import AdminSidebarContainer from "./admin-sidebar-container";

export default function AdminSidebar() {
    // Fetch

    return (
        <AdminSidebarContainer>
            <AdminSidebarHeader />
            <AdminSidebarContent />
            <AdminSidebarFooter />
        </AdminSidebarContainer>
    )
}
