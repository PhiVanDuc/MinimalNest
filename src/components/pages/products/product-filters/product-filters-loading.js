"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductFiltersLoading() {
    return (
        <ScrollArea className="flex-1 relative px-[20px] py-[20px] w-[320px]">
            <div className="space-y-[20px] mb-[40px]">
                <div className="flex items-center gap-x-[10px]">
                    <Skeleton className="w-full h-[45px] rounded-[15px]" />
                    <Skeleton className="w-[50px] h-[45px] rounded-[15px]" />
                </div>
                <Skeleton className="w-full h-[45px] rounded-[15px]" />
            </div>

            <div className="space-y-[10px]">
                <Skeleton className="w-full h-[60px] rounded-[15px]" />
                <Skeleton className="w-full h-[60px] rounded-[15px]" />
                <Skeleton className="w-full h-[60px] rounded-[15px]" />
                <Skeleton className="w-full h-[60px] rounded-[15px]" />
            </div>

            <div className="absolute bottom-0 right-0 left-0 h-[40px] bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </ScrollArea>
    )
}
