import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function NavigateBarLoading() {
    return (
        <div className='fixed top-0 left-0 right-0 py-[10px] px-[10px] border-b border-slate-200 z-20 bg-white'>
            <Skeleton className="h-[46px] xl:h-[56px] rounded-[10px]" />
        </div>
    )
}
