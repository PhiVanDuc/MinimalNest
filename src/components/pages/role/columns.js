"use client"

import { cn } from "@/lib/utils";
import RoleTableAction from "./role-table-action";

const headerClassName = "text-[14px] whitespace-nowrap font-semibold";

const columns = [
    {
        accessorKey: "role",
        header: () => <h2 className={headerClassName}>Vai trò</h2>,
        cell: ({ row }) => {
            const data = row.original;

            return (
                <p className="text-[14px] font-semibold">{data?.role || "Tên vai trò"}</p>
            )
        }
    },
    {
        accessorKey: "desc",
        header: () => <h2 className={headerClassName}>Mô tả</h2>,
        cell: ({ row }) => {
            const data = row.original;

            return (
                <p className="text-[14px]">{data?.desc || "Mô tả vai trò."}</p>
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
            const data = row.original;

            return (
                <p className="text-[14px] text-center font-medium">{data?.account_used} tài khoản</p>
            )
        }
    },
    {
        accessorKey: "actions",
        header: ({ table }) => {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return (!permissions?.includes("edit-role") && !permissions?.includes("delete-role")) ?
            <></> :
            (
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

            return (!permissions?.includes("edit-role") && !permissions?.includes("delete-role")) ?
            <></> :
            (
                <RoleTableAction
                    data={row.original}
                    permissions={permissions}
                />
            )
        }
    }
];

export default columns;