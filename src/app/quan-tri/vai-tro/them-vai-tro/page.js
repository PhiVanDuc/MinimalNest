export const dynamic = 'force-dynamic';

import { Suspense } from "react";
import RoleAdd from "@/components/pages/role/role-add/role-add";
import MainLoading from "@/components/customs/main-loading";

export default function Page() {
    return (
        <Suspense fallback={<MainLoading />}>
            <RoleAdd />
        </Suspense>
    )
}
