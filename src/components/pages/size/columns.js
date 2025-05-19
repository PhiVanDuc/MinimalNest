"use client"

import { cn } from "@/lib/utils";
import SizeTableAction from "./size-table-action";

const headerClassName = "text-[14px] whitespace-nowrap font-semibold";

const columns = [
    {
        accessorKey: "size",
        header: () => <h2 className={headerClassName}>Kích cỡ</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[14px] font-semibold">XL</p>
            )
        }
    },
    {
        accessorKey: "categories",
        header: () => <h2 className={headerClassName}>Danh mục</h2>,
        cell: ({ row }) => {
            return (
                <div className="flex flex-wrap gap-[5px] max-w-[400px]">
                    <p className="shrink-0 flex items-center px-[15px] py-[5px] text-[14px] rounded-full border">Giường</p>
                    <p className="shrink-0 flex items-center px-[15px] py-[5px] text-[14px] rounded-full border">Thảm</p>
                </div>
            )
        }
    },
    {
        accessorKey: "desc",
        header: () => <h2 className={headerClassName}>Mô tả</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[14px]">Mô tả cho kích cỡ, xem chiều dài, chiều rộng, chiều cao là bao nhiêu cm hoặc m.</p>
            )
        }
    },
    {
        accessorKey: "amount",
        header: () => {
            return (
                <h2
                    className={cn(
                        headerClassName,
                        "text-center"
                    )}
                >
                    Đang dùng
                </h2>
            )
        },
        cell: ({ row }) => {
            return (
                <p className="text-[14px] text-center font-medium">300 sản phẩm</p>
            )
        }
    },
    {
        accessorKey: "status",
        header: () => {
            return (
                <h2
                    className={cn(
                        headerClassName,
                        "text-center"
                    )}
                >
                    Trạng thái
                </h2>
            )
        },
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <p className="w-fit px-[15px] py-[5px] rounded-full text-[14px] text-green-600 bg-green-600/10 border border-green-600/60">Kích hoạt</p>
                </div>
            )
        }
    },
    {
        accessorKey: "actions",
        header: () => {
            return (
                <h2
                    className={cn(
                        headerClassName,
                        "text-center"
                    )}
                >
                    Hành động
                </h2>
            )
        },
        cell: ({ row, table }) => {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return <SizeTableAction row={row} permissions={permissions} />
        }
    }
];

export default columns;