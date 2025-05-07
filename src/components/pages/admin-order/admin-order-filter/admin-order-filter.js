"use client"

import { useState } from "react";

import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

import AdminOrderFilterStatus from "./admin-order-filter-status";
import AdminOrderFilterTime from "./admin-order-filter-time";

import { Search } from "lucide-react";

export default function AdminOrderFilter() {
    const [status, setStatus] = useState("all");
    const [range, setRange] = useState(undefined);

    return (
        <div className="flex items-center justify-between gap-x-[20px]">
            <div className="shrink-0 flex items-center gap-[10px]">
                <AdminOrderFilterTime
                    range={range}
                    setRange={setRange}
                />

                <AdminOrderFilterStatus
                    status={status}
                    setStatus={setStatus}
                />
            </div>

            <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div
                            className="group shrink-0 h-[40px] p-[5px] aspect-square rounded-[10px] border flex items-center justify-center text-darkMedium cursor-pointer bg-white"
                        >
                            <Search
                                size={18}
                                className="text-darkBold"
                            />
                        </div>
                    </TooltipTrigger>

                    <TooltipContent>
                        <p>Tìm kiếm.</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}