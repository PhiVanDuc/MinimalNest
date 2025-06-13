import AdminCouponEditClient from "./admin-coupon-edit-client";
import Error from "@/components/customs/error";

import { getEvents } from "@/lib/api/server-action/event";
import { getCoupon } from "@/lib/api/server-action/coupon";

export default async function AdminCouponEdit({ params }) {
    const [eventsRes, couponRes] = await Promise.all([
        getEvents({ all: true, isDiscount: true }),
        getCoupon(params?.couponId)
    ]);

    const { response: eventsResponse, result: events } = eventsRes;
    const { response: couponResponse, result: coupon } = couponRes;

    if (!events?.success && !coupon?.success) {
        return <>
            <Error message={`${eventsResponse?.status},${events?.message}`} />
            <Error message={`${couponResponse?.status},${events?.coupon}`} />
        </>
    }

    if (!events?.success) return <Error message={`${eventsResponse?.status},${events?.message}`} />;
    if (!coupon?.success) return <Error message={`${couponResponse?.status},${events?.coupon}`} />

    return (
        <AdminCouponEditClient events={events?.data?.events} coupon={coupon?.data?.coupon} couponId={params?.couponId} />
    )
}