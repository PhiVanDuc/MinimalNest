import { Suspense } from "react";
import Role from "@/components/pages/role/role";

export default function Page() {
    return (
        <Suspense fallback={"Loading . . ."}>
            <Role />
        </Suspense>
    )
}
