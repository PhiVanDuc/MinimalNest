"use client"

import { cn } from "@/lib/utils";
import EventTableAction from "./event-table-action";

const headerClassName = "text-[14px] whitespace-nowrap font-semibold";

const columns = [
    {
        accessorKey: "event",
        header: () => <h2 className={headerClassName}>Sự kiện</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <div className="space-y-[5px]">
                    <h2 className="text-[15px] font-semibold">{data?.event}</h2>
                    
                    <div className="flex items-center gap-[10px] font-medium">
                        <p className="text-[13px] text-darkMedium min-w-[55px]">Bắt đầu</p>
                        <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                        <p className="text-[13px] text-darkBold">{data?.start_date}</p>
                    </div>

                    <div className="flex items-center gap-[10px] font-medium">
                        <p className="text-[13px] text-darkMedium min-w-[55px]">Kết thúc</p>
                        <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                        <p className="text-[13px] text-darkBold">{data?.end_date}</p>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "coupon-quantity",
        header: () => {
            return (
                <h2 className={
                    cn(
                        headerClassName,
                        "text-center"
                    )
                }>
                    Số phiếu giảm giá
                </h2>
            )
        },
        cell: ({ row }) => {
            return (
                <p className="text-[14px] font-medium text-center">300</p>
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
                    Hạn
                </h2>
            )
        },
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <p className="w-fit px-[15px] py-[5px] rounded-full text-[14px] text-green-600 bg-green-600/10 border border-green-600/60">Đang hoạt động</p>
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
            const data = row?.original;

            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return <EventTableAction slug={data?.slug} permissions={permissions} />
        }
    }
];

export default columns;