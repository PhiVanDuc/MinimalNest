"use client"

import Money from "@/components/customs/money";
import { Separator } from "@/components/ui/separator";

export default function ConsiderOrder() {
    return (
        <div className='w-[35%] p-[20px] rounded-[10px] bg-white space-y-[25px]'>
            <div className="space-y-[10px]">
                <div className="flex items-center justify-between px-[15px] py-[10px] text-[14px] text-blueChecked font-medium rounded-full border bg-blueChecked/10 border-blueChecked">
                    <p>Đơn hàng</p>
                    <p>#0001</p>
                </div>
                
                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                    <p>Tạo đơn</p>
                    <p className="text-darkBold">Thời gian</p>
                </div>

                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                    <p>Hoàn thành</p>
                    <p className="text-darkBold">Thời gian</p>
                </div>
            </div>

            <div className="space-y-[10px]">
                <h2 className="text-[15px] font-semibold">Sản phẩm</h2>

                <div
                    className="flex items-center justify-between gap-[15px] p-[15px] rounded-[10px] bg-neutral-50 hover:bg-neutral-100 cursor-pointer"
                >
                    <div className="flex items-center gap-[15px] ">
                        <span className="inline-block w-[80px] aspect-square rounded-[10px] bg-slate-300" />

                        <div className="space-y-[10px]">
                            <h4 className="text-[15px] font-semibold">Tên sản phẩm</h4>

                            <div className="space-y-[5px]">
                                <div className="flex items-center gap-[10px]">
                                    <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Màu sắc</p>
                                    <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                    <p className="text-[13px] text-darkBold font-semibold">Màu trắng</p>
                                </div>

                                <div className="flex items-center gap-[10px]">
                                    <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Kích cỡ</p>
                                    <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                    <p className="text-[13px] text-darkBold font-semibold">XL</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-[15px] font-medium text-darkMedium">x2</p>
                </div>

                <div
                    className="flex items-center justify-between gap-[15px] p-[15px] rounded-[10px] bg-neutral-50 hover:bg-neutral-100 cursor-pointer"
                >
                    <div className="flex items-center gap-[15px] ">
                        <span className="inline-block w-[80px] aspect-square rounded-[10px] bg-slate-300" />

                        <div className="space-y-[10px]">
                            <h4 className="text-[15px] font-semibold">Tên sản phẩm</h4>

                            <div className="space-y-[5px]">
                                <div className="flex items-center gap-[10px]">
                                    <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Màu sắc</p>
                                    <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                    <p className="text-[13px] text-darkBold font-semibold">Màu trắng</p>
                                </div>

                                <div className="flex items-center gap-[10px]">
                                    <p className="text-[13px] text-darkMedium font-medium min-w-[55px]">Kích cỡ</p>
                                    <span className="shrink-0 inline-block w-[5px] aspect-square rounded-full bg-darkBold" />
                                    <p className="text-[13px] text-darkBold font-semibold">XL</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-[15px] font-medium text-darkMedium">x2</p>
                </div>
            </div>

            <Separator />
            
            {/* Tiền */}
            <div className="space-y-[12px]">
                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[13px] text-darkMedium font-medium">
                    <p>Tổng tiền hàng</p>
                    <Money
                        price={1200000000}
                        moneyClassName="text-[13px] text-darkBold"
                        currencyClassName="text-[12px]"
                    />
                </div>

                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[13px] text-darkMedium font-medium">
                    <p>Phí vận chuyển</p>
                    <p className="text-darkBold">Miễn phí</p>
                </div>

                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[13px] text-darkMedium font-medium">
                    <p>Giảm giá</p>
                    <div className="flex items-center gap-[3px]">
                        <span>-</span>
                        <Money
                            price={80000}
                            moneyClassName="text-[13px] text-darkBold"
                            currencyClassName="text-[12px]"
                        />
                    </div>
                </div>

                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0">
                    <p className="text-[15px] font-semibold text-darkBold">Tổng hóa đơn</p>
                    <Money
                        price={1199920000}
                        moneyClassName="text-[16px] font-semibold text-darkBold"
                        currencyClassName="text-[12px]"
                    />
                </div>
            </div>
        </div>
    )
}
