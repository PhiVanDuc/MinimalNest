"use client"

import { useRoleFilter } from "./role-filter-provider";
import { X } from "lucide-react";

export default function RoleFilterSelected() {
    const { role, setRole } = useRoleFilter();

    return (
        <>
            {
                role && (
                    <div className="flex items-center gap-[5px]">
                        <div
                            className="shrink-0 flex items-center gap-x-[12px] w-fit text-[13px] font-medium px-[15px] py-[8px] rounded-full border text-darkMedium bg-white hover:text-darkBold hover:bg-slate-50 cursor-pointer transition-all duration-300"
                        >
                            <p>Tên vai trò - {role}</p>
                            <X
                                size={15}
                                onClick={() => { setRole("") }}
                            />
                        </div>
                    </div>
                )
            }
        </>
    )
}
