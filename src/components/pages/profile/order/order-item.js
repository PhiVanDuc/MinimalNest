"use client"

import { useRouter } from "next/navigation";

import Money from "@/components/customs/money";
import { Button } from "@/components/ui/button";
import OrderItemProduct from "./order-item-product";
import { Separator } from "@/components/ui/separator";

import { v4 } from "uuid";

export default function OrderItem() {
    const router = useRouter();

    return (
        <div className="p-[15px] sm:p-[30px] space-y-[20px] rounded-[15px] border cursor-pointer transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[5px]">
                <p className="order-2 sm:order-1 flex gap-[5px] text-[14px] whitespace-nowrap text-darkMedium">Mã đơn hàng - <span className="text-darkBold font-medium truncate">Đây là mã đơn hàng</span></p>
                <p className="order-1 sm:order-2 text-[16px] text-blueChecked font-medium">Trạng thái</p>
            </div>

            <div className="space-y-[20px]">
                <p className="text-[16px] md:text-[18px] font-semibold">Sản phẩm</p>

                {
                    Array.from({ length: 3 }).map((_, index) => {
                        return <OrderItemProduct key={v4()} />
                    })
                }
            </div>

            <Separator />

            <div className="space-y-[10px]">
                <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[3px] text-[14px] md:text-[15px] text-darkMedium font-medium whitespace-nowrap">
                    <p>Phí vận chuyển</p>
                    <p>Miễn phí</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[3px] whitespace-nowrap">
                    <p className="text-[15px] font-medium text-darkMedium">Tổng tiền hàng</p>
                    <Money
                        price={1200000}
                        moneyClassName="text-[14px] md:text-[15px] text-darkMedium"
                    />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[3px] whitespace-nowrap">
                    <p className="text-[15px] font-medium text-darkMedium">Giảm giá</p>
                    <Money
                        price={100000}
                        moneyClassName="text-[14px] md:text-[15px] text-darkMedium"
                    />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-[3px] whitespace-nowrap">
                    <p className="text-[16px] md:text-[18px] font-semibold text-darkBold">Tổng hóa đơn</p>
                    <Money
                        price={1100000}
                        moneyClassName="text-[16px] md:text-[18px] font-semibold"
                    />
                </div>
            </div>

            <div className="flex items-center gap-[5px]">
                <Button
                    onClick={() => { router.push("/ho-so/don-hang/aaa") }}
                >
                    Xem chi tiết
                </Button>
                
                <Button>Hủy đơn</Button>
            </div>
        </div>
    )
}
