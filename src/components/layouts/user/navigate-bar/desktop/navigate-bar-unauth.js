"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NavigateBarUnauth() {
    const router = useRouter();

    return (
        <Button
            className="bg-yellowBold hover:bg-yellowBold hover:opacity-90 transition-opacity duration-300"
            onClick={() => { router.push("/dang-nhap"); }}
        >
            Đăng nhập
        </Button>
    )
}