"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export default function ProfileOptions() {
    const pathname = usePathname();

    return (
        <div className="shrink-0 xl:sticky xl:top-[100px] w-full xl:w-[340px] h-fit rounded-[10px] border p-[20px] shadow-sm">
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
                    href="/ho-so/phieu-giam-gia"
                    className={cn(
                        "text-[14px] font-medium text-darkBold px-[15px] py-[12px] rounded-[10px] hover:bg-neutral-100 transition-colors duration-300",
                        pathname.startsWith("/ho-so/phieu-giam-gia") ? "bg-darkBold hover:bg-darkBold text-white" : ""
                    )}
                >
                    Phiếu giảm giá
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
            </div>
        </div>
    )
}