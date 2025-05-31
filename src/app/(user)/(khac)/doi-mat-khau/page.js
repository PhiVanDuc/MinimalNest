import MainLoading from "@/components/customs/main-loading";
import ResetPassword from "@/components/pages/reset-password/reset-password";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={<MainLoading />}>
            <ResetPassword />
        </Suspense>
    )
}
