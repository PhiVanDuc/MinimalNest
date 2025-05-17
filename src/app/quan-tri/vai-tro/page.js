import { Suspense } from "react";
import Role from "@/components/pages/role/role";

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <Role page={searchParams?.page || 1} />
        </Suspense>
    )
}