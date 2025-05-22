"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { BsThreeDotsVertical } from "react-icons/bs";
import EventDeleteDialog from "./event-delete-dialog";

export default function EventTableAction({ slug, permissions }) {
    const router = useRouter();

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

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
                        permissions?.includes("edit-event") &&
                        (
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => { router.push(`/quan-tri/su-kien/chinh-sua-su-kien/${slug}`) }}
                            >
                                Chỉnh sửa
                            </DropdownMenuItem>
                        )
                    }

                    {
                        permissions?.includes("delete-event") &&
                        (
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => {
                                    setOpenDeleteDialog(true);
                                }}
                            >
                                Xóa
                            </DropdownMenuItem>
                        )
                    }
                </DropdownMenuContent>
            </DropdownMenu>

            <EventDeleteDialog open={openDeleteDialog} setOpen={setOpenDeleteDialog} slug={slug} />
        </div>
    )
}
