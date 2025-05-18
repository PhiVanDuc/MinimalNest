"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function RoleButtonAdd({ permissions }) {
    const router = useRouter();

    return (
        <>
            {
                permissions?.includes("add-role") &&
                (
                    <Button
                        className="text-[14px] text-white bg-yellowBold hover:bg-yellowBold shadown-none"
                        onClick={() => { router.push("/quan-tri/vai-tro/them-vai-tro") }}
                    >
                        Thêm vai trò
                    </Button>
                )
            }
        </>
    )
}