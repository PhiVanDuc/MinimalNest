import { Suspense } from "react";
import Role from "@/components/pages/role/role";
import MainLoading from "@/components/customs/main-loading";

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <Role searchParams={searchParams} />
        </Suspense>
    )
}