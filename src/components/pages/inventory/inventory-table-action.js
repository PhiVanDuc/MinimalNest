"use client"

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const InventoryEdit = dynamic(
    () => import("./inventory-edit/inventory-edit"),
    {
        ssr: false,
        loading: () => (
            <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-[50]">
                <p className="text-[16px] text-white">Đang tải . . .</p>
            </div>
        )
    }
);

import { BsThreeDotsVertical } from "react-icons/bs";

export default function InventoryTableAction({ row }) {
    const router = useRouter();

    const [openDialogEdit, setOpenDialogEdit] = useState(false);

    return (
        <>
            <div className="flex justify-center">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex items-center justify-center w-[35px] aspect-square rounded-[5px]">
                            <BsThreeDotsVertical size={20} />
                        </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        alignOffset={10}
                    >
                        <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => { setOpenDialogEdit(true); }}
                        >
                            Chỉnh sửa
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => {}}
                        >
                            Xóa
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {
                openDialogEdit && <InventoryEdit open={openDialogEdit} setOpen={setOpenDialogEdit} />
            }
        </>
    )
}