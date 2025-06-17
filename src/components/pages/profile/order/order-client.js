"use client"

import OrderHeader from "./order-header";
import OrderList from "./order-list";

export default function OrderClient({ orders }) {
    return (
        <div className="w-full space-y-[40px]">
            <OrderHeader />
            <OrderList orders={orders} />
        </div>
    )
}
