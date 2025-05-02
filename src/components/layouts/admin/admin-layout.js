import AdminBodyLayout from "./admin-body-layout";
import NavigateBar from "./navigate-bar/navigate-bar";
import AdminSidebar from "./sidebar/admin-sidebar";

export default function AdminLayout({ children }) {
    return (
        <>
            <AdminSidebar />

            <main className="flex flex-col min-h-screen">
                <NavigateBar />
                <AdminBodyLayout>
                    {children}
                </AdminBodyLayout>
            </main>
        </>
    )
}