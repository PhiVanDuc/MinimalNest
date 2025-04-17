"use client"

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useCouponFilter from "@/hooks/use-coupon-filter";

import CouponFilterHeader from "./coupon-filter-header";
import CouponFilterFooter from "./coupon-filter-footer";
import CouponFilterContent from "./coupon-filter-content";
import CouponFilterWrapper from "./coupon-filter-wrapper";

import { cn } from "@/lib/utils";

const showPaths = ["/phieu-giam-gia", "/phieu-giam-gia/tim-kiem"];

export default function CouponFilterClient() {
    const { isOpen, toggleFilter } = useCouponFilter();

    const pathname = usePathname();
    const [isShow, setIsShow] = useState(showPaths.some(path => pathname === path));

    useEffect(() => {
        setIsShow(showPaths.some(path => pathname === path));
    }, [pathname])

    return (
        <>
            <div className={cn(
                "fixed top-0 xl:top-[76px] bottom-0 left-0 w-full sm:w-fit py-[20px] bg-white border-r border-slate-200 transition-all duration-500 z-30 xl:z-10",
                isOpen ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0",
                !isShow ? "hidden" : ""
            )}>
                <aside className="flex flex-col h-full">
                    <CouponFilterWrapper>
                        <CouponFilterHeader />
                        <CouponFilterContent />
                        <CouponFilterFooter />
                    </CouponFilterWrapper>
                </aside>
            </div>

            <div
                className={cn(
                    "fixed inset-0 bg-black/80 z-20 cursor-pointer",
                    isOpen ? "xl:hidden" : "hidden"
                )}
                onClick={() => { toggleFilter(!isOpen); }}
            />
        </>
    )
}
