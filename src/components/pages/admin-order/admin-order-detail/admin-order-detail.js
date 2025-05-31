"use client"

import Money from "@/components/customs/money";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@/components/ui/dialog";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function AdminOrderDetail({ open, setOpen }) {
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
                            <p>#0001</p>
                        </div>

                        {/* Thông tin nhận hàng */}
                        <div className="space-y-[2px]">
                            <div className="flex items-center gap-[5px] text-[15px] font-semibold">
                                <p className="">Phí Văn Đức</p>
                                <p>-</p>
                                <p>0328895451</p>
                            </div>
                            <p className="text-[15px] text-darkMedium font-medium">Đây là địa chỉ nhận hàng mà khách hàng đã chọn.</p>
                        </div>

                        {/* Lời nhắn */}
                        <div className="space-y-[2px]">
                            <p className="text-[15px] font-semibold">Lời nhắn</p>
                            <p className="text-[15px] text-darkMedium font-medium">Khách hàng không để lại lời nhắn nào.</p>
                        </div>

                        {/* Các sản phẩm */}
                        <div className="space-y-[5px]">
                            <p className="text-[15px] font-semibold">Sản phẩm</p>

                            <div className="space-y-[10px]">
                                {
                                    Array.from({ length: 3 }).map((_, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between gap-[15px] p-[15px] rounded-[10px] bg-neutral-50 hover:bg-neutral-100 cursor-pointer"
                                            >
                                                <div className="flex items-center gap-[15px] ">
                                                    <span className="inline-block w-[100px] aspect-square rounded-[10px] bg-slate-300" />

                                                    <div className="space-y-[10px]">
                                                        <div>
                                                            <p className="flex items-center gap-[5px] text-[11px] text-blueChecked font-semibold">
                                                                <span>SKU:</span>
                                                                <span>GCTH-XL-FFFFFF</span>
                                                            </p>
                                                            <h4 className="text-[15px] font-semibold">Tên sản phẩm</h4>
                                                        </div>

                                                        <div className="space-y-[5px]">
                                                            <div className="flex items-center gap-[10px]">
                                                                <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Màu sắc</p>
                                                                <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                                                <p className="text-[13px] text-darkBold font-semibold">Màu trắng</p>
                                                            </div>

                                                            <div className="flex items-center gap-[10px]">
                                                                <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Kích cỡ</p>
                                                                <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                                                <p className="text-[13px] text-darkBold font-semibold">XL</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="text-[16px] font-semibold text-darkMedium">x2</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <Separator />

                        {/* Tiền */}
                        <div className="space-y-[15px]">
                            <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                                <p>Tổng tiền hàng</p>
                                <Money
                                    price={1200000000}
                                    moneyClassName="text-[14px] text-darkBold"
                                    currencyClassName="text-[12px]"
                                />
                            </div>
            
                            <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                                <p>Phí vận chuyển</p>
                                <p className="text-darkBold">Miễn phí</p>
                            </div>
            
                            <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                                <p>Giảm giá</p>
                                <div className="flex items-center gap-[3px]">
                                    <span>-</span>
                                    <Money
                                        price={80000}
                                        moneyClassName="text-[14px] text-darkBold"
                                        currencyClassName="text-[12px]"
                                    />
                                </div>
                            </div>

                            <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0">
                                <p className="text-[16px] font-semibold text-darkBold">Tổng hóa đơn</p>
                                <Money
                                    price={1199920000}
                                    moneyClassName="text-[16px] font-semibold text-darkBold"
                                    currencyClassName="text-[12px]"
                                />
                            </div>
                        </div>
                        
                        {/* Thanh toán */}
                        <p className="text-center px-[20px] py-[10px] bg-yellowBold/10 border rounded-full border-yellowBold/60 text-[14px] font-semibold text-amber-600">Thanh toán khi nhận hàng.</p>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}
