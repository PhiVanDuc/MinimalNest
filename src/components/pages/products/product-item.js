"use client"

import Link from "next/link";
import Image from "next/image";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

import { Badge } from "@/components/ui/badge";
import Money from "@/components/customs/money";
import { IoPricetagOutline } from "react-icons/io5";

import calcPrice from "@/lib/utils/calc-price";
import { convertToNumberDb } from "@/lib/utils/format-currency";
import { cn } from "@/lib/utils";

export default function ProductItem({ product }) {
    const {
        product: productName,
        product_types: productTypes,
        colors = [],
        general_discount,
        cost_price,
        interest_rate,
        discount_type,
        discount_amount,
        image
    } = product || {};

    return (
        <Link
            href={`/san-pham/${product?.slug}`}
            className="relative block h-full rounded-[15px] cursor-pointer border shadow-sm overflow-hidden"
        >
            <div className="group relative w-full aspect-square rounded-[15px] rounded-br-none rounded-bl-none bg-white overflow-hidden">
                {
                    image ?
                    <Image
                        src={image}
                        alt={productName}
                        fill
                        className="object-cover object-center scale-[0.8] group-hover:scale-[0.7] rounded-[15px] transition-all"
                        sizes="100%"
                        priority={false}
                    /> : 
                    <div className="w-full aspect-square rounded-[15px] rounded-br-none rounded-bl-none bg-slate-300 overflow-hidden" />
                }
            </div>

            <div className="relative p-[20px] bg-white space-y-[20px] border-t">
                <div className="space-y-[8px]">
                    <h3 className="text-[14px] sm:text-[15px] text-darkBold font-semibold">{productName}</h3>

                    <TooltipProvider
                        delayDuration={200}
                    >
                        <div className="flex items-center gap-x-[8px]">
                            {
                                colors.map(color => (
                                    <Tooltip
                                        key={color?.id}
                                    >
                                        <TooltipTrigger asChild>
                                            <span
                                                className="inline-block w-[15px] h-[15px] rounded-full outline outline-[1px] outline-offset-[3px] outline-darkBland cursor-pointer"
                                                style={{
                                                    background: color?.code
                                                }}
                                            />
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            {color?.color}
                                        </TooltipContent>
                                    </Tooltip>
                                ))
                            }
                        </div>
                    </TooltipProvider>
                </div>

                <div className="space-y-[10px]">
                    <div className="flex items-center gap-x-[10px]">
                        <IoPricetagOutline size={20} className="text-darkMedium" />
                        
                        <Money
                            price={calcPrice(cost_price, interest_rate, null, null)}
                            moneyClassName={cn(
                                "text-[14px] sm:text-[15px] text-darkBold font-semibold",
                                (general_discount || discount_type) ? "line-through" : ""
                            )}
                        />
                    </div>

                    {
                        (general_discount || discount_type) &&
                        (
                            <div className="flex items-center gap-x-[10px]">
                                <IoPricetagOutline size={20} className="text-darkMedium" />

                                <Money
                                    price={
                                        general_discount
                                        ? calcPrice(cost_price, interest_rate, general_discount?.discount_type, general_discount?.discount_amount ? convertToNumberDb(general_discount.discount_amount) : null)
                                        : calcPrice(cost_price, interest_rate, discount_type, discount_amount ? convertToNumberDb(discount_amount) : null)
                                    }
                                    moneyClassName="text-[14px] sm:text-[15px] text-darkBold font-semibold"
                                />
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="flex gap-[5px] items-center absolute top-[10px] right-[10px]">
                {
                    productTypes?.map(type => {
                        if (type?.slug !== "binh-thuong") {
                            return (
                                <Badge
                                    key={type?.id}
                                    className="bg-yellowBold hover:bg-yellowBold hover:opacity-80"
                                >
                                    {type?.product_type}
                                </Badge>
                            )
                        }
                    })
                }
            </div>
        </Link>
    )
}