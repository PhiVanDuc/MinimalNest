"use client"

import { useRouter } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";

import { FiUser } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { LayoutDashboard } from "lucide-react";
import { TbArrowsExchange2 } from "react-icons/tb";

import { signOut } from "@/lib/api/server-action/auth";

export default function NavigateBarAuthed({ userInfo }) {
    const router = useRouter();
    const permissions = userInfo?.decode?.permissions;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div
                    className="flex items-center justify-between px-[15px] py-[10px] rounded-[10px] bg-slate-100 hover:opacity-80 cursor-pointer transition duration-300 overflow-x-hidden"
                >
                    <div className="flex items-center gap-x-[15px] overflow-x-hidden">
                        <div className="shrink-0 w-[40px] aspect-square rounded-full bg-slate-300" />
                        <div className="space-y-[2px] overflow-x-hidden">
                            <p className="text-[14px] font-semibold text-darkBold truncate">{`${userInfo?.decode?.first_name} ${userInfo?.decode?.last_name}`}</p>
                            <p className="text-[12px] font-medium text-darkMedium truncate">{userInfo?.decode?.email}</p>
                        </div>
                    </div>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="start"
                sideOffset={10}
                className="p-[10px] rounded-[10px]"
            >
                <DropdownMenuGroup className="w-full">
                    <DropdownMenuItem
                        className="flex items-center gap-[10px] cursor-pointer text-[13px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[10px] py-[10px]"
                        onClick={() => { router.push("/ho-so"); }}
                    >
                        <div className="shrink-0 w-[24px] flex justify-center">
                            <FiUser size={18} />
                        </div>
                        <p>Hồ sơ người dùng</p>
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        className="flex items-center gap-[10px] cursor-pointer text-[13px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[10px] py-[10px]"
                        onClick={() => { router.push("/tra-hang"); }}
                    >
                        <div className="shrink-0 w-[24px] flex justify-center">
                            <TbArrowsExchange2 size={18} />
                        </div>
                        <p>Trả hàng</p>
                    </DropdownMenuItem>

                    {
                        (permissions && permissions?.length > 0) &&
                        (
                            <DropdownMenuItem
                                className="flex items-center gap-[10px] cursor-pointer text-[13px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[10px] py-[10px]"
                                onClick={() => { router.push("/quan-tri"); }}
                            >
                                <div className="shrink-0 w-[24px] flex justify-center">
                                    <LayoutDashboard size={18} />
                                </div>
                                <p>Trang quản trị</p>
                            </DropdownMenuItem>
                        )
                    }

                    <DropdownMenuItem
                        className="flex items-center gap-[10px] cursor-pointer text-[13px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[10px] py-[10px]"
                        onClick={() => { signOut() }}
                    >
                        <div className="shrink-0 w-[24px] flex justify-center">
                            <TbLogout size={18} />
                        </div>
                        <p>Đăng xuất</p>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}