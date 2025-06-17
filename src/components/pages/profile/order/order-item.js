"use client"

import { useRouter } from "next/navigation";

import Money from "@/components/customs/money";
import OrderItemProduct from "./order-item-product";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { convertToNumberDb } from "@/lib/utils/format-currency";

export default function OrderItem({ order }) {
    const router = useRouter();

    return (
        <div className="p-[15px] sm:p-[30px] space-y-[20px] rounded-[15px] border hover:bg-neutral-50 cursor-pointer transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[5px]">
                <p className="order-2 sm:order-1 flex gap-[5px] text-[14px] whitespace-nowrap text-darkMedium">Mã đơn hàng - <span className="text-darkBold font-medium truncate">{order?.id}</span></p>
                <p className="order-1 sm:order-2 text-[16px] text-blueChecked font-medium">
                    {order?.status === "pending" && "Chờ duyệt"}
                    {order?.status === "packing" && "Đang đóng gói"}
                    {order?.status === "shipping" && "Đang vận chuyển"}
                    {order?.status === "canceled" && "Đã hủy"}
                    {order?.status === "fulfilled" && "Hoàn thành"}
                </p>
            </div>

            <div className="space-y-[20px]">
                <p className="text-[16px] md:text-[18px] font-semibold">Sản phẩm</p>

                <TooltipProvider>
                    {
                        order?.order_items?.map(item => {
                            return (
                                <OrderItemProduct
                                    key={item?.id}
                                    product={item}
                                />
                            )
                        })
                    }
                </TooltipProvider>
            </div>

            {
                order?.cancel_message &&
                (
                    <>
                        <Separator />

                        <div className="space-y-[4px]">
                            <p className="text-[15px] md:text-[16px] font-semibold">Lý do hủy đơn</p>
                            <p className="text-[14px] md:text-[15px] font-medium text-darkMedium leading-[20px]">{order?.cancel_message}</p>
                        </div>
                    </>
                )
            }

            <Separator />

            <div className="space-y-[10px]">
                <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[3px] text-[14px] md:text-[15px] text-darkMedium font-medium whitespace-nowrap">
                    <p>Phí vận chuyển</p>
                    <p>Miễn phí</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[3px] whitespace-nowrap">
                    <p className="text-[15px] font-medium text-darkMedium">Tổng tiền hàng</p>
                    <Money
                        price={convertToNumberDb(order?.total_order)}
                        moneyClassName="text-[14px] md:text-[15px] text-darkMedium"
                    />
                </div>

                {
                    order?.coupon_code &&
                    (
                        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[3px] whitespace-nowrap">
                            <p className="text-[15px] font-medium text-darkMedium">Giảm giá</p>
                            {
                                order?.discount_type === "amount" ?
                                (
                                    <Money
                                        price={convertToNumberDb(order?.discount_amount)}
                                        moneyClassName="text-[14px] md:text-[15px] text-darkMedium"
                                    />
                                ) :
                                <span className="text-[14px] md:text-[15px] text-darkMedium">{convertToNumberDb(order?.discount_amount)}</span>
                            }
                        </div>
                    )
                }

                <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[3px] whitespace-nowrap">
                    <p className="text-[16px] md:text-[18px] font-semibold text-darkBold">Tổng hóa đơn</p>
                    <Money
                        price={convertToNumberDb(
                            order?.total_order_discount ?
                            order?.total_order_discount :
                            order?.total_order
                        )}
                        moneyClassName="text-[16px] md:text-[18px] font-semibold"
                    />
                </div>
            </div>
        </div>
    )
}
