"use client"

import Image from "next/image";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

import Money from "@/components/customs/money";
import { Checkbox } from "@/components/ui/checkbox";

import { cn } from "@/lib/utils";
import calcPrice from "@/lib/utils/calc-price";
import { convertToNumber, convertToNumberDb } from "@/lib/utils/format-currency";

const headerClassName = "text-[14px] whitespace-nowrap text-darkMedium font-semibold";

const columns = [
    {
        accessorKey: "select",
        header: ({ table }) => {
            const { form, index, products } = table.options.meta?.moreData;

            const productIds = form.getValues(`discounts.${index}.productIds`) || [];
            const allProductIds = products?.map(p => p?.id) || [];

            const isAllChecked = allProductIds.length > 0 && allProductIds.every(id => productIds.includes(id));

            const toggle = (checked) => {
                if (checked) {
                    form.setValue(`discounts.${index}.productIds`, allProductIds);
                } else {
                    form.setValue(`discounts.${index}.productIds`, []);
                }
            };

            return (
                <Checkbox
                    checked={isAllChecked}
                    onCheckedChange={toggle}
                />
            );
        },
        cell: ({ row, table }) => {
            const { form, index } = table.options.meta?.moreData;
            const data = row?.original;

            const productIds = form.getValues(`discounts.${index}.productIds`) || [];
            const productId = data?.id;
            const isChecked = productIds.includes(productId);

            const toggle = (checked) => {
                if (checked) {
                    form.setValue(`discounts.${index}.productIds`, [...productIds, productId]);
                } else {
                    const updated = productIds.filter(id => id !== productId);
                    form.setValue(`discounts.${index}.productIds`, updated);
                }
            }

            return <Checkbox
                checked={isChecked}
                onCheckedChange={toggle}
            />
        }
    },
    {
        accessorKey: "product",
        header: () => <h3 className={cn(headerClassName)}>Sản phẩm</h3>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <div className="space-y-[8px]">
                    {
                        data?.general_discount &&
                        <p className="text-[14px] font-medium text-red-500">Đã áp dụng giảm giá {data?.general_discount?.discount_name}</p>
                    }

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

                        <div className="space-y-[8px]">
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
                </div>
            )
        }
    },
    {
        accessorKey: "current-price",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giá hiện tại</h2>,
        cell: ({ row }) => {
            const { cost_price, interest_rate } = row?.original;
            const currentPrice = calcPrice(cost_price, interest_rate);

            return (
                <div className="flex justify-center">
                    <Money
                        price={`${convertToNumberDb(currentPrice)}`}
                        moneyClassName="text-[15px]"
                    />
                </div>
            )
        }
    },
    {
        accessorKey: "discount-price",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giá sau khi áp dụng</h2>,
        cell: ({ row, table }) => {
            const { currentDiscount } = table.options.meta?.moreData;
            const { cost_price, interest_rate } = row?.original;

            const finalPrice = calcPrice(cost_price, interest_rate, currentDiscount?.discountType, convertToNumber(currentDiscount?.discountAmount));

            return (
                <div className="flex justify-center">
                    <Money
                        price={`${finalPrice}`}
                        moneyClassName="text-[15px]"
                    />
                </div>
            )
        }
    },
]

export default columns;