import Inventory from "@/components/pages/inventory/inventory"
import { Suspense } from "react"

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <Inventory searchParams={searchParams} />
        </Suspense>
    )
}
