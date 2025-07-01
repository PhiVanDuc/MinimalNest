"use client"

import { Checkbox } from "@/components/ui/checkbox";
import Money from "@/components/customs/money";
import AdminOrderWatchCol from "./admin-order-detail/admin-order-watch-col";

import { cn } from "@/lib/utils";
import formatDate from "@/lib/utils/format-date";
import { convertToNumberDb } from "@/lib/utils/format-currency";

const headerClassName = "text-[14px] whitespace-nowrap text-darkMedium font-semibold";

const columns = [
    {
        accessorKey: "check",
        header: () => "",
        cell: ({ row, table }) => {
            const order = row.original;
            const { chooseOrders, setChooseOrders } = table?.options?.meta?.moreData;

            const isChecked = chooseOrders.includes(order.id);

            const handleChange = (checked) => {
                if (checked) setChooseOrders([...chooseOrders, order.id]);
                else setChooseOrders(chooseOrders.filter(id => id !== order.id));
            };

            return (
                <Checkbox
                    checked={isChecked}
                    onCheckedChange={handleChange}
                    disabled={
                        (order?.status === "canceled" || order?.status === "fulfilled") ? true : false
                    }
                />
            )
        }
    },
    {
        accessorKey: "order",
        header: () => <h2 className={cn(headerClassName)}>Đơn hàng</h2>,
        cell: ({ row }) => {
            const order = row?.original;

            return (
                <div className="flex items-center gap-[5px] text-[14px] font-semibold">
                    <p className="text-darkBland">#</p>
                    <p className="leading-[24px]">{order?.id}</p>
                </div>
            )
        }
    },
    {
        accessorKey: "date",
        header: () => <h2 className={cn(headerClassName)}>Thời gian</h2>,
        cell: ({ row }) => {
            const order = row?.original;

            return (
                <p className="text-[14px]">{formatDate(order?.created_at)}</p>
            )
        }
    },
    {
        accessorKey: "customer",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Khách hàng</h2>,
        cell: ({ row }) => {
            const order = row?.original;

            return (
                <p className="text-[15px] font-medium text-center">{order?.full_name}</p>
            )
        }
    },
    {
        accessorKey: "total",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Tổng tiền</h2>,
        cell: ({ row }) => {
            const order = row?.original;

            return (
                <div className="flex justify-center">
                    {
                        order?.total_price_discount ?
                        (
                            <Money
                                price={convertToNumberDb(order?.total_order_discount)}
                                moneyClassName="text-[14px]"
                            />
                        ) :
                        (
                            <Money
                                price={convertToNumberDb(order?.total_order)}
                                moneyClassName="text-[14px]"
                            />
                        )
                    }
                </div>
            )
        }
    },
    {
        accessorKey: "amount",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Số lượng</h2>,
        cell: ({ row }) => {
            const order = row?.original;
            const quantity = order?.order_items?.reduce((prev, curr) => {
                prev += curr?.quantity;
                return prev;
            }, 0);

            return (
                <p className="text-[14px] text-center font-medium">{quantity} sản phẩm</p>
            )
        }
    },
    {
        accessorKey: "status",
        header: () => <h2 className={cn(headerClassName, "text-center")}>Trạng thái</h2>,
        cell: ({ row }) => {
            const order = row.original;
            const status = order?.status;

            const statusMap = {
                pending: {
                    text: "Chờ duyệt",
                    className: "border-amber-600 text-amber-600 bg-amber-600/10"
                },
                packing: {
                    text: "Đang đóng gói",
                    className: "border-amber-600 text-amber-600 bg-amber-600/10"
                },
                shipping: {
                    text: "Đang vận chuyển",
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
        accessorKey: "watch",
        header: ({ table }) => {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            return permissions?.includes("detail-order") ?
            <h2 className={cn(headerClassName, "text-center")}>Xem đơn</h2> :
            <></>
        },
        cell: ({ row, table }) => {
            const moreData = table?.options?.meta?.moreData;
            const permissions = moreData?.permissions;

            const order = row?.original;

            return permissions?.includes("detail-order") ? (
                <AdminOrderWatchCol
                    order={order}
                />
            ) : <></>
        }
    }
];

export default columns;