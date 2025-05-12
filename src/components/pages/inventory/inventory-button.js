"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

export default function InventoryButton() {
    const router = useRouter();

    return (
        <div className="flex items-center gap-[10px]">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="shadow-none"
                    >
                        Excel
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem className="cursor-pointer px-[15px] py-[10px]">Thêm số lượng</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer px-[15px] py-[10px]">Chỉnh sửa số lượng</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer px-[15px] py-[10px]">Xuất danh sách kho</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Button
                className="text-[14px] text-white bg-yellowBold hover:bg-yellowBold shadown-none"
                onClick={() => { router.push("/quan-tri/san-pham/them-san-pham") }}
            >
                Thêm số lượng
            </Button>
        </div>
    )
}
