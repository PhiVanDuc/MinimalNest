"use client"

import AdminCouponFilterCode from "./admin-coupon-filter-code";
import CustomFilterButton from "@/components/customs/admin/custom-filter-button";

export default function AdminCouponFilter() {
    return (
        <CustomFilterButton>
            <AdminCouponFilterCode />
        </CustomFilterButton>
    )
}