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

import { HiOutlineNewspaper } from "react-icons/hi";

export default function AdminOrderWatchCol({ permissions }) {
    const [openDialog, setOpenDialog] = useState(false);
    const [isDetailOrder, setIsDetailOrder] = useState(() => permissions?.includes("detail-order"));

    return (
        <>
            {
                !isDetailOrder ?
                ( <p>Không có quyền truy cập.</p> ) :
                (
                    <>
                        <div className="flex justify-center">
                            <div
                                className="shrink-0 flex justify-center items-center text-darkMedium w-[35px] aspect-square cursor-pointer"
                                onClick={() => { setOpenDialog(true); }}
                            >
                                <HiOutlineNewspaper size={22} className="shrink-0" />
                            </div>
                        </div>

                        {
                            openDialog && <AdminOrderDetail open={openDialog} setOpen={setOpenDialog} />
                        }
                    </>
                )
            }
        </>
    )
}
