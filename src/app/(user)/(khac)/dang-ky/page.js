import MainLoading from "@/components/customs/main-loading";
import Register from "@/components/pages/register/register";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={<MainLoading />}>
            <Register />
        </Suspense>
    )
}
