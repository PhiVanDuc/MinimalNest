import { Suspense } from "react";
import ProfileCouponDetail from "@/components/pages/profile/coupon/profile-coupon-detail";

export async function generateMetadata() {
    // fetch dữ liệu
    return {
        title: `${process.env.WEBSITE_NAME} - Chi tiết phiếu giảm giá`,
        description: "Generated by create next app",
    };
}

export default function Page() {
    return (
        <Suspense fallback="Loading . . .">
            <ProfileCouponDetail />
        </Suspense>
    )
}
