"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AuthButtons() {
    const router = useRouter();

    return (
        <div className="hidden xl:flex items-center text-[15px] text-darkMedium gap-x-[5px]">
            <Button
                variant="ghost"
                className="hover:bg-transparent hover:bg-neutral-100 hover:text-darkBold transition-colors duration-300"
                onClick={() => { router.push("/dang-nhap"); }}
            >
                Đăng nhập
            </Button>

            <Button
                className="bg-yellowBold hover:bg-darkBold"
                onClick={() => { router.push("/dang-ky"); }}
            >
                Đăng ký
            </Button>
        </div>
    )
}