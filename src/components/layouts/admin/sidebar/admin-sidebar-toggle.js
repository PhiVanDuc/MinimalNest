"use client"

import { useDispatch, useSelector } from "react-redux";
import { toggleAdminSidebar } from "@/redux/slices/admin-sidebar/admin-sidebar-toggle-slice";

import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export default function AdminSidebarToggle() {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.adminSidebarToggle.isOpen);
    
    return (
        <label className="flex items-center gap-x-[10px] cursor-pointer">
            <Switch
                checked={isOpen}
                onCheckedChange={() => { dispatch(toggleAdminSidebar(!isOpen)) }}
                className="data-[state=checked]:bg-yellowBold"
            />

            <p className={cn(
                "text-[14px] font-medium transition-colors duration-300",
                !isOpen ? "text-darkBland" : ""
            )}>
                {
                    isOpen ? "Đóng cột điều hướng" : "Mở cột điều hướng"
                }
            </p>
        </label>
    )
}
