"use client"

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function AdminOrderButton() {
    return (
        <div className="flex items-center gap-[5px] p-[15px] rounded-[10px] bg-white">
            <Button variant="outline">
                Xuất Excel
            </Button>

            <Button
                variant="outline"
                onClick={() => { toast.warning("Hãy chọn đơn hàng bạn muốn đóng gói.") }}
            >
                Đóng gói
            </Button>

            <Button
                className="bg-yellowBold hover:bg-yellowBold hover:text-white"
                onClick={() => { toast.warning("Hãy chọn những đơn hàng đã đóng gói để giao hàng.") }}
            >
                Giao hàng
            </Button>
        </div>
    )
}
