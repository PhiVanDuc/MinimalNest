"use client"

import Image from "next/image";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider
} from "@/components/ui/tooltip";

import Money from "@/components/customs/money";
import { Separator } from "@/components/ui/separator";

import formatDate from "@/lib/utils/format-date";
import { convertToNumberDb } from "@/lib/utils/format-currency";

export default function ConsiderOrder({ returnGoods }) {
    return (
        <div className='w-[35%] p-[20px] rounded-[10px] bg-white space-y-[25px]'>
            <div className="space-y-[10px]">
                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                    <p>Tạo đơn</p>
                    <p className="text-darkBold">{formatDate(returnGoods?.created_at)}</p>
                </div>

                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                    <p>Hoàn thành</p>
                    <p className="text-darkBold">{formatDate(returnGoods?.updated_at)}</p>
                </div>
            </div>

            <div className="space-y-[10px]">
                <h2 className="text-[15px] font-semibold">Sản phẩm</h2>

                <TooltipProvider>
                    {
                        returnGoods?.return_goods_items?.map(item => {
                            return (
                                <div
                                    key={item?.id}
                                    className="flex items-center justify-between gap-[15px] p-[15px] rounded-[10px] bg-neutral-50 hover:bg-neutral-100 cursor-pointer"
                                >
                                    <div className="flex items-center gap-[15px] ">
                                        <div className="w-[80px] aspect-square rounded-[8px] overflow-hidden bg-slate-300 relative">
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
                                            <h4 className="text-[15px] font-semibold">{item.product_name}</h4>

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

                                    <p className="text-[15px] font-medium text-darkMedium">x{item?.return_quantity}</p>
                                </div>
                            )
                        })
                    }
                </TooltipProvider>
            </div>

            <Separator />
            
            {/* Tiền */}
            <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0">
                <p className="text-[15px] font-semibold text-darkBold">Tổng hoàn trả</p>
                <Money
                    price={convertToNumberDb(returnGoods?.refund_amount)}
                    moneyClassName="text-[16px] text-darkBold"
                    currencyClassName="text-[12px]"
                />
            </div>
        </div>
    )
}
