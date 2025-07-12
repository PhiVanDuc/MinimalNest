import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardTotalLoading() {
    return (
        <div className="grid grid-cols-2 2xl:grid-cols-3 gap-[10px]">
            <Skeleton className="rounded-[10px] w-full h-[102px]" />
            <Skeleton className="rounded-[10px] w-full h-[102px]" />
            <Skeleton className="rounded-[10px] w-full h-[102px]" />
        </div>
    )
}
