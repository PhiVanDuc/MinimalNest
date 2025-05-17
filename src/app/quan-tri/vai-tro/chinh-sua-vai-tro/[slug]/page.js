import { Suspense } from "react";
import RoleEdit from "@/components/pages/role/role-edit/role-edit";

export default function Page({ params }) {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <RoleEdit slug={params?.slug} />
        </Suspense>
    )
}
