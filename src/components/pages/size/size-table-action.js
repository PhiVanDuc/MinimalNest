"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { BsThreeDotsVertical } from "react-icons/bs";
import SizeDeleteDialog from "./size-delete-dialog";

export default function SizeTableAction({ sizeId, permissions }) {
    const router = useRouter();

    const [openDialogDelete, setOpenDialogDelete] = useState(false);
    const [isEditSize, setIsEditSize] = useState(() => permissions?.includes("edit-size"));
    const [isDeleteSize, setIsDeleteSize] = useState(() => permissions?.includes("delete-size"));

    return (
        <div className="flex justify-center">
            {
                !isEditSize || !isDeleteSize ?
                ( <p>Không có quyền truy cập.</p> ) :
                (
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
                                isEditSize &&
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
                                isDeleteSize &&
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
                )
            }

            <SizeDeleteDialog open={openDialogDelete} setOpen={setOpenDialogDelete} sizeId={sizeId} />
        </div>
    )
}
