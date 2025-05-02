import AdminSidebarToggle from "../sidebar/admin-sidebar-toggle";
import NavigateBarLayout from "./navigate-bar-layout";
import Notification from "./notification";

export default function NavigateBar() {
    // Fetch
    
    return (
        <NavigateBarLayout>
            <AdminSidebarToggle />
            <Notification />
        </NavigateBarLayout>
    )
}
