"use client"

import AccountFilterEmail from "./account-filter-email";
import CustomFilterButton from "@/components/customs/admin/custom-filter-button";

export default function AccountFilter() {
    return (
        <CustomFilterButton>
            <AccountFilterEmail />
        </CustomFilterButton>
    )
}