import { Suspense } from "react";
import RoleDetail from "@/components/pages/role/role-detail/role-detail";

export default function Page() {
    return (
        <Suspense fallback={"Loading . . ."}>
            <RoleDetail />
        </Suspense>
    )
}
