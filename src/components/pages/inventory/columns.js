"use client"

import Image from "next/image";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

import Money from "@/components/customs/money";
import CellStock from "../dashboard/dashboard-stock-quantity/cell-stock";

import InventoryEditQuantity from "./inventory-edit-quantity";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
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
                <div className="flex items-center gap-[20px]">
                    <div className="w-[80px] aspect-square rounded-[8px] overflow-hidden bg-slate-300 relative">
                        {
                            data?.variant?.product?.image ?
                            <Image
                                src={data?.variant?.product?.image}
                                alt={data?.variant?.product?.product}
                                fill
                                className="object-cover"
                                sizes="80px"
                                priority={false}
                            /> : 
                            <span className="w-[80px] aspect-square rounded-[8px] bg-slate-300" />
                        }
                    </div>

                    <div className="space-y-[8px]">
                        <h4 className="text-[15px] font-semibold">{data?.variant?.product?.product}</h4>
                        
                        <div className="flex items-center gap-[10px]">
                            <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Màu sắc</p>
                            <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                            <Tooltip
                                delayDuration={100}
                            >
                                <TooltipTrigger asChild>
                                    <span
                                        className="w-[15px] aspect-square rounded-full outline outline-[1.5px] outline-offset-2 outline-neutral-300"
                                        style={{
                                            background: `${data?.variant?.color?.code}`
                                        }}
                                    />
                                </TooltipTrigger>

                                <TooltipContent>
                                    {data?.variant?.color?.color}
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
                                        {data?.variant?.size?.size}
                                    </p>
                                </TooltipTrigger>

                                <TooltipContent>
                                    {data?.variant?.size?.desc}
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            )
        }
    },
    {
        id: "sku",
        accesserKey: "sku",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Mã SKU</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <p className="text-[14px] font-medium text-center">{data?.variant?.sku}</p>
            )
        }
    },
    {
        id: "discount",
        accesserKey: "discount",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Danh mục</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <div className="flex flex-wrap gap-[5px] max-w-[300px] justify-center">
                    <p className="shrink-0 flex items-center px-[15px] py-[5px] text-[14px] rounded-full border">{data?.variant?.product?.category?.category}</p>
                </div>
            )
        }
    },
    {
        id: "price",
        accesserKey: "price",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giá gốc</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <div className="flex justify-center">
                    <Money
                        price={convertToNumberDb(data?.variant?.product?.cost_price)}
                        moneyClassName="text-[15px]"
                    />
                </div>
            )
        }
    },
    {
        accessorKey: "status",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Số lượng</h2>,
        cell: ({ row }) => <CellStock row={row} />
    },
    {
        accessorKey: "expander",
        header: ({ table }) =>  {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return permissions?.includes("edit-inventory") ?
            (
                <h2 className={cn(headerClassName, "text-center")}>Mở rộng</h2>
            ) :
            <></>
        },
        cell: ({ row, table }) => {
            const expand = row.getIsExpanded();

            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return permissions?.includes("edit-inventory") ?
            (
                <div className="w-full flex justify-center">
                    <button 
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
            ) :
            <></>
        },
        expandedContent: ({ row, table }) => {
            const data = row?.original;

            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return permissions?.includes("edit-inventory") ? <InventoryEditQuantity data={data} /> : <></>
        }
    }
];

export default columns;