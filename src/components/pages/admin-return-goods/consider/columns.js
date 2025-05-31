"use client"

import ConsiderExpand from "./consider-expand";
import Money from "@/components/customs/money";

import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const headerClassName = "text-[14px] whitespace-nowrap text-darkMedium font-semibold";

const columns = [
    {
        accessorKey: "product",
        header: () => {
            return (
                <h3 className={cn(headerClassName)}>Sản phẩm</h3>
            )
        },
        cell: () => {
            return (
                <div className="space-y-[10px]">
                    <div className="flex items-center gap-[10px]">
                        <span className="w-[80px] aspect-square rounded-[8px] bg-slate-300" />

                        <div className="space-y-[5px]">
                            <h4 className="text-[15px] font-semibold">Tên sản phẩm.</h4>
                            
                            <div className="flex items-center gap-[10px]">
                                <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Màu sắc</p>
                                <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                <p className="text-[13px] text-darkBold font-semibold">Màu trắng</p>
                            </div>

                            <div className="flex items-center gap-[10px]">
                                <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Kích cỡ</p>
                                <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                <p className="text-[13px] text-darkBold font-semibold">XL</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "price",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giá</h2>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <Money
                        price={1200000}
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
        cell: () => {
            return (
                <p className="text-[14px] font-medium text-center">x2</p>
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
            const moreData = table?.options?.meta?.moreData;
            const form = moreData?.form;

            return <ConsiderExpand form={form} />
        }
    }
];

export default columns;