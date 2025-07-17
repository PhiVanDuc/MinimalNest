import { Skeleton } from "@/components/ui/skeleton";

export default function ReturnGoodsLoading() {
    return (
        <div className="space-y-[30px]">
            <div className="space-y-[10px]">
                <Skeleton className="h-[36px] rounded-[10px] w-[200px]" />
                <Skeleton className="h-[24px] w-full max-w-[400px] rounded-[6px]" />
            </div>

            <div className="flex flex-col xl:flex-row items-start gap-[20px]">
                <Skeleton className="w-full order-2 xl:order-1 xl:w-[40%] h-[200px] rounded-[10px]" />
                <Skeleton className="w-full order-1 xl:order-2 xl:w-[60%] h-[400px] rounded-[10px]" />
            </div>
        </div>
    )
}
