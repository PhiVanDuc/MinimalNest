import { Suspense } from "react";
import AdminCoupon from "@/components/pages/admin-coupon/admin-coupon";
import MainLoading from "@/components/customs/main-loading";

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <AdminCoupon searchParams={searchParams} />
        </Suspense>
    )
}
