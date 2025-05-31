import { Suspense } from "react";
import AccountEdit from "@/components/pages/account/account-edit/account-edit";
import MainLoading from "@/components/customs/main-loading";

export default function Page({ params }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <AccountEdit params={params} />
        </Suspense>
    )
}
