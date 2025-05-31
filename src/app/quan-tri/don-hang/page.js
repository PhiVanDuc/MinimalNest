import MainLoading from "@/components/customs/main-loading"
import AdminOrder from "@/components/pages/admin-order/admin-order"
import { Suspense } from "react"

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <AdminOrder searchParams={searchParams} />
        </Suspense>
    )
}
