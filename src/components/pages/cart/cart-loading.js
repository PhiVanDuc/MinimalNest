import { Skeleton } from "@/components/ui/skeleton"

export default function CartLoading() {
    return (
        <div className="space-y-[40px]">
            <Skeleton className="w-full max-w-[200px] h-[35px] rounded-[10px]" />

            <div className="flex flex-col xl:flex-row items-start gap-[20px]">
                <div className="w-full space-y-[10px]">
                    <Skeleton className="w-full h-[50px] rounded-[10px]" />
                    <Skeleton className="w-full h-[100px] rounded-[10px]" />
                    <Skeleton className="w-full h-[100px] rounded-[10px]" />
                    <Skeleton className="w-full h-[100px] rounded-[10px]" />
                </div>

                <Skeleton className="shrink-0 w-full xl:w-[370px] h-[300px] rounded-[10px]" />
            </div>
        </div>
    )
}
