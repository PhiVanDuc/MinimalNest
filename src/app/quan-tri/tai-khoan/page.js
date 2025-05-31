import { Suspense } from "react";
import Account from "@/components/pages/account/account";
import MainLoading from "@/components/customs/main-loading";

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <Account searchParams={searchParams} />
        </Suspense>
    )
}