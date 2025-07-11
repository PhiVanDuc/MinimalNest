"use client"

import { cn } from "@/lib/utils";
import returnGoodsStatuses from "@/static/return-goods-status";

export default function FilterStatus({ status, setStatus }) {
    return (
        <div className="flex p-[5px] bg-neutral-100 rounded-[10px] w-fit">
            {
                returnGoodsStatuses.map(item => {
                    return (
                        <div
                            key={item?.id}
                            className={cn(
                                "flex items-center gap-[10px] text-[14px] whitespace-nowrap font-medium px-[15px] py-[8px] rounded-[10px] cursor-pointer",
                                status === item?.value ? "text-darkBold bg-white" : "text-darkMedium"
                            )}
                            onClick={() => { setStatus(item?.value) }}
                        >
                            <p>{item?.label}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}