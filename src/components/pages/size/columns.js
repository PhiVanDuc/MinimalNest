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
                <p className="text-[15px] font-medium">XL</p>
            )
        }
    },
    {
        accessorKey: "categories",
        header: () => <h2 className={headerClassName}>Danh mục</h2>,
        cell: ({ row }) => {
            return (
                <div className="flex flex-wrap gap-[5px] max-w-[400px]">
                    <p className="shrink-0 flex items-center px-[15px] py-[5px] text-[14px] font-medium rounded-full border">Giường</p>
                    <p className="shrink-0 flex items-center px-[15px] py-[5px] text-[14px] font-medium rounded-full border">Thảm</p>
                </div>
            )
        }
    },
    {
        accessorKey: "desc",
        header: () => <h2 className={headerClassName}>Mô tả</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[15px]">Mô tả cho kích cỡ, xem chiều dài, chiều rộng, chiều cao là bao nhiêu cm hoặc m.</p>
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
                <p className="text-[15px] text-center">300</p>
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
                    <p className="w-fit px-[15px] py-[5px] rounded-full text-[14px] font-medium text-green-600 bg-green-600/20">Kích hoạt</p>
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
        cell: ({ row }) => <SizeTableAction row={row} />
    }
];

export default columns;