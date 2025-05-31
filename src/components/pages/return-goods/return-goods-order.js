"use client"

import Money from "@/components/customs/money";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function ReturnGoodsOrder({ form, orders }) {
    const watchOrder = form.watch("order");

    const handleSelectOrder = (index) => {
        form.setValue("order", { id: index, product: 2 });
        form.setValue("products", []);
        
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="w-[40%] py-[20px] rounded-[10px] space-y-[20px] border">
            <div className="px-[20px] flex items-center gap-[20px] pb-[20px] border-b">
                <p className="text-[14px] font-medium text-darkMedium">Chọn một đơn hàng bạn muốn đổi trả.</p>
            </div>

            <div className="space-y-[10px] px-[20px]">
                <Accordion
                    type="single"
                    collapsible
                    className="space-y-[10px]"
                >
                    {
                        Array.from({ length: 10 }).map((_, index) => {
                            return (
                                <AccordionItem
                                    key={index}
                                    value={`order-${index}`}
                                >
                                    <AccordionTrigger className={cn(
                                        "px-[16px] py-[16px] rounded-[10px] border",
                                        watchOrder?.id === index + 1 ? "bg-neutral-100" : "bg-transparent"
                                    )}>
                                        Đơn hàng: {index + 1}
                                    </AccordionTrigger>

                                    <AccordionContent
                                        className="mt-[10px] p-[16px] rounded-[10px] border space-y-[25px]"
                                    >
                                        <div className="space-y-[10px]">
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

                                        <Button
                                            type="button"
                                            className="w-full bg-yellowBold hover:opacity-90 hover:bg-yellowBold"
                                            onClick={() => { handleSelectOrder(index + 1); }}
                                        >
                                            Chọn đơn hàng
                                        </Button>
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    )
}