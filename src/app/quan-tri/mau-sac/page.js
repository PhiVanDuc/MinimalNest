import Color from "@/components/pages/color/color";
import { Suspense } from "react";

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <Color searchParams={searchParams} />
        </Suspense>
    )
}
