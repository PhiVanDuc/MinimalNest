"use client"

import AdminCouponTableAction from "./admin-coupon-table-action";
import Money from "@/components/customs/money";

import { cn } from "@/lib/utils";

const headerClassName = "text-[14px] whitespace-nowrap font-semibold";

const columns = [
    {
        accessorKey: "event",
        header: () => <h2 className={headerClassName}>Sự kiện</h2>,
        cell: ({ row }) => {
            const data = row.original;

            return (
                <div className="space-y-[5px]">
                    <h2 className="text-[15px] font-semibold">{data?.event?.event}</h2>
                    
                    <div className="flex items-center gap-[10px] font-medium">
                        <p className="text-[13px] text-darkMedium min-w-[55px]">Bắt đầu</p>
                        <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                        <p className="text-[13px] text-darkBold">{data?.event?.start_date}</p>
                    </div>

                    <div className="flex items-center gap-[10px] font-medium">
                        <p className="text-[13px] text-darkMedium min-w-[55px]">Kết thúc</p>
                        <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                        <p className="text-[13px] text-darkBold">{data?.event?.end_date}</p>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "coupon",
        header: () => {
            return (
                <h2 className={cn(headerClassName, "text-center")}>
                    Phiếu giảm giá
                </h2>
            )
        },
        cell: ({ row }) => {
            const data = row.original;

            return (
                <p className="text-[14px] font-medium text-center">{data?.code}</p>
            )
        }
    },
    {
        accessorKey: "discount",
        header: () => {
            return (
                <h2
                    className={cn(
                        headerClassName,
                        "text-center"
                    )}
                >
                    Giảm
                </h2>
            )
        },
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <div className="flex justify-center">
                    <Money
                        price={data?.discount_price}
                        moneyClassName="text-[14px] font-medium"
                    />
                </div>
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
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return (
                <AdminCouponTableAction couponId={row?.original?.id} permissions={permissions} />
            )
        }
    }
];

export default columns;