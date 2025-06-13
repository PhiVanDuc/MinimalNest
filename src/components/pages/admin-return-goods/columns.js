"use client"

import { cn } from "@/lib/utils";
import AdminReturnGoodsTableAction from "./admin-return-goods-table-action";
const headerClassName = "text-[14px] whitespace-nowrap text-darkMedium font-semibold";

const columns = [
    {
        accessorKey: "id-return-order",
        header: () => <h2 className={cn(headerClassName)}>Đơn hoàn trả</h2>,
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
        header: () => <h3 className="text-[14px] text-darkMedium font-medium">Khách hàng</h3>,
        cell: ({ row }) => {
            return (
                <div className="space-y-[5px]">
                    <h4 className="text-[15px] font-medium">Khách hàng 1</h4>
                    <p className="text-[14px] text-darkMedium">example@gmail.com</p>
                </div>
            )
        }
    },
    {
        accessorKey: "require",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Yêu cầu</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[14px] text-center font-medium">3 sản phẩm</p>
            )
        }
    },
    {
        accessorKey: "accept",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Chấp nhận</h2>,
        cell: ({ row }) => {
            return (
                <p className="text-[14px] text-center font-medium">0 sản phẩm</p>
            )
        }
    },
    {
        accessorKey: "status",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Trạng thái</h2>,
        cell: ({ row }) => {
            return (
                <div className="flex justify-center">
                    <p className="w-fit px-[15px] py-[5px] rounded-full text-[14px] text-amber-600 bg-amber-600/10 border border-amber-600/60">Chờ duyệt</p>
                </div>
            )
        }
    },
    {
        accessorKey: "consider",
        header: ({ table }) => {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            if (!permissions?.includes("edit-return")) return <></>

            return (
                <h2 className={cn(headerClassName, "text-center")}>Xem xét</h2>
            )
        },
        cell: ({ table }) => {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            if (!permissions?.includes("edit-return")) return <></>

            return <AdminReturnGoodsTableAction />
        }
    }

];

export default columns;