import { Skeleton } from '@/components/ui/skeleton'

export default function HeaderLoading() {
    return (
        <div className='responsive-horizontal w-full py-[100px] md:py-[150px] flex items-center'>
            <div className='relative w-full flex flex-col lg:flex-row gap-[40px] lg:gap-[80px]'>
                <Skeleton className="hidden lg:block xl:shrink-0 w-[550px] rounded-[15px]" />
                <Skeleton className="lg:hidden w-full h-[250px]" />

                <div className="w-full grid grid-cols-2 gap-[10px] lg:gap-[20px]">
                    <Skeleton className="h-[140px] md:h-[180px] lg:h-[220px] rounded-[15px]" />
                    <Skeleton className="h-[140px] md:h-[180px] lg:h-[220px] rounded-[15px]" />
                    <Skeleton className="col-span-2 h-[140px] md:h-[180px] lg:h-[220px] rounded-[15px]" />
                </div>
            </div>
        </div>
    )
}
