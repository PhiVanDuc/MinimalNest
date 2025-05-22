"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { BsThreeDotsVertical } from "react-icons/bs";
import SizeDeleteDialog from "./size-delete-dialog";

export default function SizeTableAction({ sizeId, permissions }) {
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
                        permissions?.includes("edit-size") &&
                        (
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => { router.push(`/quan-tri/kich-co/chinh-sua-kich-co/${sizeId}`) }}
                            >
                                Chỉnh sửa
                            </DropdownMenuItem>
                        )
                    }

                    {
                        permissions?.includes("delete-size") &&
                        (
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => { setOpenDialogDelete(true) }}
                            >
                                Xóa
                            </DropdownMenuItem>
                        )
                    }
                </DropdownMenuContent>
            </DropdownMenu>

            <SizeDeleteDialog open={openDialogDelete} setOpen={setOpenDialogDelete} sizeId={sizeId} />
        </div>
    )
}
