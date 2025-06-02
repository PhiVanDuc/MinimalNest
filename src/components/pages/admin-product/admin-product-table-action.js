"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import AdminProductDeleteDialog from "./admin-product-delete-dialog";

import { BsThreeDotsVertical } from "react-icons/bs";

export default function AdminProductTableAction({ product, permissions }) {
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
                        permissions?.includes("edit-product") &&
                        (
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => { router.push(`/quan-tri/san-pham/chinh-sua-san-pham/${product?.slug}`) }}
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

            <AdminProductDeleteDialog open={openDeleteDialog} setOpen={setOpenDeleteDialog} productId={product?.id} />
        </div>
    )
}
