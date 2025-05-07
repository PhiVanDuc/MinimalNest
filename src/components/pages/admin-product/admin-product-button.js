"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

export default function AdminProductButton() {
    const router = useRouter();

    return (
        <div className="flex items-center gap-[10px]">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                        Excel
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem className="cursor-pointer px-[15px] py-[10px]">Thêm sản phẩm</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer px-[15px] py-[10px]">Chỉnh sửa sản phẩm</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer px-[15px] py-[10px]">Xuất sản phẩm</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Button
                className="text-[14px] text-white bg-yellowBold hover:bg-yellowBold shadown-none"
                onClick={() => { router.push("/quan-tri/san-pham/them-san-pham") }}
            >
                Thêm sản phẩm
            </Button>
        </div>
    )
}
