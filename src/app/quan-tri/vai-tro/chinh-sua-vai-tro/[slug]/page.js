import { Suspense } from "react";
import RoleEdit from "@/components/pages/role/role-edit/role-edit";
import MainLoading from "@/components/customs/main-loading";

export default function Page({ params }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <RoleEdit slug={params?.slug} />
        </Suspense>
    )
}
