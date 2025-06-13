"use client"

import CouponItem from "./coupon-item";
import CustomPagination from "@/components/customs/admin/custom-pagination";

export default function CouponListContent({
    searchParams,
    coupons
}) {

    return (
        <div className="space-y-[40px]">
            {
                coupons?.rows?.length ?
                (
                    <div
                        className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[25px]"
                    >
                        {
                            coupons?.rows?.map(coupon => {
                                return (
                                    <CouponItem key={coupon.id} coupon={coupon || []} />
                                )
                            })
                        }
                    </div>
                ) :
                <p className="italic text-center text-[14px] text-darkBland">Hiện đang không có phiếu giảm giá nào!</p>
            }
            
            {
                coupons?.rows?.length &&
                <div
                    className="flex justify-center"
                    style={{ marginTop: "50px" }}
                >
                    <CustomPagination page={+searchParams?.page || 1} pageSize={+coupons?.pageSize || 0} totalCount={coupons?.totalItems || 0} />
                </div>
            }
        </div>
    )
}
