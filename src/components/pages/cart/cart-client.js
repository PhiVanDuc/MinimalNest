"use client"

import CartTable from "./cart-table";
import CartSummary from "./cart-summary";

export default function CartClient({ data }) {
    return (
        <div className="space-y-[40px]">
            <header className="md:flex items-center justify-between space-y-[5px] md:space-y-0">
                <h1 className="text-[20px] md:text-[24px] font-semibold text-darkBold">Giỏ hàng</h1>
                <p className="text-[14px] md:text-[16px] font-medium text-darkBold">Có <span className="text-yellowBold">3 sản phẩm</span> trong giỏ hàng của bạn.</p>
            </header>

            <div className="relative flex flex-col xl:flex-row items-start gap-[20px]">
                <CartTable data={data} />
                <CartSummary />
            </div>
        </div>
    )
}