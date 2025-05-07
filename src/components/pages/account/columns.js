"use client"

import AccountTableAction from "./account-table-acction";
import { cn } from "@/lib/utils";

const headerClassName = "text-[14px] whitespace-nowrap font-semibold";

const columns = [
    {
        accessorKey: "account",
        header: () => <h3 className="text-[14px] text-darkMedium font-medium">Tài khoản</h3>,
        cell: ({ row }) => {
            return (
                <div className="space-y-[5px]">
                    <h4 className="text-[15px] font-medium">Tên khách hàng.</h4>
                    <p className="text-[14px] text-darkMedium">email@gmail.com</p>
                </div>
            )
        }
    },
    {
        accessorKey: "roles",
        header: () => <h2 className={headerClassName}>Vai trò</h2>,
        cell: ({ row }) => {
            return (
                <div className="flex flex-wrap gap-[5px] max-w-[400px]">
                    <p className="shrink-0 flex items-center px-[15px] py-[5px] text-[14px] rounded-full border">Quản trị sản phẩm</p>
                    <p className="shrink-0 flex items-center px-[15px] py-[5px] text-[14px] rounded-full border">Quản trị đơn hàng</p>
                </div>
            )
        }
    },
    {
        accessorKey: "customer-type",
        header: () => {
            return (
                <h2
                    className={cn(
                        headerClassName,
                        "text-center"
                    )}
                >
                    Khách hàng
                </h2>
            )
        },
        cell: ({ row }) => {
            return (
                <p className="text-[14px] text-center font-medium">Khách quen</p>
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
        cell: ({ row }) => <AccountTableAction row={row} />
    }
];

export default columns;