import MainLoading from "@/components/customs/main-loading";
import SignIn from "@/components/pages/sign-in/sign-in";
import { Suspense } from "react";

export default function Page() {
    return (
        <Suspense fallback={<MainLoading />}>
            <SignIn />
        </Suspense>
    ) 
}
