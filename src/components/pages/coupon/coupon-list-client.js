"use client"

import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

export default function CouponListClient({ children }) {
    const isOpen = useSelector(state => state.couponFilterOpen);

    return (
        <div
            className={cn(
                "space-y-[60px] transition-all duration-300",
                isOpen ? "pl-[20px] md:pl-[40px] xl:pl-[360px] pr-[20px] md:pr-[40px]" : "responsive-horizontal"
            )}
        >
            {children}
        </div>
    )
}