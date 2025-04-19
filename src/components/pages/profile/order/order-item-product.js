"use client"

import Money from "@/components/customs/money";

export default function OrderItemProduct() {
    return (
        <div className="flex justify-between">
            <div className="flex gap-[20px] items-start md:items-center">
                <span className="shrink-0 inline-block w-[80px] md:w-[120px] aspect-square rounded-[10px] bg-slate-300" />
                
                <div className="flex-1 space-y-[10px] md:space-y-[15px]">
                    <header>
                        <h2 className="text-[16px] md:text-[17px] font-semibold truncate">Tên sản phẩm</h2>
                        <Money
                            price={200000}
                            moneyClassName="text-[13px] md:text-[14px] font-medium"
                            currencyClassName="text-[11px] md:text-[12px]"
                        />
                    </header>

                    <div className="hidden md:block space-y-[5px]">
                        <div className="flex items-center gap-x-[15px]">
                            <p className="shrink-0 text-[14px] text-darkMedium font-medium whitespace-nowrap w-[55px]">Màu sắc</p>
                            <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                            <p className="text-[14px] text-darkBold font-medium whitespace-nowrap">Màu đen</p>
                        </div>

                        <div className="flex items-center gap-x-[15px]">
                            <p className="shrink-0 text-[14px] text-darkMedium font-medium whitespace-nowrap w-[55px]">Kích cỡ</p>
                            <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                            <p className="text-[14px] text-darkBold font-medium whitespace-nowrap">XL</p>
                        </div>
                    </div>

                    <div className="flex md:hidden flex-wrap items-center gap-x-[15px] gap-y-[2px] text-darkBold font-medium">
                        <p className="shrink-0 text-[14px] whitespace-nowrap w-[55px]">Màu đen</p>
                        <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                        <p className="text-[14px] whitespace-nowrap">XL</p>
                        <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                        <p className="text-[14px] whitespace-nowrap">x2</p>
                        <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                        <Money
                            price={400000}
                            moneyClassName="text-[14px]"
                            currencyClassName="text-[12px]"
                        />
                    </div>
                </div>
            </div>

            <div className="self-stretch space-y-[5px] hidden md:flex flex-col items-end justify-between">
                <div className="flex flex-col items-end space-y-[2px]">
                    <div className="flex items-center gap-x-[15px] text-[14px] lg:text-[15px]">
                        <p className="text-darkBold font-medium whitespace-nowrap">x2</p>
                        <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                        <p className="shrink-0 text-right text-darkMedium font-medium whitespace-nowrap w-[70px]">Số lượng</p>
                    </div>

                    <div className="flex items-center gap-x-[15px]">
                        <Money
                            price={400000}
                            moneyClassName="text-[14px] lg:text-[15px] font-medium"
                        />
                        <div className="shrink-0 w-[6px] aspect-square rounded-full bg-darkMedium" />
                        <p className="shrink-0 text-right text-[14px] lg:text-[15px] text-darkMedium font-medium whitespace-nowrap w-[70px]">Tổng tiền</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
