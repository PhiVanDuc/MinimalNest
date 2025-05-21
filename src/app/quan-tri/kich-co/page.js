import Size from "@/components/pages/size/size";
import { Suspense } from "react";

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <Size searchParams={searchParams} />
        </Suspense>
    )
}
