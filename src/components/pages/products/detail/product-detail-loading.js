import { Skeleton } from "@/components/ui/skeleton"

export default function ProductDetailLoading() {
    return (
        <div className="responsive-horizontal max-width mb-[100px] lg:mb-[150px] space-y-[15px] sm:space-y-0">
            <Skeleton className="sm:hidden h-[26px] w-full max-w-[150px] rounded-[10px]" />

            <div className="flex flex-col 2xl:flex-row items-center gap-[50px] 2xl:gap-[80px]">
                <Skeleton className="w-full aspect-square sm:aspect-video lg:aspect-16/7 2xl:aspect-square rounded-[15px]" />

                <Skeleton className="w-full aspect-square rounded-[15px]"></Skeleton>
            </div>
        </div>
    )
}
