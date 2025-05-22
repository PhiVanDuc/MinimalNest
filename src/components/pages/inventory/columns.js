"use client"

import Money from "@/components/customs/money";
import CellStock from "../dashboard/dashboard-stock-quantity/cell-stock";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import InventoryEditQuantity from "./inventory-edit-quantity";

const headerClassName = "text-[14px] whitespace-nowrap text-darkMedium font-semibold";

const columns = [
    {
        id: "product",
        accesserKey: "product",
        header: () => <h3 className={cn(headerClassName)}>Sản phẩm</h3>,
        cell: ({ row }) => {
            return (
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
            )
        }
    },
    {
        id: "sku",
        accesserKey: "sku",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Mã SKU</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[14px] font-medium text-center">GNT-XXL-000000</p>
            )
        }
    },
    {
        id: "discount",
        accesserKey: "discount",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Danh mục</h2>,
        cell: ({ row }) => {
            return (
                <div className="flex flex-wrap gap-[5px] max-w-[300px] justify-center">
                    <p className="shrink-0 flex items-center px-[15px] py-[5px] text-[14px] rounded-full border">Giường</p>
                    <p className="shrink-0 flex items-center px-[15px] py-[5px] text-[14px] rounded-full border">Thảm</p>
                </div>
            )
        }
    },
    {
        id: "price",
        accesserKey: "price",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giá gốc</h2>,
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