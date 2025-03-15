"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react";

import { cn } from "@/lib/utils";

export default function CartButton() {
    return (
        <>
            <Button
                variant="ghost"
                className="hidden xl:flex hover:bg-transparent text-[15px] text-darkMedium hover:bg-neutral-100 hover:text-darkBold transition-colors duration-300"
            >
                Giỏ hàng
            </Button>

            <div
                className={cn(
                    "xl:hidden flex items-center gap-x-[15px] py-[10px] px-[20px] rounded-[10px] hover:bg-slate-100 text-[15px] text-darkMedium font-medium cursor-pointer"
                )}
                // onClick={() => { setIsOpen(false); }}
            >
                <ShoppingCart size={20} />
                <p>Giỏ hàng</p>
            </div>
        </>
    )
}
