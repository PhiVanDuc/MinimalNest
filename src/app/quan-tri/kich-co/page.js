import MainLoading from "@/components/customs/main-loading";
import Size from "@/components/pages/size/size";
import { Suspense } from "react";

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <Size searchParams={searchParams} />
        </Suspense>
    )
}
