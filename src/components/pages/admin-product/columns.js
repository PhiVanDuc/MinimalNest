"use client"

import Money from "@/components/customs/money";
import AdminProductTableAction from "./admin-product-table-action";

import { cn } from "@/lib/utils";

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
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giảm giá</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[14px] text-center font-medium">Không giảm giá</p>
            )
        }
    },
    {
        id: "price",
        accesserKey: "price",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giá cuối</h2>,
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
        header: () => <h2 className={cn(headerClassName, "text-center")}>Trạng thái</h2>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <p className="w-fit px-[15px] py-[5px] rounded-full text-[14px] text-green-600 bg-green-600/10 border border-green-600/60">Hoàn thành</p>
                </div>
            )
        }
    },
    {
        accessorKey: "actions",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Hành động</h2>,
        cell: ({ row, table }) => {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return <AdminProductTableAction row={row} permissions={permissions} />
        }
    }
];

export default columns;