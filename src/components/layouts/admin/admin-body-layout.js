"use client"

import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

import CustomBreadcrumb from "@/components/customs/custom-breadcrumb";
import { cn } from "@/lib/utils";

export default function AdminBodyLayout({ children }) {
    const pathname = usePathname();
    const isOpen = useSelector(state => state.adminSidebarToggle.isOpen);

    return (
        <div className={cn(
            "flex-1 transition-all duration-300 pt-[30px] pb-[40px] bg-slate-100 space-y-[30px]",
            isOpen ? "pl-[300px] pr-[40px]" : "px-[80px]"
        )}>
            {
                !(pathname === "/quan-tri") &&
                (
                    <CustomBreadcrumb
                        style={{ padding: "0px" }}
                        isAdmin={true}
                    />
                )
            }
            {children}
        </div>
    )
}