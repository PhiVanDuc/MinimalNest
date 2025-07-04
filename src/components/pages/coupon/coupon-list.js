import Error from "@/components/customs/error";
import CouponListContent from "./coupon-list-content";

import { getPublicCoupons } from "@/lib/api/server-action/public-coupon";

export default async function CouponList({ searchParams }) {
    const { status, result: coupons } = await getPublicCoupons({ page: searchParams?.page, limit: 15 });

    if (!coupons?.success) return <Error message={`${status},${coupons?.message}`} />

    return (
        <div className="space-y-[60px]">
            <h1 className="text-[20px] md:text-[24px] font-semibold text-darkBold space-y-[15px]">Phiếu giảm giá</h1>
            
            <CouponListContent
                searchParams={searchParams}
                coupons={coupons?.data}
            />
        </div>
    )
}
