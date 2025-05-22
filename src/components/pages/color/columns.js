"use client"

import ColorTableAction from "./color-table-action";
import { cn } from "@/lib/utils";

const headerClassName = "text-[14px] whitespace-nowrap font-semibold";

const columns = [
    {
        accessorKey: "color",
        header: () => <h2 className={headerClassName}>Màu sắc</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <p className="text-[14px] font-medium">{data?.color}</p>
            )
        }
    },
    {
        accessorKey: "colorCode",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Mã màu</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <div className="flex items-center justify-center gap-[10px]">
                    <span
                        className="w-[20px] aspect-square rounded-full border"
                        style={{
                            background: data?.code || "black"
                        }}
                    />
                    <p className="text-[14px] text-darkMedium font-medium text-center">{data?.code}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "actions",
        header: ({ table }) => {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return (!permissions?.includes("edit-color") && !permissions?.includes("delete-color")) ?
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
            const data = row?.original;

            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return (!permissions?.includes("edit-color") && !permissions?.includes("delete-color")) ?
            <></> :
            <ColorTableAction colorId={data?.id} permissions={permissions} />
        }
    }
];

export default columns;