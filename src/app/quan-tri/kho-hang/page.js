import Inventory from "@/components/pages/inventory/inventory"
import { Suspense } from "react"

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <Inventory />
        </Suspense>
    )
}
