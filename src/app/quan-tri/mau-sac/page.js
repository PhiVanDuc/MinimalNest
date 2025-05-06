import Color from "@/components/pages/color/color";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <Color />
        </Suspense>
    )
}
