import AdminCouponAdd from "@/components/pages/admin-coupon/admin-coupon-add/admin-coupon-add"
import { Suspense } from "react"

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . . "}>
            <AdminCouponAdd />
        </Suspense>
    )
}
