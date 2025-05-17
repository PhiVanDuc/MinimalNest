export const dynamic = 'force-dynamic';

import { Suspense } from "react";
import RoleAdd from "@/components/pages/role/role-add/role-add";

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <RoleAdd />
        </Suspense>
    )
}
