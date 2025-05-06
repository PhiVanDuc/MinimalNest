import { Suspense } from "react";
import Account from "@/components/pages/account/account";

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <Account />
        </Suspense>
    )
}