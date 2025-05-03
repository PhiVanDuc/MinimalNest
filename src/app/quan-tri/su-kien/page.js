import { Suspense } from "react"
import Event from "@/components/pages/event/event";

export default function page() {
    return (
        <Suspense fallback={"Loading . . ."}>
            <Event />
        </Suspense>
    )
}
