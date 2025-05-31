export const dynamic = 'force-dynamic';

import MainLoading from "@/components/customs/main-loading";
import ColorAdd from "@/components/pages/color/color-add/color-add";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={<MainLoading />}>
            <ColorAdd />
        </Suspense>
    )
}
