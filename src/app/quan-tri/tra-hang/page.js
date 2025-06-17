import { Suspense } from "react";
import MainLoading from "@/components/customs/main-loading";
import AdminReturnGoods from "@/components/pages/admin-return-goods/admin-return-goods";

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <AdminReturnGoods searchParams={searchParams} />
        </Suspense>
    )
}
