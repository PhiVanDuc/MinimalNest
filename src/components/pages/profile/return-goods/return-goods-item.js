"use client"

import Money from "@/components/customs/money";
import ReturnGoodsItemProduct from "./return-goods-item-product";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { convertToNumberDb } from "@/lib/utils/format-currency";

export default function ReturnGoodsItem({ returnGood }) {
    return (
        <div className="p-[15px] sm:p-[30px] space-y-[20px] rounded-[15px] border hover:bg-neutral-50 cursor-pointer transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[5px]">
                <p className="order-2 sm:order-1 flex gap-[5px] text-[14px] whitespace-nowrap text-darkMedium">Mã yêu cầu - <span className="text-darkBold font-medium truncate">{returnGood?.id}</span></p>

                <p className="order-1 sm:order-2 text-[16px] text-blueChecked font-medium">
                    {returnGood?.status === "pending" && "Chờ duyệt"}
                    {returnGood?.status === "shipping" && "Đang vận chuyển"}
                    {returnGood?.status === "canceled" && "Đã hủy"}
                    {returnGood?.status === "fulfilled" && "Hoàn thành"}
                </p>
            </div>

            <div className="space-y-[20px]">
                <p className="text-[16px] md:text-[18px] font-semibold">Sản phẩm</p>

                <TooltipProvider>
                    {
                        returnGood?.return_goods_items?.map(item => {
                            return (
                                <ReturnGoodsItemProduct
                                    key={item?.id}
                                    product={item}
                                />
                            )
                        })
                    }
                </TooltipProvider>
            </div>

            {
                returnGood?.cancel_message &&
                (
                    <>
                        <Separator />

                        <div className="space-y-[4px]">
                            <p className="text-[15px] md:text-[16px] font-semibold">Lý do từ chối</p>
                            <p className="text-[14px] md:text-[15px] font-medium text-darkMedium leading-[20px]">{returnGood?.cancel_message}</p>
                        </div>
                    </>
                )
            }

            <Separator />

            <div className="space-y-[10px]">
                <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[3px] whitespace-nowrap">
                    <p className="text-[16px] md:text-[18px] font-semibold text-darkBold">Tổng hoàn tiền</p>
                    <Money
                        price={convertToNumberDb(returnGood?.refund_amount)}
                        moneyClassName="text-[16px] md:text-[18px] font-semibold"
                    />
                </div>

                {
                    returnGood.status === "fulfilled" &&
                    !returnGood?.is_refunded ?
                    <p className="text-[15px] text-darkMedium italic text-center">Hàng hoàn trả đang được kiểm tra, khoản hoàn tiền sẽ được xử lý sau khi xác nhận.</p> :
                    <p className="text-[15px] text-darkMedium italic text-center">Tiền đã được hoàn trả.</p>
                }
            </div>
        </div>
    )
}
