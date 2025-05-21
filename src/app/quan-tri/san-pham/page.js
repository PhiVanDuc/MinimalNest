import AdminProduct from "@/components/pages/admin-product/admin-product"
import { Suspense } from "react"

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <AdminProduct searchParams={searchParams} />
        </Suspense>
    )
}
