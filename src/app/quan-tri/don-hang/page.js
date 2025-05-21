import AdminOrder from "@/components/pages/admin-order/admin-order"
import { Suspense } from "react"

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <AdminOrder searchParams={searchParams} />
        </Suspense>
    )
}
