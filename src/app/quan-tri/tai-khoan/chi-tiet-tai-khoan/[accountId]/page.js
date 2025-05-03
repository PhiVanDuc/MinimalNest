import { Suspense } from "react";
import AccountDetail from "@/components/pages/account/account-detail/account-detail";

export default function Page() {
    return (
        <Suspense fallback={"Loading . . ."}>
            <AccountDetail />
        </Suspense>
    )
}