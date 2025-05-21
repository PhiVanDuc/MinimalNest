import { Suspense } from "react"
import Event from "@/components/pages/event/event";

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <Event searchParams={searchParams} />
        </Suspense>
    )
}
