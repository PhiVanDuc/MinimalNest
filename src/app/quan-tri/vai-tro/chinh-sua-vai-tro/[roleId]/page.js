import { Suspense } from "react";
import RoleEdit from "@/components/pages/role/role-edit/role-edit";

export default function Page() {
    return (
        <Suspense fallback={"Loading . . ."}>
            <RoleEdit />
        </Suspense>
    )
}
