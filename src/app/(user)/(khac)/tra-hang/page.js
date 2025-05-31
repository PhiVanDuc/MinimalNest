import MainLoading from "@/components/customs/main-loading";
import ReturnGoods from "@/components/pages/return-goods/return-goods";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={<MainLoading />}>
            <ReturnGoods />
        </Suspense>
    )
}
