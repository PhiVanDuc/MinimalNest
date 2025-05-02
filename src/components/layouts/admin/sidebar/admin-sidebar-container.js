"use client"

import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

export default function AdminSidebarContainer({ children }) {
    const isOpen = useSelector(state => state.adminSidebarToggle.isOpen);

    return (
        <aside
            className={cn(
                "shrink-0 fixed top-0 bottom-0 left-0 w-[260px] p-[20px] border-r transition-all duration-300 bg-white",
                isOpen ? "translate-x-0" : "translate-x-[-100%]"
            )}
        >
            {children}
        </aside>
    )
}