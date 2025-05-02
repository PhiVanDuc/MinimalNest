"use client"

import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { BsThreeDotsVertical } from "react-icons/bs";

export default function RoleTableAction({ row }) {
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
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => { router.push("/quan-tri/vai-tro/chi-tiet-vai-tro/123") }}
                    >
                        Chi tiết
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => { router.push("/quan-tri/vai-tro/chinh-sua-vai-tro/123") }}
                    >
                        Chỉnh sửa
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => {}}
                    >
                        Xóa
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
