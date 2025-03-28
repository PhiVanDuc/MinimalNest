import { Suspense } from "react";
import ProfileCoupon from "@/components/pages/coupon/profile-coupon";

export default function Page() {
    return (
        <Suspense fallback="Loading . . .">
            <ProfileCoupon />
        </Suspense>
    )
}
