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
import { LayoutDashboard } from "lucide-react";

import { signOut } from "@/lib/api/server-action/auth";

export default function NavigateBarAuthed({ userInfo }) {
    const router = useRouter();
    const permissions = userInfo?.decode?.permissions;

    const lastName = userInfo?.decode?.last_name?.split(" ");
    const letterLastName = (lastName?.[lastName?.length - 1])?.[0];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-darkBold text-[15px] font-semibold text-white cursor-pointer">
                    <p className="leading-0">{letterLastName}</p>
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
                        onClick={() => { router.push("/ho-so"); }}
                    >
                        <div className="shrink-0 w-[24px] flex justify-center">
                            <FiUser className="text-[20px]" />
                        </div>
                        <p>Hồ sơ người dùng</p>
                    </DropdownMenuItem>

                    {
                        (permissions && permissions?.length > 0) &&
                        (
                            <DropdownMenuItem
                                className="flex items-center gap-[10px] cursor-pointer text-[14px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[20px] py-[10px]"
                                onClick={() => { router.push("/quan-tri") }}
                            >
                                <div className="shrink-0 w-[24px] flex justify-center">
                                    <LayoutDashboard size={20} />
                                </div>
                                <p>Trang quản trị</p>
                            </DropdownMenuItem>
                        )
                    }

                    <DropdownMenuItem
                        className="flex items-center gap-[10px] cursor-pointer text-[14px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[20px] py-[10px]"
                        onClick={() => { signOut() }}
                    >
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