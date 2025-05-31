import { Suspense } from "react";
import Dashboard from "@/components/pages/dashboard/dashboard";
import MainLoading from "@/components/customs/main-loading";

export default function Page() {
    return (
        <Suspense fallback={<MainLoading />}>
            <Dashboard />
        </Suspense>
    )
}
