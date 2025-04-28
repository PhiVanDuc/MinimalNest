import AdminBodyLayout from "./admin-body-layout";
import NavigateBar from "./navigate-bar/navigate-bar";
import AdminSidebar from "./sidebar/admin-sidebar";

export default function AdminLayout({ children }) {
    return (
        <>
            <AdminSidebar />

            <main className="space-y-[30px]">
                <NavigateBar />
                <AdminBodyLayout>
                    {children}
                </AdminBodyLayout>
            </main>
        </>
    )
}