"use client"

import SizeFilterName from "./size-filter-name";
import CustomFilterButton from "@/components/customs/admin/custom-filter-button";

export default function SizeFilter() {
    return (
        <CustomFilterButton>
            <SizeFilterName />
        </CustomFilterButton>
    )
}