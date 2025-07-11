"use client"

import { ShoppingCart } from "lucide-react";
import Money from "@/components/customs/money";
import { Separator } from "@/components/ui/separator";
import CustomButton from "@/components/customs/custom-button";
import { convertToNumberDb } from "@/lib/utils/format-currency";
import calcPrice from "@/lib/utils/calc-price";

export default function PaymentSummary({
    form,
    totalOrder,
    submitting
}) {
    const watchCoupon = form.watch("coupon");

    return (
        <div className="xl:sticky xl:top-[100px] shrink-0 w-full xl:w-[370px] rounded-[10px] p-[20px] border space-y-[20px] bg-white">
            <div className="space-y-[15px] mb-[20px]">
                <header className="flex items-center justify-between mb-[15px]">
                    <h2 className="text-[18px] font-semibold text-darkBold">Thông tin thanh toán</h2>
                    <ShoppingCart size={22} className="text-blueChecked" />
                </header>

                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                    <p>Tổng tiền hàng</p>
                    <Money
                        price={totalOrder}
                        moneyClassName="text-[14px] text-darkBold"
                        currencyClassName="text-[12px]"
                    />
                </div>

                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                    <p>Phí vận chuyển</p>
                    <p className="text-darkBold">Miễn phí</p>
                </div>

                {
                    watchCoupon?.id &&
                    <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                        <p>Giảm giá</p>
                        <div className="flex items-center gap-[3px]">
                            <span>-</span>
                            {
                                watchCoupon?.discount_type === "amount" ?
                                <Money
                                    price={convertToNumberDb(watchCoupon?.discount_price)}
                                    moneyClassName="text-[14px] md:text-[15px]"
                                /> :
                                <span className="text-[14px] md:text-[15px] text-darkBold">{convertToNumberDb(watchCoupon?.discount_price)}%</span>
                            }
                        </div>
                    </div>
                }
            </div>

            <Separator />

            <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0">
                <p className="text-[16px] font-semibold text-darkBold">Tổng hóa đơn</p>
                <Money
                    price={calcPrice(totalOrder, 0, watchCoupon?.discount_type, watchCoupon?.discount_price)}
                    moneyClassName="text-[16px] text-darkBold"
                    currencyClassName="text-[12px]"
                />
            </div>

            <CustomButton
                type="submit"
                icon={<ShoppingCart size={20} />}
                className="w-full bg-yellowBold hover:bg-yellowBold hover:opacity-90 transition-opacity duration-300"
                disabled={submitting}
            >
                {
                    submitting ?
                    "Đang xử lý…" :
                    "Thanh toán"
                }
            </CustomButton>
        </div>
    )
}