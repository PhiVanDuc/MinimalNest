"use client"

import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import returnGoodsStatuses from "@/static/return-goods-status";

export default function ReturnGoodsStatus() {
    const searchParams = useSearchParams();

    return (
        <div
            className="flex w-full overflow-x-auto no-scrollbar px-[20px] bg-[#F5F6F9] rounded-[15px]"
        >
            {
                returnGoodsStatuses.map((status, index) => (
                    <Link
                        key={status.id}
                        href={`/ho-so/tra-hang?status=${status.value}`}
                        className={cn(
                            "relative w-full px-[20px] py-[15px] text-[14px] text-center text-darkBland hover:text-yellowBold whitespace-nowrap font-medium transition-colors duration-300 ",
                            ((index === 0 && !searchParams.get("status")) || searchParams.get("status") === status.value) ? "text-yellowBold" : "text-darkBland"
                        )}
                    >
                        {status.label}

                        {
                            ((index === 0 && !searchParams.get("status")) || searchParams.get("status") === status.value) &&
                            <span className="absolute bottom-0 right-0 left-0 h-[2.5px] rounded-full bg-yellowBold" />
                        }
                    </Link>
                ))
            }
        </div>
    )
}