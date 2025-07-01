import getAccessToken from "@/lib/utils/getAccessToken";
import AdminCouponClient from "./admin-coupon-client";

export default async function AdminCoupon({ searchParams }) {
    const { decode: { decode: { permissions } } } = getAccessToken();

    return (
        <AdminCouponClient
            permissions={permissions}
            searchParams={searchParams}
        />
    )
}
