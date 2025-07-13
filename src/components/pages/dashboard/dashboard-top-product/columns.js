"use client"

import Image from "next/image";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

import Money from "@/components/customs/money";

import { cn } from "@/lib/utils";
import calcPrice from "@/lib/utils/calc-price";
import { convertToNumberDb } from "@/lib/utils/format-currency";

const headerClassName = "text-[14px] whitespace-nowrap text-darkMedium font-semibold";

const columns = [
    {
        id: "product",
        accesserKey: "product",
        header: () => <h3 className={cn(headerClassName)}>Sản phẩm</h3>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <div className="flex items-center gap-[10px]">
                    <div className="w-[80px] aspect-square rounded-[8px] overflow-hidden bg-slate-300 relative">
                        {
                            data?.image ?
                            <Image
                                src={data.image}
                                alt={data.product}
                                fill
                                className="object-cover"
                                sizes="80px"
                                priority={false}
                            /> : 
                            <span className="w-[80px] aspect-square rounded-[8px] bg-slate-300" />
                        }
                    </div>

                    <div className="space-y-[5px]">
                        <h4 className="text-[15px] font-semibold">{data?.product}</h4>
                        
                        <div className="flex items-center gap-[10px]">
                            <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Màu sắc</p>
                            <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                            <div className="flex gap-[8px]">
                                {
                                    data?.colors?.map(color => {
                                        return (
                                            <Tooltip
                                                key={color?.id}
                                                delayDuration={100}
                                            >
                                                <TooltipTrigger asChild>
                                                    <span
                                                        className="shrink-0 w-[15px] aspect-square rounded-full outline outline-[1.5px] outline-offset-2 outline-neutral-300"
                                                        style={{
                                                            background: `${color?.code}`
                                                        }}
                                                    />
                                                </TooltipTrigger>

                                                <TooltipContent>
                                                    {color?.color}
                                                </TooltipContent>
                                            </Tooltip>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="flex items-center gap-[10px]">
                            <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Kích cỡ</p>
                            <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                            <div className="flex items-center gap-[5px]">
                                {
                                    data?.sizes?.map((size, index) => {
                                        return (
                                            <Tooltip
                                                key={size?.id}
                                                delayDuration={100}
                                            >
                                                <TooltipTrigger asChild>
                                                    <p className="text-[12px] text-darkMedium font-semibold px-[10px] py-[2px] rounded-[2px] bg-neutral-200">
                                                        {size?.size}
                                                    </p>
                                                </TooltipTrigger>

                                                <TooltipContent>
                                                    {size?.desc}
                                                </TooltipContent>
                                            </Tooltip>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "discount",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giảm giá</h2>,
        cell: ({ row }) => {
            const { general_discount, discount_type, discount_amount } = row.original;
            
            const renderDiscount = (type, amount) => {
                if (!type) return <p className="text-[14px] text-center font-medium">Không giảm giá</p>;
                
                const value = convertToNumberDb(amount);
                
                return type === "amount" ? (
                    <div className="flex justify-center">
                        <Money price={value} moneyClassName="text-[15px]" />
                    </div>
                ) : (
                    <p className="text-[14px] text-center font-medium">{value}%</p>
                );
            };

            return general_discount 
            ? renderDiscount(general_discount.discount_type, general_discount.discount_amount)
            : renderDiscount(discount_type, discount_amount);
        }
    },
    {
        id: "price",
        accesserKey: "price",
        header: () => <h3 className={cn(headerClassName, "text-center")}>Giá cuối</h3>,
        cell: ({ row }) => {
            const { cost_price, interest_rate, general_discount, discount_type, discount_amount } = row?.original;

            const finalPrice = general_discount
            ? calcPrice(cost_price, interest_rate, general_discount.discount_type, general_discount?.discount_amount ? convertToNumberDb(general_discount.discount_amount) : null)
            : calcPrice(cost_price, interest_rate, discount_type, discount_amount ? convertToNumberDb(discount_amount) : null);

            return (
                <div className="flex justify-center">
                    <Money
                        price={convertToNumberDb(finalPrice)}
                        moneyClassName="text-[15px]"
                    />
                </div>
            )
        }
    },
    {
        id: "sold",
        accesserKey: "sold",
        header: () => <h3 className={cn(headerClassName, "text-center")}>Đã bán</h3>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <div className="flex justify-center">
                    <p className="text-[14px] text-blueChecked font-medium px-[10px] py-[4px] rounded-[5px] bg-blueChecked/20">{data?.total_sold}</p>
                </div>
            )
        }
    },
];

export default columns;