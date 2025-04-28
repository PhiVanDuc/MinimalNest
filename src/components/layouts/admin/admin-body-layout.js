"use client"

import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

export default function AdminBodyLayout({ children }) {
    const isOpen = useSelector(state => state.adminSidebarToggle.isOpen);

    return (
        <div className={cn(
            "transition-all duration-300",
            isOpen ? "pl-[300px] pr-[40px]" : "px-[80px]"
        )}>
            {children}
        </div>
    )
}
