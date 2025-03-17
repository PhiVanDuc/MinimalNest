"use client"

import { cn } from "@/lib/utils"
import { X } from "lucide-react"

export default function ProductDetailImageExpand({ isExpand, setIsExpand }) {
    const handleCloseExpandImage = () => {
        setIsExpand({
            status: false,
            id: ""
        })
    }

    return (
        <div className={cn(
            "fixed inset-0 bg-black/70 items-center justify-center z-30",
            isExpand?.status ? "flex" : "hidden"
        )}>
            <div className="relative w-full max-w-[750px] aspect-square rounded-[15px] bg-slate-300">
                <div
                    className="delete-margin group absolute flex items-center justify-center rounded-full top-[10px] right-[10px] text-darkBold cursor-pointer w-[30px] aspect-square overflow-hidden"
                    onClick={handleCloseExpandImage}
                >
                    <X
                        size={18}
                        className="relative z-[20]"
                    />
                    <span className="absolute inset-0 bg-white/50 backdrop-blur-[10px] group-hover:bg-white/60 transition-all duration-300" />
                </div>
            </div>
        </div>
    )
}
