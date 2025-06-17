"use client"

import OrderItem from "./order-item"

export default function OrderList({ orders }) {
    return (
        <div className="space-y-[20px]">
            {
                orders?.length > 0 ?
                orders?.map(order => {
                    return (
                        <OrderItem
                            key={order?.id}
                            order={order}
                        />
                    )
                }) :
                <p className="text-[14px] md:text-[15px] text-darkMedium text-center italic">Bạn chưa có đơn hàng nào!</p>
            }
        </div>
    )
}
