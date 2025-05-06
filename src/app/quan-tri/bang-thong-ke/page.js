import { Suspense } from "react";
import Dashboard from "@/components/pages/dashboard/dashboard";

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . ."}>
            <Dashboard />
        </Suspense>
    )
}
