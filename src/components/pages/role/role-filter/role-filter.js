"use client"

import RoleFilterName from "./role-filter-name";
import CustomFilterButton from "@/components/customs/admin/custom-filter-button";

export default function RoleFilter() {
    return (
        <CustomFilterButton>
            <RoleFilterName />
        </CustomFilterButton>
    )
}