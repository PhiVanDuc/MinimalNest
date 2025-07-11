"use client"

import Money from "@/components/customs/money";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";

import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";

import { TbTicket } from "react-icons/tb";

import formatDate from "@/lib/utils/format-date";
import { convertToNumberDb } from "@/lib/utils/format-currency";
import Image from "next/image";

export default function PaymentCoupon({
    form,
    coupons
}) {
    const watchCoupon = form.watch("coupon");

    const handleChooseCoupon = (field, value) => {
        const coupon = coupons?.find(coupon => coupon?.id === value);
        field.onChange(coupon);
    }

    return (
        <div className="rounded-[10px] border p-[20px] space-y-[30px]">
            <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-[20px]">
                <div className="space-y-[5px]">
                    <h2 className="text-[16px] md:text-[18px] font-semibold">Áp phiếu giảm giá</h2>
                    <p className="text-[14px] text-darkMedium font-medium">Sử dụng phiếu giảm giá để giảm tổng tiền cho toàn bộ đơn hàng.</p>
                </div>

                <div className="flex items-center gap-[5px]">
                    {
                        watchCoupon?.id &&
                        <div
                            className="flex items-center gap-x-[15px] text-[14px] font-medium text-red-500 border border-red-500 cursor-pointer sm:px-[15px] sm:py-[8px] rounded-[8px] transition-colors sm:duration-300 w-full sm:w-fit"
                            onClick={() => { form.setValue("coupon", {}); }}
                        >
                            <p className="whitespace-nowrap">Bỏ chọn</p>
                        </div>
                    }

                    <Dialog>
                        <DialogTrigger>
                            <div
                                className="flex items-center gap-x-[15px] text-[14px] font-medium text-darkMedium cursor-pointer sm:px-[15px] sm:py-[8px] rounded-[8px] sm:hover:bg-neutral-200 transition-colors sm:duration-300 w-full sm:w-fit"
                            >
                                <p className="whitespace-nowrap">Chọn phiếu</p>
                                <TbTicket size={16} />
                            </div>
                        </DialogTrigger>

                        <DialogContent className="px-0 w-full max-w-[550px] gap-[30px]">
                            <DialogHeader className="px-[24px]">
                                <DialogTitle>Chọn phiếu giảm giá</DialogTitle>
                                <DialogDescription>Chọn phiếu giảm giá hiện của để giảm tổng tiền hóa đơn của bạn.</DialogDescription>
                            </DialogHeader>

                            <ScrollArea className="max-h-[500px] px-[24px] rounded-lg">
                                {
                                    coupons?.length > 0 ?
                                    (
                                        <FormField
                                            control={form.control}
                                            name="coupon"
                                            render={({ field }) => {
                                                return (
                                                    <RadioGroup
                                                        defaultValue={field?.value?.id}
                                                        onValueChange={(value) => { handleChooseCoupon(field, value); }}
                                                        className="space-y-[15px]"
                                                    >
                                                        {
                                                            coupons.map(coupon => {
                                                                return (
                                                                    <FormItem
                                                                        key={coupon?.id}
                                                                    >
                                                                        <FormLabel
                                                                            key={coupon?.id}
                                                                            className="rounded-[10px] bg-white flex items-center gap-[15px] cursor-pointer"
                                                                        >
                                                                            
                                                                            <div className="relative w-[80px] aspect-square rounded-[10px] overflow-hidden">
                                                                                {
                                                                                    coupon?.event?.image ?
                                                                                    <Image
                                                                                        src={coupon?.event?.image}
                                                                                        alt={coupon?.code}
                                                                                        fill
                                                                                        className="object-cover object-left"
                                                                                    /> :
                                                                                    <div className="shrink-0 w-[80px] aspect-square rounded-[10px] bg-slate-200" />
                                                                                }
                                                                            </div>

                                                                            <div className="w-full flex items-center justify-between gap-[20px]">
                                                                                <div className="space-y-[10px]">
                                                                                    <div className="flex items-center gap-x-[8px]">
                                                                                        <span className="inline-block w-[6px] aspect-square rounded-full bg-yellowBold" />
                                                                                        <p className="text-[11px] sm:text-[12px] font-medium text-darkMedium">{coupon?.code}</p>
                                                                                    </div>

                                                                                    <div className="flex items-center gap-[5px]">
                                                                                        <p className="text-[14px] md:text-[15px]">Giảm</p>

                                                                                        <div className="truncate-2 text-[13px] sm:text-[14px] font-semibold text-darkBold">
                                                                                            {
                                                                                                coupon?.discount_type === "amount" ?
                                                                                                <Money
                                                                                                    price={convertToNumberDb(coupon?.discount_price)}
                                                                                                    moneyClassName="text-[14px] md:text-[15px]"
                                                                                                /> :
                                                                                                <span className="text-[14px] md:text-[15px]">{convertToNumberDb(coupon?.discount_price)}%</span>
                                                                                            }
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="flex flex-wrap gap-x-[15px] gap-y-[3px] text-[12px] sm:text-[13px] text-darkMedium">
                                                                                        <p>NBĐ: {formatDate(coupon?.event?.start_date, true)}</p>
                                                                                        <p>HSD: {formatDate(coupon?.event?.end_date, true)}</p>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="p-[2px]">
                                                                                    <FormControl>
                                                                                        <RadioGroupItem value={coupon?.id} />
                                                                                    </FormControl>
                                                                                </div>
                                                                            </div>
                                                                        </FormLabel>
                                                                    </FormItem>
                                                                )
                                                            })
                                                        }
                                                    </RadioGroup>
                                                )
                                            }}
                                        />
                                    ) :
                                    <p className="italic text-[15px] text-center">Hiện không có phiếu giảm giá nào phù hợp!</p>
                                }
                            </ScrollArea>
                        </DialogContent>
                    </Dialog>
                </div>
            </header>

            {
                watchCoupon?.id ?
                (
                    <div className="flex flex-wrap items-center justify-between gap-x-[20px] gap-y-[5px]">
                        <div className="flex items-center gap-[10px] text-[14px] md:text-[16px] font-medium">
                            <TbTicket size={26} />
                            <p>Bạn đã chọn <span className="text-yellowBold">phiếu giảm giá {watchCoupon?.code}.</span></p>
                        </div>

                        <div className="flex flex-nowrap items-center gap-x-[3px]">
                            <span>-</span>
                            {
                                watchCoupon?.discount_type === "amount" ?
                                <Money
                                    price={convertToNumberDb(watchCoupon?.discount_price)}
                                    moneyClassName="text-[14px] md:text-[15px]"
                                /> :
                                <span className="text-[14px] md:text-[15px]">{watchCoupon?.discount_price}%</span>
                            }
                        </div>
                    </div>
                ) :
                <p className="text-center text-[14px] text-darkBland font-medium">Bạn chưa chọn phiếu giảm giá nào.</p>
            }
        </div>
    )
}
