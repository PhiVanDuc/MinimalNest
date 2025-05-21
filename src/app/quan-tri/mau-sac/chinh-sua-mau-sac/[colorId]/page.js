import ColorEdit from "@/components/pages/color/color-edit/color-edit";
import { Suspense } from "react";

export default function Page({ params }) {
    return (
        <Suspense fallback="Đang tải . . .">
            <ColorEdit params={params} />
        </Suspense>
    )
}
