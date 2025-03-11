import { cn } from '@/lib/utils'
import React from 'react'

export default function BlurCircle({ className }) {
    return (
        <span className={cn(
            "absolute inline-block w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#FFF3DF] -z-10 blur-[90px]",
            className
        )} />
    )
}
