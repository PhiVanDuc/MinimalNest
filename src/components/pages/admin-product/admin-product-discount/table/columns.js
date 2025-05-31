"use client"

import Money from "@/components/customs/money";
import { Checkbox } from "@/components/ui/checkbox";

import { cn } from "@/lib/utils";

const headerClassName = "text-[14px] whitespace-nowrap text-darkMedium font-semibold";

const columns = [
    {
        accessorKey: "select",
        header: () => {
            return (
                <Checkbox />
            )
        },
        cell: () => {
            return (
                <Checkbox />
            )
        }
    },
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

                    {/* <p className="text-[14px] font-medium text-red-500">
                        Đã được áp dụng cho <span>Giảm giá 1</span>
                    </p> */}
                </div>
            )
        }
    },
    {
        accessorKey: "current-price",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giá hiện tại</h2>,
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
        accessorKey: "discount-price",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giảm còn</h2>,
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
]

export default columns;