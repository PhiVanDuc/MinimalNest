import AdminProductAdd from "@/components/pages/admin-product/admin-product-add/admin-product-add"
import { Suspense } from "react"

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <AdminProductAdd />
        </Suspense>
    )
}
