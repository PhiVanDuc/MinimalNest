"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { BsThreeDotsVertical } from "react-icons/bs";

export default function AdminProductTableAction({ row, permissions }) {
    const router = useRouter();

    const [isDeleteProduct, setIsDeleteProduct] = useState(() => permissions?.includes("delete-product"));
    const [isEditProduct, setIsEditProduct] = useState(() => permissions?.includes("edit-product"));

    return (
        <div className="flex justify-center">
            {
                !isEditProduct || !isDeleteProduct ?
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
                                isEditProduct &&
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
                                isDeleteProduct &&
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
