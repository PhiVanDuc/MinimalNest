import AdminProduct from "@/components/pages/admin-product/admin-product"
import { Suspense } from "react"

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <AdminProduct />
        </Suspense>
    )
}
