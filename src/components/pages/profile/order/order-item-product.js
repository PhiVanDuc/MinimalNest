"use client"

import Image from "next/image";
import Money from "@/components/customs/money";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";
import { convertToNumberDb } from "@/lib/utils/format-currency";
import { cn } from "@/lib/utils";

export default function OrderItemProduct({ product }) {
    return (
        <div className="flex justify-between">
            <div className="flex gap-[20px] items-start md:items-center">
                <div className="w-[120px] aspect-square rounded-[8px] overflow-hidden bg-slate-300 relative">
                    {
                        product?.image ?
                        <Image
                            src={product.image}
                            alt={product.product_name}
                            fill
                            className="object-cover"
                            sizes="100%"
                            priority={false}
                        /> : 
                        <span className="w-[80px] aspect-square rounded-[8px] bg-slate-300" />
                    }
                </div>
                
                <div className="flex-1 space-y-[10px] md:space-y-[15px]">
                    <header>
                        <h2 className="text-[15px] md:text-[16px] font-semibold ellipsis-2-lines">{product?.product_name}</h2>
                        
                        <div className="flex flex-wrap items-center gap-[5px] sm:gap-[10px]">
                            <Money
                                price={convertToNumberDb(product?.price)}
                                moneyClassName={cn(
                                    "text-[13px] md:text-[14px] font-medium",
                                    product?.price_discount ? "line-through italic" : ""
                                )}
                                currencyClassName="text-[11px] md:text-[12px]"
                            />

                            {
                                product?.price_discount &&
                                <Money
                                    price={convertToNumberDb(product?.price_discount)}
                                    moneyClassName="text-[13px] md:text-[14px] font-medium"
                                    currencyClassName="text-[11px] md:text-[12px]"
                                />
                            }
                        </div>
                    </header>

                    <div className="hidden md:block space-y-[5px]">
                        <div className="flex items-center gap-x-[15px]">
                            <p className="shrink-0 text-[14px] text-darkMedium font-medium whitespace-nowrap w-[55px]">Màu sắc</p>
                            <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                            <Tooltip
                                delayDuration={100}
                            >
                                <TooltipTrigger asChild>
                                    <span
                                        className="shrink-0 w-[15px] aspect-square rounded-full outline outline-[1.5px] outline-offset-2 outline-neutral-300"
                                        style={{
                                            background: `${product?.code_color}`
                                        }}
                                    />
                                </TooltipTrigger>

                                <TooltipContent>
                                    {product?.color}
                                </TooltipContent>
                            </Tooltip>
                        </div>

                        <div className="flex items-center gap-x-[15px]">
                            <p className="shrink-0 text-[14px] text-darkMedium font-medium whitespace-nowrap w-[55px]">Kích cỡ</p>
                            <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                            <Tooltip
                                delayDuration={100}
                            >
                                <TooltipTrigger asChild>
                                    <p className="text-[12px] text-darkMedium font-semibold px-[10px] py-[2px] rounded-[2px] bg-neutral-200">
                                        {product?.size}
                                    </p>
                                </TooltipTrigger>

                                <TooltipContent>
                                    {product?.size_desc}
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </div>

                    <div className="flex md:hidden flex-wrap items-center gap-x-[15px] gap-y-[2px] text-darkBold font-medium">
                        <p className="shrink-0 text-[14px] whitespace-nowrap w-[55px]">Màu đen</p>
                        <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                        <p className="text-[14px] whitespace-nowrap">XL</p>
                        <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                        <p className="text-[14px] whitespace-nowrap">x2</p>
                        <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                        <Money
                            price={400000}
                            moneyClassName="text-[14px]"
                            currencyClassName="text-[12px]"
                        />
                    </div>
                </div>
            </div>

            <div className="self-stretch space-y-[5px] hidden md:flex flex-col items-end justify-between">
                <div className="flex flex-col items-end space-y-[2px]">
                    <div className="flex items-center gap-x-[15px] text-[14px] lg:text-[15px]">
                        <p className="text-darkBold font-medium whitespace-nowrap">x{product?.quantity}</p>
                        <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                        <p className="shrink-0 text-right text-darkMedium font-medium whitespace-nowrap w-[70px]">Số lượng</p>
                    </div>

                    <div className="flex items-center gap-x-[15px]">
                        <Money
                            price={convertToNumberDb(product?.sub_total)}
                            moneyClassName="text-[14px] lg:text-[15px] font-medium"
                        />
                        <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                        <p className="shrink-0 text-right text-[14px] lg:text-[15px] text-darkMedium font-medium whitespace-nowrap w-[70px]">Tổng tiền</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
