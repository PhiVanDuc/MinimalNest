export const dynamic = 'force-dynamic';

import ColorAdd from "@/components/pages/color/color-add/color-add";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <ColorAdd />
        </Suspense>
    )
}
