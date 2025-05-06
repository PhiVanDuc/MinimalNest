"use client"

import AdminProductFilterName from "./admin-product-filter-name";
import CustomFilterButton from "@/components/customs/admin/custom-filter-button";

export default function AdminProductFilter() {
    return (
        <CustomFilterButton>
            <AdminProductFilterName />
        </CustomFilterButton>
    )
}