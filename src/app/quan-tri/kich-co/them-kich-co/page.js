export const dynamic = 'force-dynamic';

import SizeAdd from "@/components/pages/size/size-add/size-add";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <SizeAdd />
        </Suspense>
    )
}
