import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardOrderLoading() {
    return (
        <div className="p-[10px] shrink-0 w-[350px] self-stretch">
            <Skeleton className="w-full h-full rounded-[10px]" />
        </div>
    )
}
