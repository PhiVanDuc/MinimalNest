"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Money from "@/components/customs/money";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CustomButton from "@/components/customs/custom-button";

import { toast } from "sonner";
import calcPrice from "@/lib/utils/calc-price";
import { createReservedOrder } from "@/lib/api/server-action/reserved_order";

export default function CartSummary({
    accountId,
    form
}) {
    const router = useRouter();
    const [calc, setCalc] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const watchProducts = form.watch("products");

    useEffect(() => {
        const selectedItems = watchProducts?.filter(item => item.selected) || [];

        if (selectedItems?.length === 0) setCalc(0);
        else {
            let total = 0;

            selectedItems.forEach(item => {
                const { product: { cost_price, interest_rate, general_discount, discount_amount, discount_type }, quantity } = item;
                const isDiscount = ((discount_amount && discount_type) || general_discount);

                const price = isDiscount ?
                (discount_amount && discount_type) ?
                calcPrice(cost_price, interest_rate, discount_type, discount_amount) :
                general_discount &&
                calcPrice(cost_price, interest_rate, general_discount?.discount_type, general_discount?.discount_amount) :
                calcPrice(cost_price, interest_rate, null, null);

                total = total + (price * +quantity);
            });

            setCalc(total);
        }
    }, [watchProducts]);
    
    const handleCreateReservedOrder = async () => {
        if (submitting) return;
        setSubmitting(true);

        const reservedOrder = await createReservedOrder({
            accountId,
            products: watchProducts?.filter(prod => prod?.selected)
        });
        const message = reservedOrder?.message;

        if (reservedOrder?.success) {
            toast.success(message);
            router.push(`/thanh-toan/${reservedOrder?.data?.reserved_order_id}`);
        }
        else toast.error(message);

        setSubmitting(false);
    }

    return (
        <div className="xl:sticky xl:top-[100px] shrink-0 w-full xl:w-[370px] rounded-[10px] p-[20px] border space-y-[20px] bg-white">
            <div className="space-y-[15px] mb-[20px]">
                <header className="flex items-center justify-between mb-[15px]">
                    <h2 className="text-[18px] font-semibold text-darkBold">Thông tin giỏ hàng</h2>
                    <ShoppingCart size={22} className="text-blueChecked" />
                </header>

                <div className="md:flex items-center justify-between space-y-[5px] md:space-y-0 text-[14px] text-darkMedium font-medium">
                    <p>Tổng tiền hàng</p>
                    <Money
                        price={calc}
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
                        price={calc}
                        moneyClassName="text-[16px] text-darkBold"
                        currencyClassName="text-[12px]"
                    />
                </div>

                <p className="text-[12px] font-medium text-darkMedium tracking-wide">Có thể dùng các phiếu giảm giá trong phần nhập thông tin thanh toán.</p>
            </div>

            {
                watchProducts?.filter(item => item.selected)?.length > 0 &&
                (
                    <CustomButton
                        icon={<ShoppingCart size={20} />}
                        className="w-full py-[20px] bg-yellowBold hover:bg-yellowBold"
                        onClick={handleCreateReservedOrder}
                    >
                        { submitting ? "Đang chuẩn bị . . ." : "Thanh toán" }
                    </CustomButton>
                )
            }
        </div>
    )
}
