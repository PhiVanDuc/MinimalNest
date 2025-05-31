import MainLoading from "@/components/customs/main-loading"
import AdminProduct from "@/components/pages/admin-product/admin-product"
import { Suspense } from "react"

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <AdminProduct searchParams={searchParams} />
        </Suspense>
    )
}
