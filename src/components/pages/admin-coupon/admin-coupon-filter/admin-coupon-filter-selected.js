"use client"

import { X } from "lucide-react";

export default function AdminCouponFilterSelected() {
    return (
        <div className="flex items-center gap-[5px]">
            <div
                className="shrink-0 flex items-center gap-x-[12px] w-fit text-[13px] font-medium px-[15px] py-[8px] rounded-full border text-darkMedium bg-white hover:text-darkBold hover:bg-slate-50 cursor-pointer transition-all duration-300"
            >
                <p>Tiêu đề phiếu giảm giá - Tiêu đề phiếu giảm giá đã nhập</p>
                <X size={15} />
            </div>
        </div>
    )
}
