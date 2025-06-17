"use client"

import AdminReturnGoodsTableAction from "./admin-return-goods-table-action";

import { cn } from "@/lib/utils";
import formatDate from "@/lib/utils/format-date";
import AdminReturnGoodsRefundButton from "./admin-return-goods-refund-button";

const headerClassName = "text-[14px] whitespace-nowrap text-darkMedium font-semibold";

const columns = [
    {
        accessorKey: "id-return-order",
        header: () => <h2 className={cn(headerClassName)}>Đơn hoàn trả</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <div className="flex items-center gap-[10px] text-[14px] font-semibold max-w-[250px]">
                    <p className="text-darkBland">#</p>
                    <p className="leading-[24px]">{data?.id}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "date",
        header: () => <h2 className={cn(headerClassName)}>Ngày</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <p className="text-[14px]">{formatDate(data?.created_at)}</p>
            )
        }
    },
    {
        accessorKey: "customer",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Khách hàng</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <p className="text-[15px] font-medium text-center">{data?.full_name}</p>
            )
        }
    },
    {
        accessorKey: "status",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Trạng thái</h2>,
        cell: ({ row }) => {
            const data = row.original;
            const status = data?.status;

            const statusMap = {
                pending: {
                    text: "Chờ duyệt",
                    className: "border-amber-600 text-amber-600 bg-amber-600/10"
                },
                shipping: {
                    text: "Đang thu hồi",
                    className: "text-purple-600 bg-purple-100 border-purple-600"
                },
                canceled: {
                    text: "Đã hủy",
                    className: "text-red-500 bg-red-100 border-red-500"
                },
                fulfilled: {
                    text: "Hoàn thành",
                    className: "text-green-600 bg-green-100 border-green-300"
                }
            };

            const statusInfo = statusMap[status] || {
                text: "Không rõ",
                className: "text-gray-600 bg-gray-100 border-gray-300"
            };

            return (
                <div className="flex justify-center">
                    <p className={cn(
                        "w-fit px-[15px] py-[5px] rounded-full text-[14px] border",
                        statusInfo.className
                    )}>
                        {statusInfo.text}
                    </p>
                </div>
            );
        }
    },
    {
        accessorKey: "refund",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Hoàn tiền</h2>,
        cell: ({ row }) => {
            const data = row?.original;

            return (
                <AdminReturnGoodsRefundButton data={data} />
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
        cell: ({ row, table }) => {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            const data = row?.original;

            if (!permissions?.includes("edit-return")) return <></>

            return <AdminReturnGoodsTableAction data={data} />
        }
    }

];

export default columns;