import MainLoading from "@/components/customs/main-loading";
import Color from "@/components/pages/color/color";
import { Suspense } from "react";

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <Color searchParams={searchParams} />
        </Suspense>
    )
}
