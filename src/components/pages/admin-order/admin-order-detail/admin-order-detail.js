"use client"

import Image from "next/image";
import Money from "@/components/customs/money";

import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider
} from "@/components/ui/tooltip";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { convertToNumberDb } from "@/lib/utils/format-currency";

export default function AdminOrderDetail({ open, setOpen, order }) {
    return (
        <Dialog
            open={open}
            onOpenChange={(isOpen) => { setOpen(isOpen); }}
        >
            <DialogContent className="gap-[30px] px-[0px]">
                <DialogHeader className="px-[24px]">
                    <DialogTitle>Chi tiết đơn hàng</DialogTitle>
                    <DialogDescription>Hãy xem qua 1 lượt đơn hàng để biết những sản phẩm cần đóng gói.</DialogDescription>
                </DialogHeader>

                <ScrollArea className="max-h-[500px] px-[24px]">
                    <div className="space-y-[25px]">
                        {/* Mã đơn */}
                        <div className="flex items-center justify-between px-[15px] py-[10px] text-[14px] text-blueChecked font-medium rounded-full border bg-blueChecked/10 border-blueChecked">
                            <p>Đơn hàng</p>
                            <p>#{order?.id}</p>
                        </div>

                        {/* Thông tin nhận hàng */}
                        <div className="space-y-[2px]">
                            <div className="flex items-center gap-[5px] text-[15px] font-semibold">
                                <p className="">{order?.full_name}</p>
                                <p>-</p>
                                <p>{order?.phone_number}</p>
                            </div>
                            <p className="text-[15px] text-darkMedium font-medium">{order?.address}</p>
                        </div>

                        {/* Lời nhắn */}
                        {
                            order?.message &&
                            <div className="space-y-[2px]">
                                <p className="text-[15px] font-semibold">Lời nhắn</p>
                                <p className="text-[15px] text-darkMedium font-medium">{order?.message}</p>
                            </div>
                        }

                        {/* Hủy hàng */}
                        {
                            order?.cancel_message &&
                            <div className="space-y-[2px]">
                                <p className="text-[15px] font-semibold">Hủy đơn</p>
                                <p className="text-[15px] text-darkMedium font-medium">{order?.cancel_message}</p>
                            </div>
                        }

                        {/* Các sản phẩm */}
                        <div className="space-y-[5px]">
                            <p className="text-[15px] font-semibold">Sản phẩm</p>

                            <div className="space-y-[10px]">
                                <TooltipProvider>
                                    {
                                        order?.order_items?.map(item => {
                                            return (
                                                <div
                                                    key={item?.id}
                                                    className="flex items-center justify-between gap-[15px] p-[15px] rounded-[10px] bg-neutral-50 hover:bg-neutral-100 cursor-pointer"
                                                >
                                                    <div className="flex items-center gap-[15px] ">
                                                        <div className="w-[100px] aspect-square rounded-[8px] overflow-hidden bg-slate-300 relative">
                                                            {
                                                                item?.image ?
                                                                <Image
                                                                    src={item.image}
                                                                    alt={item.product_name}
                                                                    fill
                                                                    className="object-cover"
                                                                    sizes="100px"
                                                                    priority={false}
                                                                /> : 
                                                                <span className="w-[100px] aspect-square rounded-[8px] bg-slate-300" />
                                                            }
                                                        </div>

                                                        <div className="space-y-[10px]">
                                                            <h4 className="text-[15px] font-semibold">{item?.product_name}</h4>

                                                            <div className="space-y-[5px]">
                                                                <div className="flex items-center gap-[10px]">
                                                                    <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Màu sắc</p>
                                                                    <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                                                    <Tooltip
                                                                        delayDuration={100}
                                                                    >
                                                                        <TooltipTrigger asChild>
                                                                            <span
                                                                                className="shrink-0 w-[15px] aspect-square rounded-full outline outline-[1.5px] outline-offset-2 outline-neutral-300"
                                                                                style={{
                                                                                    background: `${item?.code_color}`
                                                                                }}
                                                                            />
                                                                        </TooltipTrigger>

                                                                        <TooltipContent>
                                                                            {item?.color}
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </div>

                                                                <div className="flex items-center gap-[10px]">
                                                                    <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Kích cỡ</p>
                                                                    <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                                                    <Tooltip
                                                                        delayDuration={100}
                                                                    >
                                                                        <TooltipTrigger asChild>
                                                                            <p className="text-[12px] text-darkMedium font-semibold px-[10px] py-[2px] rounded-[2px] bg-neutral-200">
                                                                                {item?.size}
                                                                            </p>
                                                                        </TooltipTrigger>

                                                                        <TooltipContent>
                                                                            {item?.size_desc}
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <p className="text-[16px] font-semibold text-darkMedium">x{item?.quantity}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </TooltipProvider>
                            </div>
                        </div>

                        <Separator />

                        {/* Tiền */}
                        <div className="space-y-[15px]">
                            <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                                <p>Tổng tiền hàng</p>
                                <Money
                                    price={convertToNumberDb(order?.total_order)}
                                    moneyClassName="text-[14px] text-darkBold"
                                    currencyClassName="text-[12px]"
                                />
                            </div>
            
                            <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                                <p>Phí vận chuyển</p>
                                <p className="text-darkBold">Miễn phí</p>
                            </div>
            
                            {
                                order?.coupon_code &&
                                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                                    <p>Giảm giá</p>
                                    <div className="flex items-center gap-[3px]">
                                        <span>-</span>
                                        {
                                            order?.discount_type === "amount" ?
                                            (
                                                <Money
                                                    price={convertToNumberDb(order?.discount_amount)}
                                                    moneyClassName="text-[14px] text-darkBold"
                                                    currencyClassName="text-[12px]"
                                                />
                                            ) :
                                            <span>{convertToNumberDb(order?.discount_amount)}%</span>
                                        }
                                    </div>
                                </div>
                            }

                            <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0">
                                <p className="text-[16px] font-semibold text-darkBold">Tổng hóa đơn</p>
                                <Money
                                    price={
                                        convertToNumberDb(
                                            order?.total_order_discount ?
                                            order?.total_order_discount :
                                            order?.total_order
                                        )
                                    }
                                    moneyClassName="text-[16px] font-semibold text-darkBold"
                                    currencyClassName="text-[12px]"
                                />
                            </div>
                        </div>
                        
                        {/* Thanh toán */}
                        <p className="text-center px-[20px] py-[10px] bg-blueChecked/10 border-blueChecked text-blueChecked border rounded-full text-[14px] font-semibold">
                            {
                                order?.payment_method === "cod" ? "Thanh toán khi nhận hàng" : "Thanh toán qua stripe"
                            }
                        </p>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}
