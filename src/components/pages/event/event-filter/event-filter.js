"use client"

import EventFilterTitle from "./event-filter-title";
import CustomFilterButton from "@/components/customs/admin/custom-filter-button";

export default function EventFilter() {
    return (
        <CustomFilterButton>
            <EventFilterTitle />
        </CustomFilterButton>
    )
}