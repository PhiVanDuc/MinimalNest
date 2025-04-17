"use client"

import useCouponFilter from "@/hooks/use-coupon-filter";

import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";

export default function CouponFilterLoading() {
    const { isOpen, toggleFilter } = useCouponFilter();

    return (
        <>
            <div className={cn(
                "fixed top-0 xl:top-[76px] bottom-0 left-0 flex flex-col w-full sm:w-fit py-[20px] bg-white border-r border-slate-200 transition-all duration-500 z-30 xl:z-10",
                isOpen ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"
            )}>
                <div className="flex items-center gap-x-[10px] sm:w-[320px] px-[20px] mb-[40px]">
                    <Skeleton className="w-full self-stretch" />
                    <Skeleton className="w-[50px] aspect-square" />
                </div>

                <ScrollArea className="flex-1 w-full px-[20px]">
                    <Skeleton className="w-full h-[300px]" />
                </ScrollArea>

                <div className="px-[20px]">
                    <Skeleton className="h-[55px] w-full" />
                </div>
            </div>

            <div
                className={cn(
                    "fixed inset-0 bg-black/80 z-20 cursor-pointer",
                    isOpen ? "xl:hidden" : "hidden"
                )}
                onClick={() => { toggleFilter(!isOpen) }}
            />
        </>
    )
}