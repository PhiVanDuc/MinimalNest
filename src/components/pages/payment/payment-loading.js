import { Skeleton } from "@/components/ui/skeleton";

export default function PaymentLoading() {
    return (
        <div>
            <Skeleton className="w-full max-w-[200px] h-[35px] rounded-[10px] mb-[20px]" />

            <div className="flex flex-col xl:flex-row items-start gap-[20px]">
                <Skeleton className="w-full h-[600px] rounded-[10px]" />
                <Skeleton className="shrink-0 w-full xl:w-[370px] h-[300px] rounded-[10px]" />
            </div>
        </div>
    )
}
