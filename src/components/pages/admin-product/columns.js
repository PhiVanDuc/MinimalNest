"use client"

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip";

import Money from "@/components/customs/money";
import AdminProductTableAction from "./admin-product-table-action";

import { cn } from "@/lib/utils";
import { convertToNumber, convertToNumberDb } from "@/lib/utils/format-currency";

const headerClassName = "text-[14px] whitespace-nowrap text-darkMedium font-semibold";

const columns = [
    {
        accessorKey: "product",
        header: () => <h3 className={cn(headerClassName)}>Sản phẩm</h3>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <div className="flex items-center gap-[10px]">
                    <span className="w-[80px] aspect-square rounded-[8px] bg-slate-300" />

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
            )
        }
    },
    {
        accessorKey: "sku",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Danh mục</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            return (    
                <div className="flex justify-center">
                    <p className="shrink-0 flex items-center px-[15px] py-[5px] text-[14px] rounded-full border">{data?.category?.category}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "discount",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giảm giá</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            if (!data?.discount_type) {
                return <p className="text-[14px] text-center font-medium">Không giảm giá</p>;
            }
            else {
                if (data?.discount_type === "amount") {
                    return (
                        <div className="flex justify-center">
                            <Money
                                price={convertToNumberDb(data?.discount_amount)}
                                moneyClassName="text-[15px]"
                            />
                        </div>
                    )
                } else {
                    return <p className="text-[14px] text-center font-medium">{convertToNumberDb(data?.discount_amount)}%</p>;
                }
            }
        }
    },
    {
        accessorKey: "price",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giá cuối</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <div className="flex justify-center">
                    <Money
                        price={convertToNumberDb(data?.final_price)}
                        moneyClassName="text-[15px]"
                    />
                </div>
            )
        }
    },
    {
        accessorKey: "actions",
        header: ({ table }) => {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return (!permissions?.includes("edit-product") && !permissions?.includes("delete-product")) ?
            <></> :
            <h2 className={cn(headerClassName, "text-center")}>Hành động</h2>
        },
        cell: ({ row, table }) => {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            const data = row?.original;

            return (!permissions?.includes("edit-product") && !permissions?.includes("delete-product")) ?
            <></> :
            <AdminProductTableAction product={data} permissions={permissions} />
        }
    }
];

export default columns;