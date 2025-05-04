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
            return (
                <div className="space-y-[5px]">
                    <h2 className="text-[16px] font-medium">Tiêu đề sự kiện.</h2>
                    
                    <div className="flex items-center gap-[10px] font-medium">
                        <p className="text-[13px] text-darkMedium min-w-[55px]">Bắt đầu</p>
                        <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                        <p className="text-[13px] text-darkBold">Ngày / tháng / năm</p>
                    </div>

                    <div className="flex items-center gap-[10px] font-medium">
                        <p className="text-[13px] text-darkMedium min-w-[55px]">Kết thúc</p>
                        <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                        <p className="text-[13px] text-darkBold">Ngày / tháng / năm</p>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "coupon",
        header: () => {
            return (
                <h2 className={headerClassName}>
                    Phiếu giảm giá
                </h2>
            )
        },
        cell: ({ row }) => {
            return (
                <div className="space-y-[5px]">
                    <h2 className="text-[16px] font-medium">Tiêu đề phiếu giảm giá.</h2>
                    
                    <div className="flex items-center gap-[10px] font-medium">
                        <p className="text-[13px] text-darkMedium min-w-[80px]">Khách hàng</p>
                        <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                        <p className="text-[13px] text-darkBold">Khách hàng mới</p>
                    </div>

                    <div className="flex items-center gap-[10px] font-medium">
                        <p className="text-[13px] text-darkMedium min-w-[80px]">Giảm theo</p>
                        <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                        <p className="text-[13px] text-darkBold">Số tiền cố định</p>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "created-at",
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
            return (
                <div className="flex justify-center">
                    <Money
                        price={300000}
                        moneyClassName="text-[15px]"
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
        cell: ({ row }) => <AdminCouponTableAction row={row} />
    }
];

export default columns;