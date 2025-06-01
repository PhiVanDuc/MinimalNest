import { Suspense } from "react";

import AdminCouponEdit from "@/components/pages/admin-coupon/admin-coupon-edit/admin-coupon-edit";
import MainLoading from "@/components/customs/main-loading";

export default function Page({ params }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <AdminCouponEdit params={params} />
        </Suspense>
    )
}
