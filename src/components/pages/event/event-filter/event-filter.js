"use client"

import EventFilterName from "./event-filter-name";
import CustomFilterButton from "@/components/customs/admin/custom-filter-button";

export default function EventFilter() {
    return (
        <CustomFilterButton>
            <EventFilterName />
        </CustomFilterButton>
    )
}