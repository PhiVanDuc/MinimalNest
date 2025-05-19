import { Suspense } from "react";
import AccountEdit from "@/components/pages/account/account-edit/account-edit";

export default function Page({ params }) {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <AccountEdit params={params} />
        </Suspense>
    )
}
