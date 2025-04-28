"use client"

import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

export default function NavigateBarLayout({ children }) {
    const isOpen = useSelector(state => state.adminSidebarToggle.isOpen);

    return (
        <nav className={cn(
            "flex items-center justify-between py-[15px] border-b transition-all duration-300",
            isOpen ? "pl-[300px] pr-[40px]" : "px-[80px]"
        )}>
            {children}
        </nav>
    )
}
