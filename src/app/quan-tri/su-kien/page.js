import { Suspense } from "react"
import Event from "@/components/pages/event/event";
import MainLoading from "@/components/customs/main-loading";

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <Event searchParams={searchParams} />
        </Suspense>
    )
}
