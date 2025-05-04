"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SizeButtonAdd() {
    const router = useRouter();

    return (
        <Button
            className="bg-darkBold"
            onClick={() => { router.push("/quan-tri/kich-co/them-kich-co") }}
        >
            Thêm kích cỡ
        </Button>
    )
}