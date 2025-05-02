"use client"

import { FaRegBell } from "react-icons/fa";

export default function Notification() {
    return (
        <div className="flex items-center justify-center w-[35px] aspect-square rounded-full border cursor-pointer hover:bg-neutral-100 transition-colors duration-300">
            <FaRegBell size={18} />
        </div>
    )
}
