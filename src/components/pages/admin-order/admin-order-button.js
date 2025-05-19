"use client"

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import AdminOrderCancelButton from "./admin-order-cancel/admin-order-cancel-button";

export default function AdminOrderButton({ permissions }) {
    const [isEditOrder, setIsEditOrder] = useState(() => permissions?.includes("edit-order"))

    return (
        <>
            {
                !isEditOrder ?
                ( <></> ) :
                (
                    <div className="flex items-center gap-[5px]">
                        <Button
                            variant="outline"
                            className="shadow-none"
                        >
                            Xuất Excel
                        </Button>

                        <AdminOrderCancelButton
                            Button={Button}
                            toast={toast}
                        />

                        <Button
                            variant="outline"
                            className="shadow-none"
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
        </>
    )
}
