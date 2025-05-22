"use client"

import AccountTableAction from "./account-table-acction";
import { cn } from "@/lib/utils";

const headerClassName = "text-[14px] whitespace-nowrap font-semibold";

const columns = [
    {
        accessorKey: "account",
        header: () => <h3 className="text-[14px] text-darkMedium font-medium">Tài khoản</h3>,
        cell: ({ row }) => {
            const data = row.original;

            return (
                <div className="space-y-[5px]">
                    <h4 className="text-[15px] font-medium">{data?.full_name}</h4>
                    <p className="text-[14px] text-darkMedium">{data?.email}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "roles",
        header: () => <h2 className={headerClassName}>Vai trò</h2>,
        cell: ({ row }) => {
            const data = row.original;
            
            return (
                <div className="flex flex-wrap gap-[5px] max-w-[400px]">
                    {
                        data?.roles?.length === 0 ?
                        <p className="shrink-0 flex items-center px-[15px] py-[5px] text-[14px] rounded-full border">Người dùng</p> :
                        data?.roles?.map(role => {
                            return (
                                <p
                                    key={role?.id}
                                    className="shrink-0 flex items-center px-[15px] py-[5px] text-[14px] rounded-full border"
                                >
                                    {role?.role}
                                </p>
                            )
                        })
                    }
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
            const data = row.original;

            return (
                <div className="flex justify-center">
                    {
                        data?.status === "active" ?
                        ( <p className="w-fit px-[15px] py-[5px] rounded-full text-[14px] text-green-600 bg-green-600/10 border border-green-600/60">Kích hoạt</p> ) :
                        ( <p className="w-fit px-[15px] py-[5px] rounded-full text-[14px] text-red-600 bg-red-600/10 border border-red-600/60">Đã bị chặn</p> )
                    }
                </div>
            )
        }
    },
    {
        accessorKey: "actions",
        header: ({ table }) => {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return permissions?.includes("edit-account") ?
            (
                <h2
                    className={cn(
                        headerClassName,
                        "text-center"
                    )}
                >
                    Hành động
                </h2>
            ) :
            <></>
        },
        cell: ({ row, table }) => {
            const data = row.original;

            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return permissions?.includes("edit-account") ?
            (
                <AccountTableAction accountId={data?.id} />
            ) :
            <></>
        }
    }
];

export default columns;