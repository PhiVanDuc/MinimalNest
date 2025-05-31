import { Suspense } from "react";
import MainLoading from "@/components/customs/main-loading";
import AdminReturnGoods from "@/components/pages/admin-return-goods/admin-return-goods";

export default function Page() {
    return (
        <Suspense fallback={<MainLoading />}>
            <AdminReturnGoods />
        </Suspense>
    )
}
