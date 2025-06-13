"use client"

import Image from "next/image";
import Money from "@/components/customs/money";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";
import calcPrice from "@/lib/utils/calc-price";

const headerClassName = "text-[14px] whitespace-nowrap font-semibold";

const paymentProductColumns = [
    {
        accessorKey: "product",
        header: () => <div className={`${headerClassName}`} style={{ textAlign: "left" }}>Sản phẩm</div>,
        cell: ({ row }) => {
            const { product, color, size, image } = row?.original || {};
            const { product: nameProduct, cost_price, interest_rate, general_discount, discount_amount, discount_type } = product || {};

            const isDiscount = ((discount_amount && discount_type) || general_discount);

            const beforeDiscountPrice = calcPrice(cost_price, interest_rate, null, null);
            const price = isDiscount ?
            (discount_amount && discount_type) ?
            calcPrice(cost_price, interest_rate, discount_type, discount_amount) :
            general_discount &&
            calcPrice(cost_price, interest_rate, general_discount?.discount_type, general_discount?.discount_amount) :
            calcPrice(cost_price, interest_rate, null, null);

            return (
                <div className="flex items-center gap-x-[20px]">
                    <div className="relative shrink-0 w-[130px] aspect-square rounded-[10px] bg-slate-200 overflow-hidden">
                        {
                            image?.url ?
                            <Image
                                src={image?.url}
                                alt={nameProduct}
                                fill
                                className="object-cover object-center"
                                sizes="100%"
                                priority={false}
                            /> : 
                            <span className="w-[80px] aspect-square rounded-[8px] bg-slate-300" />
                        }
                    </div>

                    <div className="space-y-[20px] w-full">
                        <header className="space-y-[5px]">
                            <h2 className="text-[16px] md:text-[17px] font-semibold text-darkBold max-w-[200px] sm:max-w-[300px] lg:max-w-[500px] truncate">{nameProduct}</h2>
                            
                            <div className="flex flex-col gap-y-[5px]">
                                <Money
                                    price={beforeDiscountPrice}
                                    moneyClassName={cn(
                                        "text-[13px] md:text-[14px]",
                                        isDiscount ? "italic line-through" : ""
                                    )}
                                    currencyClassName="text-[11px] md:text-[12px]"
                                />

                                {
                                    isDiscount &&
                                    (
                                        <Money
                                            price={price}
                                            moneyClassName="text-[13px] md:text-[14px]"
                                            currencyClassName="text-[11px] md:text-[12px]"
                                        />
                                    )
                                }
                            </div>
                        </header>

                        <div className="space-y-[5px] w-full">
                            <div className="flex items-center gap-[10px]">
                                <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Màu sắc</p>
                                <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
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
                            </div>

                            <div className="flex items-center gap-[10px]">
                                <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Kích cỡ</p>
                                <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
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
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    },
    {
        accessorKey: "quantity",
        header: () => <div className={cn(headerClassName, "text-center")}>Số lượng</div>,
        cell: ({ row }) => {
            const { quantity } = row?.original || {};

            return (
                <p className="text-[14px] md:text-[15px] font-medium text-center">x{quantity}</p>
            )
        }
    },
    {
        accessorKey: "total-price",
        header: () => <div className={headerClassName} style={{ textAlign: "right" }}>Tổng tiền</div>,
        cell: ({ row }) => {
            const { product, quantity } = row?.original || {};
            const { cost_price, interest_rate, general_discount, discount_amount, discount_type } = product || {};

            const isDiscount = ((discount_amount && discount_type) || general_discount);

            const price = (
                isDiscount ?
                (discount_amount && discount_type) ?
                calcPrice(cost_price, interest_rate, discount_type, discount_amount) :
                general_discount &&
                calcPrice(cost_price, interest_rate, general_discount?.discount_type, general_discount?.discount_amount) :
                calcPrice(cost_price, interest_rate, null, null)
            ) * +quantity;

            return (
                <Money
                    price={price}
                    moneyClassName="text-[14px] md:text-[15px] text-right"
                />
            )
        }
    }
]

export default paymentProductColumns;