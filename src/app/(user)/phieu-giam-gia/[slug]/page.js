import { Suspense } from "react";
import ProfileCouponDetail from "@/components/pages/coupon/profile-coupon-detail";

export default function Page() {
    return (
        <Suspense fallback="Loading . . .">
            <ProfileCouponDetail />
        </Suspense>
    )
}
