"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function EventButtonAdd() {
    const router = useRouter();

    return (
        <Button
            className="bg-darkBold"
            onClick={() => { router.push("/quan-tri/su-kien/them-su-kien") }}
        >
            Thêm sự kiện
        </Button>
    )
}
