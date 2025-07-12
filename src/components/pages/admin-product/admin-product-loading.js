import { Skeleton } from "@/components/ui/skeleton"

export default function AdminProductLoading() {
    return (
        <div className="space-y-[20px]">
            <div className="space-y-[10px] p-[20px] bg-white rounded-[10px]">
                <div className="flex items-center justify-between">
                    <Skeleton className="w-[400px] h-[35px] rounded-[10px]" />
                    <Skeleton className="w-[150px] h-[35px] rounded-[10px]" />
                </div>

                <Skeleton className="w-[100px] h-[35px] rounded-full" />
            </div>

            <div className="p-[20px] rounded-[10px] bg-white space-y-[20px]">
                <header className="space-y-[8px]">
                    <Skeleton className="w-[300px] h-[24px] rounded-[8px]" />
                    <Skeleton className="w-[500px] h-[24px] rounded-[8px]" />
                </header>

                <Skeleton className="w-full h-[36px] rounded-[10px]" />
            </div>

            <div className="p-[20px] bg-white rounded-[10px] space-y-[5px]">
                <div className="w-full space-y-[10px]">
                    <Skeleton className="w-full h-[50px] rounded-[10px]" />
                    <Skeleton className="w-full h-[100px] rounded-[10px]" />
                    <Skeleton className="w-full h-[100px] rounded-[10px]" />
                    <Skeleton className="w-full h-[100px] rounded-[10px]" />
                    <Skeleton className="w-full h-[100px] rounded-[10px]" />
                </div>
            </div>
        </div>
    )
}
