"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { BsThreeDotsVertical } from "react-icons/bs";

export default function AdminProductTableAction({ row, permissions }) {
    const router = useRouter();

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
                        permissions?.includes("edit-product") &&
                        (
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => { router.push("/quan-tri/san-pham/chinh-sua-san-pham/123") }}
                            >
                                Chỉnh sửa
                            </DropdownMenuItem>
                        )
                    }

                    {
                        permissions?.includes("delete-product") &&
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
        </div>
    )
}
