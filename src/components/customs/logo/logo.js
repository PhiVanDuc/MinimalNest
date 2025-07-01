"use client"

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Logo({ className }) {
    const router = useRouter();

    return (
        <div
            className="cursor-pointer"
            onClick={() => { router.push("/san-pham") }}
        >
            <p className={cn(
                "w-fit text-[16px] font-medium px-[15px] py-[5px] rounded-[6px] bg-yellowBold text-white",
                className
            )}>
                MinimalNest
            </p>
        </div>
    )
}
