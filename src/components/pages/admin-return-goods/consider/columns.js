"use client"

import ConsiderExpand from "./consider-expand";
import Money from "@/components/customs/money";

import Image from "next/image";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider
} from "@/components/ui/tooltip";

import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { convertToNumberDb } from "@/lib/utils/format-currency";

const headerClassName = "text-[14px] whitespace-nowrap text-darkMedium font-semibold";

const columns = [
    {
        accessorKey: "product",
        header: () => {
            return (
                <h3 className={cn(headerClassName)}>Sản phẩm</h3>
            )
        },
        cell: ({ row }) => {
            const product = row?.original;

            return (
                <div className="space-y-[10px]">
                    <div className="flex items-center gap-[20px]">
                        <div className="w-[80px] aspect-square rounded-[8px] overflow-hidden bg-slate-300 relative">
                            {
                                product?.image ?
                                <Image
                                    src={product.image}
                                    alt={product.product_name}
                                    fill
                                    className="object-cover"
                                    sizes="80px"
                                    priority={false}
                                /> : 
                                <span className="w-[80px] aspect-square rounded-[8px] bg-slate-300" />
                            }
                        </div>

                        <TooltipProvider>
                            <div className="space-y-[5px]">
                                <h4 className="text-[15px] font-semibold">{product?.product_name}</h4>
                                
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
                                                    background: `${product?.code_color}`
                                                }}
                                            />
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            {product?.color}
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
                                                {product?.size}
                                            </p>
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            {product?.size_desc}
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>
                        </TooltipProvider>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "price",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giá</h2>,
        cell: ({ row }) => {
            const product = row?.original;

            return (
                <div className="flex justify-center">
                    <Money
                        price={
                            product?.price_discount ?
                            convertToNumberDb(product?.price_discount) :
                            convertToNumberDb(product?.price)
                        }
                        moneyClassName="text-[15px]"
                    />
                </div>
            )
        }
    },
    {
        accessorKey: "quantity",
        header: () => {
            return (
                <h3 className={cn(headerClassName, "text-center")}>Số lượng</h3>
            )
        },
        cell: ({ row }) => {
            const product = row?.original;
            
            return (
                <p className="text-[14px] font-medium text-center">x{product?.return_quantity}</p>
            )
        }
    },
    {
        accessorKey: "expander",
        header: () => {
            return (
                <h3 className={cn(headerClassName, "text-center")}>Mở rộng</h3>
            )
        },
        cell: ({ row }) => {
            const expand = row.getIsExpanded();

            return (
                <div className="w-full flex justify-center">
                    <button
                        type="button"
                        className="w-[35px] aspect-square rounded-[10px] flex items-center justify-center hover:bg-neutral-200"
                        onClick={(e) => {
                            e.stopPropagation();
                            row.toggleExpanded();
                        }}
                        aria-label="Toggle expand"
                    >
                        <ChevronRight
                            size={20}
                            className={cn(
                                "transition-transform duration-300",
                                expand ? "rotate-90" : "rotate-0"
                            )}
                        />
                    </button>
                </div>
            )
        },
        expandedContent: ({ row, table }) => {
            const product = row?.original;

            return <ConsiderExpand product={product} />
        }
    }
];

export default columns;