"use client"

import { cn } from "@/lib/utils";

export default function AdminOrderFilterStatus({
    status,
    setStatus
}) {
    return (
        <div className="flex p-[5px] bg-neutral-100 rounded-[10px] w-fit">
            <div
                className={cn(
                    "flex items-center gap-[10px] text-[14px] whitespace-nowrap font-medium px-[15px] py-[8px] rounded-[10px] cursor-pointer",
                    status === "all" ? "text-darkBold bg-white" : "text-darkMedium"
                )}
                onClick={() => { setStatus("all") }}
            >
                <p>Tất cả</p>

                <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-darkBold text-[12px] text-white font-medium">
                    <span className="translate-y-[1px]">20</span>
                </div>
            </div>

            <div
                className={cn(
                    "flex items-center gap-[10px] text-[14px] whitespace-nowrap font-medium px-[15px] py-[8px] rounded-[10px] cursor-pointer",
                    status === "pending" ? "text-darkBold bg-white" : "text-darkMedium"
                )}
                onClick={() => { setStatus("pending") }}
            >
                <p>Chờ duyệt</p>

                <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-darkBold text-[12px] text-white font-medium">
                    <span className="translate-y-[1px]">20</span>
                </div>
            </div>

            <div
                className={cn(
                    "flex items-center gap-[10px] text-[14px] whitespace-nowrap font-medium px-[15px] py-[8px] rounded-[10px] cursor-pointer",
                    status === "packing" ? "text-darkBold bg-white" : "text-darkMedium"
                )}
                onClick={() => { setStatus("packing") }}
            >
                <p>Đang đóng gói</p>

                <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-darkBold text-[12px] text-white font-medium">
                    <span className="translate-y-[1px]">20</span>
                </div>
            </div>

            <div
                className={cn(
                    "flex items-center gap-[10px] text-[14px] whitespace-nowrap font-medium px-[15px] py-[8px] rounded-[10px] cursor-pointer",
                    status === "shipping" ? "text-darkBold bg-white" : "text-darkMedium"
                )}
                onClick={() => { setStatus("shipping") }}
            >
                <p>Đang vận chuyển</p>

                <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-darkBold text-[12px] text-white font-medium">
                    <span className="translate-y-[1px]">20</span>
                </div>
            </div>

            <div
                className={cn(
                    "flex items-center gap-[10px] text-[14px] whitespace-nowrap font-medium px-[15px] py-[8px] rounded-[10px] cursor-pointer",
                    status === "canceled" ? "text-darkBold bg-white" : "text-darkMedium"
                )}
                onClick={() => { setStatus("canceled") }}
            >
                <p>Đã hủy</p>

                <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-darkBold text-[12px] text-white font-medium">
                    <span className="translate-y-[1px]">20</span>
                </div>
            </div>

            <div
                className={cn(
                    "flex items-center gap-[10px] text-[14px] whitespace-nowrap font-medium px-[15px] py-[8px] rounded-[10px] cursor-pointer",
                    status === "fulfilled" ? "text-darkBold bg-white" : "text-darkMedium"
                )}
                onClick={() => { setStatus("fulfilled") }}
            >
                <p>Hoàn thành</p>

                <div className="w-[25px] aspect-square rounded-full flex items-center justify-center bg-darkBold text-[12px] text-white font-medium">
                    <span className="translate-y-[1px]">20</span>
                </div>
            </div>
        </div>
    )
}
