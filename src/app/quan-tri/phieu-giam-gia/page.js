import { Suspense } from "react";
import AdminCoupon from "@/components/pages/admin-coupon/admin-coupon";

export default function Page({ searchParams }) {
    return (
        <Suspense fallback={"Đang tải . . . "}>
            <AdminCoupon searchParams={searchParams} />
        </Suspense>
    )
}
