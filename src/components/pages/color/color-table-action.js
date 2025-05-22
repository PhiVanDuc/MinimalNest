"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { BsThreeDotsVertical } from "react-icons/bs";
import ColorDeleteDialog from "./color-delete-dialog";

export default function ColorTableAction({ colorId, permissions }) {
    const router = useRouter();

    const [openDialogDelete, setOpenDialogDelete] = useState(false);

    return (
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
                    {
                        permissions?.includes("edit-color") && 
                        (
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => { router.push(`/quan-tri/mau-sac/chinh-sua-mau-sac/${colorId}`) }}
                            >
                                Chỉnh sửa
                            </DropdownMenuItem>
                        )
                    }

                    {
                        permissions?.includes("delete-color") &&
                        (
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => { setOpenDialogDelete(true); }}
                            >
                                Xóa
                            </DropdownMenuItem>
                        )
                    }
                </DropdownMenuContent>
            </DropdownMenu>

            <ColorDeleteDialog open={openDialogDelete} setOpen={setOpenDialogDelete} colorId={colorId} />
        </div>
    )
}