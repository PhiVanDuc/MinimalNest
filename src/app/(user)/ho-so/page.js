import { Suspense } from "react";
import ProfileGeneral from "@/components/pages/profile/general/profile-general";

export default function Page() {
    return (
        <Suspense fallback="loading...">
            <ProfileGeneral />
        </Suspense>
    )
}