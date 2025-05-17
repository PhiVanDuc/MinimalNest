import AdminCouponEdit from "@/components/pages/admin-coupon/admin-coupon-edit/admin-coupon-edit"
import { Suspense } from "react"

export default function Page() {
    return (
        <Suspense fallback={"Đang tải . . . "}>
            <AdminCouponEdit />
        </Suspense>
    )
}
