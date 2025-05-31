import MainLoading from "@/components/customs/main-loading";
import SizeEdit from "@/components/pages/size/size-edit/size-edit";
import { Suspense } from "react";

export default function Page({ params }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <SizeEdit params={params} />
        </Suspense>
    )
}
