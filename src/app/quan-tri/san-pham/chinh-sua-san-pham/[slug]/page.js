import AdminProductEdit from "@/components/pages/admin-product/admin-product-edit/admin-product-edit"
import { Suspense } from "react"

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <AdminProductEdit />
        </Suspense>
    )
}
