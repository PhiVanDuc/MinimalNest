import { Suspense } from "react";
import MainLoading from "@/components/customs/main-loading";
import Consider from "@/components/pages/admin-return-goods/consider/consider";

export default function Page({ params }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <Consider params={params} />
        </Suspense>
    )
}
