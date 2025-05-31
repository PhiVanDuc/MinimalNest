import AdminCouponEdit from "@/components/pages/admin-coupon/admin-coupon-edit/admin-coupon-edit"
import { Suspense } from "react"

export default function Page({ params }) {
    return (
        <Suspense fallback={<MainLoading />}>
            <AdminCouponEdit params={params} />
        </Suspense>
    )
}
