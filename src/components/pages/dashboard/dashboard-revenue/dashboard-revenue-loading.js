import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardRevenueLoading() {
    return (
        <div className="p-[10px] w-full">
            <Skeleton className="w-full h-[700px] rounded-[10px] mr-[10px]" />
        </div>
    )
}
