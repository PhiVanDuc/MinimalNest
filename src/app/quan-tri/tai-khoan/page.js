import { Suspense } from "react";
import Account from "@/components/pages/account/account";

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <Account searchParams={searchParams} />
        </Suspense>
    )
}