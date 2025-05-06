"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AdminProductButtonAdd() {
    const router = useRouter();

    return (
        <Button
            className="bg-darkBold"
            onClick={() => { router.push("/quan-tri/san-pham/them-san-pham") }}
        >
            Thêm sản phẩm
        </Button>
    )
}
