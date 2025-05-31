"use client"

import { useState } from "react";

import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

import FilterTime from "./filter-time";

import { Search } from "lucide-react";
import FilterStatus from "./filter-status";

export default function Filter() {
    const [status, setStatus] = useState("all");
    const [range, setRange] = useState(undefined);

    return (
        <div className="flex flex-wrap items-center justify-between gap-y-[10px] gap-x-[20px]">
            <FilterTime
                range={range}
                setRange={setRange}
            />

            <div className="shrink-0 flex items-center gap-[10px]">
                <FilterStatus
                    status={status}
                    setStatus={setStatus}
                />

                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div
                                className="group shrink-0 h-[47px] p-[5px] aspect-square rounded-[10px] border flex items-center justify-center text-darkMedium cursor-pointer bg-white"
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
        </div>
    )
}
