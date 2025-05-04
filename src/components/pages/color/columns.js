"use client"

import ColorTableAction from "./color-table-action";
import { cn } from "@/lib/utils";

const headerClassName = "text-[14px] whitespace-nowrap font-semibold";

const columns = [
    {
        accessorKey: "color",
        header: () => <h2 className={headerClassName}>Màu sắc</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[15px]">Màu đen</p>
            )
        }
    },
    {
        accessorKey: "colorCode",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Mã màu</h2>,
        cell: ({ row }) => {
            return (
                <div className="flex items-center justify-center gap-[10px]">
                    <span className="w-[20px] aspect-square rounded-full bg-black" />
                    <p className="text-[14px] text-darkMedium font-medium text-center">000000</p>
                </div>
            )
        }
    },
    {
        accessorKey: "in-used-products",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Sản phẩm đang dùng</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[15px] text-center">300</p>
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
        cell: ({ row }) => <ColorTableAction row={row} />
    }
];

export default columns;