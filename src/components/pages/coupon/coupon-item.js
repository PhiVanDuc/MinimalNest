"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import CouponDialogDetail from "./coupon-dialog-detail";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import formatDate from "@/lib/utils/format-date";

export default function CouponItem({ coupon }) {
    const [open, setOpen] = useState();

    return (
        <>
            <div
                className="relative flex flex-col sm:flex-row gap-[10px] sm:gap-0 items-center rounded-[15px] border bg-white"
            >
                <div className="relative w-full sm:w-[45%] aspect-video sm:aspect-auto sm:self-stretch rounded-tl-[15px] rounded-bl-[15px] rounded-tr-[15px] rounded-br-[15px] sm:rounded-tr-0 sm:rounded-br-0 overflow-hidden">
                    <Image
                        src={coupon?.event?.image}
                        alt="Ảnh sự kiện"
                        width={1000}
                        height={1000}
                        className="absolute inset-0 h-full w-full object-cover object-left bg-slate-300"
                        loading="lazy"
                    />
                </div>
                
                <div className="py-[10px] px-[15px] sm:py-[15px] sm:px-[20px] w-full sm:w-[55%]">
                    <div className="space-y-[5px] mb-[20px]">
                        <div className="flex items-center gap-x-[10px]">
                            <span className="inline-block w-[8px] aspect-square rounded-full bg-yellowBold" />
                            <p className="text-[11px] sm:text-[12px] font-medium text-darkMedium">{coupon?.code}</p>
                        </div>

                        <p className="truncate-2 text-[13px] sm:text-[14px] font-semibold text-darkBold">{coupon?.event?.event}</p>

                        <div className="flex flex-wrap gap-x-[15px] gap-y-[3px] text-[12px] sm:text-[13px] text-darkMedium">
                            <p className="whitespace-nowrap">NBĐ: {formatDate(coupon?.event?.start_date)}</p>
                            <p className="whitespace-nowrap">HSD: {formatDate(coupon?.event?.start_date)}</p>
                        </div>
                    </div>

                    <div className="text-right">
                        <Button
                            onClick={() => { setOpen(true) }}
                        >
                            Chi tiết
                        </Button>
                    </div>
                </div>

                <div className="absolute flex justify-center top-[10px] right-[-7px] rounded-tl-full rounded-bl-full w-[38px] py-[2px] bg-yellowMedium text-[13px] text-darkBold font-medium">
                    <p>{coupon?.quantity > 99 ? "+99" : coupon?.quantity}</p>
                    <div
                        className="absolute top-[23.5px] right-0 w-[50px] h-[50px] bg-yellowBold -z-10"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 0 100%)"
                        }}
                    />
                </div>
            </div>

            <CouponDialogDetail
                open={open}
                setOpen={setOpen}
                coupon={coupon}
            />
        </>
    )
}
