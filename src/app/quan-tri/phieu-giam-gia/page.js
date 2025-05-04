import { Suspense } from "react";
import AdminCoupon from "@/components/pages/admin-coupon/admin-coupon";

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . . "}>
            <AdminCoupon />
        </Suspense>
    )
}
