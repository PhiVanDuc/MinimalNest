"use client"

import Money from "@/components/customs/money";

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "@/components/ui/accordion";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";
import formatDate from "@/lib/utils/format-date";
import { convertToNumberDb } from "@/lib/utils/format-currency";

export default function ReturnGoodsOrder({ form, orders }) {
    const watchOrder = form.watch("order");

    const handleSelectOrder = (id) => {
        const order = orders?.find(order => order?.id === id);

        form.setValue("order", {
            ...order,
            bankInfo: ""
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="w-full order-2 xl:order-1 xl:w-[40%] py-[20px] rounded-[10px] space-y-[20px] border">
            <div className="px-[20px] flex items-center gap-[20px] pb-[20px] border-b">
                <p className="text-[14px] font-medium text-darkMedium">Chọn một đơn hàng bạn muốn đổi trả.</p>
            </div>

            <div className="space-y-[10px] px-[20px]">
                <Accordion
                    type="single"
                    collapsible
                    className="space-y-[10px]"
                >
                    <TooltipProvider>
                        {
                            orders?.length > 0 ?
                            orders.map(order => {
                                return (
                                    <AccordionItem
                                        key={order?.id}
                                        value={`order-${order?.id}`}
                                    >
                                        <AccordionTrigger className={cn(
                                            "px-[16px] py-[16px] rounded-[10px] border gap-0",
                                            watchOrder?.id === order?.id ? "bg-neutral-100" : "bg-transparent"
                                        )}>
                                            {order?.id}
                                        </AccordionTrigger>

                                        <AccordionContent
                                            className="mt-[10px] p-[16px] rounded-[10px] border space-y-[25px]"
                                        >
                                            <div className="space-y-[10px]">
                                                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                                                    <p>Tạo đơn</p>
                                                    <p className="text-darkBold">{formatDate(order?.created_at)}</p>
                                                </div>

                                                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                                                    <p>Hoàn thành</p>
                                                    <p className="text-darkBold">{formatDate(order?.updated_at)}</p>
                                                </div>
                                            </div>

                                            <div className="space-y-[10px]">
                                                <h2 className="text-[15px] font-semibold">Sản phẩm</h2>

                                                {
                                                    order?.order_items?.map(item => {
                                                        return (
                                                            <div
                                                                key={item?.id}
                                                                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[15px] p-[15px] rounded-[10px] bg-neutral-50 hover:bg-neutral-100 cursor-pointer"
                                                            >
                                                                <div className="flex flex-col min-[400px]:flex-row items-center gap-[15px] ">
                                                                    <div className="shrink-0 w-[80px] aspect-square rounded-[8px] overflow-hidden bg-slate-300 relative">
                                                                        {
                                                                            item?.image ?
                                                                            <Image
                                                                                src={item.image}
                                                                                alt={item.product_name}
                                                                                fill
                                                                                className="object-cover"
                                                                                sizes="80px"
                                                                                priority={false}
                                                                            /> : 
                                                                            <span className="w-[80px] aspect-square rounded-[8px] bg-slate-300" />
                                                                        }
                                                                    </div>

                                                                    <div className="space-y-[10px]">
                                                                        <h4 className="text-[15px] font-semibold">{item.product_name} <span className="text-[13px] text-neutral-400">(x{item?.quantity})</span></h4>

                                                                        <div className="space-y-[5px]">
                                                                            <div className="flex items-center gap-[10px]">
                                                                                <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Màu sắc</p>
                                                                                <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                                                                <Tooltip
                                                                                    delayDuration={100}
                                                                                >
                                                                                    <TooltipTrigger asChild>
                                                                                        <span
                                                                                            className="shrink-0 w-[15px] aspect-square rounded-full outline outline-[1.5px] outline-offset-2 outline-neutral-300"
                                                                                            style={{
                                                                                                background: `${item?.code_color}`
                                                                                            }}
                                                                                        />
                                                                                    </TooltipTrigger>

                                                                                    <TooltipContent>
                                                                                        {item?.color}
                                                                                    </TooltipContent>
                                                                                </Tooltip>
                                                                            </div>

                                                                            <div className="flex items-center gap-[10px]">
                                                                                <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Kích cỡ</p>
                                                                                <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                                                                <Tooltip
                                                                                    delayDuration={100}
                                                                                >
                                                                                    <TooltipTrigger asChild>
                                                                                        <p className="text-[12px] text-darkMedium font-semibold px-[10px] py-[2px] rounded-[2px] bg-neutral-200">
                                                                                            {item?.size}
                                                                                        </p>
                                                                                    </TooltipTrigger>

                                                                                    <TooltipContent>
                                                                                        {item?.size_desc}
                                                                                    </TooltipContent>
                                                                                </Tooltip>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                            <Separator />
                                            
                                            {/* Tiền */}
                                            <div className="space-y-[12px]">
                                                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[13px] text-darkMedium font-medium">
                                                    <p>Tổng tiền hàng</p>
                                                    <Money
                                                        price={convertToNumberDb(order?.total_order)}
                                                        moneyClassName="text-[13px] text-darkBold"
                                                        currencyClassName="text-[12px]"
                                                    />
                                                </div>
                                
                                                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[13px] text-darkMedium font-medium">
                                                    <p>Phí vận chuyển</p>
                                                    <p className="text-darkBold">Miễn phí</p>
                                                </div>
                                
                                                {
                                                    order?.coupon_code &&
                                                    <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[13px] text-darkMedium font-medium">
                                                        <p>Giảm giá</p>
                                                        <div className="flex items-center gap-[3px]">
                                                            <span>-</span>
                                                            {
                                                                order?.discount_type === "amount" ?
                                                                <Money
                                                                    price={convertToNumberDb(order?.discount_amount)}
                                                                    moneyClassName="text-[14px] md:text-[15px]"
                                                                /> :
                                                                <span className="text-[14px] md:text-[15px] text-darkBold">{convertToNumberDb(order?.discount_amount)}%</span>
                                                            }
                                                        </div>
                                                    </div>
                                                }
                    
                                                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0">
                                                    <p className="text-[15px] font-semibold text-darkBold">Tổng hóa đơn</p>
                                                    <Money
                                                        price={
                                                            order?.total_order_discount ?
                                                            convertToNumberDb(order?.total_order_discount) :
                                                            convertToNumberDb(order?.total_order)
                                                        }
                                                        moneyClassName="text-[16px] text-darkBold"
                                                        currencyClassName="text-[12px]"
                                                    />
                                                </div>
                                            </div>

                                            <Button
                                                type="button"
                                                className="w-full bg-yellowBold hover:opacity-90 hover:bg-yellowBold"
                                                onClick={() => { handleSelectOrder(order?.id); }}
                                            >
                                                Chọn đơn hàng
                                            </Button>
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            }) :
                            <p className="text-[14px] md:text-[15px] italic text-center">Bạn chưa có đơn hàng hoàn thành nào.</p>
                        }
                    </TooltipProvider>
                </Accordion>
            </div>
        </div>
    )
}