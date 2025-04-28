"use client"

import { useRouter } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem
} from "@radix-ui/react-dropdown-menu";

import { FiUser } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { ShoppingCart } from "lucide-react";

export default function AdminSidebarFooter() {
    const router = useRouter();

    const handleRedirect = (path) => { router.push(path); }

    return (
        <div className="absolute bottom-0 left-0 right-0 p-[20px]">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div
                        className="flex items-center justify-between px-[15px] py-[10px] rounded-[10px] bg-slate-100 hover:opacity-80 cursor-pointer transition duration-300 overflow-x-hidden"
                    >
                        <div className="flex items-center gap-x-[15px] overflow-x-hidden">
                            <div className="shrink-0 w-[30px] aspect-square rounded-full bg-slate-300" />
                            <div className="overflow-x-hidden">
                                <p className="text-[13px] font-semibold text-darkBold truncate">Phi Van Duc</p>
                                <p className="text-[12px] font-medium text-darkMedium truncate">phivanduc325@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    align="start"
                    sideOffset={10}
                    className="p-[10px] rounded-[10px] border"
                >
                    <DropdownMenuGroup className="w-full">
                        <DropdownMenuItem
                            className="flex items-center gap-[10px] cursor-pointer text-[13px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[10px] py-[10px]"
                            onClick={() => { handleRedirect("/san-pham"); }}
                        >
                            <div className="shrink-0 w-[24px] flex justify-center">
                                <ShoppingCart size={18} />
                            </div>
                            <p>Sản phẩm</p>
                        </DropdownMenuItem>

                        <DropdownMenuItem 
                            className="flex items-center gap-[10px] cursor-pointer text-[13px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[10px] py-[10px]"
                            onClick={() => { handleRedirect("/ho-so"); }}
                        >
                            <div className="shrink-0 w-[24px] flex justify-center">
                                <FiUser size={18} />
                            </div>
                            <p>Hồ sơ người dùng</p>
                        </DropdownMenuItem>

                        <DropdownMenuItem 
                            className="flex items-center gap-[10px] cursor-pointer text-[13px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[10px] py-[10px]"
                            onClick={() => {}}
                        >
                            <div className="shrink-0 w-[24px] flex justify-center">
                                <TbLogout size={18} />
                            </div>
                            <p>Đăng xuất</p>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
