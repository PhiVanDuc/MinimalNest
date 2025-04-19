"use client"

import { useSelector } from "react-redux";

import Money from "@/components/customs/money";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CustomButton from "@/components/customs/custom-button";

import { toast } from "sonner";

export default function CartSummary() {
    const selectedProducts = useSelector(state => state.cartSelectedProducts.selectedProducts);

    return (
        <div className="xl:sticky xl:top-[100px] shrink-0 w-full xl:w-[370px] rounded-[10px] p-[20px] border space-y-[20px] bg-white">
            <div className="space-y-[15px] mb-[20px]">
                <header className="flex items-center justify-between mb-[15px]">
                    <h2 className="text-[18px] font-semibold text-darkBold">Tổng giỏ hàng</h2>
                    <ShoppingCart size={22} className="text-blueChecked" />
                </header>

                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                    <p>Tổng tiền hàng</p>
                    <Money
                        price={1200000000}
                        moneyClassName="text-[14px] text-darkBold"
                        currencyClassName="text-[12px]"
                    />
                </div>

                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                    <p>Phí vận chuyển</p>
                    <p className="text-darkBold">Miễn phí</p>
                </div>
            </div>

            <Separator />

            <div className="space-y-[5px]">
                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0">
                    <p className="text-[16px] font-semibold text-darkBold">Tổng tạm</p>
                    <Money
                        price={1200000000}
                        moneyClassName="text-[16px] text-darkBold"
                        currencyClassName="text-[12px]"
                    />
                </div>

                <p className="text-[12px] font-medium text-darkMedium tracking-wide">Có thể dùng các phiếu giảm giá trong phần nhập thông tin thanh toán.</p>
            </div>

            {
                selectedProducts.length > 0 &&
                (
                    <div className="flex items-center gap-x-[5px]">
                        <CustomButton
                            icon={<Trash2 size={20} />}
                            variant="outline"
                            className="py-[20px] font-medium text-darkMedium hover:bg-transparent hover:border-red-200 hover:text-red-500 transition-colors duration-300"
                            onClick={() => { toast.warning("Vui lòng chọn xóa 1 lần nữa để xác nhận."); }}
                        >
                        </CustomButton>

                        <CustomButton
                            icon={<ShoppingCart size={20} />}
                            className="w-full py-[20px] bg-yellowBold hover:bg-yellowBold"
                        >
                            Mua
                        </CustomButton>
                    </div>
                )
            }
        </div>
    )
}
