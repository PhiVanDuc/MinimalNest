import SizeEdit from "@/components/pages/size/size-edit/size-edit";
import { Suspense } from "react";

export default function Page({ params }) {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <SizeEdit params={params} />
        </Suspense>
    )
}
