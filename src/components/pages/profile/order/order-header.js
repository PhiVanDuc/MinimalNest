"use client"

import OrderStatus from "./order-status";

export default function OrderHeader() {
    return (
        <header className="space-y-[20px] w-full">
            <h1 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Đơn hàng</h1>

            <OrderStatus />
        </header>
    )
}
