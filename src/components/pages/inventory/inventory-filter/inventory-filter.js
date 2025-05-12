"use client"

import InventoryFilterName from "./inventory-filter-name";
import CustomFilterButton from "@/components/customs/admin/custom-filter-button";

export default function InventoryFilter() {
    return (
        <CustomFilterButton>
            <InventoryFilterName />
        </CustomFilterButton>
    )
}