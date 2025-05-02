"use client"

import formatCurrency from "@/lib/format-currency"
import { cn } from "@/lib/utils"

export default function Money({ price, moneyClassName = "", currencyClassName = "", sign = "" }) {
    return (
        <p className={cn(
            "space-x-[5px] text-[16px] font-medium text-darkBold",
            moneyClassName
        )}>
            <span className="whitespace-nowrap">{sign} {formatCurrency(price)}</span>
            
            <span className={cn(
                "font-semibold text-[12px] tracking-wide",
                currencyClassName
            )}>
                VNĐ
            </span>
        </p>
    )
}
