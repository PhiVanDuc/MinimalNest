"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ColorButtonAdd() {
    const router = useRouter();

    return (
        <Button
            className="text-[14px] text-white bg-yellowBold hover:bg-yellowBold shadown-none"
            onClick={() => { router.push("/quan-tri/mau-sac/them-mau-sac") }}
        >
            Thêm màu sắc
        </Button>
    )
}