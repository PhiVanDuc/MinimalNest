"use client"

import AdminCouponFilterName from "./admin-coupon-filter-name";
import CustomFilterButton from "@/components/customs/admin/custom-filter-button";

export default function AdminCouponFilter() {
    return (
        <CustomFilterButton>
            <AdminCouponFilterName />
        </CustomFilterButton>
    )
}