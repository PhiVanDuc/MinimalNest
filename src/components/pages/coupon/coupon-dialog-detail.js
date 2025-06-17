"use client"

import Money from "@/components/customs/money"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
    DialogDescription
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import formatDate from "@/lib/utils/format-date"
import { convertToNumberDb } from "@/lib/utils/format-currency"

export default function CouponDialogDetail({ open, setOpen, coupon }) {
    if (!coupon) return null

    const {
        code,
        desc,
        discount_type,
        discount_price,
        quantity,
        min_items,
        min_order_total,
        customer_type,
        event
    } = coupon

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-[90vw] sm:max-w-md rounded-2xl gap-y-[30px]">
                <DialogHeader className="space-y-[5px]">
                    <DialogTitle className="text-[14px] sm:text-[18px] text-yellowBold">
                        Mã giảm giá - {code}
                    </DialogTitle>

                    <DialogDescription>
                        {desc}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-[20px]">
                    <Section title="Sự kiện">
                        <p className="text-[14px]">{event?.event}</p>
                    </Section>

                    <Section title="Thời gian áp dụng">
                        <p className="text-[14px]">
                            Từ {formatDate(event?.start_date)} --- Đến {formatDate(event?.end_date)}
                        </p>
                    </Section>

                    <Section title="Giảm giá">
                        <p className="text-[14px]">
                            {discount_type === "percent" ? 
                                `${discount_price}%` :
                                (
                                    <Money 
                                        price={convertToNumberDb(discount_price)}
                                        moneyClassName="text-[14px] font-normal"
                                        currencyClassName="text-[12px] font-normal"
                                    />
                                )
                            }
                        </p>
                    </Section>

                    <Section title="Số lượng còn lại">
                        <p className="text-[14px]">{quantity} phiếu</p>
                    </Section>

                    <Section title="Điều kiện áp dụng">
                        <ul className="list-disc pl-4 text-[14px] space-y-1">
                            <li>Bắt buộc đăng nhập</li>
                            {
                                min_order_total && (
                                    <li className="flex items-center gap-[5px]">
                                        <span>Đơn tối thiểu:</span>

                                        <Money 
                                            price={convertToNumberDb(discount_price)}
                                            moneyClassName="text-[14px] font-normal"
                                            currencyClassName="text-[12px] font-normal"
                                        />
                                    </li>
                                )
                            }
                            
                            {
                                min_items && <li>Tối thiểu {min_items} sản phẩm</li>
                            }

                            {
                                customer_type && (
                                    <li>Chỉ áp dụng cho: {
                                        customer_type === "all" ? "Tất cả khách hàng" :
                                        customer_type === "first_time_customer" ? "Khách hàng lần đầu" :
                                        customer_type === "new_customer" ? "Khách hàng mới" :
                                        customer_type === "vip_customer" && "Khách hàng quen"
                                    }</li>
                                )
                            }
                        </ul>
                    </Section>
                </div>

                {/* Footer */}
                <DialogFooter className="mt-5">
                    <DialogClose asChild>
                        <Button variant="secondary" className="w-full sm:w-auto">
                            Đóng
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

function Section({ title, children }) {
    return (
        <div>
            <h3 className="text-[12px] font-semibold text-darkMedium mb-1 uppercase">
                {title}
            </h3>
            {children}
        </div>
    )
}
