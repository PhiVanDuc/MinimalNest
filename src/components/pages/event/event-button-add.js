"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function EventButtonAdd() {
    const router = useRouter();

    return (
        <Button
            className="text-[14px] text-white bg-yellowBold hover:bg-yellowBold shadown-none"
            onClick={() => { router.push("/quan-tri/su-kien/them-su-kien") }}
        >
            Thêm sự kiện
        </Button>
    )
}
