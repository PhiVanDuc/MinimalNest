import PaymentProductsTable from "@/components/pages/payment/payment-products-table";
import ProfileGeneralBookAddress from "@/components/pages/profile/general/profile-general-book-address";

import { v4 } from "uuid";
import PaymentCoupon from "@/components/pages/payment/payment-coupon";
import PaymentMessage from "@/components/pages/payment/payment-message";
import PaymentSummary from "@/components/pages/payment/payment-summary";
import PaymentMethod from "@/components/pages/payment/payment-method";

const data = Array.from({ length: 3 }).map((_, index) => {
    return {
        id: v4(),
        category: "Danh mục",
        productName: "Tên sản phẩm",
        color: {
            id: v4(),
            label: "Màu đen",
            param: "black",
            codeColor: "#000000"
        },
        size: {
            id: v4(),
            label: "S",
            param: "s"
        },
        quantity: 1,
        singlePrice: "400000000",
        totalPrice: "400000000"
    }
});

export default function Payment() {
    return (
        <div>
            <header className="flex items-center gap-[15px] mb-[20px]">
                <p className="text-[16px] md:text-[18px] font-semibold">MinimalNest</p>
                <span className="self-stretch my-[4px] w-[3px] rounded-full bg-yellowBold" />
                <h1 className="text-[20px] md:text-[24px] font-semibold">Thanh toán</h1>
            </header>

            <div className="relative flex flex-col xl:flex-row items-start gap-[20px]">
                <div className="space-y-[50px] w-full">
                    <ProfileGeneralBookAddress />
                    <PaymentProductsTable data={data} />
                    <PaymentCoupon />
                    <PaymentMessage />
                    <PaymentMethod />
                </div>

                <PaymentSummary />
            </div>
        </div>
    )
}
