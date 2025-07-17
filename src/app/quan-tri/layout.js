import AdminLayout from "@/components/layouts/admin/admin-layout";

export default function Layout({ children }) {
    return (
        <AdminLayout>
            {children}
        </AdminLayout>
    )
}
