"use client"

import ColorFilterName from "./color-filter-name";
import CustomFilterButton from "@/components/customs/admin/custom-filter-button";

export default function ColorFilter() {
    return (
        <CustomFilterButton>
            <ColorFilterName />
        </CustomFilterButton>
    )
}