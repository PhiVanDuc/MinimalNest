"use client"

import Money from "@/components/customs/money";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";
import { RotateCcw } from "lucide-react";
import { TbTicket } from "react-icons/tb";
import { ScrollArea } from "@/components/ui/scroll-area";

import { v4 } from "uuid";

export default function OrderDetailCoupon() {
    return (
        <div className="rounded-[10px] border p-[20px] space-y-[30px]">
            <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-[20px]">
                <div className="space-y-[5px]">
                    <h2 className="text-[16px] md:text-[18px] font-semibold">Áp phiếu giảm giá</h2>
                    <p className="text-[14px] text-darkMedium font-medium">Sử dụng phiếu giảm giá để giảm tổng tiền cho toàn bộ đơn hàng.</p>
                </div>

                <Dialog>
                    <DialogTrigger>
                        <div
                            className="flex items-center gap-x-[15px] text-[14px] font-medium text-darkMedium cursor-pointer sm:px-[15px] sm:py-[8px] rounded-[8px] sm:hover:bg-neutral-200 transition-colors sm:duration-300 w-full sm:w-fit"
                        >
                            <p className="whitespace-nowrap">Phiếu giảm giá</p>
                            <TbTicket size={20} />
                        </div>
                    </DialogTrigger>

                    <DialogContent className="px-0 w-full max-w-[550px] gap-[30px]">
                        <DialogHeader className="px-[24px]">
                            <DialogTitle>Phiếu giảm giá đã dùng</DialogTitle>
                            <DialogDescription>Chọn phiếu giảm giá hiện của để giảm tổng tiền hóa đơn của bạn.</DialogDescription>
                        </DialogHeader>

                        <ScrollArea className="max-h-[500px] px-[24px] rounded-lg">
                            <div className="space-y-[15px]">
                                {
                                    Array.from({ length: 2 }).map((_, index) => {
                                        return (
                                            <label
                                                key={v4()}
                                                className="rounded-[10px] bg-white flex items-center gap-[15px] cursor-pointer"
                                            >
                                                <div className="shrink-0 w-[80px] aspect-square rounded-[10px] bg-slate-200" />
                                                <div className="space-y-[5px]">
                                                    <div className="flex items-center gap-x-[10px]">
                                                        <span className="inline-block w-[8px] aspect-square rounded-full bg-yellowBold" />
                                                        <p className="text-[11px] sm:text-[12px] font-medium text-darkMedium">VIPSALE2025</p>
                                                    </div>

                                                    <p className="truncate-2 text-[13px] sm:text-[14px] font-semibold text-darkBold">Số tiền sẽ giảm</p>

                                                    <div className="flex flex-wrap gap-x-[15px] gap-y-[3px] text-[12px] sm:text-[13px] text-darkMedium">
                                                        <p className="whitespace-nowrap">NBĐ: 20.02.2025</p>
                                                        <p className="whitespace-nowrap">HSD: 25.02.2025</p>
                                                    </div>
                                                </div>
                                            </label>
                                        )
                                    })
                                }
                            </div>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>
            </header>

            {/* <p className="text-center text-[14px] text-darkBland font-medium">Bạn chưa chọn phiếu giảm giá nào.</p> */}

            <div className="flex flex-wrap items-center justify-between gap-x-[20px] gap-y-[5px]">
                <div className="flex items-center gap-[10px] text-[14px] md:text-[16px] font-medium">
                    <TbTicket size={26} />
                    <p>Bạn đã chọn <span className="text-yellowBold">2 phiếu giảm giá.</span></p>
                </div>

                <div className="flex flex-nowrap items-center gap-x-[3px]">
                    <span>-</span>
                    <Money
                        price={40000}
                        moneyClassName="text-[14px] md:text-[15px]"
                    />
                </div>
            </div>
        </div>
    )
}
