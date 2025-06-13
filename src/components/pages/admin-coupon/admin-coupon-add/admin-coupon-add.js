import AdminCouponAddClient from "./admin-coupon-add-client";
import Error from "@/components/customs/error";

import { getEvents } from "@/lib/api/server-action/event";

export default async function AdminCouponAdd() {
    const { response, result: events } = await getEvents({ all: true, isDiscount: true });
    if (!events?.success) return <Error message={`${response?.status},${events?.message}`} />

    return (
        <AdminCouponAddClient events={events?.data?.events} />
    )
}