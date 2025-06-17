"use client"

import ReturnGoodsStatus from "./return-goods-status"

export default function ReturnGoodsHeader() {
    return (
        <header className="space-y-[20px] w-full">
            <h1 className="text-[20px] md:text-[24px] text-darkBold font-semibold">Trả hàng</h1>

            <ReturnGoodsStatus />
        </header>
    )
}
