import Size from "@/components/pages/size/size";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <Size />
        </Suspense>
    )
}
