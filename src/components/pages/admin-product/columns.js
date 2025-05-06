"use client"

import Money from "@/components/customs/money";
import { Button } from "@/components/ui/button";
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
                        <h4 className="text-[16px] font-medium">Tên sản phẩm.</h4>
                        
                        <div className="flex items-center gap-[10px]">
                            <p className="text-[12px] text-darkMedium font-medium min-w-[55px]">Màu sắc</p>
                            <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                            <p className="text-[12px] text-darkBold font-semibold">Màu trắng</p>
                        </div>

                        <div className="flex items-center gap-[10px]">
                            <p className="text-[12px] text-darkMedium font-medium min-w-[55px]">Kích cỡ</p>
                            <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                            <p className="text-[12px] text-darkBold font-semibold">XL</p>
                        </div>
                    </div>
                </div>
            )
        }
    },
    {
        id: "price",
        accesserKey: "price",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Giá</h2>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <Money
                        price={1999000}
                        moneyClassName="text-[15px]"
                    />
                </div>
            )
        }
    },
    {
        accessorKey: "product-type",
        header: () => <h2 className={cn(headerClassName)}>Loại sản phẩm</h2>,
        cell: ({ row }) => {
            return (
                <div className="flex flex-wrap gap-[5px] max-w-[400px]">
                    <p className="shrink-0 flex items-center px-[15px] py-[5px] text-[14px] font-medium rounded-full border">Bán chạy nhất</p>
                    <Button className="shrink-0 px-[15px] py-[5px] text-[14px] font-normal rounded-full bg-yellowBold text-white hover:bg-yellowBold hover:opacity-80 transition-colors duration-300">Gán loại</Button>
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
                    <p className="w-fit px-[15px] py-[5px] rounded-full text-[14px] font-medium text-green-600 bg-green-600/20">Kích hoạt</p>
                </div>
            )
        }
    },
    {
        accessorKey: "actions",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Hành động</h2>,
        cell: ({ row }) => <AdminProductTableAction row={row} />
    }
];

export default columns;