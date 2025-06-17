"use client"

import { useState } from "react";
import dynamic from "next/dynamic";

const AdminOrderDetail = dynamic(
    () => import("./admin-order-detail"),
    {
        ssr: false,
        loading: () => (
            <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-[50]">
                <p className="text-[16px] text-white">Đang tải . . .</p>
            </div>
        )
    }
);

import { MdOutlineContentPaste } from "react-icons/md";

export default function AdminOrderWatchCol({ order }) {
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <>
            <div className="flex justify-center">
                <div
                    className="shrink-0 flex justify-center items-center text-darkMedium w-[35px] aspect-square cursor-pointer"
                    onClick={() => { setOpenDialog(true); }}
                >
                    <MdOutlineContentPaste size={22} className="shrink-0" />
                </div>
            </div>

            {
                openDialog &&
                (
                    <AdminOrderDetail
                        open={openDialog}
                        setOpen={setOpenDialog}
                        order={order}
                    />
                )
            }
        </>
    )
}
