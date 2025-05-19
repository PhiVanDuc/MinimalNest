"use client"

import { Checkbox } from "@/components/ui/checkbox";
import Money from "@/components/customs/money";
import AdminOrderWatchCol from "./admin-order-detail/admin-order-watch-col";

import { cn } from "@/lib/utils";

const headerClassName = "text-[14px] whitespace-nowrap text-darkMedium font-semibold";

const columns = [
    {
        accessorKey: "check",
        header: () => "",
        cell: ({ row }) => {
            return (
                <Checkbox />
            )
        }
    },
    {
        accessorKey: "idOrder",
        header: () => <h2 className={cn(headerClassName)}>Đơn hàng</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[14px] font-semibold">#0001</p>
            )
        }
    },
    {
        accessorKey: "date",
        header: () => <h2 className={cn(headerClassName)}>Ngày</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[14px]">Ngày 01 tháng 02 năm 2025</p>
            )
        }
    },
    {
        accessorKey: "customer",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Khách hàng</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[14px] text-center font-medium">Khách hàng 1</p>
            )
        }
    },
    {
        accessorKey: "payment",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Thanh toán</h2>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <p className="w-fit px-[15px] py-[5px] rounded-full text-[14px] font text-green-600 bg-green-600/10 border border-green-600/60">Đã thanh toán</p>
                </div>
            )
        }
    },
    {
        accessorKey: "total",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Tổng tiền</h2>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <Money
                        price={1200000}
                        moneyClassName="text-[14px]"
                    />
                </div>
            )
        }
    },
    {
        accessorKey: "amount",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Số lượng</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[14px] text-center font-medium">3 sản phẩm</p>
            )
        }
    },
    {
        accessorKey: "status",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Trạng thái</h2>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <p className="w-fit px-[15px] py-[5px] rounded-full text-[14px] text-green-600 bg-green-600/10 border border-green-600/60">Hoàn thành</p>
                </div>
            )
        }
    },
    {
        accessorKey: "watch",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Xem đơn</h2>,
        cell: ({ row, table }) => {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return (
                <AdminOrderWatchCol permissions={permissions || []} />
            )
        }
    }
];

export default columns;