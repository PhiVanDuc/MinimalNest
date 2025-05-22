"use client"

import { cn } from "@/lib/utils";
import SizeTableAction from "./size-table-action";

const headerClassName = "text-[14px] whitespace-nowrap font-semibold";

const columns = [
    {
        accessorKey: "size",
        header: () => <h2 className={headerClassName}>Kích cỡ</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <p className="text-[14px] font-semibold">{data?.size}</p>
            )
        }
    },
    {
        accessorKey: "categories",
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
        accessorKey: "desc",
        header: () => <h2 className={headerClassName}>Mô tả</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <p className="text-[14px]">{data?.desc}</p>
            )
        }
    },
    {
        accessorKey: "actions",
        header: ({ table }) => {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return (!permissions?.includes("edit-size") && !permissions?.includes("delete-size")) ?
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
            const data = row.original;

            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return (!permissions?.includes("edit-size") && !permissions?.includes("delete-size")) ?
            <></> :
            <SizeTableAction sizeId={data?.id} permissions={permissions} />
        }
    }
];

export default columns;