"use client"

import OrderItem from "./order-item"

export default function OrderList() {

    return (
        <div className="space-y-[20px]">
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </div>
    )
}
