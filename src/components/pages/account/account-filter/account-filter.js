"use client"

import AccountFilterName from "./account-filter-name";
import CustomFilterButton from "@/components/customs/admin/custom-filter-button";

export default function AccountFilter() {
    return (
        <CustomFilterButton>
            <AccountFilterName />
        </CustomFilterButton>
    )
}