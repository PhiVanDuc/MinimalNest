"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

import AdminOrderFilterStatus from "./admin-order-filter-status";
import AdminOrderFilterTime from "./admin-order-filter-time";

import { Search } from "lucide-react";
import { format } from "date-fns";

export default function AdminOrderFilter({ searchParams }) {
    const router = useRouter();

    const [status, setStatus] = useState(searchParams?.status || "all");
    const [range, setRange] = useState(() => {
        if (searchParams?.from && searchParams?.to) {
            return {
                from: new Date(searchParams.from),
                to: new Date(searchParams.to)
            };
        }
        return undefined;
    });

    const handleSearch = () => {
        const params = new URLSearchParams();

        if (status && status !== "all") {
            params.set("status", status);
        }

        if (range?.from && range?.to) {
            params.set("from", format(range.from, "yyyy-MM-dd"));
            params.set("to", format(range.to, "yyyy-MM-dd"));
        }

        const queryString = params.toString();
        router.replace(`?${queryString}`);
    };

    console.log(status);

    return (
        <div className="flex flex-wrap items-center justify-between gap-y-[10px] gap-x-[20px]">
            <AdminOrderFilterTime
                range={range}
                setRange={setRange}
            />

            <div className="shrink-0 flex items-center gap-[10px]">
                <AdminOrderFilterStatus
                    status={status}
                    setStatus={setStatus}
                />

                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div
                                onClick={handleSearch}
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