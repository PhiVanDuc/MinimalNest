"use client"

import { useState } from "react";

import { Button } from "@/components/ui/button";
import AdminOrderCancelButton from "./admin-order-cancel/admin-order-cancel-button";

import { toast } from "sonner";
import { updateStatusOrders } from "@/lib/api/server-action/order";

export default function AdminOrderButton({
    permissions,
    chooseOrders,
    setChooseOrders
}) {
    const [isEditOrder, setIsEditOrder] = useState(() => permissions?.includes("edit-order"));
    const [submitting, setSubmitting] = useState(false);

    const handleUpdateStatusOrder = async (status) => {
        if (chooseOrders?.length === 0) {
            toast.warning("Vui lòng chọn đơn hàng để cập nhật trạng thái!");
            return;
        }

        if (submitting) return;
        setSubmitting(true);

        const updated = await updateStatusOrders({
            status,
            orderIds: chooseOrders
        });
        const message = updated?.message;

        if (updated?.success) {
            setChooseOrders([]);
            toast.success(message);
        }
        else toast.error(message);

        setSubmitting(false);
    }

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
                            chooseOrders={chooseOrders}
                            setChooseOrders={setChooseOrders}
                            Button={Button}
                        />

                        <Button
                            variant="outline"
                            className="shadow-none"
                            onClick={() => { handleUpdateStatusOrder("packing") }}
                            disabled={submitting}
                        >
                            Đóng gói
                        </Button>

                        <Button
                            className="bg-yellowBold hover:bg-yellowBold hover:text-white"
                            onClick={() => { handleUpdateStatusOrder("shipping") }}
                            disabled={submitting}
                        >
                            Giao hàng
                        </Button>
                    </div>
                )
            }
        </>
    )
}
