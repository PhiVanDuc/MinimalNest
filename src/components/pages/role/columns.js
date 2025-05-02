"use client"

import { BsThreeDotsVertical } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const headerClassName = "text-[14px] whitespace-nowrap font-semibold";

const columns = [
    {
        accessorKey: "role",
        header: () => <h2 className={headerClassName}>Vai trò</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[15px]">Tên vai trò</p>
            )
        }
    },
    {
        accessorKey: "desc",
        header: () => <h2 className={headerClassName}>Mô tả</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[15px]">Mô tả vai trò này phù hợp cho ai trong hệ thống.</p>
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
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="flex items-center justify-center w-[35px] aspect-square rounded-[5px]">
                                <BsThreeDotsVertical size={20} />
                            </div>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            alignOffset={10}
                        >
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => {}}
                            >
                                Chi tiết
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => {}}
                            >
                                Chỉnh sửa
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => {}}
                            >
                                Xóa
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
];

export default columns;