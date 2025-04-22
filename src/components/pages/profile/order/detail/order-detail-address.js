"use client"

import { FaLocationDot } from "react-icons/fa6"

export default function OrderDetailPayment() {
    return (
        <div className="p-[20px] rounded-[10px] space-y-[10px] bg-neutral-100">
            <header className="flex items-center gap-[15px] text-darkBold">
                <FaLocationDot className="text-[22px]" />
                <h3 className="text-[18px] font-semibold">Địa chỉ nhận hàng</h3>
            </header>

            <div className="space-y-[20px]">
                <div className="pl-[calc(21.94px+15px)] w-full sm:flex items-center justify-between gap-[20px] space-y-[20px] sm:space-y-0">
                    <div className="space-y-[5px] text-[15px] font-semibold text-darkBold">
                        <p className="truncate-1">Phí Văn Đức (+84) 328895451</p>
                        <p className="text-[14px] font-medium text-darkMedium truncate-1">Địa chỉ chi tiết mà người dùng nhập . . .</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
