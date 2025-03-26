"use client"

import { useRouter } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { FiUser } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";

export default function AuthOptions() {
    const router = useRouter();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-darkBold text-[15px] font-semibold text-white cursor-pointer">
                    <p className="leading-0">P</p>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                sideOffset={10}
                className="p-[10px] rounded-[10px]"
            >
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        className="flex items-center gap-[10px] cursor-pointer text-[14px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[20px] py-[10px]"
                    >
                        <div className="shrink-0 w-[24px] flex justify-center">
                            <FiUser className="text-[20px]" />
                        </div>
                        <p onClick={() => { router.push("/ho-so") }} >
                            Hồ sơ người dùng
                        </p>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-[10px] cursor-pointer text-[14px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[20px] py-[10px]">
                        <div className="shrink-0 w-[24px] flex justify-center">
                            <TbLogout className="text-[20px]" />
                        </div>
                        <p>Đăng xuất</p>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}