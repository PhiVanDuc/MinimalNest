"use client"

import { cn } from "@/lib/utils";

const filters = [
    {
        label: "Tất cả",
        param: "all"
    },
    {
        label: "Chờ duyệt",
        param: "pending"
    },
    {
        label: "Đang thu hồi",
        param: "returning"
    },
    {
        label: "Hoàn thành",
        param: "fulfilled"
    }
];

export default function FilterStatus({ status, setStatus }) {
    return (
        <div className="flex p-[5px] bg-neutral-100 rounded-[10px] w-fit">
            {
                filters.map((filter, index) => {
                    return (
                        <div
                            key={index + filter?.param}
                            className={cn(
                                "flex items-center gap-[10px] text-[14px] whitespace-nowrap font-medium px-[15px] py-[8px] rounded-[10px] cursor-pointer",
                                status === filter?.param ? "text-darkBold bg-white" : "text-darkMedium"
                            )}
                            onClick={() => { setStatus(filter?.param) }}
                        >
                            <p>{filter?.label}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
