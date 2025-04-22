"use client"

import { Textarea } from "@/components/ui/textarea";

export default function PaymentMessage() {
    return (
        <div className="space-y-[20px]">
            <header className="space-y-[5px]">
                <h2 className="text-[16px] md:text-[18px] font-semibold">Lời nhắn</h2>
                <p className="text-[13px] md:text-[14px] font-medium text-darkMedium">Bạn có thể để lại lời nhắn cho cửa hàng như thời gian giao hàng, thay đổi trong giao dịch v.v</p>
            </header>

            <Textarea
                placeholder="Gửi lời nhắn của bạn vào đây . . ."
                className="resize-none shadow-none h-[80px] py-[12px]"
            />
        </div>
    )
}
