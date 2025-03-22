import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function AuthButtons() {
    return (
        <div className="hidden xl:flex items-center text-[15px] text-darkMedium gap-x-[5px]">
            {/* <Button
                variant="ghost"
                className="hover:bg-transparent hover:bg-neutral-100 hover:text-darkBold transition-colors duration-300"
            >
                Đăng nhập
            </Button>
            <Button className="bg-yellowBold hover:bg-darkBold">Đăng kí</Button> */}

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
                        <DropdownMenuItem className="cursor-pointer text-[14px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[20px] py-[10px]">
                            <Link href="">Hồ sơ người dùng</Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="cursor-pointer text-[14px] text-darkMedium font-medium hover:bg-neutral-100 hover:text-darkMedium transition-colors px-[20px] py-[10px]">
                            <p>Đăng xuất</p>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}