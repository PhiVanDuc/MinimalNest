import { Skeleton } from "@/components/ui/skeleton"

export default function OrderLoading() {
    return (
        <div className="w-full space-y-[20px]">
            <Skeleton className="w-full max-w-[200px] h-[35px] rounded-[10px]" />

            <div className="w-full space-y-[10px]">
                <Skeleton className="w-full h-[50px] rounded-[10px]" />
                <Skeleton className="w-full h-[100px] rounded-[10px]" />
                <Skeleton className="w-full h-[100px] rounded-[10px]" />
                <Skeleton className="w-full h-[100px] rounded-[10px]" />
            </div>
        </div>
    )
}
