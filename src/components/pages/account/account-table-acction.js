"use client"

import { usePathname, useRouter } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { BsThreeDotsVertical } from "react-icons/bs";

export default function AccountTableAction({ accountId }) {
    const router = useRouter();
    const pathname = usePathname();

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
                        onClick={() => { router.push(`${pathname}/chinh-sua-tai-khoan/${accountId}`); }}
                    >
                        Chỉnh sửa
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
