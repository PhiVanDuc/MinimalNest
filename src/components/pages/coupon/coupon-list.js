import Error from "@/components/customs/error";
import CouponListClient from "./coupon-list-client";
import CouponListContent from "./coupon-list-content";

import { getPublicCoupons } from "@/lib/api/server-action/public-coupon";

export default async function CouponList({ searchParams }) {
    const { response, result: coupons } = await getPublicCoupons({ page: searchParams?.page, limit: 15 });

    if (!coupons?.success) return <Error message={`${response?.status},${coupons?.message}`} />

    return (
        <div className="space-y-[60px]">
            <CouponListClient>
                <h1 className="text-[20px] md:text-[24px] font-semibold text-darkBold space-y-[15px]">Phiếu giảm giá</h1>
                <CouponListContent
                    searchParams={searchParams}
                    coupons={coupons?.data}
                />
            </CouponListClient>
        </div>
    )
}
