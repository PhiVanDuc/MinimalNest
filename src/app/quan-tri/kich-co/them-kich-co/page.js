export const dynamic = 'force-dynamic';

import MainLoading from "@/components/customs/main-loading";
import SizeAdd from "@/components/pages/size/size-add/size-add";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={<MainLoading />}>
            <SizeAdd />
        </Suspense>
    )
}
