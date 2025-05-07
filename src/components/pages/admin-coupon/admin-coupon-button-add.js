"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AdminCouponButtonAdd() {
    const router = useRouter();

    return (
        <Button
            className="text-[14px] text-white bg-yellowBold hover:bg-yellowBold shadown-none"
            onClick={() => { router.push("/quan-tri/phieu-giam-gia/them-phieu-giam-gia") }}
        >
            Thêm phiếu giảm giá
        </Button>
    )
}