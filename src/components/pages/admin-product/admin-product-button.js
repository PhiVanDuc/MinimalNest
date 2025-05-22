"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

export default function AdminProductButton({ permissions }) {
    const router = useRouter();

    const [isAddProduct, setIsAddProduct] = useState(() => permissions?.includes("add-product"));
    const [isEditProduct, setIsEditProduct] = useState(() => permissions?.includes("edit-product"));

    return (
        <>
            {
                !isAddProduct || !isEditProduct ?
                ( <></> ) :
                (
                    <div className="flex items-center gap-[10px]">
                        {
                            isEditProduct &&
                            (
                                <Button
                                    variant="outline"
                                    onClick={() => { router.push("/quan-tri/san-pham/giam-gia-chung") }}
                                >
                                    Giảm giá chung
                                </Button>
                            )
                        }

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    Excel
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent>
                                {
                                    isAddProduct && <DropdownMenuItem className="cursor-pointer px-[15px] py-[10px]">Thêm sản phẩm</DropdownMenuItem>
                                }

                                {
                                    isEditProduct &&
                                    (
                                        <>
                                            <DropdownMenuItem className="cursor-pointer px-[15px] py-[10px]">Chỉnh sửa sản phẩm</DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer px-[15px] py-[10px]">Xuất sản phẩm</DropdownMenuItem>
                                        </>
                                    )
                                }
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {
                            isAddProduct &&
                            (
                                <Button
                                    className="text-[14px] text-white bg-yellowBold hover:bg-yellowBold shadown-none"
                                    onClick={() => { router.push("/quan-tri/san-pham/them-san-pham") }}
                                >
                                    Thêm sản phẩm
                                </Button>
                            )
                        }
                    </div>
                )
            }
        </>
    )
}
