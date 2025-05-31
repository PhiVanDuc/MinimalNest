import MainLoading from "@/components/customs/main-loading";
import ColorEdit from "@/components/pages/color/color-edit/color-edit";
import { Suspense } from "react";

export default function Page({ params }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <ColorEdit params={params} />
        </Suspense>
    )
}
