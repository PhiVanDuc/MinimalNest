"use client"

import { X } from "lucide-react";

export default function ProductFilterRightSideItem({ payload, handleDelete, displayValue = false }) {
    return (
        <div
            className="group flex items-center gap-x-[15px] w-fit text-[14px] font-medium text-darkMedium px-[20px] py-[8px] rounded-full border border-neutral-300 hover:text-darkBold hover:bg-neutral-50 hover:border-neutral-500 transition-all duration-300 cursor-pointer"
        >
            <p>{payload.label} { displayValue && "- " + payload?.value }</p>
            <X
                size={16}
                className="translate-y-[0.5px] text-darkBland group-hover:text-red-300 transition-colors duration-300"
                onClick={handleDelete}
            />
        </div>
    )
}
