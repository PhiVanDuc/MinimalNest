"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const display = ["/ho-so", "/ho-so/so-dia-chi", "/ho-so/don-hang", "/ho-so/tra-hang"];

export default function ProfileOptions() {
    const pathname = usePathname();

    return (
        <div className={cn(
            "shrink-0 xl:sticky xl:top-[100px] w-full xl:w-[340px] h-fit rounded-[10px] border p-[20px] shadow-sm",
            !display.some(path => path === pathname) ? "hidden" : ""
        )}>
            <h2 className="text-[16px] font-semibold text-darkBold text-center mb-[20px]">Hồ sơ</h2>

            <div className="flex flex-col space-y-[5px]">
                <Link
                    href="/ho-so"
                    className={cn(
                        "text-[14px] font-medium text-darkBold px-[15px] py-[12px] rounded-[10px] hover:bg-neutral-100 transition-colors duration-300",
                        pathname === "/ho-so" ? "bg-darkBold hover:bg-darkBold text-white" : ""
                    )}
                >
                    Thông tin chung
                </Link>

                <Link
                    href="/ho-so/so-dia-chi"
                    className={cn(
                        "text-[14px] font-medium text-darkBold px-[15px] py-[12px] rounded-[10px] hover:bg-neutral-100 transition-colors duration-300",
                        pathname.startsWith("/ho-so/so-dia-chi") ? "bg-darkBold hover:bg-darkBold text-white" : ""
                    )}
                >
                    Sổ địa chỉ
                </Link>

                <Link
                    href="/ho-so/don-hang"
                    className={cn(
                        "text-[14px] font-medium text-darkBold px-[15px] py-[12px] rounded-[10px] hover:bg-neutral-100 transition-colors duration-300",
                        pathname.startsWith("/ho-so/don-hang") ? "bg-darkBold hover:bg-darkBold text-white" : ""
                    )}
                >
                    Đơn hàng
                </Link>

                <Link
                    href="/ho-so/tra-hang"
                    className={cn(
                        "text-[14px] font-medium text-darkBold px-[15px] py-[12px] rounded-[10px] hover:bg-neutral-100 transition-colors duration-300",
                        pathname.startsWith("/ho-so/tra-hang") ? "bg-darkBold hover:bg-darkBold text-white" : ""
                    )}
                >
                    Trả hàng
                </Link>
            </div>
        </div>
    )
}