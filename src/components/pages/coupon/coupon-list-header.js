"use client"

import CouponFilterRightSide from "./filter/coupon-filter-right-side";

export default function CouponListHeader() {    
    return (
        <div className="space-y-[15px]">
            <h1 className="text-[20px] md:text-[24px] font-semibold text-darkBold space-y-[15px]">Phiếu giảm giá</h1>
            <CouponFilterRightSide />
        </div>
    )
}
