import { cn } from '@/lib/utils'
import React from 'react'

export default function Mark({ className }) {
    return (
        <div className={cn(
            "absolute opacity-0 bottom-[-10px] left-0 right-0 h-[3px] rounded-full bg-darkBland hover:opacity-100 transition duration-300",
            className
        )} />
    )
}
