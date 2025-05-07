"use client"

import { Checkbox } from "@/components/ui/checkbox";
import Money from "@/components/customs/money";
import { HiOutlineNewspaper } from "react-icons/hi";

import { cn } from "@/lib/utils";

const headerClassName = "text-[14px] whitespace-nowrap text-darkMedium font-semibold";

const columns = [
    {
        id: "check",
        accesserKey: "check",
        header: () => "",
        cell: ({ row }) => {
            return (
                <Checkbox />
            )
        }
    },
    {
        id: "idOrder",
        accesserKey: "idOrder",
        header: () => <h2 className={cn(headerClassName)}>Đơn hàng</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[14px] font-semibold">#0001</p>
            )
        }
    },
    {
        id: "date",
        accesserKey: "date",
        header: () => <h2 className={cn(headerClassName)}>Ngày</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[14px]">Ngày 01 tháng 02 năm 2025</p>
            )
        }
    },
    {
        id: "customer",
        accesserKey: "customer",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Khách hàng</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[14px] text-center font-medium">Khách hàng 1</p>
            )
        }
    },
    {
        id: "payment",
        accesserKey: "payment",
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
        id: "total",
        accesserKey: "total",
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
        id: "customer",
        accesserKey: "customer",
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
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <div className="shrink-0 flex justify-center items-center text-darkMedium w-[35px] aspect-square cursor-pointer">
                        <HiOutlineNewspaper size={22} className="shrink-0" />
                    </div>
                </div>
            )
        }
    }
];

export default columns;