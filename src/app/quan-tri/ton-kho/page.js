import MainLoading from "@/components/customs/main-loading"
import Inventory from "@/components/pages/inventory/inventory"
import { Suspense } from "react"

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <Inventory searchParams={searchParams} />
        </Suspense>
    )
}
