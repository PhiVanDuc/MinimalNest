"use client"

import { Skeleton } from "@/components/ui/skeleton";
import { useSelector } from "react-redux";

import { cn } from "@/lib/utils";

export default function ProductsListSearchLoading() {
    const isOpen = useSelector(state => state.productFilterOpen);

    return (
        <div className="flex justify-center mb-[100px] lg:mb-[150px]">
            <div
                className={cn(
                    "max-width pt-[20px] lg:pt-[40px] transition-all duration-300 space-y-[60px]",
                    isOpen ? "pl-[20px] md:pl-[40px] xl:pl-[360px] pr-[20px] md:pr-[40px]" : "responsive-horizontal"
                )}
            >
                <div className="space-y-[15px]">
                    <Skeleton className="max-w-[200px] h-[36px] rounded-[15px]" />
                    <div className="flex flex-wrap gap-[8px]">
                        <Skeleton className="h-[38px] rounded-full w-[100px]" />
                        <Skeleton className="h-[38px] rounded-full w-[100px]" />
                        <Skeleton className="h-[38px] rounded-full w-[100px]" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
                    <Skeleton className="w-full aspect-video rounded-[15px]" />
                    <Skeleton className="w-full aspect-video rounded-[15px]" />
                    <Skeleton className="w-full aspect-video rounded-[15px]" />
                    <Skeleton className="w-full aspect-video rounded-[15px]" />
                    <Skeleton className="w-full aspect-video rounded-[15px]" />
                    <Skeleton className="w-full aspect-video rounded-[15px]" />
                    <Skeleton className="w-full aspect-video rounded-[15px]" />
                    <Skeleton className="w-full aspect-video rounded-[15px]" />
                    <Skeleton className="w-full aspect-video rounded-[15px]" />
                    <Skeleton className="w-full aspect-video rounded-[15px]" />
                    <Skeleton className="w-full aspect-video rounded-[15px]" />
                    <Skeleton className="w-full aspect-video rounded-[15px]" />
                </div>
            </div>
        </div>
    )
}
