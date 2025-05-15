"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NavigateBarUnauth() {
    const router = useRouter();

    return (
        <Button
            className="w-full bg-yellowBold hover:bg-yellowBold hover:opacity-90 transition-all duration-300"
            onClick={() => { router.push("/dang-nhap") }}
        >
            Đăng nhập
        </Button>
    )
}