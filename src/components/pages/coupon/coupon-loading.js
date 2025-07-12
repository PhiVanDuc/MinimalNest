import { Skeleton } from "@/components/ui/skeleton";

export default function CouponLoading() {
    return (
        <div className="space-y-[60px]">
            <Skeleton className="w-full max-w-[300px] h-[35px] rounded-[10px]" />

            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[25px]">
                <Skeleton className="w-full aspect-16/6 rounded-[10px]" />
                <Skeleton className="w-full aspect-16/6 rounded-[10px]" />
                <Skeleton className="w-full aspect-16/6 rounded-[10px]" />
                <Skeleton className="w-full aspect-16/6 rounded-[10px]" />
                <Skeleton className="w-full aspect-16/6 rounded-[10px]" />
                <Skeleton className="w-full aspect-16/6 rounded-[10px]" />
            </div>
        </div>
    )
}
