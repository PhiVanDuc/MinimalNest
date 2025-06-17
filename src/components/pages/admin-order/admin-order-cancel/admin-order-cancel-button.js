"use client"

import { useState } from "react";

import dynamic from "next/dynamic";
import { toast } from "sonner";

const AdminOrderCancel = dynamic(
    () => import("./admin-order-cancel"),
    {
        ssr: false,
        loading: () => (
            <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-[50]">
                <p className="text-[16px] text-white">Đang tải . . .</p>
            </div>
        )
    }
);

export default function AdminOrderCancelButton({
    chooseOrders,
    setChooseOrders,
    Button
}) {
    const [openDialog, setOpenDialog] = useState();

    return (
        <>
            <Button
                variant="outline"
                className="shadow-none"
                onClick={() => {
                    if (chooseOrders?.length === 0) {
                        toast.warning("Hãy chọn đơn hàng bạn muốn hủy.");
                        return;
                    }
                    setOpenDialog(true);
                }}
            >
                Hủy đơn
            </Button>

            {
                openDialog && (
                    <AdminOrderCancel
                        open={openDialog}
                        setOpen={setOpenDialog}
                        chooseOrders={chooseOrders}
                        setChooseOrders={setChooseOrders}
                    />
                )
            }
        </>
    )
}
