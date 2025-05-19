"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { BsThreeDotsVertical } from "react-icons/bs";

export default function EventTableAction({ data, permissions }) {
    const router = useRouter();

    const [isEditEvent, setIsEditEvent] = useState(() => permissions?.includes("edit-event"));
    const [isDeleteEvent, setIsDeleteEvent] = useState(() => permissions?.includes("delete-event"));

    return (
        <div className="flex justify-center">

            {
                !isEditEvent || !isDeleteEvent ?
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
                                isEditEvent &&
                                (
                                    <DropdownMenuItem
                                        className="cursor-pointer"
                                        onClick={() => { router.push("/quan-tri/su-kien/chinh-sua-su-kien/123") }}
                                    >
                                        Chỉnh sửa
                                    </DropdownMenuItem>
                                )
                            }

                            {
                                isDeleteEvent &&
                                (
                                    <DropdownMenuItem
                                        className="cursor-pointer"
                                        onClick={() => {}}
                                    >
                                        Xóa
                                    </DropdownMenuItem>
                                )
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            }
        </div>
    )
}
