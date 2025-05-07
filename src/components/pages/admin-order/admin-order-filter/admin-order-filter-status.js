"use client"

import { cn } from "@/lib/utils";

export default function AdminOrderFilterStatus({
    status,
    setStatus
}) {
    return (
        <div className="flex p-[5px] bg-neutral-100 rounded-[10px] w-fit">
            <p
                className={cn(
                    "text-[14px] whitespace-nowrap font-medium px-[15px] py-[8px] rounded-[10px] cursor-pointer",
                    status === "all" ? "text-darkBold bg-white" : "text-darkMedium"
                )}
                onClick={() => { setStatus("all") }}
            >
                Tất cả
            </p>

            <p
                className={cn(
                    "text-[14px] whitespace-nowrap font-medium px-[15px] py-[8px] rounded-[10px] cursor-pointer",
                    status === "pending" ? "text-darkBold bg-white" : "text-darkMedium"
                )}
                onClick={() => { setStatus("pending") }}
            >
                Chờ duyệt
            </p>

            <p
                className={cn(
                    "text-[14px] whitespace-nowrap font-medium px-[15px] py-[8px] rounded-[10px] cursor-pointer",
                    status === "packing" ? "text-darkBold bg-white" : "text-darkMedium"
                )}
                onClick={() => { setStatus("packing") }}
            >
                Đang đóng gói
            </p>

            <p
                className={cn(
                    "text-[14px] whitespace-nowrap font-medium px-[15px] py-[8px] rounded-[10px] cursor-pointer",
                    status === "shipping" ? "text-darkBold bg-white" : "text-darkMedium"
                )}
                onClick={() => { setStatus("shipping") }}
            >
                Đang vận chuyển
            </p>

            <p
                className={cn(
                    "text-[14px] whitespace-nowrap font-medium px-[15px] py-[8px] rounded-[10px] cursor-pointer",
                    status === "canceled" ? "text-darkBold bg-white" : "text-darkMedium"
                )}
                onClick={() => { setStatus("canceled") }}
            >
                Đã hủy
            </p>

            <p
                className={cn(
                    "text-[14px] whitespace-nowrap font-medium px-[15px] py-[8px] rounded-[10px] cursor-pointer",
                    status === "fulfilled" ? "text-darkBold bg-white" : "text-darkMedium"
                )}
                onClick={() => { setStatus("fulfilled") }}
            >
                Hoàn thành
            </p>
        </div>
    )
}
